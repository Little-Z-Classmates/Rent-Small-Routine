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
    [{ id : id,
       adName : 广告名,
       adFrontImgPath: 广告封面地址,
       adBackStageImgsPath: 广告内容图片地址,
       newAdArticleList : 广告内容图片描述地址(与图片一一对应)}]