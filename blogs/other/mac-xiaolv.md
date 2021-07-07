---
title: Mac 效率工具
date: 2021-07-07
categories:
 - 其他
tags:
 - mac
 - 效率
 - 效率工具
---

## 前言

使用 Mac 开发也有几个年头了，积累了一些效率工具和开发工具，今天整理了一下并分享给大家，工具几乎都是开源免费的，也期待大家有更多好的工具推荐给我，我补充上去。

## 包管理器

### [Homebrew](https://brew.sh/)

Homebrew 是一款 Mac OS 平台下的软件包管理工具，拥有安装、卸载、更新、查看、搜索等很多实用的功能。算是 Mac 系统的必备环境了。

有了它，比如你要下载下面提到的 node 环境，你根本不用考虑 node 去哪个地方下，只需要执行`brew install node`命令就好。

如果大家不习惯使用命令操作，还可以使用这款可视化的工具[cakebrew](https://www.cakebrew.com/)。

### [Npm](https://nodejs.org/en/)

Npm 其实是 Node.js 的包管理工具，安装 Node 后就会有 npm 环境了。有很多 npm 包是很好的工具，以我经常用的一个举例吧

#### [anywhere](https://www.npmjs.com/package/anywhere)

它可以随时随地将你的当前目录变成一个静态文件服务器的根目录，只需要你在当前目前下执行一个`anywhere`命令。

这样就实现了**一个局域网**下，文件互传的功能，我经常使用它来和同事之间传递文件，毕竟内网传递速度就是快。

### [Gem](https://rubygems.org/)

Gem 是 Ruby 模块的包管理器。如果你是 iOS 开发者，对这个一定不会陌生，因为 CocoaPods 本身就是一个 ruby 模块，我们可以通过 gem 来安装 CocoaPods，当然还可以通过 Homebrew 来安装。

## 日常工具

### [Snipaste](https://zh.snipaste.com/)

最好用的截图工具，我要向大家强烈安利它，不仅有正常的截图、编辑等功能，还有一个其他软件都没有而且我经常用的功能 -- 贴图，可以直接将图片像便签一样贴在桌面上。

![Snipaste.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f59edff0c8b64b29816f37651e50b204~tplv-k3u1fbpfcp-watermark.image)

### [MWeb](https://zh.mweb.im/)

专业的 Markdown 写作、记笔记、静态博客生成软件，用起来真的比较方便，其实还有会朋友推荐 Typora 这款软件，但是我不太喜欢那种预览区和编辑区在一起的方式，如果对 Typora 有兴趣的，也可以去看看。

![MWeb.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b43cc8df710a47dbac19d807f844487f~tplv-k3u1fbpfcp-watermark.image)

### [Go2Shell](https://zipzapmac.com/Go2Shell)

Go2Shell 可以让 Finder 中打开一个指向当前目录的终端窗口。

![Go2Shell.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7edeab2277894f31a2865e05d897bab0~tplv-k3u1fbpfcp-watermark.image)

### [Parallel Desktop](https://www.parallels.cn/)

Mac 上的虚拟机软件，有的软件没有 Windows 版本，或多或少需要一个虚拟机安装其他系统。

我有的时候会通过这种方式从 Mac 电脑向 Mac 不支持写的硬盘中拷贝文件。

### [Mircrosoft Remote Desktop](https://www.microsoft.com/en-us/download/details.aspx?id=50042)

微软官方免费远程桌面控制 Windows 的软件，我之所以用这款软件，是因为我上家公司服务器系统是 Windows Server 的，如果也有类似需求或者需要远程 Windows 系统的读者，可以看看这款软件。

### [Remote Desktop - VNC](https://apps.apple.com/cn/app/remote-desktop-vnc/id472995993?mt=12)

远程连接 Mac 的工具。我只所以用这款软件，是因为我前不久需要连接 Mac Mini 做一些 iOS 自动化打包的事情，有类似需求的读者，可以看看这款软件。

### [Stretchly](https://github.com/hovancik/stretchly)

这是一款休息时间提醒应用，非常适合我们程序员这类写 Bug 时聚精会神，忘记起来活动活动的职业。

![stretchly.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0fec1f0a8d354b83abc22d714046c830~tplv-k3u1fbpfcp-watermark.image)

### [Alfred](https://www.alfredapp.com/)

这个我觉得根本无需介绍，神器，使用 macOS 的同学应该都知道。一句话来说就是，Alfred 是 macOS 上神级的效率应用，能够在实际操作中大幅提升工作效率。

### [uTools](https://u.tools/)

生产力工具集

![utools.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/24ea80df2d144135a159ac86814212cd~tplv-k3u1fbpfcp-watermark.image)

### [SwitchHosts](https://swh.app/zh/)

是一个管理、切换多个 hosts 方案的可视化工具。

![SwitchHosts.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/16a188c21eef46f7bea8dec383efb864~tplv-k3u1fbpfcp-watermark.image)

### [ezip](https://ezip.awehunt.com/)

Mac 文件解压缩工具。

![ezip.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/36387be2f8854b118ecb9367503ef5c8~tplv-k3u1fbpfcp-watermark.image)

### [Dozer](https://github.com/Mortennn/Dozer)

一款免费的 Mac 菜单栏图标隐藏软件，开启软件后，在 Mac 菜单栏会出现两个小圆点，将两个小圆点拖拽至你需要隐藏的应用图标的右边，点击第二个小圆点，便能完成隐藏。

![Dozer.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e44406918523499ea5098e900d707df7~tplv-k3u1fbpfcp-watermark.image)

## 开发工具

### [Sourcetree](https://www.sourcetreeapp.com/)

Sourcetree 是我用过最好用的版本管理（Git）客户端软件。

![Sourcetree.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/420d43074e6248a78fcbd6ea5d7aa48c~tplv-k3u1fbpfcp-watermark.image)

### [Charles](https://www.charlesproxy.com/)

非常优秀的抓包工具

![Charles.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/45aacad31c4a47b8a572f03c12701e4c~tplv-k3u1fbpfcp-watermark.image)

### [iTerm2](https://iterm2.com/)

`iTerm2` + `Oh My Zsh `可以实现命令自动补全、自定义主题等等功能，强烈推荐，相关安装教程有很多，可以自己去找找。

只上一张效果图，大家感受一下吧

![iterm2.jpeg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/16e8938f87b94a4eab4bb1c3b1b890aa~tplv-k3u1fbpfcp-watermark.image)

### [Postman](https://www.postman.com/downloads/)

接口测试工具，如果不想安装软件，也可以安装谷歌浏览器扩展。

![Postman.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3672bc58ed9f409abfcce838def4e93e~tplv-k3u1fbpfcp-watermark.image)

### [FinalShell](http://www.hostbuf.com/)

FinalShell 是一体化的的服务器，网络管理软件，不仅是 ssh 客户端，还是功能强大的开发，运维工具，充分满足开发，运维需求。

国人开发的 SSH 客户端工具，亲验好用。

![FinalShell.jpeg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e774dbcd9d4440ff8ef3975a0075c08d~tplv-k3u1fbpfcp-watermark.image)

## iOS 工具

### [JSONConverter](https://github.com/iosyaowei/JSONConverter)

JSONConverter 是 MAC 上 iOS/Flutter 开发的辅助工具，可以快速的格式化 JSON 数据并转换生成对应的模型类属性，目前支持 Objective-C、Swift、Flutter 以及目前流行的第三方库：SwiftyJSON、HandyJSON，ObjectMapper, 可以灵活选择构建 class/struct，并支持配置类名前缀等，省去手敲模型的麻烦，借此提高开发效率。

![JSONConvert.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cbdee37825dc4dfb894a0a52a90d1af7~tplv-k3u1fbpfcp-watermark.image)

### [LSUnusedResources](https://github.com/tinymind/LSUnusedResources)

用于在 Xcode 项目中查找未使用的图像和资源。

![LSUnusedResourcesExample.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a1ec9fe33c7a44b9b93fc343e38df00c~tplv-k3u1fbpfcp-watermark.image)

### [BuildTimeAnalyzer](https://github.com/RobertGummesson/BuildTimeAnalyzer-for-Xcode)

展示 Swift 编译构建时间。

![BuildTimeAnalayer.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/56f2b35dfd904d6c92e38d573988724a~tplv-k3u1fbpfcp-watermark.image)

### [ImageOptim](https://imageoptim.com/mac)

图片压缩工具

![ImageOptim.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e8ed796b3e044cb8a7ad09c008a6f6a0~tplv-k3u1fbpfcp-watermark.image)

### [Lookin](https://lookin.work/)

Lookin 可以查看与修改 iOS App 里的 UI 对象，类似于 Xcode 自带的 UI Inspector 工具，或另一款叫做 Reveal 的软件。但借助于“控制台”和“方法监听”功能，Lookin 还可以进行 UI 之外的调试。此外，虽然 Lookin 主体是一款 macOS 程序，它亦可嵌入你的 iOS App 而单独运行在 iPhone 或 iPad 上。最后，Lookin 完全免费。

![Lookin.jpeg](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1524932b540a4f08bc45ad81ad848ec5~tplv-k3u1fbpfcp-watermark.image)

### [LinkMap](https://github.com/huanxsd/LinkMap)

这个工具是专为用来分析项目的 LinkMap 文件，得出每个类或者库所占用的空间大小（代码段 + 数据段），方便开发者快速定位需要优化的类或静态库。

![LinkMap.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c7cffe8b8724e0c92dfec1670a12efc~tplv-k3u1fbpfcp-watermark.image)

### [SwiftFormat For Xcode](https://github.com/nicklockwood/SwiftFormat)

SwiftFormat 是一个代码库和命令行工具，用于在 macOS 或 Linux 上重新格式化 Swift 代码。

### [Hopper](https://www.hopperapp.com/)

逆向工程工具，可让您反汇编、反编译和调试应用程序。

![Hopper.jpeg](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/905a97ada9464e15922e1516a4e5e6e9~tplv-k3u1fbpfcp-watermark.image)

### [iTools](https://pro.itools.cn/pro_mac/)

这个只要是做 iOS 开发的应该都知道，我就不过多介绍了。

### [Network Link Conditioner](https://developer.apple.com/downloads/?q=Hardware IO Tools)

这是一个来自苹果官方的工具，它可以模拟任何网络环境，如 3G，Edge 等等，也可以重新定义当前的网络环境，如网络延迟、带宽或丢包率。

![Network Link Conditioner.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a94ee361dbe74343a06190fd525fe4b6~tplv-k3u1fbpfcp-watermark.image)

### [XSimulatorMngr](https://github.com/xndrs/XSimulatorMngr)

XCode 模拟器管理器，用于管理 iOS 模拟器的开发者工具。

- 已安装的模拟器列表。
- 每个模拟器已安装的开发者应用程序列表。
- 允许直接打开应用程序包或沙箱文件夹。

![XSimulatorMngr.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/94692bb3b035436ca8cdf9b289e20c40~tplv-k3u1fbpfcp-watermark.image)

### [Knuff](https://github.com/KnuffApp/Knuff)

Apple 推送通知服务 (APN) 的调试应用程序

![Knuff.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7e35f1921ec44bc2a774a7f95b24bb73~tplv-k3u1fbpfcp-watermark.image)

### [InjectionIII](http://injectionforxcode.johnholdsworth.com/)

允许您在 iOS **模拟器**中增量更新函数和类、结构或枚举的任何方法的实现，而无需重新构建或重新启动应用程序。

![InjectionIII.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6a5b7733416c4159b70ca45eb156088c~tplv-k3u1fbpfcp-watermark.image)

### [DoKit](https://www.dokit.cn/#/index/home)

滴滴推出的 APP 效率工具

![DoKit.jpeg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0acf076ed1a14b5ab922dff9a151092f~tplv-k3u1fbpfcp-watermark.image)

### [ProfilesManager](https://github.com/shaojiankui/ProfilesManager/releases)

mobileprovision 文件管理器工具

![ProfilesManager.jpeg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/186ef612947746d3b4fce7a4e3f3cc5e~tplv-k3u1fbpfcp-watermark.image)

## 在线工具

### [JSON](https://www.json.cn/)

JSON 解析，用来格式化 JSON

### [tinypng](https://tinypng.com/)

在线压缩图片

### [tableconvert](https://tableconvert.com/)

将表格转成 md，excel 等各种形式，我经常会用来写一些表格用来转成 md

### [DownGit](https://minhaskamal.github.io/DownGit/#/home)

下载 Github 仓库中某一个指定文件或者文件夹

### [swiftify](https://swiftify.com/converter/code/)

快速将 Objective-C 代码转换为 Swift