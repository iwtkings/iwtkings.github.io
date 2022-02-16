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
sudo arch -x86_64 gem install ffi
arch -x86_64 pod install
```

执行以上命令即可。

