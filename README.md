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

---

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