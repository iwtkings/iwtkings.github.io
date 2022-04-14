---
title: 工具 - 打造 Mac “完美”终端（Terminal），一篇就够了
date: 2021-12-28
categories:
 - 终端
tags:
 - iterm
 - terminal
 - 终端
---

## “完美”终端

作为一个程序员，经常需要跟终端（Terminal）打交道。配置一个漂亮、好用的终端，不但心情愉悦，效率也能提升不少。

一个“完美”终端需要

- 漂亮的界面
- 高效的自动补全
- 实用的额外信息
- 自动推荐
- 语法高亮
- 随时唤起
- ……

![img](https://upload-images.jianshu.io/upload_images/943491-aa43b75b39a7ad85.gif?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

本篇文章，带大家利用 [iTerm2](https://links.jianshu.com/go?to=https%3A%2F%2Fmakeoptim.com%2Ftool%2F(https%3A%2F%2Fwww.iterm2.com%2F)), [zsh](https://links.jianshu.com/go?to=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FZ_shell), [oh my zsh](https://links.jianshu.com/go?to=https%3A%2F%2Fohmyz.sh%2F), [powerlevel10k](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fromkatv%2Fpowerlevel10k) 快速打造一款“完美”终端。

## 安装

### iTerm2

前往 [iTerm2 官网](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.iterm2.com%2F)下载并安装。

> 注：建议为 iTerm2 打开完全磁盘访问权限，避免出现默认 Terminal 执行正确，iTerm2 因为权限问题导致执行有误。

![img](https://upload-images.jianshu.io/upload_images/943491-df3d90a8e084afcd.png?imageMogr2/auto-orient/strip|imageView2/2/w/667/format/webp)

terminal

配置快捷键随时从顶部唤起以及背景图片。

![img](https://upload-images.jianshu.io/upload_images/943491-13de6af394c1c9a7.png?imageMogr2/auto-orient/strip|imageView2/2/w/917/format/webp)

terminal

![img](https://upload-images.jianshu.io/upload_images/943491-bb1c47f87182197f.png?imageMogr2/auto-orient/strip|imageView2/2/w/923/format/webp)

terminal

![img](https://upload-images.jianshu.io/upload_images/943491-3a754d8c7d5e573d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1012/format/webp)

terminal

配置完成后，打开 iTerm2，在任何页面按下设置的快捷键，即可从顶部唤起。

### zsh

macOS 下默认已经安装了 zsh。可执行以下命令，更改默认 Shell 为 zsh。



```undefined
1
chsh -s /bin/zsh
```

### Oh My Zsh

[Oh My Zsh](https://links.jianshu.com/go?to=https%3A%2F%2Fohmyz.sh%2F) 是这么介绍自己的。

> Oh My Zsh is a delightful, open source, community-driven framework for managing your Zsh configuration. It comes bundled with thousands of helpful functions, helpers, plugins, themes, and a few things that make you shout…

简单来说，利用 Oh My Zsh 我们可以轻松管理 zsh 的配置，可以做非常多的定制化功能，比如主题，字体，插件等。

Oh My Zsh 支持 curl、wget 安装，命令如下：

- curl：

  

  ```bash
  sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
  ```

- wget：

  

  ```bash
  sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
  ```

安装完成后，Oh My Zsh 会加载默认的主题。

![img](https://upload-images.jianshu.io/upload_images/943491-db50b6df7304ca5b.png?imageMogr2/auto-orient/strip|imageView2/2/w/746/format/webp)

terminal

是不是比 zsh 原生的主题好看些了呢？下面，我们进一步完善。

### Powerlevel10k

Oh My Zsh 有上百个自带主题，以及其他的外部主题。而 [Powerlevel10k](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fromkatv%2Fpowerlevel10k) 正是现在最流行的主题之一。

执行以下命令，安装 Powerlevel10k。



```bash
git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k
```

在 zsh 的配置文件 `~/.zshrc` 中设置 `ZSH_THEME=powerlevel10k/powerlevel10k`。

![img](https://upload-images.jianshu.io/upload_images/943491-b8962c766b90707c.png?imageMogr2/auto-orient/strip|imageView2/2/w/746/format/webp)

terminal

设置完成后，重启 iTerm2 会提示安装需要的字体，根据提示安装即可。

![img](https://upload-images.jianshu.io/upload_images/943491-c19aac0e30c30010.png?imageMogr2/auto-orient/strip|imageView2/2/w/623/format/webp)

terminal

完成后，重启 iTerm2 进入配置页，根据提示选择自己喜欢的样式即可。

![img](https://upload-images.jianshu.io/upload_images/943491-a956524d03700606.gif?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

terminal

## 常用插件

### autojump

[autojump](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fwting%2Fautojump) 可以记录下之前 cd 命令访过的所有目录，下次要去那个目录时不需要输入完整的路径，直接 j somedir 即可到达，甚至那个目标目录的名称只输入开头即可。

执行以下命令，安装 autojump。



```undefined
brew install autojump
```

在 zsh 的配置文件 `~/.zshrc` 中的 plugins 中加入 autojump。

![img](https://upload-images.jianshu.io/upload_images/943491-39a7010a0913e085.png?imageMogr2/auto-orient/strip|imageView2/2/w/653/format/webp)

terminal

执行以下命令，使插件生效。



```bash
source ~/.zshrc
```

![img](https://upload-images.jianshu.io/upload_images/943491-014bf1892079e772.gif?imageMogr2/auto-orient/strip|imageView2/2/w/658/format/webp)

terminal

### zsh-syntax-highlighting

[zsh-syntax-highlighting](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fzsh-users%2Fzsh-syntax-highlighting) 终端命令语法高亮插件。

执行以下命令，安装 zsh-syntax-highlighting。



```ruby
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

在 zsh 的配置文件 `~/.zshrc` 中的 plugins 中加入 zsh-syntax-highlighting。



```undefined
plugins=(
  git
  autojump
  zsh-syntax-highlighting
)
```

执行以下命令，使插件生效。



```bash
source ~/.zshrc
```

![img](https://upload-images.jianshu.io/upload_images/943491-70583c186356063f.png?imageMogr2/auto-orient/strip|imageView2/2/w/341/format/webp)

terminal

### zsh-autosuggestions

[zsh-autosuggestions](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fzsh-users%2Fzsh-autosuggestions) 终端命令自动推荐插件，会记录之前使用过的命令，当你输入开头时，会暗色提示之前的历史命令供你选择，可直接按右方向键选中该命令。

执行以下命令，安装 zsh-autosuggestions。



```ruby
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

在 zsh 的配置文件 `~/.zshrc` 中的 plugins 中加入 zsh-autosuggestions。



```undefined
plugins=(
  git
  autojump
  zsh-syntax-highlighting
  zsh-autosuggestions
)
```

执行以下命令，使插件生效。



```bash
source ~/.zshrc
```

![img](https://upload-images.jianshu.io/upload_images/943491-5bc2e70250c1fa81.gif?imageMogr2/auto-orient/strip|imageView2/2/w/754/format/webp)

terminal

## VSCode 配置

默认情况下，在 VSCode 中选择 zsh 作为默认 Shell 会出现乱码现象。原因是 Oh My Zsh 配置完成后，使用了 `MesloLGS NF` 字体。

![img](https://upload-images.jianshu.io/upload_images/943491-d9025101db340a46.png?imageMogr2/auto-orient/strip|imageView2/2/w/1003/format/webp)

terminal

因此，修复乱码只需要在设置中找到 terminal font，设置成 `MesloLGS NF` 即可。

![img](https://upload-images.jianshu.io/upload_images/943491-b22165452dc82a6f.png?imageMogr2/auto-orient/strip|imageView2/2/w/872/format/webp)

terminal

![img](https://upload-images.jianshu.io/upload_images/943491-e8adbbf83030209f.png?imageMogr2/auto-orient/strip|imageView2/2/w/1014/format/webp)

terminal

其他终端工具，也类似修改字体即可。

## 参考
- [oh-my-zsh官网](https://ohmyz.sh/)
- [https://github.com/romkatv/powerlevel10k/](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fromkatv%2Fpowerlevel10k%2F)
- [https://support.apple.com/zh-cn/HT208050](https://links.jianshu.com/go?to=https%3A%2F%2Fsupport.apple.com%2Fzh-cn%2FHT208050)
- [https://ohmyz.sh/#install](https://links.jianshu.com/go?to=https%3A%2F%2Fohmyz.sh%2F%23install)