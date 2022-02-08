---
title: vue3和Vite双向加持，uni-app性能再次提升
date: 2022-02-07
categories:
 - uni-app开发
tags:
 - uni-app-vue3-vite
 - uni-app
---

[![img](https://p9-passport.byteacctimg.com/img/user-avatar/26bb2d6ac867b1a7749c0deae9bf0de5~300x300.image)](https://juejin.cn/user/3298190613284270)

`uni-app`对`vue3 & Vite`的升级，是一个渐进式过程：

- 2020年9月：小程序平台支持 vue3 开发，小程序平台编译器依然使用webpack；
- 2021年5月：H5平台支持 vue3 开发，H5平台编译器升级为 Vite；
- 2021年8月：App平台支持 vue3 开发，App平台编译器升级为 Vite；
- 2021年11月：小程序平台编译器升级为 Vite；

至此，`uni-app`在全平台支持了 `Vite` 编译及`Vue 3.x` 运行。

so，这场持续一年之久的大版本升级，究竟给`uni-app`项目带来了哪些提升？

是时候总结（秀）一波了。

新版 uni-app 框架主要做了三大改进：

- 重写框架内核：基于`vue3 + ts`重写内置组件和API，实现更彻底、更高效的`tree-shaking`；
- 新增支持 Vite 构建工具，在H5平台实现秒开预览；
- 新增支持 Vue3.x，实现更灵活的开发方式，及更高的运行性能；

基于这三大改进，uni-app项目获得了**多快好省**四大收益：

- 更多的语法支持，支持组合式API，业务聚焦，开发效率更高；
- 更快的编译速度，H5平台十倍加速，小程序、App加速30%以上；
- 更好的运行性能，用户端响应更快，体验更好；
- 更小的代码体积，瘦身30%以上，更省体积、更省流量

## 更多的语法支持

新版`uni-app`支持Vue 3.x框架，支持组合式API，可实现更聚焦的业务开发。

Vue 3.x的一些新增特性，`uni-app`也已经完全支持，如：

- 支持`<script setup>`
- 支持`<style scoped>`、`<style module>`、`State-Driven Dynamic CSS(v-bind)`
- 支持`jsx`、`tsx`（h5,app 平台支持，小程序不支持）

另外，在小程序平台，新版`uni-app`也扩展了更多的语法，如：

- 更完善的模板语法支持（如 `class`、`style` 支持函数、变量等，不再局限数组、对象类型）
- 更完整的 `props` 支持（如传递函数）
- 更完善的 `slot` 支持（如作用域插槽）

## 更快的编译速度

开发者日常工作中，最无聊的就是等待编译构建。

某乎上还有一个”程序员在等待编译的时候都做什么？“的讨论帖，可见编译时间对开发者而言，是一个多么尴尬无聊的碎片时间。

`uni-app`本次升级`vue3 & Vite`后，在编译时间上有多少改进？带给开发者多少福利？我们安排真实测试，以数据说话。

测试环境说明：

```
硬件：RedmiBook 14 二代
处理器：Intel(R) Core(TM) i7-1065G7 CPU @ 1.30GHz 
内存：16.0 GB
操作系统：Windows 11 专业版 64 位操作系统
复制代码
```

关于编译速度，我们做了两个维度的对比：

- 纵向对比：挑选`uni-app`常用项目模板，在H5、小程序、App平台，分别测试`vue 2.6`和`vue 3.x`的编译时间
- 横向对比：使用业内优秀的其它跨端框架，创建默认项目模板，记录其编译时间，和`uni-app`的`vue 3.x`版本进行对比

### uni-app 历史版本纵向对比

我们选择`uni-app默认模板`、`uni-starter`、`hello-uniapp`三个项目模板，分别测试`vue 2.6`和`vue 3.x`的编译时间。

uni-app项目编译时间的采集方式：

- `vue 2.6`版本编译时间 = webpack 的 stats.endTime - stats.startTime
- `vue 3.x`版本编译时间 = 构建工具入口处记录 global.__vite_start_time = performance.now()，构建工具编译完成时：performance.now() - global.__vite_start_time

#### H5平台

对`uni-app`的三个项目模板分别运行到H5平台，进行多次编译测试，并求其均值后，获得如下数据：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8e2353cca266411d825875799c4e3131~tplv-k3u1fbpfcp-watermark.awebp)

由此，我们可以观察到：

- 在`vue 2.6`环境下，随着项目复杂度的提升，H5首页预览所需编译时间会直线增加；这是因为在`vue 2.6`版本下，虽然仅预览首页，但依然会使用 `webpack` 编译整个项目资源；故项目越复杂，编译时间越长；
- 在`vue 3.x`环境下，H5首页预览的编译时间跟项目复杂度也有关系，但增幅不大；这是因为在`vue 3.x`版本下，使用 `Vite` 进行构建，预览首页时仅编译首页及首页所依赖资源，不会编译其它页面资源。

通过图表对比，我们可以直观得出结论：`vue 3.x`环境下的首页编译时间，平均不到`vue 2.6`环境下的十分之一。

换言之，`vue 3.x`版本下的首页编译速度，相比`vue 2.6`版本，有**十倍效率提升**。

这个十倍效率提升，主要得益于新版采用`Vite`作为构建工具，由此带来了两大好处：

- 使用原生 ESM 文件，无需打包，实现极速的服务启动；
- 预览（运行）使用`esbuild`作为打包工具，相比`vue 2.6`环境下的`webpack`，构建速度快 10-100 倍（这不是我们夸大，详见[esbuild](https://link.juejin.cn/?target=https%3A%2F%2Fesbuild.docschina.org%2F)）

本着这个**十倍效率提升**，小伙伴们还不赶紧上手试试？

#### 小程序平台

对`uni-app`的三个模板项目运行到小程序平台，多次编译测试，并求其均值后，获得如下数据：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6075ea69904d4fcdbe1977ed2ff4d1a7~tplv-k3u1fbpfcp-watermark.awebp)

从上图对比数据来看，我们可以得出结论：小程序平台，`vue 3.x`版本下的运行编译，相比`vue 2.6`版本，编译性能至少提升30%；且项目越复杂，编译性能提升越明显，可以达到40% ~ 50%。

#### App平台

对`uni-app`的三个项目模板继续运行到App平台，多次编译测试，并求其均值后，获得如下数据：

![vue3-08](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27f0ffcd92d24f08bd539273a913b9d9~tplv-k3u1fbpfcp-watermark.awebp)

从上图对比数据来看，我们可以得出结论：App平台，`vue 3.x`版本下的运行编译，相比`vue 2.6`版本，编译性能提升将近50%。

虽没有H5平台的十倍效率提升那么刺激，但将近50%的速度提升，经常开发小程序/App的小伙伴，还不心动？

### 业内优秀框架横向对比

除了采用不同版本的`uni-app`进行纵向对比外，我们还使用业内优秀的跨端框架`Taro`，创建空的项目模板，进行横向对比测试。

具体测试方案：

1. 安装`Taro`的最新cli，本文测试时使用的版本为"@Tarojs/Taro": "3.3.16"
2. 使用`Taro init`命令，分别选择`react`、`vue`、`vue3`框架，创建三个默认项目模板，三个项目名称分别为`taro3-react`、`taro3-vue`、`taro3-vue3`，如下图： ![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a796e778344f43798a2c80393c12918a~tplv-k3u1fbpfcp-watermark.awebp)
3. 使用`npm run dev:h5`，运行到H5平台进行预览，记录每次预览编译时间，重复执行，求其均值

关于`Taro`编译时间的计算方案：

1. 开发一个`Taro`扩展插件，插件规范参考[Taro官网 - 插件功能](https://link.juejin.cn/?target=http%3A%2F%2FTaro-docs.jd.com%2FTaro%2Fdocs%2Fplugin%2F)
2. 在`ctx.onBuildStart`中记录开始编译时间
3. 在`ctx.onBuildFinish`中记录编译结束时间
4. 两者的时间差，即为编译过程消耗时间

然后使用`uni-app`的`cli`命令行，创建基于`vue3.x`的空项目模板，项目命名为`uni-app-vue3`。

我们使用各自框架的命令行，将如上创建的5个项目分别编译到H5平台和小程序平台，多次测试，并求其均值。

同框架版本在H5平台上的编译时间，结果如下：

![vue3-18.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ec0d69f1f4047adaf6daa6969e28383~tplv-k3u1fbpfcp-watermark.awebp?)

从图中可以看出，`uni-app`的`vue3`版本，在H5平台上的首页编译预览性能是遥遥领先的。

继续编译到小程序平台，多次测试，求其均值，结果如下：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dceaa0a94a51448cbf594d1139d0fdc1~tplv-k3u1fbpfcp-watermark.awebp)

从图中可以看出，`uni-app`的`vue3`版本，在小程序平台上的编译性能也是非常领先的。

## 更好的运行速度

开发环节编译快了，那面向最终用户的软件，运行性能怎么样？

我们进入性能测试章节。

测试方案：

- 开发内容：开发一个仿微博小程序首页的复杂长列表，支持下拉刷新、上拉翻页、点赞。
- 界面如下：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4dd6fb97b0c44992949eac222c422ed6~tplv-k3u1fbpfcp-watermark.awebp)

- 测试机型：小米 Mi 10 pro、MIUI 12.5 (21.11.3 开发版) 、微信版本 8.0.16
- 准备工作：每次开始测试前，杀掉各App进程、清空内存，保证测试机环境基本一致；每次从本地读取静态数据，屏蔽网络差异。
- 评测点：长列表中的某个组件，比如点赞组件，点击时是否能及时的修改未赞和已赞状态？

测试计时方式：

- 选中某微博，点击“点赞”按钮，实现点赞状态状态切换（已赞高亮、未赞灰色），
- 点赞按钮 onclick函数开头开始计时，setData回调函数开头结束计时；

在小米手机上进行多次测试，求其平均值，结果如下：

| 记录条数 | 200  | 400  | 600  | 800  | 1000 |
| -------- | ---- | ---- | ---- | ---- | ---- |
| vue2     | 30ms | 43ms | 56ms | 72ms | 90ms |
| vue3     | 8ms  | 9ms  | 9ms  | 8ms  | 9ms  |

从表格中可以看出：

- 随着页面记录的增加，`vue 2.6`版本的`uni-app`项目，点赞组件响应时间快速增加，响应越来越慢；
- 基于`vue 3.x`的`uni-app`项目，点赞组件的响应时间跟页面条数无关，一直保持极高的响应灵敏度，性能体验远高于`vue 2.6`版本。

从这个常见的长列表组件响应实验来看，`vue 3.x`的性能体验要远高于`vue 2.6`版本。

## 更小的代码体积

项目发行后的代码体积，是一个很重要的考量指标：

- H5平台：更小的代码体积，可以帮助开发者节省服务端带宽及CDN流量，可实现更快的资源加载及页面渲染；
- 小程序平台：更小的代码体积，可加速小程序包的下载（甚至可能免了分包加载的繁琐），帮助用户更快进入小程序业务界面；
- App平台：更小的代码体积，可实现更快的App启动，帮助用户更快进入App首页

为了测试`vue 3.x`新版升级后，代码体积的变化，我们同样做了两个维度的测试：

- 纵向对比：选择`uni-app`常用项目模板，在H5、小程序、App平台，分别测试`vue 2.6`和`vue 3.x`的编译包大小
- 横向对比：使用业内优秀的其它跨端框架，创建默认项目模板，记录其编译后的包体积大小，和`uni-app`版本进行对比

Tips：

- 开发阶段重在编译速度，对应`npm run dev`操作
- 发行阶段重在编译包大小，对应`npm run build`操作

### uni-app 不同版本纵向对比

我们复用之前创建的`uni-app默认模板`、`uni-starter`、`hello-uniapp`三个项目模板，分别测试`vue 2.6`和`vue 3.x`的编译包体积。

`uni-app`项目编译包体积的采集方式：编译到对应平台后，记录编译后文件夹的大小。

#### H5平台

H5平台编译后代码体积记录如下：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b054f08c66224e8cb203f3f45d8d89a0~tplv-k3u1fbpfcp-watermark.awebp)

从统计结果来看，`uni-app`的`vue3.x`版本，在H5平台上的编译包体积至少瘦身30%以上。

H5平台的瘦身优化，主要得益于`uni-app`框架的底层全面重构，实现了更彻底的摇树优化。

#### 小程序平台

小程序平台编译后代码体积记录如下：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d20ce20582c944aa9702854af727110c~tplv-k3u1fbpfcp-watermark.awebp)

从统计结果来看，`uni-app`的`vue3.x`版本，在小程序平台上也有大幅瘦身。

#### App平台

App平台编译后代码体积记录如下： ![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5c0460ee198844168bc35146c8f1c047~tplv-k3u1fbpfcp-watermark.awebp)

从统计结果来看，`uni-app`的`vue3.x`版本，在App平台上根据项目不同，会有不同幅度的瘦身。

从理论上来讲，项目中的页面模板越复杂，App平台的瘦身效果越明显。

### 业内优秀框架横向对比

关于编译后的代码体积，我们也和业内优秀的跨端框架`Taro`进行了对比，复用前面章节创建的三个`Taro`项目，分别编译到H5平台和小程序平台，计算其编译后的源码文件夹大小。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/012e95bd1e3343e6b3c6e741a28a7e45~tplv-k3u1fbpfcp-watermark.awebp)

从图中可以看出，`uni-app`的vue3版本，在H5平台上编译包体积是最小的，只有友商的十分之一左右。

我们继续测试，不同版本框架发行到微信小程序平台，记录其编译包大小：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c6aa5fdca3084951ba2fb2ea0389032d~tplv-k3u1fbpfcp-watermark.awebp)

从图中可以看出，`uni-app`的vue3版本，在小程序平台上编译包体积也是最小的。

**Tips：**细心的开发者会发现，所有框架版本编译到小程序上的代码包体积都远小于其在H5平台上的包体积，这是因为小程序由平台厂商提供内置组件及接口实现，而H5平台则需跨端框架自己实现内置组件及接口，故H5平台的代码包普遍要大一些。

## 总结

综上，我们以数字说话，阐述了vue3版本`uni-app`开发的诸多好处，再回顾一遍：

- 更多的语法
- 更快的编译
- 更好的运行
- 更少的代码

你还不赶紧升级新版`uni-app`来试试吗？

对文本测试过程及结果有疑问的同学，欢迎到github上提交[issue](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fdcloudio%2Funi-app)，欢迎指正。