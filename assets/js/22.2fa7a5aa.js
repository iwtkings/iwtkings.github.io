(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{533:function(t,a,n){"use strict";n.r(a);var e=n(6),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"uni-app分享2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uni-app分享2"}},[t._v("#")]),t._v(" uni-app分享2")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("作者")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("修订日期")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("iwtkings")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("2020.11.25")])])])]),t._v(" "),n("blockquote",[n("p",[t._v("分享主要内容：")]),t._v(" "),n("p",[t._v("小程序框架二")]),t._v(" "),n("p",[t._v("小程序调试二")])]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#一、小程序框架"}},[t._v("一、小程序框架")]),n("ul",[n("li",[n("a",{attrs:{href:"#_1-1-uni-app功能框架"}},[t._v("1.1 uni-app功能框架")])]),n("li",[n("a",{attrs:{href:"#_1-2-需要明确的几个概念"}},[t._v("1.2 需要明确的几个概念")])]),n("li",[n("a",{attrs:{href:"#_1-3-uni-app-原生渲染引擎"}},[t._v("1.3 uni-app 原生渲染引擎")])]),n("li",[n("a",{attrs:{href:"#_1-4-混合开发"}},[t._v("1.4 混合开发")])]),n("li",[n("a",{attrs:{href:"#_1-5-page-json配置"}},[t._v("1.5 page.json配置")])]),n("li",[n("a",{attrs:{href:"#_1-6-easycom配置"}},[t._v("1.6 easycom配置")])]),n("li",[n("a",{attrs:{href:"#_1-7-生命周期"}},[t._v("1.7 生命周期")])])])]),n("li",[n("a",{attrs:{href:"#二、小程序运行调试"}},[t._v("二、小程序运行调试")]),n("ul",[n("li",[n("a",{attrs:{href:"#_2-1-uni-app以app的方式在ios、android设备上运行"}},[t._v("2.1 uni-app以app的方式在iOS、Android设备上运行")])]),n("li",[n("a",{attrs:{href:"#_2-2-hbuildx标准版和app开发版的区别说明"}},[t._v("2.2 HBuildX标准版和App开发版的区别说明")])]),n("li",[n("a",{attrs:{href:"#_2-3-uni-app开发中需要注意的一些细节"}},[t._v("2.3 uni-app开发中需要注意的一些细节")])])])])])]),n("p"),t._v(" "),n("h2",{attrs:{id:"一、小程序框架"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、小程序框架"}},[t._v("#")]),t._v(" 一、小程序框架")]),t._v(" "),n("h3",{attrs:{id:"_1-1-uni-app功能框架"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-uni-app功能框架"}},[t._v("#")]),t._v(" 1.1 uni-app功能框架")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://img.cdn.aliyun.dcloud.net.cn/uni-app/doc/uni-app-frame-0310.png",alt:"功能框架"}})]),t._v(" "),n("h3",{attrs:{id:"_1-2-需要明确的几个概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-需要明确的几个概念"}},[t._v("#")]),t._v(" 1.2 需要明确的几个概念")]),t._v(" "),n("ul",[n("li",[t._v("[ ] 原生应用程序与"),n("a",{attrs:{href:"https://baike.baidu.com/item/hybrid%20app/270520?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[t._v("hybrid"),n("OutboundLink")],1),t._v("（美[ˈhaɪbrɪd]）应用程序")]),t._v(" "),n("li",[t._v("[ ] 跨平台应用程序的优缺点，灾难性问题 -> 兼容、适配、放弃")]),t._v(" "),n("li",[t._v("[ ] 宿主，想要构建小程序的原生App，集成uni小程序SDK的宿主")]),t._v(" "),n("li",[t._v("[ ] 小程序，运行在宿主中的前端代码编写的小程序项目，使用 uni-app 框架开发")]),t._v(" "),n("li",[t._v("[ ] wgt，小程序应用资源包，即使用 uni-app 框架开发的项目，导出的小程序应用资源包")]),t._v(" "),n("li",[t._v("[ ] "),n("a",{attrs:{href:"https://uniapp.dcloud.io/component/README",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序内置组件"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("[ ] 第三方小程序原生组件")]),t._v(" "),n("li",[t._v("[ ] 原生app与uni-app打包iOS、Android应用程序的区别")]),t._v(" "),n("li",[t._v("[ ] "),n("a",{attrs:{href:"https://nativesupport.dcloud.net.cn/README",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序引擎"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("[ ] 基于uni-app构建iOS、Android应用程序")]),t._v(" "),n("li",[t._v("[ ] uni-app云打包与"),n("a",{attrs:{href:"https://nativesupport.dcloud.net.cn/AppDocs/README",target:"_blank",rel:"noopener noreferrer"}},[t._v("本地打包"),n("OutboundLink")],1),t._v("iOS、Android应用程序")])]),t._v(" "),n("div",{staticStyle:{display:"flex",padding:"10px","background-color":"#f2f2f2"}},[n("div",{staticStyle:{flex:"3"}},[n("img",{attrs:{src:"https://img-cdn-tc.dcloud.net.cn/uploads/article/20200208/17968bd5afe1e15f1b0b4965a194726f.gif"}}),t._v(" "),n("div",{staticStyle:{"text-align":"center","margin-top":"10px"}},[n("strong",[t._v("小程序引擎")])])]),t._v(" "),n("div",{staticStyle:{flex:"7","margin-left":"25px"}},[n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},[n("div",{staticStyle:{"margin-right":"15px"}},[n("img",{staticStyle:{width:"170px"},attrs:{src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7c910dd0-bcf2-11ea-b680-7980c8a877b8.png"}}),t._v(" "),n("div",{staticStyle:{"text-align":"center",padding:"10px 0"}},[n("strong",[t._v("iOS版")])])]),t._v(" "),n("div",{staticStyle:{"margin-right":"15px"}},[n("img",{staticStyle:{width:"170px"},attrs:{src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7c946930-bcf2-11ea-b997-9918a5dda011.png"}}),t._v(" "),n("div",{staticStyle:{"text-align":"center",padding:"10px 0"}},[n("strong",[t._v("Android版")])])]),t._v(" "),n("div",{staticStyle:{"margin-right":"15px"}},[n("img",{staticStyle:{width:"170px"},attrs:{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/uni-h5-hosting-qr.png"}}),t._v(" "),n("div",{staticStyle:{"text-align":"center",padding:"10px 0"}},[n("strong",[t._v("web版")])])]),t._v(" "),n("div",{staticStyle:{"margin-right":"15px"}},[n("img",{staticStyle:{width:"170px"},attrs:{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/gh_33446d7f7a26_430.jpg"}}),t._v(" "),n("div",{staticStyle:{"text-align":"center",padding:"10px 0"}},[n("strong",[t._v("微信小程序")])])]),t._v(" "),n("div",{staticStyle:{"margin-right":"15px"}},[n("img",{staticStyle:{width:"170px"},attrs:{src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/30112940-bcf2-11ea-a30b-e311646dfaf2.png"}}),t._v(" "),n("div",{staticStyle:{"text-align":"center",padding:"10px 0"}},[n("strong",[t._v("支付宝小程序")])])]),t._v(" "),n("div",{staticStyle:{"margin-right":"15px"}},[n("img",{staticStyle:{width:"170px"},attrs:{src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/e7fc6700-bcf1-11ea-b680-7980c8a877b8.png"}}),t._v(" "),n("div",{staticStyle:{"text-align":"center",padding:"10px 0"}},[n("strong",[t._v("百度小程序")])])]),t._v(" "),n("div",{staticStyle:{"margin-right":"15px"}},[n("img",{staticStyle:{width:"170px"},attrs:{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/mp-toutiao.png"}}),t._v(" "),n("div",{staticStyle:{"text-align":"center",padding:"10px 0"}},[n("strong",[t._v("字节跳动小程序")])])]),t._v(" "),n("div",{staticStyle:{"margin-right":"15px"}},[n("img",{staticStyle:{width:"170px"},attrs:{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hello-uni-qq.png"}}),t._v(" "),n("div",{staticStyle:{"text-align":"center",padding:"10px 0"}},[n("strong",[t._v("QQ小程序")])])]),t._v(" "),n("div",{staticStyle:{"margin-right":"15px"}},[n("img",{staticStyle:{width:"170px"},attrs:{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hello-uni-qa-union.png"}}),t._v(" "),n("div",{staticStyle:{"text-align":"center",padding:"10px 0"}},[n("strong",[t._v("快应用（Android）")])])])])])]),t._v(" "),n("h3",{attrs:{id:"_1-3-uni-app-原生渲染引擎"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-uni-app-原生渲染引擎"}},[t._v("#")]),t._v(" 1.3 uni-app 原生渲染引擎")]),t._v(" "),n("p",[n("code",[t._v("uni-app")]),t._v(" App端内置了一个基于 "),n("a",{attrs:{href:"https://weex.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("weex"),n("OutboundLink")],1),t._v(" 改进的原生渲染引擎，提供了原生渲染能力。")]),t._v(" "),n("p",[t._v("在App端，如果使用vue页面，则使用webview渲染；如果使用nvue页面(native vue的缩写)，则使用原生渲染。一个App中可以同时使用两种页面，比如首页使用nvue，二级页使用vue页面，hello uni-app示例就是如此。")]),t._v(" "),n("p",[t._v("虽然nvue也可以多端编译，输出H5和小程序，但nvue的css写法受限，所以如果你不开发App，那么不需要使用nvue。")]),t._v(" "),n("p",[t._v("以往的 weex ，有个很大的问题是它只是一个高性能的渲染器，没有足够的API能力（比如各种push sdk集成、蓝牙等能力调用），使得开发时非常依赖原生工程师协作，开发者本来想节约成本，结果需要前端、iOS、Android 3拨人开发，适得其反。 nvue 解决了这个问题，让前端工程师可以直接开发完整 App，并提供丰富的"),n("a",{attrs:{href:"https://ext.dcloud.net.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("插件生态"),n("OutboundLink")],1),t._v("和云打包。这些组合方案，帮助开发者切实的提高效率、降低成本。")]),t._v(" "),n("p",[t._v("同时uni-app扩展了weex原生渲染引擎的很多排版能力，修复了很多bug。比如")]),t._v(" "),n("ul",[n("li",[t._v("Android端良好支持边框阴影")]),t._v(" "),n("li",[t._v("iOS端支持高斯模糊，"),n("a",{attrs:{href:"https://ask.dcloud.net.cn/article/36617#view",target:"_blank",rel:"noopener noreferrer"}},[t._v("详情"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("可实现区域滚动长列表+左右拖动列表+吸顶的复杂排版效果")]),t._v(" "),n("li",[t._v("优化圆角边框绘制性能")])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://uniapp.dcloud.io/use-weex",target:"_blank",rel:"noopener noreferrer"}},[t._v("资源地址"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"_1-4-混合开发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-混合开发"}},[t._v("#")]),t._v(" 1.4 混合开发")]),t._v(" "),n("p",[n("strong",[t._v("uni-app和原生App混合开发问题：")])]),t._v(" "),n("p",[t._v("首先务必确认uni-app和原生代码，谁是主谁是从的问题。")]),t._v(" "),n("ul",[n("li",[t._v("如果你的应用是uni-app开发的，需要扩展一些原生能力，那么首先去"),n("a",{attrs:{href:"https://ext.dcloud.net.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("插件市场"),n("OutboundLink")],1),t._v("看看有没有现成的插件，如果没有，就自己开发，开发文档请参考"),n("a",{attrs:{href:"https://nativesupport.dcloud.net.cn/NativePlugin/README",target:"_blank",rel:"noopener noreferrer"}},[t._v("原生插件开发教程"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("li",[t._v("如果你的App是原生开发的，部分功能栏目想通过uni-app实现，有2种方式\n"),n("ul",[n("li",[t._v("在原生App里集成uni小程序sdk，"),n("a",{attrs:{href:"https://nativesupport.dcloud.net.cn/README",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("如果不想集成原生sdk，那就把uni-app代码发布成H5方式，在原生App里通过webview打开。")])])])]),t._v(" "),n("p",[t._v("如果应用是uni-app开发为主，只是想离线打包，那么不应该使用uni小程序sdk，而是使用App离线打包SDK，"),n("a",{attrs:{href:"https://nativesupport.dcloud.net.cn/AppDocs/README",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),n("OutboundLink")],1),t._v("。 另注意离线打包无法享受插件市场的付费原生插件，如有相关需求需自己进行原生插件开发。")]),t._v(" "),n("p",[n("strong",[t._v("uni-app和原生小程序混合开发问题：")])]),t._v(" "),n("ul",[n("li",[t._v("方式1：把原生小程序转换为uni-app源码。有各种转换工具，"),n("a",{attrs:{href:"https://uniapp.dcloud.io/translate",target:"_blank",rel:"noopener noreferrer"}},[t._v("详见"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("方式2：新建一个uni-app项目，把原生小程序的代码变成小程序组件，进而整合到uni-app项目下。uni-app支持使用小程序wxml组件，"),n("a",{attrs:{href:"https://uniapp.dcloud.io/frame?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("方式3：原生开发的小程序仍保留，部分新功能使用uni-app开发。这个场景有三方开发者提供了插件，"),n("a",{attrs:{href:"https://ext.dcloud.net.cn/plugin?id=1560",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("如果想充分发挥uni-app的跨端特性，编译到各种其他小程序平台，建议使用方案1。")]),t._v(" "),n("p",[t._v("如果不需要其他小程序平台，仅需要h5和app，那方案1和方案2均可。")]),t._v(" "),n("p",[t._v("如果只需要开发微信小程序，但想使用vue的方式开发、或者想利用uni-app的插件生态、或者部分页面想跨多端复用，那么使用方案3。")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://uniapp.dcloud.io/hybrid",target:"_blank",rel:"noopener noreferrer"}},[t._v("资源地址"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"_1-5-page-json配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-page-json配置"}},[t._v("#")]),t._v(" 1.5 page.json配置")]),t._v(" "),n("ul",[n("li",[t._v("[ ] "),n("a",{attrs:{href:"https://uniapp.dcloud.io/collocation/pages?id=topwindow",target:"_blank",rel:"noopener noreferrer"}},[t._v("topWindow"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("[ ] "),n("a",{attrs:{href:"https://uniapp.dcloud.io/collocation/pages?id=leftWindow",target:"_blank",rel:"noopener noreferrer"}},[t._v("leftWindow"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("[ ] "),n("a",{attrs:{href:"https://uniapp.dcloud.io/collocation/pages?id=rightWindow",target:"_blank",rel:"noopener noreferrer"}},[t._v("rightWindow"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://uniapp.dcloud.io/collocation/pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("资源文件"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"_1-6-easycom配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-easycom配置"}},[t._v("#")]),t._v(" 1.6 easycom配置")]),t._v(" "),n("p",[t._v("传统vue组件，需要安装、引用、注册，三个步骤后才能使用组件。"),n("code",[t._v("easycom")]),t._v("将其精简为一步。 只要组件安装在项目的components目录下，并符合"),n("code",[t._v("components/组件名称/组件名称.vue")]),t._v("目录结构。就可以不用引用、注册，直接在页面中使用。")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://uniapp.dcloud.io/collocation/pages?id=easycom",target:"_blank",rel:"noopener noreferrer"}},[t._v("资源地址"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"_1-7-生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-生命周期"}},[t._v("#")]),t._v(" 1.7 生命周期")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f",target:"_blank",rel:"noopener noreferrer"}},[t._v("应用生命周期"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f",target:"_blank",rel:"noopener noreferrer"}},[t._v("页面生命周期"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e7%bb%84%e4%bb%b6%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f",target:"_blank",rel:"noopener noreferrer"}},[t._v("组件生命周期"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://uniapp.dcloud.io/collocation/frame/lifecycle",target:"_blank",rel:"noopener noreferrer"}},[t._v("资源地址"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"二、小程序运行调试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、小程序运行调试"}},[t._v("#")]),t._v(" 二、小程序运行调试")]),t._v(" "),n("h3",{attrs:{id:"_2-1-uni-app以app的方式在ios、android设备上运行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-uni-app以app的方式在ios、android设备上运行"}},[t._v("#")]),t._v(" 2.1 uni-app以app的方式在iOS、Android设备上运行")]),t._v(" "),n("p",[t._v("通过cli命令创建项目的方式，无法在iOS、Android设备上运行应用程序")]),t._v(" "),n("p",[t._v("内置工程")]),t._v(" "),n("h3",{attrs:{id:"_2-2-hbuildx标准版和app开发版的区别说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-hbuildx标准版和app开发版的区别说明"}},[t._v("#")]),t._v(" 2.2 HBuildX标准版和App开发版的区别说明")]),t._v(" "),n("p",[t._v("用哪个都行。\nHBuilderX标准版可直接用于web开发、markdown、字处理场景。做App仍需要安装插件。\nApp开发版预置了App/uni-app开发所需的插件，开箱即用。\n标准版也可以在插件安装界面安装App开发所需插件，App开发版只是一个预集成作用。\nApp开发插件体积大的原因主要有2方面：")]),t._v(" "),n("ol",[n("li",[t._v("真机运行基座，Android版、iOS版、iOS模拟器版，加起来体积就1百多M。真机运行基座需要把所有模块都内置进去，方便大家开发调试。开发者自己做app打包是不会这么大的，因为可以在manifest里选模块来控制体积。")]),t._v(" "),n("li",[t._v("uni-app的编译器，依赖webpack和各种node模块，node_modules就是这么一个生态现状，文件超级多，几万个文件，解压起来很慢。")])]),t._v(" "),n("p",[t._v("如果你使用"),n("code",[t._v("uni-app cli")]),t._v("方式创建项目，编译器会在项目下，且你不开发App，只用uni-app做小程序和H5，那使用标准版就可以。")]),t._v(" "),n("h3",{attrs:{id:"_2-3-uni-app开发中需要注意的一些细节"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-uni-app开发中需要注意的一些细节"}},[t._v("#")]),t._v(" 2.3 uni-app开发中需要注意的一些细节")]),t._v(" "),n("ul",[n("li",[t._v("[ ] template中的数据展示尽量不要使用高端语法")]),t._v(" "),n("li",[t._v("[ ] template中的样式呈现尽量不要使用高端语法")]),t._v(" "),n("li",[t._v("[ ] template中的判断尽量不要使用高端语法以及复杂的判断")])]),t._v(" "),n("div",{staticClass:"language-vue line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-show")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("show"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \tshow"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLoad")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("propA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("propB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aa"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br")])])])}),[],!1,null,null,null);a.default=s.exports}}]);