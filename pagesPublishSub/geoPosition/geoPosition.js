const appInstance = getApp()
import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';
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
    systemHeight: 0, // 当前窗口的高度
    localtion: {     // 中心经纬度
      latitude: '',
      longitude: ''
    },
    searchCity: {      // 查找的城市 
      selectId: 0 ,
      currentCityName : '',
      city: []
    },
    searchPlace:{      // 查询的地址
      searchPlaceValue : '',
      searchFlag : false ,
      dataList : [],  
   }, 
   markers:[],         // 标记点,
   placeInfo :{        // 地址信息 
      title     : '',
      address   : '',  
      latitude  : '',
      longitude : '',
      province  : '',
      city      : '',
      district  : '',
   }
  },

  // -------------------- 城市 picker -----------------
  bindchangeCity(e){
    this.setData({
      'searchCity.selectId': e.detail.value,
    })
    var cityName = this.data.searchCity.city[this.data.searchCity.selectId].name
    this.setData({
      'searchCity.currentCityName': cityName
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
    var address = e.currentTarget.dataset.address
    var latitude = e.currentTarget.dataset.latitude
    var longitude = e.currentTarget.dataset.longitude
    var province = e.currentTarget.dataset.province
    var city = e.currentTarget.dataset.city
    var district = e.currentTarget.dataset.district
    var markers = this.oneMarker(latitude,longitude)

    this.setData({
      "searchPlace.searchPlaceValue" : value,
      "searchPlace.searchFlag" : false,

      "localtion.latitude"     : latitude,
      "localtion.longitude"    : longitude,

      "placeInfo.title"     : value,
      "placeInfo.address"   : address,
      "placeInfo.latitude"  : latitude,
      "placeInfo.longitude" : longitude,
      "placeInfo.province"  : province,
      "placeInfo.city"      : city,
      "placeInfo.district"  : district,

      "markers" : markers
    })
  },

  oneMarker(latitude,longitude){
     var arr = [{
      iconPath: '/static/images/定位.png',
      id: 0,
      latitude  : latitude,
      longitude : longitude,
      width: 40,
      height: 40
     }]
     return arr
  },

  // 提交
  submitPlace(){
     if(this.data.placeInfo.title == ''){
      Toast.fail('未选择地址');
     }else{
       
        appInstance.globalData.placeInfo = this.data.placeInfo
        wx.switchTab({
          url : '/pages/publish/publish'
        })
     }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this 
    // 获取当前的 经纬度 , 获取当前窗口的高度 
    var localtion = appInstance.globalData.userInfo.localtion
    var systemHeight = wx.getSystemInfoSync().windowHeight
    this.setData({
      'localtion.latitude' : localtion.latitude,
      'localtion.longitude': localtion.longitude,
      'systemHeight' : systemHeight,
    })

    // 获取 拿到城市
    var userInfo = JSON.parse(wx.getStorageSync('userInfo'))
    var city = userInfo.city
    city = city.replace('市', '')

    qqmapsdk.getCityList({
      success : function(res){

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

      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('map')
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