(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{556:function(s,n,e){"use strict";e.r(n);var a=e(2),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[n("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/10efe52dc353423a8b04b5c4839f2a54~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?",alt:"Vue3.2的setup语法糖和Hook函数  (强烈推荐)"}})]),s._v(" "),n("blockquote",[n("p",[s._v("在2021 年 8 月 5 日，Vue发布了3.2版本的新写法，其中最主要的亮点就在于setup的语法糖，学过Vue3.0的小伙伴都清楚，当我们在使用Vue3的语法就构建组件的时候，总是需要把外面定义的方法变量必须要return出去，比较麻烦一些，所以Vue官方这次提供了setup语法糖，有了他，我们可以更加简洁舒适的去构建组件。")])]),s._v(" "),n("h2",{attrs:{id:"setup-语法糖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setup-语法糖"}},[s._v("#")]),s._v(" setup（语法糖）")]),s._v(" "),n("h3",{attrs:{id:"_1、基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、基本使用"}},[s._v("#")]),s._v(" "),n("strong",[s._v("1、基本使用")])]),s._v(" "),n("p",[s._v("在vue3.2中我们不再需要进行return，当使用 "),n("code",[s._v("<script setup>")]),s._v(" 的时候，任何在 "),n("code",[s._v("<script setup>")]),s._v(" 声明的"),n("strong",[s._v("顶层的绑定 (包括声明的变量，函数声明，以及 import 引入的内容)")]),s._v(" 都可以在模板中直接使用，这是因为在"),n("code",[s._v("setup")]),s._v("函数中，所有的ES模板都被认为是暴露給上下文的值，并包含在"),n("code",[s._v("setup()")]),s._v("返回对象中。")]),s._v(" "),n("p",[s._v("要使用这个语法，需要将 "),n("code",[s._v("setup")]),s._v(" 属性添加到 "),n("code",[s._v("<script>")]),s._v(" 代码块上，示列：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<script setup>\nimport {ref} from 'vue'\nlet property = ref('志拾陆');\n<\/script>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("这里面的代码会被编译成组件 "),n("code",[s._v("setup()")]),s._v(" 函数的内容，这也就意味着与普通的 "),n("code",[s._v("<script>")]),s._v(" 只在组件被首次引入的时候仅执行一次不同，"),n("code",[s._v("<script setup>")]),s._v(" 中的代码会在"),n("strong",[s._v("每次组件实例被创建的时候执行")]),s._v("。这一点非常的重要，也就是写在 "),n("code",[s._v("<script setup>")]),s._v(" 中的代码，例如初始化的赋值等在组件每次实例创建时都重新执行一次。")]),s._v(" "),n("h3",{attrs:{id:"_2、自动注册"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、自动注册"}},[s._v("#")]),s._v(" "),n("strong",[s._v("2、自动注册")])]),s._v(" "),n("p",[s._v("使用3.2的语法时，如果需要像之前一样去引入其他组件，就无需再通过"),n("code",[s._v("components")]),s._v("进行注册，我们可以直接引入使用。示列：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<template>\n  <subassembly @getChili=\"getChili\" :title=\"msg\" />\n</template>\n\n<script setup>\nimport {ref} from 'vue'\n\n//这里我们引入了子组件 subassembly\nimport subassembly from './subassembly.vue'\n<\/script>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"_3、组件通信"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、组件通信"}},[s._v("#")]),s._v(" "),n("strong",[s._v("3、组件通信")])]),s._v(" "),n("h4",{attrs:{id:"defineprops-用来接收父组件传来的-props-代码示列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#defineprops-用来接收父组件传来的-props-代码示列"}},[s._v("#")]),s._v(" defineProps ----\x3e [用来接收父组件传来的 props] "),n("code",[s._v("代码示列")]),s._v("：")]),s._v(" "),n("p",[n("strong",[s._v("父组件代码:")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<template>\n  <div>我是父组件----1</div>\n  <subassembly @getChili="getChili" :title="msg" />\n</template>\n\n<script setup>\nimport {ref} from \'vue\'\nimport subassembly from \'./subassembly.vue\'\n\n//把值传递给子组件 ---\x3e :title="msg"  <Home @getChili="getChili" :title="msg" />\nconst msg = ref(\'父的值\')\n\n<\/script>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[n("strong",[s._v("子组件代码：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<template>\n  <div>我是子组件----2</div>\n  <div style=\"color: red\">{{props.title}}</div>\n</template>\n\n<script setup>\nimport {defineProps} from 'vue'\n\n//接收父组件 传过来的值！\nconst  props = defineProps({\n  title: {\n    type: String\n  }\n});\n\n//打印一下 接收父组件的值\nconsole.log(props.title) //父的值\n<\/script>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h4",{attrs:{id:"defineemit-子组件向父组件事件传递-代码示列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#defineemit-子组件向父组件事件传递-代码示列"}},[s._v("#")]),s._v(" defineEmit ----\x3e [子组件向父组件事件传递] "),n("code",[s._v("代码示列")]),s._v("：")]),s._v(" "),n("p",[n("strong",[s._v("子组件代码:")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<template>\n  <hr>\n  <div>我是子组件----2</div>\n  <button @click=\"toEmits\">点击传到父组件</button>\n</template>\n\n<script setup>\nimport {defineEmits,ref} from 'vue'\n\n\n//先定义一下子 在发送值\nconst  emits = defineEmits(['getChili']);\n\nconst  toEmits = () => {\n  emits('getChili','子的值')\n}\n\n<\/script>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[n("strong",[s._v("父组件代码:")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<template>\n  <div>我是父组件----1</div>\n  <div>{{data}}</div>\n  <subassembly @getChili=\"getChili\" :title=\"msg\" />\n</template>\n\n<script setup>\nimport {ref} from 'vue'\nimport subassembly from './subassembly.vue'\n\n//空值接收 子组件的传值\nlet data = ref(null)\nconst getChili = (e) => {\n  data.value = e\n  console.log(e)  //子组件的值\n}\n\n<\/script>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("在标准组件写法里，子组件的数据都是默认隐式暴露给父组件的，但在"),n("code",[s._v("script-setup")]),s._v("模式下，"),n("strong",[s._v("所有数据只是默认return给template 使用，不会暴露到组件外，所以父组件是无法直接通过挂载ref 变量获取子组件的数据")]),s._v("。如果要调用子组件的数据，需要先在子组件显示的暴露出来，才能够正确的拿到，这个操作，就是由"),n("strong",[s._v("defineExpose")]),s._v("来完成。")]),s._v(" "),n("h4",{attrs:{id:"defineexpose-组件暴露出自己的属性-代码示列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#defineexpose-组件暴露出自己的属性-代码示列"}},[s._v("#")]),s._v(" defineExpose ----\x3e [组件暴露出自己的属性] "),n("code",[s._v("代码示列")]),s._v("：")]),s._v(" "),n("p",[n("strong",[s._v("子组件代码：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<template>\n  <div>我是子组件----2> {{ xiaoZhi.stator }}</div>\n</template>\n\n<script setup>\nimport {ref, defineExpose, reactive} from 'vue'\n\nlet xiaoZhi = reactive({\n  stator: '小志',\n  age: 27\n})\n\nlet xiaoXiaoZhi = ref('小小志');\nconsole.log(xiaoXiaoZhi)\n\ndefineExpose({\n  xiaoZhi,\n  xiaoXiaoZhi\n})\n<\/script>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[n("strong",[s._v("父组件代码:")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<template>\n  <button @click=\"shiEmots\">获取暴露</button>\n  <subassembly ref=\"shield\"/>\n</template>\n<script setup>\nimport subassembly from './subassembly.vue'\nimport {defineEmits,defineProps,ref} from 'vue'\n\nconst shield = ref()\n\nconst  shiEmots = () =>{\n  //子组件接收暴露出来得值\n  console.log('接收reactive暴漏出来的值',shield.value.xiaoZhi)\n  console.log('接收ref暴漏出来的值',shield.value.xiaoXiaoZhi)\n}\n<\/script>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[n("strong",[s._v("结果：")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/31e56c88feda4092aa3ebd114fc5188e~tplv-k3u1fbpfcp-watermark.awebp?",alt:"微信图片_20211209223623.png"}})]),s._v(" "),n("h2",{attrs:{id:"hook函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hook函数"}},[s._v("#")]),s._v(" hook函数")]),s._v(" "),n("p",[n("code",[s._v("介绍")]),s._v("：")]),s._v(" "),n("ul",[n("li",[s._v("Vue3 的 hook函数 相当于 vue2 的 mixin, 不同在与 hooks 是函数")]),s._v(" "),n("li",[s._v("Vue3 的 hook函数 可以帮助我们提高代码的复用性, 让我们能在不同的组件中都利用 hooks 函数")])]),s._v(" "),n("p",[s._v("示列 :")]),s._v(" "),n("p",[s._v("1、首先我们需要创建一个hooks的文件 "),n("code",[s._v("文件示列")]),s._v("：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f1cfa67bd4b84f6e9a6c03782b0a2b84~tplv-k3u1fbpfcp-watermark.awebp?",alt:"微信图片_20211209225929.png"}})]),s._v(" "),n("p",[s._v("2、在hookds文件下，我们创建一个我们需要使用的.js文件 这里我们比如时"),n("code",[s._v("usePoint.js")])]),s._v(" "),n("p",[s._v("这里我们在usePoint里面写了一个获取鼠标点击位置的方法 "),n("code",[s._v("代码示列")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import {reactive, onMounted, onBeforeUnmount} from 'vue'\nexport  default function () {\n    //展示的数据  可以通过App.vue 界面去隐藏\n    let point = reactive({\n        x: 0,\n        y: 0\n    })\n\n    //获取鼠标点击事件\n    function savePonint(event) {\n        point.x = event.pageX\n        point.y = event.pageY\n        console.log(event.pageX, event.pageY)\n    }\n\n    //现实之后调用 挂载完毕\n    onMounted(() => {\n        window.addEventListener('click', savePonint)\n    })\n\n    //在隐藏之前调用 卸载之前\n    onBeforeUnmount(() => {\n        window.removeEventListener('click', savePonint)\n    })\n\n    return point\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[s._v("我们在组件中引入此文件 "),n("code",[s._v("代码示列")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<template>\n\n  <h2>当前求和:{{ sum }}</h2>\n  <button @click=\"sum++\">点我加一</button>\n  <hr>\n  <h2>当前鼠标点击坐标为:x:{{ point.x }},y:{{ point.y }}</h2>\n</template>\n\n<script>\nimport {ref} from 'vue'\n//复用的usePoint\nimport usePoint from \"../hooks/usePoint\";\n\nexport default {\n  name: 'App',\n  setup() {\n    //数据\n    let sum = ref(0)\n    let point = usePoint()\n    return {sum,point}\n  },\n}\n<\/script>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[n("strong",[s._v("结果展示：")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/97015642164546e9887256c916b38250~tplv-k3u1fbpfcp-watermark.awebp?",alt:"微信图片_20211209230630.png"}})]),s._v(" "),n("p",[s._v("总得来说，新引入的setup语法糖的 目的是简化使用"),n("code",[s._v("Composition API")]),s._v("时冗长的模板代码，也就是让代码更加简洁，阅读性也越高。而在组件中引入并使用自定义hook 自定义hook的作用类似于vue2中的mixin技术 自定义Hook的优势: 很清楚复用功能代码的来源, 更清楚易懂！")]),s._v(" "),n("p",[s._v("有不足的地方欢迎大家进行交流讨论，互相学习！")])])}),[],!1,null,null,null);n.default=t.exports}}]);