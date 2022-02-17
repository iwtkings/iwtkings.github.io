---
title: Vue3.2的setup语法糖和Hook函数 (强烈推荐)
date: 2022-02-17
categories:
 - web开发
tags:
 - vue
---

![Vue3.2的setup语法糖和Hook函数  (强烈推荐)](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/10efe52dc353423a8b04b5c4839f2a54~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?)

> 在2021 年 8 月 5 日，Vue发布了3.2版本的新写法，其中最主要的亮点就在于setup的语法糖，学过Vue3.0的小伙伴都清楚，当我们在使用Vue3的语法就构建组件的时候，总是需要把外面定义的方法变量必须要return出去，比较麻烦一些，所以Vue官方这次提供了setup语法糖，有了他，我们可以更加简洁舒适的去构建组件。

# setup（语法糖）

## **1、基本使用**

在vue3.2中我们不再需要进行return，当使用 `<script setup>` 的时候，任何在 `<script setup>` 声明的**顶层的绑定 (包括声明的变量，函数声明，以及 import 引入的内容)** 都可以在模板中直接使用，这是因为在`setup`函数中，所有的ES模板都被认为是暴露給上下文的值，并包含在`setup()`返回对象中。

要使用这个语法，需要将 `setup` 属性添加到 `<script>` 代码块上，示列：

```
<script setup>
import {ref} from 'vue'
let property = ref('志拾陆');
</script>
```

这里面的代码会被编译成组件 `setup()` 函数的内容，这也就意味着与普通的 `<script>` 只在组件被首次引入的时候仅执行一次不同，`<script setup>` 中的代码会在**每次组件实例被创建的时候执行**。这一点非常的重要，也就是写在 `<script setup>` 中的代码，例如初始化的赋值等在组件每次实例创建时都重新执行一次。

## **2、自动注册**

使用3.2的语法时，如果需要像之前一样去引入其他组件，就无需再通过`components`进行注册，我们可以直接引入使用。示列：

```
<template>
  <subassembly @getChili="getChili" :title="msg" />
</template>

<script setup>
import {ref} from 'vue'

//这里我们引入了子组件 subassembly
import subassembly from './subassembly.vue'
</script>
```

## **3、组件通信**

### defineProps ----> [用来接收父组件传来的 props] `代码示列`：

**父组件代码:**

```
<template>
  <div>我是父组件----1</div>
  <subassembly @getChili="getChili" :title="msg" />
</template>

<script setup>
import {ref} from 'vue'
import subassembly from './subassembly.vue'

//把值传递给子组件 ---> :title="msg"  <Home @getChili="getChili" :title="msg" />
const msg = ref('父的值')

</script>
```

**子组件代码：**

```
<template>
  <div>我是子组件----2</div>
  <div style="color: red">{{props.title}}</div>
</template>

<script setup>
import {defineProps} from 'vue'

//接收父组件 传过来的值！
const  props = defineProps({
  title: {
    type: String
  }
});

//打印一下 接收父组件的值
console.log(props.title) //父的值
</script>
```

### defineEmit ----> [子组件向父组件事件传递] `代码示列`：

**子组件代码:**

```
<template>
  <hr>
  <div>我是子组件----2</div>
  <button @click="toEmits">点击传到父组件</button>
</template>

<script setup>
import {defineEmits,ref} from 'vue'


//先定义一下子 在发送值
const  emits = defineEmits(['getChili']);

const  toEmits = () => {
  emits('getChili','子的值')
}

</script>
```

**父组件代码:**

```
<template>
  <div>我是父组件----1</div>
  <div>{{data}}</div>
  <subassembly @getChili="getChili" :title="msg" />
</template>

<script setup>
import {ref} from 'vue'
import subassembly from './subassembly.vue'

//空值接收 子组件的传值
let data = ref(null)
const getChili = (e) => {
  data.value = e
  console.log(e)  //子组件的值
}

</script>
```

在标准组件写法里，子组件的数据都是默认隐式暴露给父组件的，但在`script-setup`模式下，**所有数据只是默认return给template 使用，不会暴露到组件外，所以父组件是无法直接通过挂载ref 变量获取子组件的数据**。如果要调用子组件的数据，需要先在子组件显示的暴露出来，才能够正确的拿到，这个操作，就是由**defineExpose**来完成。

### defineExpose ----> [组件暴露出自己的属性] `代码示列`：

**子组件代码：**

```
<template>
  <div>我是子组件----2> {{ xiaoZhi.stator }}</div>
</template>

<script setup>
import {ref, defineExpose, reactive} from 'vue'

let xiaoZhi = reactive({
  stator: '小志',
  age: 27
})

let xiaoXiaoZhi = ref('小小志');
console.log(xiaoXiaoZhi)

defineExpose({
  xiaoZhi,
  xiaoXiaoZhi
})
</script>
```

**父组件代码:**

```
<template>
  <button @click="shiEmots">获取暴露</button>
  <subassembly ref="shield"/>
</template>
<script setup>
import subassembly from './subassembly.vue'
import {defineEmits,defineProps,ref} from 'vue'

const shield = ref()

const  shiEmots = () =>{
  //子组件接收暴露出来得值
  console.log('接收reactive暴漏出来的值',shield.value.xiaoZhi)
  console.log('接收ref暴漏出来的值',shield.value.xiaoXiaoZhi)
}
</script>
```

**结果：**

![微信图片_20211209223623.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/31e56c88feda4092aa3ebd114fc5188e~tplv-k3u1fbpfcp-watermark.awebp?)

# hook函数

`介绍`：

- Vue3 的 hook函数 相当于 vue2 的 mixin, 不同在与 hooks 是函数
- Vue3 的 hook函数 可以帮助我们提高代码的复用性, 让我们能在不同的组件中都利用 hooks 函数

示列 :

1、首先我们需要创建一个hooks的文件 `文件示列`：

![微信图片_20211209225929.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f1cfa67bd4b84f6e9a6c03782b0a2b84~tplv-k3u1fbpfcp-watermark.awebp?)

2、在hookds文件下，我们创建一个我们需要使用的.js文件 这里我们比如时`usePoint.js`

这里我们在usePoint里面写了一个获取鼠标点击位置的方法 `代码示列`：

```
import {reactive, onMounted, onBeforeUnmount} from 'vue'
export  default function () {
    //展示的数据  可以通过App.vue 界面去隐藏
    let point = reactive({
        x: 0,
        y: 0
    })

    //获取鼠标点击事件
    function savePonint(event) {
        point.x = event.pageX
        point.y = event.pageY
        console.log(event.pageX, event.pageY)
    }

    //现实之后调用 挂载完毕
    onMounted(() => {
        window.addEventListener('click', savePonint)
    })

    //在隐藏之前调用 卸载之前
    onBeforeUnmount(() => {
        window.removeEventListener('click', savePonint)
    })

    return point
}
```

我们在组件中引入此文件 `代码示列`：

```
<template>

  <h2>当前求和:{{ sum }}</h2>
  <button @click="sum++">点我加一</button>
  <hr>
  <h2>当前鼠标点击坐标为:x:{{ point.x }},y:{{ point.y }}</h2>
</template>

<script>
import {ref} from 'vue'
//复用的usePoint
import usePoint from "../hooks/usePoint";

export default {
  name: 'App',
  setup() {
    //数据
    let sum = ref(0)
    let point = usePoint()
    return {sum,point}
  },
}
</script>
```

**结果展示：**

![微信图片_20211209230630.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/97015642164546e9887256c916b38250~tplv-k3u1fbpfcp-watermark.awebp?)

总得来说，新引入的setup语法糖的 目的是简化使用`Composition API`时冗长的模板代码，也就是让代码更加简洁，阅读性也越高。而在组件中引入并使用自定义hook 自定义hook的作用类似于vue2中的mixin技术 自定义Hook的优势: 很清楚复用功能代码的来源, 更清楚易懂！

有不足的地方欢迎大家进行交流讨论，互相学习！