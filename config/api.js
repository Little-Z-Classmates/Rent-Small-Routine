const baseUrl = "http://localhost:8080"
const global  = "/global"
const v1  = "/v1"
const v2  = "/v2"

module.exports = {
  baseUrl   : baseUrl,
  login_url : baseUrl + global + '/login',
  advertisement_url     : baseUrl + v1 + '/advertisement',
  addRentHouseInfo_url  : baseUrl + v1 + '/addRentHouseInfo',
  houseInfoList_url     : baseUrl + v1 + '/houseInfoList',
  getHouseInfo_url      : baseUrl + v2 + '/getHouseInfo',
  updateHouseInfo_url   : baseUrl + v2 + '/updateHouseInfo',
  deleteHouseInfo_url   : baseUrl + v2 + '/deleteHouseInfo',
  getRecommendHouseInfo_url : baseUrl + global + '/getRecommendHouseInfo',
}