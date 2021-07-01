---
title: vue中动态化的按需使用keep-alive
date: 2021-03-07
categories:
 - web开发
tags:
 - web
 - vue
---

## 1、啥是 keep-alive？

- 就是**缓存**，我们还是来看看具体的使用场景。
- 首先简单一点，第一种比较普遍的场景，当我们从`首页`–>`列表页`–>`商详页`–>`再返回`，这时候列表页应该是需要`keep-alive`的。
- 然后第二种，当我们从`首页`–>`列表页`–>`商详页`–>`返回到列表页(需要缓存)`–>`返回到首页(需要缓存)`–>`再次进入列表页(不需要缓存)`，这时候就是按需来控制页面的`keep-alive`了。
  ![按需缓存.gif](http://img3.sycdn.imooc.com/5e87eb5000016a6e03400598.jpg)
- 下面我们来说说在`vue`中如何具体实现，我会说两种方式。

## 2、meta 路由元信息

（1）介绍

- 第一种就是使用 vue-router 提供的 meta 对象，给需要缓存如首页、列表页、商详等添加一个字段，用来判断用户是前进还是后退以及是否需要 keep-alive

（2）实现

- 首先我们需要在

  router.js

  的`meta`对象里定义两个值：

  1. `keepAlive`：这个路由是否需要缓存
  2. `deepth`：深度，也就是页面之间的前进后退的层次关系

```js
  // 首页
  {
    path: '*',
    name: 'Home',
    // 路由懒加载：https://router.vuejs.org/zh/guide/advanced/lazy-loading.html
    // webpackPreload：https://www.jianshu.com/p/bbdcfeee7fbc
    component: () => import(/* webpackPreload: true */ '@/views/home'),
    meta: {
      keepAlive: true,
      deepth: 1
    }
  },
  // 商品列表
  {
    path: '/product',
    name: 'Product',
    component: () => import('@/views/product'),
    meta: {
      keepAlive: true,
      deepth: 2
    }
  },
  // 商品详情
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/detail'),
    meta: {
      keepAlive: true,
      deepth: 3
    }
  },
```

- 然后我们在[app.vue](https://github.com/Ewall1106/mall/blob/master/src/App.vue)中根据 meta 对象定义一下：

```html
<template>
  <div id="app">
    <keep-alive :include="include">
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>
```

- 最后我们需要实时的监听路由：

```js
export default {
  data() {
    return {
      include: []
    };
  },
  watch: {
    $route(to, from) {
      // 如果要to(进入)的页面是需要keepAlive缓存的，把name push进include数组中
      if (to.meta.keepAlive) {
        !this.include.includes(to.name) && this.include.push(to.name);
      }
      // 如果 要 form(离开) 的页面是 keepAlive缓存的，
      // 再根据 deepth 来判断是前进还是后退
      // 如果是后退：
      if (from.meta.keepAlive && to.meta.deepth < from.meta.deepth) {
        const index = this.include.indexOf(from.name);
        index !== -1 && this.include.splice(index, 1);
      }
    }
  }
};
```

- 上面这个就是大佬所实现的主要步骤，一共其实就两步：`设置meta`、`监听路由并判断`。这里有一定要注意的是：**你的路由中定义的 name 和页面中定义的 name 一定要全等，并区分大小写！！！**

```js
 // router.js
{
    path: '*',
    name: 'Home', // name要大小写要一致
    component: () => import(/ '@/views/home'),
    meta: {
      keepAlive: true,
      deepth: 1
    }
}

// home.vue
export default {
    name: 'Home', // name要大小写要一致
}
```