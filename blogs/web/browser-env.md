---
title: js 判断当前页面处于什么设备终端和浏览器环境
date: 2021-07-05
categories:
 - web开发
tags:
 - web
 - js
 - h5
---

> 很多H5的项目，需要判断宿主环境的处于什么设备终端和浏览器环境， 比如微信微博钉钉的分享. 需要通过js就可以判断当前页面是在什么浏览器打开的。

```js
const browser = function() {
  const ua =  navigator.userAgent;
  const appVersion = navigator.appVersion;
  const version = {
     isIos: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios 终端 
     //isMobile: !!ua.macth(/(iPhone|iPod|iPad|Android|ios)/i), // 是否移动终端
     isMobile: !!ua.match(/AppleWebKit.*Mobile.*/), // 是否移动终端
     isAndroid: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1, // android 终端端或者uc 浏览器
     // isAndroid: !!ua.appVersion.match(/android/gi),
     isIphone: !!ua.indexOf('iPhone') > -1, // 是否为iPhone或则QQHD浏览器
     // isIphone:  !!ua.appVersion.match(/iphone/gi);
     iPad: ua.indexOf('iPad') > -1, // 是否是iPad
     isWebApp: ua.indexOf('Safari') === -1, // 是否为Webapp，没有头部和底部
     isTrident: ua.indexOf('Trident') > -1, //IE内核
     isPresto: ua.inexOf('Presto') > -1, // opera 内核
     isWebKit: ua.indexOf('AppleWebkit') > -1, // 苹果谷歌内核
     isGecko: ua.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, //火狐内核
     isWechat: !!ua.match(/micromessenger/gi),
     isWeiBo: !!ua.match(/weibo/gi),
     isQQ: !!ua.match(/qq/gi),
  }
  const language = (navigator.browserLanguage || navigator.language).toLowerCase();
  return {
     version, language
  }
}

```