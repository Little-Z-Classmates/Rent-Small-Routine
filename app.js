const watch = require("./config/watch.js");
import toPromise from './utils/to-promise'
const requestUrl  = require("./config/api")

App({

  setWatcher(page) {
    watch.setWatcher(page);
  },

  globalData: {
    userInfo: {},
    TX_map_key: 'JKBBZ-WNNW4-GCOUI-X66Y3-J7PFF-TGBTM',
    adPageInfo : []
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    const toPromiseWx = toPromise(wx)
    const wxGetLocation = toPromiseWx('getLocation')
    const wxGetSetting = toPromiseWx('getSetting')
    const wxRequest = toPromiseWx('request')
    const that = this

    //登录
    wx.getStorage({
      key: 'openid',
      fail(res) {
        // 登录
        wx.login({
          success: (res) => {
            let code = res.code
            // 发送 code 
            wx.request({
              url : requestUrl.login_url,
              data: {
                appid: 'wxade5bb2d186e25a1',
                secret: '668c5dd45e0b375d7a4ae1b3dd8a6bee',
                js_code: code,
                grant_type: 'authorization_code'
              },
              success(res) {
                if( res.statusCode == 200){
                  var openid = res.data
                  wx.setStorageSync('openid',openid)
                }
              }
            })
          }
        })
      }
    })

    wxGetLocation()
      .then(
        // 得到经纬度
        (res) => {
          let localtion = res.latitude + ',' + res.longitude
          return wxRequest({
            url: 'https://apis.map.qq.com/ws/geocoder/v1/',
            data: {
              location: localtion,
              key: that.globalData.TX_map_key
            },
          })
        }
      )
      .then(
        // 存入city
        (res) => {
          var city = res.data.result.address_component.city
          that.globalData.userInfo.city = city
          return wxGetSetting()
        }
      )
      .then(
        // 判断授权
        (res) => {
          if (!res.authSetting['scope.userInfo']) {
            wx.redirectTo({
              url: '../authorized/index'
            })
          }else{
            wx.getUserInfo({
              success (res){
                that.globalData.userInfo.avatarUrl = res.userInfo.avatarUrl
                that.globalData.userInfo.nickName = res.userInfo.nickName
                wx.removeStorage({
                  key: 'userInfo',
                  success(res) {
                    var userInfo = JSON.stringify(that.globalData.userInfo)
                    wx.setStorage({
                      key : 'userInfo',
                      data: userInfo
                    })
                  }
                })
              }
            })
          }
        }
      )


  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  }
})