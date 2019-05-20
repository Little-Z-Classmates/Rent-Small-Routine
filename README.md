# 租房小程序 -> 小程序端
# 接口列表：

## 1. 登录login
### 请求URL: 
    baseUrl + /global/login
### 请求方式: 
    GET
### 请求参数类型: query
参数|是否必选|类型|说明|
:--:|:--:|:--:|:--:
appid|Y|string|小程序的appid
secret|Y|string|小程序的secret
js_code|Y|string|登录临时获取的code
grant_type|Y|string|固定值为authorization_code
### 返回数据: 
    openid
---------------------------------------------------

## 2. 获取广告
### 请求URL: 
    baseUrl + /v1/advertisement
### 请求方式: 
    GET
### 请求参数类型: 
    无
### 返回数据: 
    [
      {
        id : id,
        adName : 广告名,
        adFrontImgPath: 广告封面地址,
        adBackStageImgsPath: 广告内容图片地址,
        newAdArticleList : 广告内容图片描述地址(与图片一对应)
      }
    ]
---------------------------------------------------

## 3. 发布页面提交信息
### 请求URL: 
    baseUrl + /v1/addRentHouseInfo
### 请求方式: 
    POST
### 请求参数类型: 
参数|是否必选|类型|说明|
:--:|:--:|:--:|:--:
openid |Y|string|用户的 openid
houseid|Y|string|房源的唯一标识符 houseid
setSubmitMode|N|string|提交类型为 图片 此项为 img , 否则为 空
imgMode|N|string|如果上传图片也是必填项, 类型 : cover 封面 / other 其他图片
index|N|string|图片类型为 cover 为空, 为 other , 此项为每张图片的index
otherImgInfo|N|array|其他图片的 List 信息
mode|N|object|此项及以下参数为存储房源其他信息的必填项.出租类型
placeInfo|N|object|地理位置
room|N|object|房源卧厅数量
toilet|N|object|卫生间信息
acreage|N|string|房源容量平方米
storey|N|object|房源楼层信息,共几楼,第几楼
payTime|N|string|支付时长
price|N|string|价格
feature|N|array|房源特色
houseDescribeValue|N|string|房源其他描述信息
contactWay|N|object|联系方式,电话,微信,QQ
### 返回数据: 
    data : 数据提交成功 或 图片提交成功
---------------------------------------------------

## 4. 获取提交的详细房源信息
### 请求URL: 
    baseUrl + /v1//houseInfoList
### 请求方式: 
    GET
### 请求参数类型:
参数|是否必选|类型|说明|
:--:|:--:|:--:|:--:
openid |Y|string|用户的 openid
### 返回数据: 
    [
     {房源信息1},
     {房源信息2}
    ]
---------------------------------------------------

## 5. 获取要操作的房源信息
### 请求URL: 
    baseUrl + /v2/getHouseInfo
### 请求方式: 
    GET
### 请求参数类型:
参数|是否必选|类型|说明|
:--:|:--:|:--:|:--:
openid |Y|string|用户的 openid
houseid |Y|string|用户房源的 houseid
### 返回数据: 
     {房源信息}

---------------------------------------------------

## 6. 修改房源 ( 与第3接口一样 )
---------------------------------------------------

## 7. 删除房源
### 请求URL: 
    baseUrl + /v2/deleteHouseInfo
### 请求方式: 
    GET
### 请求参数类型:
参数|是否必选|类型|说明|
:--:|:--:|:--:|:--:
openid |Y|string|用户的 openid
houseid |Y|string|用户房源的 houseid
### 返回数据: 
     "删除成功"
---------------------------------------------------

## 8. 获取推荐的房源信息
### 请求URL: 
    baseUrl + /global/getRecommendHouseInfo
### 请求方式: 
    GET
### 请求参数类型:
参数|是否必选|类型|说明|
:--:|:--:|:--:|:--:
latitude  |Y|string|提供的经度
longitude |Y|string|提供的纬度
modeId |Y|string|租房模式的id
price |Y|string|租金范围 ( xxx-xxx )
featureId |Y|array|特色 id 数组
sortId |Y|array|排序id , 0是默认, 1是升序,2是降序
### 返回数据: 
    [
      {房源信息1},
      {房源信息2}
    ]