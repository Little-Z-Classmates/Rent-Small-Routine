import toPromise from '../../utils/to-promise'
const requestUrl  = require("../../config/api")
const appInstance = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  /**
   * 授权得到信息
   */
  setInfo: function (results) {
    const toPromiseWx = toPromise(wx)
    const wxGetSetting = toPromiseWx('getSetting')

    appInstance.globalData.userInfo.avatarUrl = results.detail.userInfo.avatarUrl
    appInstance.globalData.userInfo.nickName  =  results.detail.userInfo.nickName
    wx.setStorageSync('userInfo',JSON.stringify(appInstance.globalData.userInfo))

    wxGetSetting()
      .then(
        (res) => {
          res.authSetting = {
            "scope.userInfo": true,
            "scope.userLocation": true
          }
        }
      )
  }
})