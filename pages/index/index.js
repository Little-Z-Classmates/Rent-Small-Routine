import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';
var util = require("../../utils/util");
const appInstance = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    rpxScale: ( 750 / wx.getSystemInfoSync().windowWidth ),
    filterFrameFixedFlag: false,  // 筛选版块是否固定定位的标识符
    searchCity: {       // 查找的城市 
      selectId: 0,
      city: [{
          id: 0,
          name: '北京',
        },
        {
          id: 1,
          name: '上海',
        },
        {
          id: 2,
          name: '广东',
        },
        {
          id: 3,
          name: '深圳',
        }
      ]
    },
    swiperImgUrls: [    // 轮播图图片地址
      '../../static/images/1.jpg',
      '../../static/images/2.jpeg',
      '../../static/images/4.jpg'
    ],
    filterFrame: {      // 筛选层板 
      filterTitleArr: [ // 筛选的 Title 名字
        {
          id: 0,
          name: '区域'
        },
        {
          id: 1,
          name: '方式',
        },
        {
          id: 2,
          name: '租金'
        },
        {
          id: 3,
          name: '特色',
          flag : false
        }
      ],
      filterTitleSort:{ // 筛选排序 的 class 标识符
        flag : false,
        name : '默认'
      } , 
      currentSelectTitleId:-1, // 当前选择的 Title id
      filterArea: {     // 筛选地区
        id: 0,
        name: '区域',
        currentSelectLeftId: 0,      // 当前区域 左边 id
        childrenItems: [
          {
            id: 0,
            name: '区域',
            currentSelectCenterId:0, // 当前区域 中间的 id
            childrenItems: [
              {
                id: 0,
                name: '不限',
                currentSelectRightId:0, // 当前区域 右边的 id
                childrenItems: [
                  {
                     id: 0,
                     name: '不限',
                  }
                ]
              },
              {
                id: 1,
                name: '东城',
                currentSelectRightId:0, // 当前区域 右边的 id
                childrenItems: [
                  {
                    id: 0,
                    name: '不限A',
                  },
                  {
                    id: 1,
                    name: '安定门',
                  },
                  {
                    id: 2,
                    name: '安贞',
                  },
                  {
                    id: 3,
                    name: '安定门',
                  },
                  {
                    id: 4,
                    name: '重温热',
                  },
                  {
                    id: 5,
                    name: '东直门',
                  },
                  {
                    id: 6,
                    name: '超源码',
                  },
                ]
              },
              {
                id: 2,
                name: '西城',
                currentSelectRightId:0, // 当前区域 右边的 id
                childrenItems: [
                  {
                    id: 0,
                    name: '不限A',
                  },
                  {
                    id: 1,
                    name: '阿萨德门',
                  },
                  {
                    id: 2,
                    name: '安贞',
                  },
                  {
                    id: 3,
                    name: '安定门',
                  },
                  {
                    id: 4,
                    name: '重温热',
                  },
                  {
                    id: 5,
                    name: '东直门',
                  },
                  {
                    id: 6,
                    name: '超源码',
                  },
                ]
              },
            ]
          },
          {
            id: 1,
            name: '地铁',
            currentSelectCenterId:0, // 当前区域 中间的 id
            childrenItems: [
              {
                id: 0,
                name: '不限',
                currentSelectRightId:0, // 当前区域 右边的 id
                childrenItems: [
                  {
                  id: 0,
                  name: '不限',
                }]
              },
              {
                id: 1,
                name: '一号线',
                currentSelectRightId:0, // 当前区域 右边的 id
                childrenItems: [
                  {
                    id: 0,
                    name: '不限B',
                  },
                  {
                    id: 1,
                    name: '阿萨德',
                  },
                  {
                    id: 2,
                    name: '安贞',
                  },
                  {
                    id: 3,
                    name: '安定门',
                  },
                  {
                    id: 4,
                    name: '重温热',
                  },
                  {
                    id: 5,
                    name: '东直门',
                  },
                  {
                    id: 6,
                    name: '超源码',
                  },
                ]
              },
              {
                id: 2,
                name: '二号线',
                currentSelectRightId:0, // 当前区域 右边的 id
                childrenItems: [
                  {
                    id: 0,
                    name: '不限B',
                  },
                  {
                    id: 1,
                    name: '阿萨德门B',
                  },
                  {
                    id: 2,
                    name: '安贞',
                  },
                  {
                    id: 3,
                    name: '安定门',
                  },
                  {
                    id: 4,
                    name: '重温热',
                  },
                  {
                    id: 5,
                    name: '东直门',
                  },
                  {
                    id: 6,
                    name: '超源码',
                  },
                ]
              },
            ]
          },
        ]
      },
      filterMode:{      // 筛选方式
        currentSelectModeId : -1,
        modeList:[
          {
            id : 0 ,
            name : '整租',
          },
          {
            id : 1,
            name : '合租'
          }
        ]
      },
      filterRent:{      // 筛选租金
        currentSelectRentId : -1,
        rentStart:'',
        rentEnd :'',
        rentList:[
          {
            id : 0 ,
            name : '不限'
          },
          {
            id : 1 ,
            name : '≤1500元'
          },
          {
            id : 2 ,
            name : '1500元-2500元'
          },
          {
            id : 3 ,
            name : '2500元-4500元'
          },
        ]
      },
      filterFeature:{   // 筛选特色
        currentSelectFeatureId : [],
        featureList:[
          {
            id : 0 ,
            name : '近地铁',
            selectFlag : false,
          },
          {
            id : 1 ,
            name : '空调',
            selectFlag : false,
          },
          {
            id : 2 ,
            name : '阳台',
            selectFlag : false,
          },
          {
            id : 3 ,
            name : '新房',
            selectFlag : false,
          },
          {
            id : 4 ,
            name : '精装修',
            selectFlag : false,
          },
          {
            id : 5 ,
            name : '拎包入住',
            selectFlag : false,
          },
          {
            id : 6 ,
            name : '随时看房',
            selectFlag : false,
          },
          {
            id : 7 ,
            name : '家私齐全',
            selectFlag : false,
          }
        ]
      },
      filterSort:{      // 筛选排序
        currentSelectSortId : 0,
        sortList:[
          {
            id : 0 ,
            name : '默认'
          },
          {
            id : 1 ,
            name : '按价格升序排序'
          },
          {
            id : 2 ,
            name : '按价格降序排序'
          }
        ]
      }
    },
    houseFrame:{        // 房屋版块
      houseList:[
        {
          imgPath:'http://www.51gaifang.com/zhishi/UploadFiles_7124/201812/2018122013085945.jpg',
          place:'安定区颐和园小区',
          price:'￥2400',
          mode:{
            id : 0 ,
            name : '整租',
          },
          feature:[
            {
              id : 0 ,
              name : '近地铁',
            },
            {
              id : 1 ,
              name : '空调',
            },
            {
              id : 2 ,
              name : '阳台',
            },
          ],
          featureStr:'近地铁、空调、阳台'
        },
        {
          img:'http://img.fuwo.com/tuce/1603/23/dc7f738cf0d011e5859600163e00254c.jpg',
          place:'安定区颐和园小区',
          price:'￥2400',
          mode:[
            {
              id : 0 ,
              name : '整租',
            },
          ],
          feature:[
            {
              id : 0 ,
              name : '近地铁',
            },
            {
              id : 1 ,
              name : '空调',
            },
            {
              id : 2 ,
              name : '阳台',
            },
          ],
          featureStr:'近地铁、空调、阳台'
        },
        {
          img:'http://a0.att.hudong.com/43/11/01300000291746125239115587547.jpg',
          place:'安定区颐和园小区',
          price:'￥2400',
          mode:[
            {
              id : 0 ,
              name : '整租',
            },
          ],
          feature:[
            {
              id : 0 ,
              name : '近地铁',
            },
            {
              id : 1 ,
              name : '空调',
            },
            {
              id : 2 ,
              name : '阳台',
            },
          ],
          featureStr:'近地铁、空调、阳台'
        },
        {
          img:'http://img1n.soufunimg.com/viewimage/jiancai/business/to8to/201508/21/274/6a38fc30c805a5b7e4ea0837476df005/432x324c.jpg',
          place:'安定区颐和园小区',
          price:'￥2400',
          mode:[
            {
              id : 0 ,
              name : '整租',
            },
          ],
          feature:[
            {
              id : 0 ,
              name : '近地铁',
            },
            {
              id : 1 ,
              name : '空调',
            },
            {
              id : 2 ,
              name : '阳台',
            },
          ],
        },
      ]
    }
  },
  
  // -------------------- 城市 picker -----------------
  bindchangeCity(e) { // 改变城市的函数
    this.setData({
      'searchCity.selectId': e.detail.value
    })
  },

  // ------------------- 筛选切换 Title Id -------------
  setCurrentSelectTitleId(e) {
    this.setData({
      'filterFrame.currentSelectTitleId' : e.detail
    })
  },

  // ----------------- 筛选 : 区域  -------------------- 
  // 左边切换Id
  toggleCurrentSelectLeftId(event){
    var index = event.currentTarget.dataset['index'];
    this.setData({
      'filterFrame.filterArea.currentSelectLeftId' : index
    })
  },
  // 中间切换Id
  toggleCurrentSelectCenterId(event){
    var index = event.currentTarget.dataset['index'];
    var sonIndex = event.currentTarget.dataset['sonIndex'];
    var item = 'filterFrame.filterArea.childrenItems['+ index +'].currentSelectCenterId' 
    this.setData({
      [item] : sonIndex,
    })
  },
  //右边切换id
  toggleCurrentSelectRightId(event){
    var index = event.currentTarget.dataset['index'];
    var sonIndex = event.currentTarget.dataset['sonIndex'];
    var sonSonIndex = event.currentTarget.dataset['sonSonIndex'];
    var item = 'filterFrame.filterArea.childrenItems['+ index +'].childrenItems[' + sonIndex + '].currentSelectRightId'
    var name = this.data.filterFrame.filterArea.childrenItems[index].childrenItems[sonIndex].childrenItems[sonSonIndex].name
    
    this.setData({
      [item] : sonSonIndex,
      'filterFrame.filterTitleArr[0].name' : name,
      'filterFrame.currentSelectTitleId' : -1
    })

  },

  //------------------ 筛选 : 方式 ---------------
  toggleCurrentFilterMode(event){
    var index = event.currentTarget.dataset['index'];
    var name = event.currentTarget.dataset['name'];
    this.setData({
      'filterFrame.filterMode.currentSelectModeId': index,
      'filterFrame.filterTitleArr[1].name' : name,
      'filterFrame.currentSelectTitleId' : -1
    })
  },
  
  //------------------ 筛选 : 租金 ---------------
  toggleCurrentFilterRent(event){
    var index = event.currentTarget.dataset['index'];
    var name = event.currentTarget.dataset['name'];
    this.setData({
      'filterFrame.filterRent.currentSelectRentId': index,
      'filterFrame.filterTitleArr[2].name' : name,
      'filterFrame.currentSelectTitleId' : -1
    })
  },

  getStartPrice(event){
    this.setData({
      'filterFrame.filterRent.rentStart': event.detail.value
    })
  },

  getEndPrice(event){
    this.setData({
      'filterFrame.filterRent.rentEnd': event.detail.value
    })
  },

  filterPrice(){
   var rentStart = this.data.filterFrame.filterRent.rentStart.trim()
   var rentEnd = this.data.filterFrame.filterRent.rentEnd.trim()
   if( !rentEnd || !rentStart ){
      Toast.fail('输入不能为空');
      return false
   }
   if( rentStart > rentEnd ){
    Toast.fail('起始价格不能低于最终价格');
    return false
   }
   var priceStr = rentStart + '-' + rentEnd
   this.setData({
    'filterFrame.filterRent.currentSelectRentId': -1,
    'filterFrame.filterTitleArr[2].name' : priceStr,
    'filterFrame.currentSelectTitleId' : -1
  })
  var priceArr = [rentStart,rentEnd]
  },

  //---------------- 筛选 : 特色 ----------------
  selectFeature(event){
    var index = event.currentTarget.dataset['index'];
    var oldList = this.data.filterFrame.filterFeature.currentSelectFeatureId
    var newList = util.deepCopy(oldList) || []
    var item = `filterFrame.filterFeature.featureList[${index}].selectFlag`
    
    var indexFlag = newList.findIndex( item =>{
      return ( item == index )
    } ) 
    
    
    if( indexFlag == -1 ){
      newList.push(index) 
      this.setData({
        'filterFrame.filterFeature.currentSelectFeatureId': newList,
        [item] : true
      })
    }else{
      newList.splice(indexFlag,1)
      this.setData({
        'filterFrame.filterFeature.currentSelectFeatureId': newList,
        [item] : false
      })
    }

  },

  filterFeature(){
    if(!this.data.filterFrame.filterFeature.currentSelectFeatureId.length){
      this.setData({
        'filterFrame.filterTitleArr[3].flag' : false,
        'filterFrame.currentSelectTitleId' : -1
      })
    }else{ 
    this.setData({
      'filterFrame.filterTitleArr[3].flag' : true,
      'filterFrame.currentSelectTitleId' : -1
    })
    }

  }, 

  //----------------- 筛选 : 排序 ---------------
  setFilterTitleSort(e){
    this.setData({
      'filterFrame.filterTitleSort.flag' : e.detail
    })
  },

  selectSort(event){
    var index = event.currentTarget.dataset['index'];
    var name = event.currentTarget.dataset['name'];
    this.setData({
      'filterFrame.filterTitleSort.name' : name ,
      'filterFrame.filterSort.currentSelectSortId': index,
      'filterFrame.filterTitleSort.flag' : false
    })
  },

  // ----------------watch----------------------
  watch: {},

  //  滚动监听
  onPageScroll:function(e){
    var scrollTopFixed = 520    // 滚动到 520rpx 变为 固定定位
    var rpxScrollTop =  e.scrollTop  * this.data.rpxScale
    if( rpxScrollTop >= scrollTopFixed ){
      this.setData({
        filterFrameFixedFlag : true
      })
    }else{
      this.setData({
        filterFrameFixedFlag : false
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    appInstance.setWatcher(this)
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }

})