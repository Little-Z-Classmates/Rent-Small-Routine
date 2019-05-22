const requestUrl  = require("../../config/api")
import Dialog from '../../miniprogram_npm/vant-weapp/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {
     baseUrl : requestUrl.baseUrl,
     collectHouseList : []
  },

  beforeCancelCollection(e){
    var that = this
    Dialog.confirm({
      message: '确认取消?'
     })
     .then(() => {
      var houseid = e.currentTarget.dataset.houseid
      that.CancelCollection(houseid)
    })
    .catch(() => {
    });
  },

  CancelCollection(houseid){
    var that = this
    var myOpenid = wx.getStorageSync('openid')
    var collectHouseid = houseid
    var collectFlag = false
    console.log(myOpenid);
    console.log(collectHouseid);
    wx.request({
      url : requestUrl.collectHouse_url,
      data:{
        myOpenid : myOpenid,
        collectHouseid : collectHouseid,
        collectFlag : collectFlag
      },
      success(res){
        console.log(res.data);
        that.onLoad()
      }
 })
  },

  toHouseInfoPage(e){
    var openid = e.currentTarget.dataset.openid
    var houseid = e.currentTarget.dataset.houseid
    wx.navigateTo({
     url : `/pagesIndexSub/houseDetaile/houseDetaile?openid=${openid}&houseid=${houseid}` 
   })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var openid = wx.getStorageSync('openid')
    wx.request({
      url : requestUrl.getCollectHouseList_url,
      data:{
        openid : openid,
      },
      success(res){
        that.setData({
          collectHouseList : res.data
        })
     }
    })
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