---
title: axios 封装，API接口统一管理，支持动态API
date: 2021-12-16
categories:
 - web开发
tags:
 - web
 - js
 - axios
---

![axios 封装，API接口统一管理，支持动态API！](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/998ed3f6ceda47ada489dc9938c64f4e~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp)

## 分享一个自己封装的 axios 网络请求

#### 主要的功能及其优点：

将所有的接口放在一个文件夹中管理（api.js）。并且可以支持**动态接口**，就是 api.js 文件中定义的接口可以使用 `:xx` 占位，根据需要动态的改变。动态接口用法模仿的是**vue的动态路由**，如果你不熟悉动态路由可以看看我的这篇文章：[Vue路由传参详解（params 与 query）](https://link.juejin.cn/?target=https%3A%2F%2Fblog.csdn.net%2Fm0_46217225%2Farticle%2Fdetails%2F119808510%3Fspm%3D1001.2014.3001.5501)

#### 1.封装请求：

1. 首先在 src 目录下创建 http 目录。继续在 http 目录中创建 api.js 文件与 index.js 文件。
2. 然后再 main.js 文件中导入 http 目录下的 index.js 文件。将请求注册为全局组件。
3. 将下面**封装所需代码**代码粘到对应的文件夹

#### 2.基本使用：

```
//示例：获取用户列表
getUsers() {
  const { data } = await this.$http({
    url: 'users' //这里的 users 就是 api.js 中定义的“属性名”
  })
},
```

#### 3.动态接口的使用：

```js
//示例：删除用户
deleteUser() {
  const { data } = await this.$http({
    method: 'delete',
    //动态接口写法模仿的是vue的动态路由
    //这里 params 携带的是动态参数，其中 “属性名” 需要与 api 接口中的 :id 对应
    //也就是需要保证携带参数的 key 与 api 接口中的 :xx 一致
    url: {
      // 这里的 name 值就是 api.js 接口中的 “属性名”
      name: 'usersEdit',
      params: {
        id: userinfo.id,
      },
    },
  })
},
```

#### 4.不足：

封装的请求只能这样使用 `this.$http()` 。不能 `this.$http.get()` 或 `this.$http.delete()`

由于我感觉使用 `this.$http()` 这种就够了，所以没做其他的封装处理

如果你有更好的想法可以随时联系我

#### 如下是封装所需代码：

- **api.js 管理所有的接口**

```js
// 如下接口地址根据自身项目定义
const API = {
  // base接口
  baseURL: 'http://127.0.0.1:8888/api/private/v1/',
  // 用户
  users: '/users',
  // “修改”与“删除”用户接口（动态接口）
  usersEdit: '/users/:id',
}

export default API

```

- **index.js 逻辑代码**

```js
// 这里请求封装的主要逻辑，你可以分析并将他优化，如果有更好的封装方法欢迎联系我Q：2356924146
import axios from 'axios'
import API from './api.js'

const instance = axios.create({
  baseURL: API.baseURL,
  timeout: '8000',
  method: 'GET'
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 此处编写请求拦截代码，一般用于加载弹窗，或者每个请求都需要携带的token
    console.log('正在请求...')
    // 请求携带的token
    config.headers.Authorization = sessionStorage.getItem('token')
    return config
  },
  err => {
    console.log('请求失败', err)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  res => {
    console.log('响应成功')
    //该返回对象会绑定到响应对象中
    return res
  },
  err => {
    console.log('响应失败', err)
  }
)

//options 接收 {method, url, params/data}
export default function(options = {}) {
  return instance({
    method: options.method,
    url: (function() {
      const URL = options.url

      if (typeof URL === 'object') {
        //拿到动态 url
        let DynamicURL = API[URL.name]

        //将 DynamicURL 中对应的 key 进行替换
        for (const key of Object.keys(URL.params)) {
          DynamicURL = DynamicURL.replace(':' + key, URL.params[key])
        }

        return DynamicURL
      } else {
        return API[URL]
      }
    })(),
    //获取查询字符串参数
    params: options.params,
    //获取请求体字符串参数
    data: options.data
  })
}

```

- **main.js 将请求注册为全局组件**

```js
import Vue from 'vue'

// 会自动导入 http 目录中的 index.js 文件
import http from './http'

Vue.prototype.$http = http
```