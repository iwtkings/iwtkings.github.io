---
title: 移动端适配解决方案
date: 2022-01-27
categories:
 - web开发
tags:
 - 移动端适配
 - 适配
---

![移动端适配解决方案](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/448cac1d8498442290d7cf0fa5d7adec~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?)

## 前言

临近春节，产品突然给我搞了个H5专题活动页，这需求也是弄得我猝不及防。没办法，时间不多，就简简单单的搭了个脚手架项目。在开发项目的过程中我逐渐意识到了事情似乎没有那么简单。之后快要测试的时候我幡然醒悟，H5项目需要做适配。于是我想起了许多年前的事情....

本篇文章带大家用`vue-cli`搭建一个移动端适配的H5项目，希望能够帮到大家。

**注意 本文只是简单的搭建了一个移动端适配项目，在其项目中 其实有非常多需要优化的地方。这里我只关注了适配相关的配置**

## 项目搭建

脚手架项目的搭建，这里我就不在赘述了。如果你还不会搭建脚手架项目可以参考我之前发布的[文章](https://juejin.cn/post/7054789323639980069),里面还涉及到webpack的一些配置。

项目创建完成后，考虑到h5项目可能会使用到弹框、toast等，因此我们可以安装移动端相关的UI组件库， 这里我选择的是`vant`

```javascrpit
  // 安装git
  npm i vant --save
    
复制代码
```

除了安装UI组件库,我们还需要安装一些辅助工具 如`控制台(vconsole)`、`点击延迟解决方案(fastclick)`、`机型识别(ua-device)`等。当然你也可以使用自己擅长的其他库

```javascript
npm i vconsole fastclick ua-device --save
复制代码
```

## 手淘适配解决方案

阿里巴巴手淘团队出品的`amfe-flexible`是一个用于解决移动端不同机型适配的包。在其源码中，通过不同屏幕的像素比来设置scale值，保证当前窗口的device-width始终等于物理设备的宽度。从而达到不同机型的适配效果。

当然,要达到完全适配,我们不仅仅只用到`amfe-flexible`还需要用到`postcss-pxtorem`。 `postcss-pxtorem`是将我们在css中写的`px`单位转换为`rem`单位。与其相似的包还有`postcss-pxto2rem`该包则是将px转换成了2倍的rem单位。

下面我们进行依赖的安装

```javascript
npm i amfe-flexible postcss-pxtorem --save-dev

复制代码
```

安装完成后 我们需要进行`postcss`插件相关的配置 在根目录新建一个名为`postcss.config.js`的文件,如果项目中已包含该文件则无需新建。 在文件中写入如下代码:

```javascript
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*', '!border']
    }
  }
}

复制代码
```

上面代码是在postcss中配置一个有关`postcss-pxtorem`的插件,其中rootValue的值表示要转换的倍数。当H5设计稿的width为375时，对应的 rem就等于 `375/37.5 = 10rem `当项目加载时,postcss会将插件`postcss-pxtorem`进行加载。`postcss-px`则负责将style中所有用`px`标记的样式转换成`rem`类型。 `propList`这个配置则表示要将那些css样式进行匹配转换。其中`*`表示匹配所有的css `!`表示不需要匹配的。

下面是`postcss-pxtorem`其他的一些配置项

```javascript
{ 
 //rootValue(Number | Function) 表示根元素字体大小或根据参数返回根元素字体大小
   rootValue : 16,
   //类型为数字 允许 REM 单位增长到的十进制数字。
   unitPrecision : 5,
   //类型为数组 可以从 px 更改为 rem 的属性。
   propList : [ 'font' ,  'font-size' ,  'line-height' ,  
   'letter-spacing' ], 
   //类型为数组 要忽略并保留为 px 的选择器 可以为正则表达式
   selectorBlackList : [ ],
   //类型为布尔值 替换包含 rems 的规则，而不是添加回退。
   replace : true,
   //类型为布尔值 允许在媒体查询中转换 px。
   mediaQuery : false,
   //类型为数字 设置要替换的最小像素值。
   minPixelValue : 0,
   //类型为字符串或正则表达式或函数 要忽略并保留为 px 的文件路径。
  exclude：/ node_modules / i 
}
复制代码
```

**值得注意的是:`postcss-pxtorem` 可能会将UI组件库也进行转换，若出现该问题，我们应该忽略掉vant相关的css**

## 在main.js引入相关的包

之前我们安装了vant组件库和一些辅助工具包 我们应该在main.js中引入

```javascript
import 'amfe-flexible'
import Vue from 'vue'
//按需引入vant的一些组建
import {Toast,Dialog,Overlay} from 'vant'
import FastClick from 'fastClick'
FastClick.attach(document.body)
import Vconsole form 'vconsole'
if(process.env.NODE_ENV === 'development'){
  const vConsole = new Vconsole({
  defaultPlugin: ['system','network','element'],
  maxLogNumber:'1024',
  onReady:()=> console.log('i am fine')
  })
}
Vue.use(Toast).use(Dialog).use(Overlay).use(Vconsole)
复制代码
```

至此，我们的移动端适配就做好了，只需要按照设计稿的比例进行开发就可以了。