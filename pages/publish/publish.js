const  util = require("../../utils/util");
const  appInstance = getApp()
import toPromise from '../../utils/to-promise'
const  requestUrl  = require("../../config/api")
import Dialog from '../../miniprogram_npm/vant-weapp/dialog/dialog';
import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    houseFrontCoverImgPath: '', //封面路径
    dialog: {               //图片描述弹出框
      show: false,
      currentOtherImgId: -1,
      currentOtherImgInfo: ''
    },
    houseOtherImgList: [],  //房子其他地方的图片路径 及 描述
    mode: {                 //出租类型
      selectModeId: -1,
      modeList: [
        {
          id: 0,
          name: '整租',
        },
        {
          id: 1,
          name: '合租'
        }
      ]
    },
    geoPosition:{           //地理位置
      geoPositionValue : ''
    },
    placeInfo :{           // 发布页面的地址信息 
      title     : '',
      address   : '',  
      latitude  : '',
      longitude : '',
      province  : '',
      city      : '',
      district  : '',
    },
    roomAndHall: {          //房间 室厅
      roomIndex: 0,
      hallIndex: 0,
      room: [0,1, 2, 3, 4, 5, 6, 7, 8, 9],
      hall: [0,1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    toilet: {               //卫生间类型
      selectToiletId: -1,
      toiletList: [{
          id: 0,
          name: '独卫',
        },
        {
          id: 1,
          name: '共用'
        }
      ]
    },
    acreageValue: '',       //面积值             
    storey: {               //楼层
      allStoreyValue: '',
      inStoreyValue: ''
    },
    payTime: {              //付款时长
      selectPayTimeId: -1,
      payTimeList: [{
          id: 0,
          name: '月付'
        },
        {
          id: 1,
          name: '季付'
        },
        {
          id: 2,
          name: '半年付'
        },
        {
          id: 3,
          name: '一年付'
        },
      ]
    },
    priceValue: '',         //价格
    feature: {              //特色
      selectFeatureList: [],
      featureList: [{
          id: 0,
          name: '近地铁',
          classFlag: false
        },
        {
          id: 1,
          name: '空调',
          classFlag: false
        },
        {
          id: 2,
          name: '阳台',
          classFlag: false
        },
        {
          id: 3,
          name: '拎包入住',
          classFlag: false
        },
        {
          id: 4,
          name: '精装修',
          classFlag: false
        },
        {
          id: 5,
          name: '新房',
          classFlag: false
        },
        {
          id: 6,
          name: '随时看房',
          classFlag: false
        },
        {
          id: 7,
          name: '家私齐全',
          classFlag: false
        },
      ]
    },
    houseDescribeValue: '', //房源描述
    contactWay: {           //联系方式  
      telephone: '',
      weixin: '',
      qq: ''
    }
  },
  //------------------ 封面 --------------------

  //点击封面 , 添加封面
  addHouseFrontCover() {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths[0]
        that.setData({
          'houseFrontCoverImgPath': tempFilePaths
        })
      }
    })
  },

  //点击添加照片
  addOtherImg() {
    var oldHouseOtherImgList = this.data.houseOtherImgList || []
    // 深度深拷贝
    var newHouseOtherImgList = util.deepCopy(oldHouseOtherImgList) || []
    var that = this
    wx.chooseImage({
      count: 4,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths
        var id = newHouseOtherImgList.length == 0 ? 0 : (newHouseOtherImgList[newHouseOtherImgList.length - 1].id)
        if (newHouseOtherImgList.length == 0) {
          var flag = true
        } else {
          var flag = false
        }
        tempFilePaths.forEach(item => {
          if (flag) {
            flag = false
          } else {
            id = id + 1
          }
          var obj = {
            id: id,
            info: '✎描述',
            imgPath: item
          }
          newHouseOtherImgList.push(obj)
        })
        that.setData({
          houseOtherImgList: newHouseOtherImgList
        })
      }
    })

  },

  //点击修改描述信息,弹出框
  toggleDialog(e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      'dialog.show': true,
      'dialog.currentOtherImgId': id,
    })
  },

  // 点击确定
  dialogSetInfo(event) {

    setTimeout(() => {
      var id = this.data.dialog.currentOtherImgId
      var info = this.data.dialog.currentOtherImgInfo.replace(/(^\s*)|(\s*$)/g, "") || '✎描述'

      var index = this.data.houseOtherImgList.findIndex(item => {
        return (item.id == id)
      })
      var item = 'houseOtherImgList[' + index + '].info'
      this.setData({
        [item]: info,
        'dialog.show': false,
        'dialog.currentOtherImgInfo': '',
        'dialog.currentOtherImgId': -1,
      })

    }, 100)

  },

  // 文本域失去焦点
  setInfo(e) {
    var value = e.detail.value
    this.setData({
      'dialog.currentOtherImgInfo': value
    })

  },

  // 点击取消
  dialogClose(event) {
    if (event.detail != 'confirm') {
      setTimeout(() => {
        this.setData({
          'dialog.show': false,
          'dialog.currentOtherImgInfo': '',
        })
      }, 100)
    }
  },

  //点击 remove 照片
  removeOtherImg(event) {
    var id = event.currentTarget.dataset.id
    // 深度深拷贝
    var oldHouseOtherImgList = this.data.houseOtherImgList
    var newHouseOtherImgList = util.deepCopy(oldHouseOtherImgList)
    var key = newHouseOtherImgList.findIndex(item => {
      return (item.id == id)
    })
    newHouseOtherImgList.splice(key, 1)
    this.setData({
      houseOtherImgList: newHouseOtherImgList
    })
  },


  //------------------ 出租 --------------------
  selectMode(e) {
    var modeId = e.currentTarget.dataset.modeId
    this.setData({
      'mode.selectModeId': modeId
    })
  },

  //------------------ 地理位置 --------------------
  setGeoPosition(e){
    wx.navigateTo({
      url:"../../pagesPublishSub/geoPosition/geoPosition"
    })
  },

  //------------------ 房间 --------------------
  bindRoomPickerChange(e) {
    this.setData({
      'roomAndHall.roomIndex': e.detail.value
    })
  },

  bindHallPickerChange(e) {
    this.setData({
      'roomAndHall.hallIndex': e.detail.value
    })
  },

  //------------------ 卫生间 ------------------- 
  selectToilet(e) {
    var toiletId = e.currentTarget.dataset.toiletId

    this.setData({
      'toilet.selectToiletId': toiletId
    })
  },

  //------------------ 面积 -------------------- 
  setAcreageValue(e) {
    var acreageValue = e.detail.value
    this.setData({
      acreageValue: acreageValue
    })
  },

  //------------------ 楼层 --------------------
  setAllStoreyValue(e) {
    var allStoreyValue = e.detail.value
    this.setData({
      'storey.allStoreyValue': allStoreyValue
    })
  },

  setInStoreyValue(e) {
    var inStoreyValue = e.detail.value
    this.setData({
      'storey.inStoreyValue': inStoreyValue
    })
  },

  //------------------ 付款时长 ----------------- 
  selectPayTime(e) {

    var payTimeId = e.currentTarget.dataset.payTimeId

    this.setData({
      'payTime.selectPayTimeId': payTimeId
    })
  },

  //------------------ 价格 ---------------------
  setPriceValue(e) {
    var priceValue = e.detail.value
    this.setData({
      priceValue: priceValue
    })
  },

  //------------------ 特色 ---------------------
  setFeatureList(e) {
    var id = e.currentTarget.dataset.listId

    // 深拷贝 查询 selectFeatureList 里面有没有此 id
    var oldSelectFeatureList = this.data.feature.selectFeatureList || []
    var newSelectFeatureList = util.deepCopy(oldSelectFeatureList) || []
    var selectFeatureListIndex = newSelectFeatureList.findIndex(item => {
      return (item == id)
    })

    // 深拷贝 featureList
    var oldFeatureList = this.data.feature.featureList
    var newFeatureList = util.deepCopy(oldFeatureList)
    var featureListIndex = newFeatureList.findIndex(item => {
      return (item.id == id)
    })
    var classFlag = !(this.data.feature.featureList[featureListIndex].classFlag)
    var item = 'feature.featureList[' + featureListIndex + '].classFlag'


    //  
    if (selectFeatureListIndex == -1) {
      newSelectFeatureList.push(id)
      this.setData({
        'feature.selectFeatureList': newSelectFeatureList,
        [item]: classFlag,
      })
    } else {
      newSelectFeatureList.splice(selectFeatureListIndex, 1)
      this.setData({
        'feature.selectFeatureList': newSelectFeatureList,
        [item]: classFlag,
      })
    }
  },

  //------------------ 房源描述 ---------------------
  setHouseDescribeValue(e) {
    this.setData({
      houseDescribeValue: e.detail.value
    })
  },

  //------------------ 联系方式 ---------------------
  setcontactWayValue(e) {
    var contactWayName = e.currentTarget.dataset.contactWayName
    var value = e.detail.value

    if (contactWayName == 'telephone') {
      this.setData({
        'contactWay.telephone': value
      })
    } else if (contactWayName == 'weixin') {
      this.setData({
        'contactWay.weixin': value
      })
    } else {
      this.setData({
        'contactWay.qq': value
      })
    }
  },

  //------------------ 提交 -------------------------
  submitBefore(){
   var that = this
   Dialog.confirm({
     message: '确认提交?'
    })
    .then(() => {
      that.submitAllInfo()
    })
    .catch(() => {
      
    });
  },

  submitAllInfo() {

    if(!this.data.houseFrontCoverImgPath){
      Toast.fail('封面未上传');
      return false ; 
    }
    else if(this.data.mode.selectModeId == -1 ){
      Toast.fail('出租类型未选择');
      return false ; 
    }
    else if(this.data.placeInfo.title == '' ){
      Toast.fail('未选择地理位置');
      return false ; 
    }
    else if(this.data.roomAndHall.roomIndex == 0  && this.data.roomAndHall.hallIndex == 0 ){
      Toast.fail('房间参数未定义');
      return false ; 
    }
    else if(this.data.toilet.selectToiletId == -1){
      Toast.fail('卫生间类型未定义');
      return false ; 
    }
    else if(!this.data.acreageValue){
      Toast.fail('面积未填写');
      return false ; 
    }
    else if (!this.data.storey.allStoreyValue && !this.data.storey.inStoreyValue){
      Toast.fail('楼层信息未填写');
      return false ;
    }
    else if (this.data.payTime.selectPayTimeId == -1 ){
      Toast.fail('付款时长未选择');
      return false ;
    }
    else if (!this.data.priceValue){
      Toast.fail('价格未定义');
      return false ;
    }
    else if(!this.data.feature.selectFeatureList.length){
      Toast.fail('特色未选择');
      return false ;
    }
    else if (!this.data.houseDescribeValue){
      Toast.fail('房源描述未填写');
      return false ;
    }
    else if (!(/^1[34578]\d{9}$/.test(this.data.contactWay.telephone)) ){
      Toast.fail('电话格式不合格');
      return false ;
    }


    // 其他照片
    var oldHouseOtherImgList = this.data.houseOtherImgList
    var newHouseOtherImgList = util.deepCopy(oldHouseOtherImgList) || []
    if( newHouseOtherImgList.length != 0 ){
      newHouseOtherImgList.forEach( item =>{
         if(item.info == "✎描述"){
            item.info = ""
         }
      })
    }
    
    // 出租类型
    var oldMode = this.data.mode.modeList[this.data.mode.selectModeId]  
    var newMode = util.deepCopy(oldMode) 

    // 地理位置
    var placeInfo = this.data.placeInfo

    // 房间参数
    var room = {
      roomNum :  this.data.roomAndHall.roomIndex,
      hallNum :  this.data.roomAndHall.hallIndex 
    }

    // 卫生间
    var oldToilet = this.data.toilet.toiletList[this.data.toilet.selectToiletId]  
    var newToilet = util.deepCopy(oldToilet) 
 
    // 付款时长
    var oldPayTime = this.data.payTime.payTimeList[this.data.payTime.selectPayTimeId]  
    var newPayTime = util.deepCopy(oldPayTime) 

    // 特色
    var feature = []
    this.data.feature.selectFeatureList.forEach ( item =>{
      this.data.feature.featureList.forEach( listItem =>{
          if ( item == listItem.id ){
            feature.push(listItem)
          }
      })
    })

    // 这个房源的的 data 全部数据
    var publishData = this.data
    
    var that = this
    const toPromiseWx = toPromise(wx)
    const wxRequest = toPromiseWx('request')
    const wxUploadFile = toPromiseWx('uploadFile')

    // 发送的数据
    var sendObj = {
      openid  : wx.getStorageSync('openid'),
      houseId : (new Date()).getTime(),
      addRentHouseInfo_url : requestUrl.addRentHouseInfo_url,
      img:{
         houseFrontCoverImgPath : this.data.houseFrontCoverImgPath,
         houseOtherImgList :  newHouseOtherImgList    
      },
      mode : newMode,
      placeInfo : placeInfo,
      room : room,
      toilet  : newToilet,
      acreage : this.data.acreageValue,
      storey  : this.data.storey,
      payTime : newPayTime,
      price   : this.data.priceValue,
      feature : feature,
      houseDescribeValue : this.data.houseDescribeValue,
      contactWay  : this.data.contactWay,
      publishData : publishData
   }

    // 上传其他图片 ( 做封装 , 第二个参数为数量-1 , 也就是遍历次数 )
    var uploadFileFunc = function (startIndex,endIndex){
      if ( startIndex <= endIndex ){
        wxUploadFile({
          url : sendObj.addRentHouseInfo_url,
          filePath : sendObj.img.houseOtherImgList[startIndex].imgPath,
          name : 'publishImg',
          formData:{
            openid  : sendObj.openid,
            houseid : sendObj.houseId,
            setSubmitMode : 'img',    // 提交类型为 图片 此项为 img , 否则为 空
            imgMode : "other",        // 图片类型 : cover 封面 / other 其他图片
            index   : startIndex,     // 图片类型为 cover 为空, 为 other , 此项为每张图片的编号
            otherImgInfo : JSON.stringify(sendObj.img.houseOtherImgList[startIndex])  // 图片的 List
          },
        })
        .then( res =>{
          console.log( res.data + ',' + startIndex );
          startIndex++
          return uploadFileFunc(startIndex,endIndex)
        })
      }else{
        wxRequest({
          url : sendObj.addRentHouseInfo_url,
          method : 'POST',
          data : {
            openid  : sendObj.openid,
            houseid : sendObj.houseId,
            setSubmitMode : '',
            mode      : JSON.stringify( sendObj.mode ),
            placeInfo : JSON.stringify( sendObj.placeInfo ),
            room      : JSON.stringify( sendObj.room ),
            toilet    : JSON.stringify( sendObj.toilet ),
            acreage   : JSON.stringify( sendObj.acreage ),
            storey    : JSON.stringify( sendObj.storey ),
            payTime   : JSON.stringify( sendObj.payTime ),
            price     : JSON.stringify( sendObj.price ),
            feature   : JSON.stringify( sendObj.feature ),
            houseDescribeValue : JSON.stringify( sendObj.houseDescribeValue ),
            contactWay : JSON.stringify( sendObj.contactWay ),
            publishData : JSON.stringify( sendObj.publishData ),
          }
        })
        .then( res => {
          
            console.log( res.data )
            that.setData({
              houseFrontCoverImgPath: '', //封面路径
              dialog: {               //图片描述弹出框
                show: false,
                currentOtherImgId: -1,
                currentOtherImgInfo: ''
              },
              houseOtherImgList: [],  //房子其他地方的图片路径 及 描述
              mode: {                 //出租类型
                selectModeId: -1,
                modeList: [
                  {
                    id: 0,
                    name: '整租',
                  },
                  {
                    id: 1,
                    name: '合租'
                  }
                ]
              },
              geoPosition:{           //地理位置
                geoPositionValue : '设置'
              },
              placeInfo :{           // 发布页面的地址信息 
                title     : '',
                address   : '',  
                latitude  : '',
                longitude : '',
                province  : '',
                city      : '',
                district  : '',
              },
              roomAndHall: {          //房间 室厅
                roomIndex: 0,
                hallIndex: 0,
                room: [0,1, 2, 3, 4, 5, 6, 7, 8, 9],
                hall: [0,1, 2, 3, 4, 5, 6, 7, 8, 9]
              },
              toilet: {               //卫生间类型
                selectToiletId: -1,
                toiletList: [{
                    id: 0,
                    name: '独卫',
                  },
                  {
                    id: 1,
                    name: '共用'
                  }
                ]
              },
              acreageValue: '',       //面积值             
              storey: {               //楼层
                allStoreyValue: '',
                inStoreyValue: ''
              },
              payTime: {              //付款时长
                selectPayTimeId: -1,
                payTimeList: [{
                    id: 0,
                    name: '月付'
                  },
                  {
                    id: 1,
                    name: '季付'
                  },
                  {
                    id: 2,
                    name: '半年付'
                  },
                  {
                    id: 3,
                    name: '一年付'
                  },
                ]
              },
              priceValue: '',         //价格
              feature: {              //特色
                selectFeatureList: [],
                featureList: [{
                    id: 0,
                    name: '近地铁',
                    classFlag: false
                  },
                  {
                    id: 1,
                    name: '空调',
                    classFlag: false
                  },
                  {
                    id: 2,
                    name: '阳台',
                    classFlag: false
                  },
                  {
                    id: 3,
                    name: '拎包入住',
                    classFlag: false
                  },
                  {
                    id: 4,
                    name: '精装修',
                    classFlag: false
                  },
                  {
                    id: 5,
                    name: '新房',
                    classFlag: false
                  },
                  {
                    id: 6,
                    name: '随时看房',
                    classFlag: false
                  },
                  {
                    id: 7,
                    name: '家私齐全',
                    classFlag: false
                  },
                ]
              },
              houseDescribeValue: '', //房源描述
              contactWay: {           //联系方式  
                telephone: '',
                weixin: '',
                qq: ''
              }
            })
            Toast.success('成功提交');
        })
      }
    }

    wxUploadFile({
      url : sendObj.addRentHouseInfo_url,
      filePath : sendObj.img.houseFrontCoverImgPath,
      name : 'publishImg',
      formData:{
        openid  : sendObj.openid,
        houseid : sendObj.houseId,
        setSubmitMode : 'img', // 提交类型为 图片 此项为 img , 否则为 空
        imgMode : "cover",     // 图片类型 : cover 封面 / other 其他图片
        index   : '',          // 图片类型为 cover 为空, 为 other , 此项为每张图片的编号
        otherImgInfo : ''  // 图片类型为 other 时 , 图片的信息
      },
    }).then( res =>{
      console.log( res.data );
      var endIndex = sendObj.img.houseOtherImgList.length-1
      uploadFileFunc(0,endIndex)
    })

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(appInstance.globalData.placeInfo.title == ''){
      this.setData({
        'geoPosition.geoPositionValue' : '设置' 
      })
    }else{
      this.setData({
        'placeInfo' : appInstance.globalData.placeInfo,
        'geoPosition.geoPositionValue' : appInstance.globalData.placeInfo.address + appInstance.globalData.placeInfo.title
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if(appInstance.globalData.placeInfo.title == ''){
      this.setData({
        'geoPosition.geoPositionValue' : '设置' 
      })
    }else{
      this.setData({
        'placeInfo' : appInstance.globalData.placeInfo,
        'geoPosition.geoPositionValue' : appInstance.globalData.placeInfo.address + appInstance.globalData.placeInfo.title
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
})