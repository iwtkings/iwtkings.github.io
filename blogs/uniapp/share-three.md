---
title: uni-app分享3
date: 2021-03-08
categories:
 - uni-app开发
tags:
 - uni-app
---

# uni-app分享3

|   作者   |  修订日期  |
| :------: | :--------: |
| iwtkings | 2020.12.07 |

> 分享主要内容：
>
> 小程序框架三
>
> 小程序调试三 

[[toc]]

## 一、小程序框架

### 1.1 preloadRule

分包预载配置。

配置preloadRule后，在进入小程序某个页面时，由框架自动预下载可能需要的分包，提升进入后续分包页面时的启动速度

`preloadRule` 中，`key` 是页面路径，`value` 是进入此页面的预下载配置，每个配置有以下几项：

| 字段     | 类型        | 必填 | 默认值 | 说明                                                         |
| -------- | ----------- | ---- | ------ | ------------------------------------------------------------ |
| packages | StringArray | 是   | 无     | 进入页面后预下载分包的 root 或 name。**APP** 表示主包。      |
| network  | String      | 否   | wifi   | 在指定网络下预下载，可选值为：all（不限网络）、wifi（仅wifi下预下载） |

app的分包，同样支持preloadRule，但网络规则无效。

```javascript
{
 "preloadRule": {
        "pagesA/list/list": {
            "network": "all",
            "packages": ["__APP__"]
        },
        "pagesB/detail/detail": {
            "network": "all",
            "packages": ["pagesA"]
        }
    }
}
```

### 1.2 通知、监听

#### [uni.$emit(eventName,OBJECT)](https://uniapp.dcloud.io/collocation/frame/communication?id=emit)

触发全局的自定事件。附加参数都会传给监听器回调。

| 属性      | 类型   | 描述                   |
| --------- | ------ | ---------------------- |
| eventName | String | 事件名                 |
| OBJECT    | Object | 触发事件携带的附加参数 |

**代码示例**

```javascript
    uni.$emit('update',{msg:'页面更新'})
```

#### [uni.$on(eventName,callback)](https://uniapp.dcloud.io/collocation/frame/communication?id=on)

监听全局的自定义事件。事件可以由 uni.$emit 触发，回调函数会接收所有传入事件触发函数的额外参数。

| 属性      | 类型     | 描述           |
| --------- | -------- | -------------- |
| eventName | String   | 事件名         |
| callback  | Function | 事件的回调函数 |

**代码示例**

```javascript
    uni.$on('update',function(data){
        console.log('监听到事件来自 update ，携带参数 msg 为：' + data.msg);
    })
```

#### [uni.$once(eventName,callback)](https://uniapp.dcloud.io/collocation/frame/communication?id=once)

监听全局的自定义事件。事件可以由 uni.$emit 触发，但是只触发一次，在第一次触发之后移除监听器。

| 属性      | 类型     | 描述           |
| --------- | -------- | -------------- |
| eventName | String   | 事件名         |
| callback  | Function | 事件的回调函数 |

**代码示例**

```javascript
    uni.$once('update',function(data){
        console.log('监听到事件来自 update ，携带参数 msg 为：' + data.msg);
    })
```

#### uni.$off([eventName, callback\)](https://uniapp.dcloud.io/collocation/frame/communication?id=off)

移除全局自定义事件监听器。

| 属性      | 类型            | 描述           |
| --------- | --------------- | -------------- |
| eventName | Array＜String＞ | 事件名         |
| callback  | Function        | 事件的回调函数 |

**Tips**

- 如果没有提供参数，则移除所有的事件监听器；
- 如果只提供了事件，则移除该事件所有的监听器；
- 如果同时提供了事件与回调，则只移除这个回调的监听器；
- 提供的回调必须跟$on的回调为同一个才能移除这个回调的监听器；

**代码示例**

`$emit`、`$on`、`$off`常用于跨页面、跨组件通讯，这里为了方便演示放在同一个页面

```html
    <template>
        <view class="content">
            <view class="data">
                <text>{{val}}</text>
            </view>
            <button type="primary" @click="comunicationOff">结束监听</button>
        </view>
    </template>

    <script>
        export default {
            data() {
                return {
                    val: 0
                }
            },
            onLoad() {
                setInterval(()=>{
                    uni.$emit('add', {
                        data: 2
                    })
                },1000)
                uni.$on('add', this.add)
            },
            methods: {
                comunicationOff() {
                    uni.$off('add', this.add)
                },
                add(e) {
                    this.val += e.data
                }
            }
        }
    </script>

    <style>
        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .data {
            text-align: center;
            line-height: 40px;
            margin-top: 40px;
        }

        button {
            width: 200px;
            margin: 20px 0;
        }
    </style>
```

**注意事项**

- uni.$emit、 uni.$on 、 uni.$once 、uni.$off 触发的事件都是 App 全局级别的，跨任意组件，页面，nvue，vue 等
- 使用时，注意及时销毁事件监听，比如，页面 onLoad 里边 uni.$on 注册监听，onUnload 里边 uni.$off 移除，或者一次性的事件，直接使用 uni.$once 监听

### 1.3 weex、nvue、ReactNative

#### weex

> TIP
>
> Weex 是使用流行的 Web 开发体验来开发高性能原生应用的框架。
>
> "*Weex*" 的发音是 /wiːks/, 和 "*Weeks*" 同音。

Weex 致力于使开发者能基于通用跨平台的 Web 开发语言和开发经验，来构建 Android、iOS 和 Web 应用。简单来说，在集成了 WeexSDK 之后，你可以使用 JavaScript 语言和前端开发经验来开发移动应用。

Weex 渲染引擎与 DSL 语法层是分开的，Weex 并不强依赖任何特定的前端框架。目前 [Vue.js](https://vuejs.org/) 和 [Rax](https://alibaba.github.io/rax/) 这两个前端框架被广泛应用于 Weex 页面开发，同时 Weex 也对这两个前端框架提供了最完善的支持。Weex 的另一个主要目标是跟进流行的 Web 开发技术并将其和原生开发的技术结合，实现开发效率和运行性能的高度统一。在开发阶段，一个 Weex 页面就像开发普通网页一样；在运行时，Weex 页面又充分利用了各种操作系统的原生组件和能力。

这里有一个使用 Weex 和 Vue.js 开发的[最简单的例子](http://dotwe.org/vue/8da01827631b21150a12dd54d7114380)。你可以大致了解 Weex 是如何工作的。

![图片](https://weex.apache.org/assets/img/weex-example-yo.f145cfa8.png)

在 `<template>` 部分，包含了 `<div>` 元素，这个被广泛应用于 Web 页面中，在 Weex 里它也是一个通用的容器。`<text>` 元素就和普通的 HTML 不太一样了，它提供了显示文本的能力，在 Weex 上，所有文本必须放在 `<text>` 标签中。

在 `<style>` 部分，你可以定义各种 CSS 样式。需要注意的是，这些样式在 Weex 里只能作用于当前组件，[**scoped**](https://vue-loader.vuejs.org/en/features/scoped-css.html)。

**原生组件**

在上面的例子中，`<div>` 和 `<text>` 在移动端上渲染出来的<span style="color: red">都是原生组件</span>，充分利用了操作系统组件的能力与渲染速度。

![图片](https://weex.apache.org/assets/img/native-component.3ed5300a.png)

Weex 提供了一套基础的[内置组件](https://weex.apache.org/zh/docs/components/div.html)。你可以对这些基础组件进行封装、组合形成自己的组件；也可以创建自己的全新组件来包装操作系统提供的地图、视频等功能。可以访问 [扩展 iOS 能力](https://weex.apache.org/zh/guide/extend/extend-ios.html) 和 [扩展 Android 能力](https://weex.apache.org/zh/guide/extend/extend-android.html)来了解如何去实现自定义组件。

在框架内部，Weex 使用原生组件来渲染，并尽可能保持多平台一致性。但在不同平台上，或多或少会有一些渲染、行为上的差异。比如对于`<switch>`组件，在不同平台上的视觉效果是不一致的。

![switch](https://weex.apache.org/assets/img/different-switch.5dcdbc2e.png)

不同：触摸反馈效果

#### nvue

**native-vue**

[资源链接](https://uniapp.dcloud.io/nvue-outline)

#### react-native

[资源链接](https://reactnative.cn/)

## 二、小程序运行调试

#### 2.1 开发者工具他人开发者登录，远程调试

