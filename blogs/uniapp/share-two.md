---
title: uni-app分享2
date: 2021-03-07
categories:
 - uni-app开发
tags:
 - uni-app
---

# uni-app分享2

|   作者   |  修订日期  |
| :------: | :--------: |
| iwtkings | 2020.11.25 |

> 分享主要内容：
>
> 小程序框架二
>
> 小程序调试二 

[[toc]]

## 一、小程序框架

### 1.1 uni-app功能框架

![功能框架](https://img.cdn.aliyun.dcloud.net.cn/uni-app/doc/uni-app-frame-0310.png)

### 1.2 需要明确的几个概念

- [ ] 原生应用程序与[hybrid](https://baike.baidu.com/item/hybrid%20app/270520?fr=aladdin)（美[ˈhaɪbrɪd]）应用程序
- [ ] 跨平台应用程序的优缺点，灾难性问题 -> 兼容、适配、放弃
- [ ] 宿主，想要构建小程序的原生App，集成uni小程序SDK的宿主
- [ ] 小程序，运行在宿主中的前端代码编写的小程序项目，使用 uni-app 框架开发
- [ ] wgt，小程序应用资源包，即使用 uni-app 框架开发的项目，导出的小程序应用资源包
- [ ] [小程序内置组件](https://uniapp.dcloud.io/component/README)
- [ ] 第三方小程序原生组件
- [ ] 原生app与uni-app打包iOS、Android应用程序的区别
- [ ] [小程序引擎](https://nativesupport.dcloud.net.cn/README)
- [ ] 基于uni-app构建iOS、Android应用程序
- [ ] uni-app云打包与[本地打包](https://nativesupport.dcloud.net.cn/AppDocs/README)iOS、Android应用程序

<div style="display: flex; padding: 10px; background-color: #f2f2f2">
    <div style="flex: 3">
      <img src="https://img-cdn-tc.dcloud.net.cn/uploads/article/20200208/17968bd5afe1e15f1b0b4965a194726f.gif"/>
      <div style="text-align: center; margin-top: 10px"><strong>小程序引擎</strong></div>
    </div>
    <div style="flex: 7; margin-left: 25px">
      <div style="display: flex; flex-wrap: wrap;">
        <div style="margin-right: 15px">
          <img style="width: 170px;" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7c910dd0-bcf2-11ea-b680-7980c8a877b8.png"/>
          <div style="text-align: center; padding: 10px 0"><strong>iOS版</strong></div>
        </div>
        <div style="margin-right: 15px">
          <img style="width: 170px" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7c946930-bcf2-11ea-b997-9918a5dda011.png"/>
          <div style="text-align: center; padding: 10px 0"><strong>Android版</strong></div>
        </div>
        <div style="margin-right: 15px">
          <img style="width: 170px" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/uni-h5-hosting-qr.png"/>
          <div style="text-align: center; padding: 10px 0"><strong>web版</strong></div>
        </div>
        <div style="margin-right: 15px">
          <img style="width: 170px" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/gh_33446d7f7a26_430.jpg"/>
          <div style="text-align: center; padding: 10px 0"><strong>微信小程序</strong></div>
        </div>
        <div style="margin-right: 15px">
          <img style="width: 170px" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/30112940-bcf2-11ea-a30b-e311646dfaf2.png"/>
          <div style="text-align: center; padding: 10px 0"><strong>支付宝小程序</strong></div>
        </div>
        <div style="margin-right: 15px">
          <img style="width: 170px" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/e7fc6700-bcf1-11ea-b680-7980c8a877b8.png"/>
          <div style="text-align: center; padding: 10px 0"><strong>百度小程序</strong></div>
        </div>
        <div style="margin-right: 15px">
          <img style="width: 170px" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/mp-toutiao.png"/>
          <div style="text-align: center; padding: 10px 0"><strong>字节跳动小程序</strong></div>
        </div>
        <div style="margin-right: 15px">
          <img style="width: 170px" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hello-uni-qq.png"/>
          <div style="text-align: center; padding: 10px 0"><strong>QQ小程序</strong></div>
        </div>
        <div style="margin-right: 15px">
          <img style="width: 170px" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hello-uni-qa-union.png"/>
          <div style="text-align: center; padding: 10px 0"><strong>快应用（Android）</strong></div>
        </div>
      </div>
    </div>
  </div>


### 1.3 uni-app 原生渲染引擎

`uni-app` App端内置了一个基于 [weex](https://weex.apache.org/) 改进的原生渲染引擎，提供了原生渲染能力。

在App端，如果使用vue页面，则使用webview渲染；如果使用nvue页面(native vue的缩写)，则使用原生渲染。一个App中可以同时使用两种页面，比如首页使用nvue，二级页使用vue页面，hello uni-app示例就是如此。

虽然nvue也可以多端编译，输出H5和小程序，但nvue的css写法受限，所以如果你不开发App，那么不需要使用nvue。

以往的 weex ，有个很大的问题是它只是一个高性能的渲染器，没有足够的API能力（比如各种push sdk集成、蓝牙等能力调用），使得开发时非常依赖原生工程师协作，开发者本来想节约成本，结果需要前端、iOS、Android 3拨人开发，适得其反。 nvue 解决了这个问题，让前端工程师可以直接开发完整 App，并提供丰富的[插件生态](https://ext.dcloud.net.cn/)和云打包。这些组合方案，帮助开发者切实的提高效率、降低成本。

同时uni-app扩展了weex原生渲染引擎的很多排版能力，修复了很多bug。比如

- Android端良好支持边框阴影
- iOS端支持高斯模糊，[详情](https://ask.dcloud.net.cn/article/36617#view)
- 可实现区域滚动长列表+左右拖动列表+吸顶的复杂排版效果
- 优化圆角边框绘制性能

[资源地址](https://uniapp.dcloud.io/use-weex)

### 1.4 混合开发

**uni-app和原生App混合开发问题：**

首先务必确认uni-app和原生代码，谁是主谁是从的问题。

- 如果你的应用是uni-app开发的，需要扩展一些原生能力，那么首先去[插件市场](https://ext.dcloud.net.cn/)看看有没有现成的插件，如果没有，就自己开发，开发文档请参考[原生插件开发教程](https://nativesupport.dcloud.net.cn/NativePlugin/README)。
- 如果你的App是原生开发的，部分功能栏目想通过uni-app实现，有2种方式
  - 在原生App里集成uni小程序sdk，[参考](https://nativesupport.dcloud.net.cn/README)
  - 如果不想集成原生sdk，那就把uni-app代码发布成H5方式，在原生App里通过webview打开。

如果应用是uni-app开发为主，只是想离线打包，那么不应该使用uni小程序sdk，而是使用App离线打包SDK，[参考](https://nativesupport.dcloud.net.cn/AppDocs/README)。 另注意离线打包无法享受插件市场的付费原生插件，如有相关需求需自己进行原生插件开发。

**uni-app和原生小程序混合开发问题：**

- 方式1：把原生小程序转换为uni-app源码。有各种转换工具，[详见](https://uniapp.dcloud.io/translate)
- 方式2：新建一个uni-app项目，把原生小程序的代码变成小程序组件，进而整合到uni-app项目下。uni-app支持使用小程序wxml组件，[参考](https://uniapp.dcloud.io/frame?id=小程序组件支持)
- 方式3：原生开发的小程序仍保留，部分新功能使用uni-app开发。这个场景有三方开发者提供了插件，[参考](https://ext.dcloud.net.cn/plugin?id=1560)

如果想充分发挥uni-app的跨端特性，编译到各种其他小程序平台，建议使用方案1。

如果不需要其他小程序平台，仅需要h5和app，那方案1和方案2均可。

如果只需要开发微信小程序，但想使用vue的方式开发、或者想利用uni-app的插件生态、或者部分页面想跨多端复用，那么使用方案3。

[资源地址](https://uniapp.dcloud.io/hybrid)

### 1.5 page.json配置

- [ ] [topWindow](https://uniapp.dcloud.io/collocation/pages?id=topwindow)
- [ ] [leftWindow](https://uniapp.dcloud.io/collocation/pages?id=leftWindow)
- [ ] [rightWindow](https://uniapp.dcloud.io/collocation/pages?id=rightWindow)

[资源文件](https://uniapp.dcloud.io/collocation/pages)

### 1.6 easycom配置

传统vue组件，需要安装、引用、注册，三个步骤后才能使用组件。`easycom`将其精简为一步。 只要组件安装在项目的components目录下，并符合`components/组件名称/组件名称.vue`目录结构。就可以不用引用、注册，直接在页面中使用。

[资源地址](https://uniapp.dcloud.io/collocation/pages?id=easycom)

### 1.7 生命周期

- [应用生命周期](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)
- [页面生命周期](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)
- [组件生命周期](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e7%bb%84%e4%bb%b6%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)

[资源地址](https://uniapp.dcloud.io/collocation/frame/lifecycle)

## 二、小程序运行调试

### 2.1 uni-app以app的方式在iOS、Android设备上运行

通过cli命令创建项目的方式，无法在iOS、Android设备上运行应用程序

内置工程

### 2.2 HBuildX标准版和App开发版的区别说明

用哪个都行。
HBuilderX标准版可直接用于web开发、markdown、字处理场景。做App仍需要安装插件。
App开发版预置了App/uni-app开发所需的插件，开箱即用。
标准版也可以在插件安装界面安装App开发所需插件，App开发版只是一个预集成作用。
App开发插件体积大的原因主要有2方面：

1. 真机运行基座，Android版、iOS版、iOS模拟器版，加起来体积就1百多M。真机运行基座需要把所有模块都内置进去，方便大家开发调试。开发者自己做app打包是不会这么大的，因为可以在manifest里选模块来控制体积。
2. uni-app的编译器，依赖webpack和各种node模块，node_modules就是这么一个生态现状，文件超级多，几万个文件，解压起来很慢。

如果你使用`uni-app cli`方式创建项目，编译器会在项目下，且你不开发App，只用uni-app做小程序和H5，那使用标准版就可以。

### 2.3 uni-app开发中需要注意的一些细节

- [ ] template中的数据展示尽量不要使用高端语法
- [ ] template中的样式呈现尽量不要使用高端语法
- [ ] template中的判断尽量不要使用高端语法以及复杂的判断

```vue
<template>
	<view>
		<text v-show="show" :class=""></text>
	</view>
</template>

<script>
data() {
 return {
 	show: false
 }
}

onLoad() {
	this.show = data.objA.propA.show && data.objB.propB.aa.length > 0;
}
</script>
```







