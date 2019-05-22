import Dialog from '../../miniprogram_npm/vant-weapp/dialog/dialog';
const  requestUrl  = require("../../config/api")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: [],
    dialog: {               //图片描述弹出框
      show: false,
      currentOtherImgInfo: ''
    },
  },


  // 房源管理
  houseAdministrate() {
    wx.navigateTo({
      url: "/pagesMineSub/houseAdministrate/houseAdministrate"
    })
  },

  // 收藏的房源
  collectHouse() {
    wx.navigateTo({
      url: "/pagesMineSub/collectHouse/collectHouse"
    })
  },

  // 关于我们
  aboutUs(){
    wx.navigateTo({
      url: "/pagesMineSub/aboutUs/aboutUs"
    })
  },

  //点击修改描述信息,弹出框
  toggleDialog() {
    this.setData({
      'dialog.show': true
    })
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

  // 点击确定
  dialogSetInfo(event) {
    setTimeout(() => {
      var info = this.data.dialog.currentOtherImgInfo.replace(/(^\s*)|(\s*$)/g, "")
      var openid = wx.getStorageSync("openid")
      wx.request({
        url : requestUrl.setFeedback_url,
        data:{
          info,
          openid
        },
        success(res){
          console.log(res.data);
        }
      })
      console.log(info);
      this.setData({
        'dialog.show': false,
        'dialog.currentOtherImgInfo': ''
      })

    }, 100)

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userInfo = JSON.parse(wx.getStorageSync('userInfo'))
    this.setData({
      userInfo: userInfo
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