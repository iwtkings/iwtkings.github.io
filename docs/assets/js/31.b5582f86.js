(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{595:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/448cac1d8498442290d7cf0fa5d7adec~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?",alt:"移动端适配解决方案"}})]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("临近春节，产品突然给我搞了个H5专题活动页，这需求也是弄得我猝不及防。没办法，时间不多，就简简单单的搭了个脚手架项目。在开发项目的过程中我逐渐意识到了事情似乎没有那么简单。之后快要测试的时候我幡然醒悟，H5项目需要做适配。于是我想起了许多年前的事情....")]),s._v(" "),a("p",[s._v("本篇文章带大家用"),a("code",[s._v("vue-cli")]),s._v("搭建一个移动端适配的H5项目，希望能够帮到大家。")]),s._v(" "),a("p",[a("strong",[s._v("注意 本文只是简单的搭建了一个移动端适配项目，在其项目中 其实有非常多需要优化的地方。这里我只关注了适配相关的配置")])]),s._v(" "),a("h2",{attrs:{id:"项目搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目搭建"}},[s._v("#")]),s._v(" 项目搭建")]),s._v(" "),a("p",[s._v("脚手架项目的搭建，这里我就不在赘述了。如果你还不会搭建脚手架项目可以参考我之前发布的"),a("a",{attrs:{href:"https://juejin.cn/post/7054789323639980069",target:"_blank",rel:"noopener noreferrer"}},[s._v("文章"),a("OutboundLink")],1),s._v(",里面还涉及到webpack的一些配置。")]),s._v(" "),a("p",[s._v("项目创建完成后，考虑到h5项目可能会使用到弹框、toast等，因此我们可以安装移动端相关的UI组件库， 这里我选择的是"),a("code",[s._v("vant")])]),s._v(" "),a("div",{staticClass:"language-javascrpit line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  // 安装git\n  npm i vant --save\n    \n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("除了安装UI组件库,我们还需要安装一些辅助工具 如"),a("code",[s._v("控制台(vconsole)")]),s._v("、"),a("code",[s._v("点击延迟解决方案(fastclick)")]),s._v("、"),a("code",[s._v("机型识别(ua-device)")]),s._v("等。当然你也可以使用自己擅长的其他库")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("npm i vconsole fastclick ua"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("device "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"手淘适配解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手淘适配解决方案"}},[s._v("#")]),s._v(" 手淘适配解决方案")]),s._v(" "),a("p",[s._v("阿里巴巴手淘团队出品的"),a("code",[s._v("amfe-flexible")]),s._v("是一个用于解决移动端不同机型适配的包。在其源码中，通过不同屏幕的像素比来设置scale值，保证当前窗口的device-width始终等于物理设备的宽度。从而达到不同机型的适配效果。")]),s._v(" "),a("p",[s._v("当然,要达到完全适配,我们不仅仅只用到"),a("code",[s._v("amfe-flexible")]),s._v("还需要用到"),a("code",[s._v("postcss-pxtorem")]),s._v("。 "),a("code",[s._v("postcss-pxtorem")]),s._v("是将我们在css中写的"),a("code",[s._v("px")]),s._v("单位转换为"),a("code",[s._v("rem")]),s._v("单位。与其相似的包还有"),a("code",[s._v("postcss-pxto2rem")]),s._v("该包则是将px转换成了2倍的rem单位。")]),s._v(" "),a("p",[s._v("下面我们进行依赖的安装")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("npm i amfe"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("flexible postcss"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("pxtorem "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev\n\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("安装完成后 我们需要进行"),a("code",[s._v("postcss")]),s._v("插件相关的配置 在根目录新建一个名为"),a("code",[s._v("postcss.config.js")]),s._v("的文件,如果项目中已包含该文件则无需新建。 在文件中写入如下代码:")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postcss-pxtorem'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      rootValue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("37.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      propList"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'!border'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("上面代码是在postcss中配置一个有关"),a("code",[s._v("postcss-pxtorem")]),s._v("的插件,其中rootValue的值表示要转换的倍数。当H5设计稿的width为375时，对应的 rem就等于 "),a("code",[s._v("375/37.5 = 10rem")]),s._v("当项目加载时,postcss会将插件"),a("code",[s._v("postcss-pxtorem")]),s._v("进行加载。"),a("code",[s._v("postcss-px")]),s._v("则负责将style中所有用"),a("code",[s._v("px")]),s._v("标记的样式转换成"),a("code",[s._v("rem")]),s._v("类型。 "),a("code",[s._v("propList")]),s._v("这个配置则表示要将那些css样式进行匹配转换。其中"),a("code",[s._v("*")]),s._v("表示匹配所有的css "),a("code",[s._v("!")]),s._v("表示不需要匹配的。")]),s._v(" "),a("p",[s._v("下面是"),a("code",[s._v("postcss-pxtorem")]),s._v("其他的一些配置项")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//rootValue(Number | Function) 表示根元素字体大小或根据参数返回根元素字体大小")]),s._v("\n   rootValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//类型为数字 允许 REM 单位增长到的十进制数字。")]),s._v("\n   unitPrecision "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//类型为数组 可以从 px 更改为 rem 的属性。")]),s._v("\n   propList "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'font'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'font-size'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'line-height'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  \n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'letter-spacing'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//类型为数组 要忽略并保留为 px 的选择器 可以为正则表达式")]),s._v("\n   selectorBlackList "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//类型为布尔值 替换包含 rems 的规则，而不是添加回退。")]),s._v("\n   replace "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//类型为布尔值 允许在媒体查询中转换 px。")]),s._v("\n   mediaQuery "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//类型为数字 设置要替换的最小像素值。")]),s._v("\n   minPixelValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//类型为字符串或正则表达式或函数 要忽略并保留为 px 的文件路径。")]),s._v("\n  exclude："),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" node_modules "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" i \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[a("strong",[s._v("值得注意的是:"),a("code",[s._v("postcss-pxtorem")]),s._v(" 可能会将UI组件库也进行转换，若出现该问题，我们应该忽略掉vant相关的css")])]),s._v(" "),a("h2",{attrs:{id:"在main-js引入相关的包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在main-js引入相关的包"}},[s._v("#")]),s._v(" 在main.js引入相关的包")]),s._v(" "),a("p",[s._v("之前我们安装了vant组件库和一些辅助工具包 我们应该在main.js中引入")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'amfe-flexible'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//按需引入vant的一些组建")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("Toast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("Dialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("Overlay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vant'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" FastClick "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fastClick'")]),s._v("\nFastClick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("attach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Vconsole form "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vconsole'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'development'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" vConsole "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vconsole")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  defaultPlugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'system'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'network'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'element'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  maxLogNumber"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1024'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onReady")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'i am fine'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Toast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Dialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Overlay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("至此，我们的移动端适配就做好了，只需要按照设计稿的比例进行开发就可以了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);