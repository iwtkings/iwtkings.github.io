---
title: Electron项目搭建流程
date: 2022-02-21
categories:
 - web开发
tags:
 - web
 - 前端项目搭建
 - 项目搭建
---

## 技术选型

- 构建工具：vite
- 开发框架：electron
- UI 库：ant-design-vue
- 代码格式：prettier + eslint
- 代码规范：eslint + standard
- 前端框架：vue3 + vue-router + vuex
- GIT 规范：husky + lint-staged + commitlint
- 打包更新：electron-builder + electron-updater
- 前端工具：esbuild + nodemon + concurrently + wait-on

## 项目结构

```
├── .husky // Git 钩子配置
├── .vscode // VSCode 配置
├── build // 输出安装包目录
├── dist // 输出静态资源目录
├── src // 代码目录
│   ├── app // 主进程代码
│   ├── ...
├── index.js // ESBuild 配置
├── .npmrc // npm 配置
├── .prettierrc // Prettier 配置
├── .commitlintrc // commitlint 配置
├── .eslintignore // ESLint 忽略配置
├── tsconfig.json // typescript 配置
├── .lintstagedrc // lintstaged 配置
├── .eslintrc.json // ESLint 配置
├── vite.config.ts // Vite 配置
├── ...
```

## 搭建流程

#### 环境准备

- Nodejs 12.0.1+
- Git
- VSCode(Volar、Prettier ESLint、ESLint)
- yarn v1.22.4

#### 脚手架搭建

打开终端执行：

```sh
yarn create vite
```

输入：

```sh
workshop-management-system
```

选择：

```sh
vue
```

选择：

```sh
vue-ts
```

执行：

```sh
cd workshop-management-system
```

执行：

```sh
yarn
```

#### 编辑器配置

使用 VSCode 打开 workshop-management-system。

在 .vscode 目录新建 settings.json 并写入：

```json
{
  "editor.tabSize": 4, // 代码缩进 4 个空格
  "editor.formatOnSave": true, // 保存格式化
  "editor.defaultFormatter": "rvest.vs-code-prettier-eslint", // 使用 prettier-eslint 做代码格式化
  "[vue]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[javascript]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[typescript]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  }
}
```

#### Vite 配置

打开 vite.config.ts 添加配置项：

```js
  base: './',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    strictPort: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false
      }
    }
  },
  build: {
    chunkSizeWarningLimit: 2048
  }
```

#### Typescript 配置

打开 tsconfig.json，在 compilerOptions 中添加配置项：

```js
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "skipLibCheck": true,
    "isolatedModules": true,
```

#### ESLint 初始化

打开终端执行：

```sh
npm init @eslint/config
```

选择：

```sh
To check syntax, find problems, and enforce code style
```

选择：

```sh
JavaScript modules (import/export)
```

选择：

```sh
Vue.js
```

选择：

```sh
Yes
```

选择：

```sh
Browser
```

选择：

```sh
Use a popular style guide
```

选择：

```sh
Standard: https://github.com/standard/standard
```

选择：

```sh
JSON
```

选择：

```sh
Yes
```

打开 .eslintrc.json，修改：

```sh
"plugin:vue/essential",
```

为

```sh
"plugin:vue/vue3-essential",
```

添加 env：

```sh
"vue/setup-compiler-macros": true
```

添加 rules：

```sh
        "indent": ["error", 4],
        "max-len": ["error", { "code": 180 }], // 单行代码最大长度
        "vue/multi-word-component-names": "off" // 组件名称不必是两个单词
```

#### Prettier 初始化

打开终端执行：

```sh
yarn add prettier -D
```

根目录创建 .prettierrc 文件，并写入：

```json
{
    "tabWidth": 4,
    "printWidth": 180
}
```

#### Git 钩子初始化

打开终端执行：

```
git init
```

执行：

```sh
yarn add husky lint-staged @commitlint/config-conventional @commitlint/cli -D
```

执行：

```sh
npx husky install
```

执行：

```sh
npm set-script prepare "husky install"
```

执行：

```sh
npx husky add .husky/pre-commit "npx lint-staged"
```

项目根目录创建 .lintstagedrc，写入：

```json
{
  "src/**/*.{js,ts,vue,scss,json,md}": ["npx prettier --write"],
  "src/**/*.{js,ts,vue}": ["npx eslint --fix"]
}
```

在终端执行：

```sh
yarn husky add .husky/commit-msg 'npx commitlint --edit $1'
```

项目根目录创建 .commitlintrc，写入：

```json
{
  "extends": ["@commitlint/config-conventional"]
}
```

#### Electron 开发集成

打开终端执行：

```sh
echo electron_mirror=http://cdn.npm.taobao.org/dist/electron/ >> .npmrc
```

执行：

```sh
yarn add electron -D
```

在 src 目录新建 app 目录，在 app 目录新建 index.ts，写入：

```ts
import { app, BrowserWindow } from "electron";

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = undefined

app.whenReady().then(() => {
  const window = new BrowserWindow();

  // 根据 app.isPackaged 判断应用是否打包
  app.isPackaged
    ? window.loadFile("dist/index.html")
    : window.loadURL("http://localhost:3000");
});

// 全部渲染进程关闭退出应用
app.on("window-all-closed", () => {
  app.quit();
});
```

打开终端执行：

```sh
yarn add esbuild nodemon esbuild-node-externals concurrently wait-on -D
```

项目根目录新建 index.js 写入：

```js
const esbuild = require("esbuild");
const { nodeExternalsPlugin } = require("esbuild-node-externals");

esbuild.build({
  minify: true, // 压缩代码
  bundle: true, // 打包模块
  format: "cjs", // 输出为 common JS
  platform: "node", // 平台 node
  outdir: "./dist", // 输出到 build 文件夹
  plugins: [nodeExternalsPlugin()], // 不把主进程代码中引用的 node_modules 包代码打进主进程代码里
  watch: process.env.npm_lifecycle_event === "dev", // 监听变动
  entryPoints: ["src/app/index.ts"], // 入口文件
});
```

设置 package.json script dev 为：

```sh
concurrently \"vite --host\" \"node index.js\" \"wait-on tcp:3000 && nodemon --watch dist/index.js --exec electron dist/index.js\"
```

#### Electron 打包集成

打开终端执行：

```sh
yarn add electron-builder electron-updater -D
```

在 src/app 目录新建 build.ts，写入：

```ts
import fs from "fs";
import path from "path";
import { exec } from "child_process";
import { build, Platform, Configuration } from "electron-builder";

// mac 系统删除 build 目录
if (process.platform === "darwin") {
  exec(`rm -r ${path.resolve(__dirname, "../build")}`);
}

// window 系统删除 build 目录
if (process.platform === "win32") {
  exec(`rd/s/q ${path.resolve(__dirname, "../build")}`);
}

const Package = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../package.json")).toString()
);

const config: Configuration = {
  files: ["dist/**/*"],
  productName: "车间管理系统",
  // eslint-disable-next-line no-template-curly-in-string
  artifactName: "${productName}_${version}.${ext}",
  buildVersion: Package.version,
  directories: {
    output: "build",
  },
  win: {
    icon: "src/assets/logo.png",
  },
  mac: {
    icon: "src/assets/logo.png",
  },
  publish: {
    provider: "generic",
    url: "https://imuyuan.com",
  },
};

Promise.all([
  process.platform === "darwin"
    ? build({
        config,
        targets: Platform.MAC.createTarget(),
      })
    : Promise.resolve(),
  build({
    config,
    targets: Platform.WINDOWS.createTarget(),
  }),
]).then(() => {
  console.log("\x1b[32m", "打包完成🎉🎉🎉你要的都在 build 目录里🤪🤪🤪");
});
```

将 src/assets/logo.png 尺寸修改为 512 \* 512。

替换根目录 index.js 中的

```sh
entryPoints: ['src/app/index.ts'] // 入口文件
```

为：

```sh
entryPoints: ['src/app/index.ts', 'src/app/build.ts'] // 入口文件
```

替换 package.json 中的：

```sh
  "version": "0.0.0",
```

为：

```sh
  "version": "1.0.0",
  "license": "MIT",
  "author": "muyuan",
  "main": "dist/index.js",
  "description": "车间管理系统",
```

设置 package.json script build 为：

```sh
vue-tsc --noEmit && vite build && node index.js && node dist/build.js
```

在 .gitignore 追加 build。

将 package.json dependencies 中的 vue 和 dependencies 中的 electron-updater 调换位置。
