import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';
const util = require("../../utils/util");
const requestUrl  = require("../../config/api")
const appInstance = getApp()
const QQMapWX = require('../../utils/qq-map/qqmap-wx-jssdk');
// 实例化 小程序腾讯地图 SDK API核心类
const qqmapsdk = new QQMapWX({
  key: appInstance.globalData.TX_map_key
})

Page({

  /**
   * 页面的初始数据
   */
  data: {
    rpxScale: (750 / wx.getSystemInfoSync().windowWidth),
    filterFrameFixedFlag: false, // 筛选版块是否固定定位的标识符
    searchCity: {                // 查找的城市 
      selectId: 0 ,
      currentCityName : '',
      city: []
    },
    searchPlace:{
       searchPlaceValue : '',
       searchFlag : false ,
       dataList : [],  // 查询的地址
    }, 
    baseUrl : requestUrl.baseUrl, // 基础请求url
    swiperAd: [],                 // 轮播图图片地址
    filterFrame: {                // 筛选层板 
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
          flag: false
        }
      ],
      filterTitleSort: { // 筛选排序 的 class 标识符
        flag: false,
        name: '默认'
      },
      currentSelectTitleId: -1, // 当前选择的 Title id
      filterArea: { // 筛选地区
        id: 0,
        name: '区域',
        currentSelectAreaId: -1, // 当前选择的区域的 id
        childrenItems: []
      },
      filterMode: { // 筛选方式
        currentSelectModeId: -1,
        modeList: [
          {
            id: -1,
            name: '不限',
          },
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
      filterRent: { // 筛选租金
        currentSelectRentId: -1,
        rentStart: '',
        rentEnd: '',
        rentList: [{
            id: 0,
            name: '不限'
          },
          {
            id: 1,
            name: '≤1500元',
            price : '0-1500'
          },
          {
            id: 2,
            name: '1500元-2500元',
            price : '1500-2500'
          },
          {
            id: 3,
            name: '2500元-4500元',
            price : '2500-4500'
          },
        ]
      },
      filterFeature: { // 筛选特色
        currentSelectFeatureId: [],
        featureList: [{
            id: 0,
            name: '近地铁',
            selectFlag: false,
          },
          {
            id: 1,
            name: '空调',
            selectFlag: false,
          },
          {
            id: 2,
            name: '阳台',
            selectFlag: false,
          },
          {
            id: 3,
            name: '新房',
            selectFlag: false,
          },
          {
            id: 4,
            name: '精装修',
            selectFlag: false,
          },
          {
            id: 5,
            name: '拎包入住',
            selectFlag: false,
          },
          {
            id: 6,
            name: '随时看房',
            selectFlag: false,
          },
          {
            id: 7,
            name: '家私齐全',
            selectFlag: false,
          }
        ]
      },
      filterSort: { // 筛选排序
        currentSelectSortId: 0,
        sortList: [{
            id: 0,
            name: '默认'
          },
          {
            id: 1,
            name: '按价格升序排序'
          },
          {
            id: 2,
            name: '按价格降序排序'
          }
        ]
      }
    },
    houseFrame: {                 // 房屋版块
      houseList: []
    },
    requestHouseData:{            // 请求到后端的房屋数据
      latitude   : '',
      longitude  : '',
      modeId     : -1,
      price      : -1,
      featureId  : [],
      sortId : 0,
      TX_map_key :  appInstance.globalData.TX_map_key
    }
  },

  // -------------------- 城市 picker -----------------
  bindchangeCity(e) {     // 改变城市的函数 
    var that = this
    this.setData({
      'searchCity.selectId': e.detail.value,
    })
    var cityName = this.data.searchCity.city[this.data.searchCity.selectId].name
    this.setData({
      'searchCity.currentCityName': cityName
    })
    var currentCityId = this.data.searchCity.city[e.detail.value].id
    qqmapsdk.getDistrictByCityId({
      id : currentCityId,
      success : function(res){ 
        var arr = res.result[0]
        arr.unshift({
           id : 0 , 
           fullname : '不限' 
        })
        that.setData({
          "filterFrame.filterArea.childrenItems" : arr
        })
      },
      fail: function(error) {
        console.error(error);
      },

    })
  },
   

  getSearchPlaceList(e){  // 得到地址列表数据
   
    if( e.detail.value != ''){
      this.setData({
        'searchPlace.searchFlag' : true
      })
    }else{
      this.setData({
        'searchPlace.searchFlag' : false
      })
    }

    this.setData({
      'searchPlace.searchPlaceValue' : e.detail.value
    })

    var that = this 
    qqmapsdk.getSuggestion({
      keyword : e.detail.value, //用户输入的关键词
      region  : that.data.searchCity.currentCityName, //设置城市名，限制关键词所示的地域范围，非必填参数
      region_fix : 1 ,
      success : function(res){
        that.setData({
          'searchPlace.dataList' : res.data
        })
      }
    })

  },

  setValue(e){            // 设置value
    var value = e.currentTarget.dataset.value
    var latitude = e.currentTarget.dataset.latitude
    var longitude = e.currentTarget.dataset.longitude

    this.setData({
      "searchPlace.searchPlaceValue" : value,
      "searchPlace.searchFlag" : false,
      'requestHouseData.latitude' : latitude,
      'requestHouseData.longitude' : longitude,
      'filterFrame.filterArea.currentSelectAreaId' : -1,
      'filterFrame.filterTitleArr[0].name' : '区域',
    })

    this.recommendHouseRequest()
  },

  // ------------------- 筛选切换 Title Id -------------
  setCurrentSelectTitleId(e) {
    this.setData({
      'filterFrame.currentSelectTitleId': e.detail
    })
  },

  // ----------------- 筛选 : 区域  -------------------- 
  toggleCurrentFilterArea(event){
    var id = event.currentTarget.dataset['id'];
    var name = event.currentTarget.dataset['name'];
    var latitude = event.currentTarget.dataset.latitude
    var longitude = event.currentTarget.dataset.longitude
    if( latitude != '' ){
      this.setData({
        'requestHouseData.latitude' : latitude,
        'requestHouseData.longitude' : longitude,
        "searchPlace.searchPlaceValue" : '',
      })
    }else{
      var userInfo = JSON.parse(wx.getStorageSync('userInfo'))
      var latitude  = userInfo.localtion.latitude
      var longitude = userInfo.localtion.longitude
  
      this.setData({
        'requestHouseData.latitude' : latitude,
        'requestHouseData.longitude' : longitude,
      })
    }

    this.setData({
      'filterFrame.filterArea.currentSelectAreaId': id,
      'filterFrame.filterTitleArr[0].name': name,
      'filterFrame.currentSelectTitleId': -1
    })

    this.recommendHouseRequest()
  },

  //------------------ 筛选 : 方式 ---------------
  toggleCurrentFilterMode(event) {
    var id = event.currentTarget.dataset['id'];
    var name = event.currentTarget.dataset['name'];
    
    this.setData({
      'filterFrame.filterMode.currentSelectModeId': id,
      'filterFrame.filterTitleArr[1].name': name,
      'filterFrame.currentSelectTitleId': -1,
      'requestHouseData.modeId': id
    })
    this.recommendHouseRequest()
  },

  //------------------ 筛选 : 租金 ---------------
  toggleCurrentFilterRent(event) {
    var index = event.currentTarget.dataset['index'];
    var name = event.currentTarget.dataset['name'];
    var price = event.currentTarget.dataset['price'] || -1

    this.setData({
      'requestHouseData.price' : price,
      'filterFrame.filterRent.currentSelectRentId': index,
      'filterFrame.filterTitleArr[2].name': name,
      'filterFrame.currentSelectTitleId': -1
    })

    this.recommendHouseRequest()

  },

  getStartPrice(event) {
    this.setData({
      'filterFrame.filterRent.rentStart': event.detail.value
    })
  },

  getEndPrice(event) {
    this.setData({
      'filterFrame.filterRent.rentEnd': event.detail.value
    })
  },

  filterPrice() {
    var rentStart = this.data.filterFrame.filterRent.rentStart.trim()
    var rentEnd = this.data.filterFrame.filterRent.rentEnd.trim()
    if (!rentEnd || !rentStart) {
      Toast.fail('输入不能为空');
      return false
    }
    if (rentStart > rentEnd) {
      Toast.fail('起始价格不能低于最终价格');
      return false
    }
    var price = rentStart + '-' + rentEnd
    var priceStr = rentStart + '元-' + rentEnd + '元'
    this.setData({
      'requestHouseData.price' : price,
      'filterFrame.filterRent.currentSelectRentId': -1,
      'filterFrame.filterTitleArr[2].name': priceStr,
      'filterFrame.currentSelectTitleId': -1
    })
    this.recommendHouseRequest()
  },

  //---------------- 筛选 : 特色 ----------------
  selectFeature(event) {
    var index = event.currentTarget.dataset['index'];
    var oldList = this.data.filterFrame.filterFeature.currentSelectFeatureId
    var newList = util.deepCopy(oldList) || []
    var item = `filterFrame.filterFeature.featureList[${index}].selectFlag`

    var indexFlag = newList.findIndex(item => {
      return (item == index)
    })


    if (indexFlag == -1) {
      newList.push(index)
      this.setData({
        'filterFrame.filterFeature.currentSelectFeatureId': newList,
        [item]: true
      })
    } else {
      newList.splice(indexFlag, 1)
      this.setData({
        'filterFrame.filterFeature.currentSelectFeatureId': newList,
        [item]: false
      })
    }

  },

  filterFeature() {
    if (!this.data.filterFrame.filterFeature.currentSelectFeatureId.length) {
      this.setData({
        'filterFrame.filterTitleArr[3].flag': false,
        'filterFrame.currentSelectTitleId': -1,
        'requestHouseData.featureId': []
      })
    } else {
      this.setData({
        'filterFrame.filterTitleArr[3].flag': true,
        'filterFrame.currentSelectTitleId': -1,
        'requestHouseData.featureId': this.data.filterFrame.filterFeature.currentSelectFeatureId
      })
    }

    this.recommendHouseRequest()
  },

  //----------------- 筛选 : 排序 ---------------
  setFilterTitleSort(e) {
    this.setData({
      'filterFrame.filterTitleSort.flag': e.detail
    })
  },

  selectSort(event) {
    var index = event.currentTarget.dataset['index'];
    var name = event.currentTarget.dataset['name'];
    this.setData({
      'requestHouseData.sortId': index,
      'filterFrame.filterTitleSort.name': name,
      'filterFrame.filterSort.currentSelectSortId': index,
      'filterFrame.filterTitleSort.flag': false
    })

    this.recommendHouseRequest()
  },

  //----------------- watch ----------------------
  watch: {},

  //--------------- 滚动监听 ---------------------
  onPageScroll: function (e) {
    var scrollTopFixed = 520 // 滚动到 520rpx 变为 固定定位
    var rpxScrollTop = e.scrollTop * this.data.rpxScale
    if (rpxScrollTop >= scrollTopFixed) {
      this.setData({
        filterFrameFixedFlag: true
      })
    } else {
      this.setData({
        filterFrameFixedFlag: false
      })
    }
  },

  //--------------- 路由跳转 ---------------------
  
  // 跳转广告页面
  navigateToAdPage(e){
    
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url : "/pagesIndexSub/advertisement/advertisement?id=" + id
    })
  },

  //跳转到 房屋详情页面
  navigateToHouseDetailePage(e){
     var openid = e.currentTarget.dataset.openid
     var houseid = e.currentTarget.dataset.houseid
     wx.navigateTo({
      url : `/pagesIndexSub/houseDetaile/houseDetaile?openid=${openid}&houseid=${houseid}` 
    })
  },

  //--------------- 获取推荐房源 ---------------------
  recommendHouseRequest(){
    var that = this
    wx.request({
      url  : requestUrl.getRecommendHouseInfo_url,
      data : that.data.requestHouseData,
      success(res){
        var houseList = res.data
        // '￥'+ 
        houseList.forEach( item =>{
          item.imgPath = that.data.baseUrl + '/' + item.imgPath
          item.price = '￥'+ item.price 
          var featureStr = ''
          if( item.feature.length > 0 ){
            item.feature.forEach( sonItem =>{
              featureStr += sonItem.name + '、'
            })
            featureStr = featureStr.substr(0,featureStr.length-1)
          }
          item.featureStr = featureStr
        })
        
        that.setData({
          'houseFrame.houseList' : houseList
        })

      }
    })  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // watch 挂载
    appInstance.setWatcher(this)

    var that = this

    // 拿到城市
    var userInfo = JSON.parse(wx.getStorageSync('userInfo'))
    var city = userInfo.city
    city = city.replace('市', '')

    // 得到城市列表 / 区县
    qqmapsdk.getCityList({
      success: function (res) { //成功后的回调
        // 城市数据
        var allCity = res.result[1];
        var givenCityIndex = allCity.findIndex(item => {
          if (item.name == city) {
            return true;
          }
        })

        that.setData({
          'searchCity.selectId': givenCityIndex,
          'searchCity.city': allCity,
          'searchCity.currentCityName': city,
        })

        // 得到当前城市的 id
        var currentCityId =  allCity[givenCityIndex].id
        qqmapsdk.getDistrictByCityId({
          id : currentCityId,
          success : function(res){ 
            var arr = res.result[0]
            arr.unshift({
               id : 0 , 
               fullname : '不限' 
            })
            that.setData({
              "filterFrame.filterArea.childrenItems" : arr
            })
          },
          fail: function(error) {
            console.error(error);
          },

        })

      },
      fail: function (error) {
        console.error(error);
      }
    })

    // 得到广告信息
    wx.request({
      url : requestUrl.advertisement_url,
      success : function(res){
          appInstance.globalData.adPageInfo = res.data
          that.setData({
              swiperAd : res.data
          }) 
      }
    })

    // 获取附近房源信息
    var latitude  = userInfo.localtion.latitude
    var longitude = userInfo.localtion.longitude

    this.setData({
      'requestHouseData.latitude' : latitude,
      'requestHouseData.longitude' : longitude,
    })
    
    this.recommendHouseRequest()
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