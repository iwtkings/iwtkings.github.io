---
title: M1芯片安装cocoapods报错
date: 2022-02-16
categories:
 - iOS开发
tags:
 - iOS
 - pod
 - cocoapods
---

在M1芯片的macBook中安装cocoapods可能会出现以下错误：

```
[NOTE]
You may have encountered a bug in the Ruby interpreter or extension libraries.
Bug reports are welcome.
For details: https://www.ruby-lang.org/bugreport.html

[IMPORTANT]
Don't forget to include the Crash Report log file under
DiagnosticReports directory in bug reports.

zsh: abort      pod install
```

**解决办法如下：**

```
使用 Rosetta 方式运行终端
应用程序 -> 实用工具 -> 终端/terminal -> 右键 -> 显示简介 -> 勾选使用 Rosetta 打开
```
然后执行以下命令即可

```
sudo gem install cocoapods
sudo gem install ffi
```


