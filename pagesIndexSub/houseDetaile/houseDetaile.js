const requestUrl  = require("../../config/api")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl : requestUrl.baseUrl, // 基础请求url
    houseInfo:{},
  },

  collectHouse(){
     var myOpenid = wx.getStorageSync('openid')
     var collectHouseid  = this.data.houseInfo.houseid
     this.setData({
       'houseInfo.shoucangFlag' : !(this.data.houseInfo.shoucangFlag)
     })
     var collectFlag = this.data.houseInfo.shoucangFlag

     wx.request({
          url : requestUrl.collectHouse_url,
          data:{
            myOpenid,
            collectHouseid,
            collectFlag
          },
          success(res){
            console.log(res.data);
          }
     })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var myOpenid = wx.getStorageSync('openid')
    var openid = options.openid
    var houseid = options.houseid
    wx.request({
      url : requestUrl.getHouseDetaileInfo_url,
      data:{
        openid   : openid,
        houseid  : houseid,
        myOpenid : myOpenid
      },
      success(res){
        var houseInfo =  res.data

        houseInfo.houseFrontCoverImgPath = that.data.baseUrl + '/' + houseInfo.houseFrontCoverImgPath
        houseInfo.houseOtherImgListInfo.forEach( item =>{
          item.imgPath = that.data.baseUrl + '/' + item.imgPath
        })

        var featureStr = ''
        houseInfo.feature.forEach( item =>{
          featureStr += item.name + '、'
        })
        featureStr = featureStr.substr(0,featureStr.length-1)
        houseInfo.featureStr = featureStr
        
        that.setData({
          houseInfo : houseInfo
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