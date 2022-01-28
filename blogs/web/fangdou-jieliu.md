---
title: 防抖（debounce）和节流（throttle）
date: 2022-01-28
categories:
 - web开发
tags:
 - web
 - js
---


![防抖（debounce）和节流（throttle）](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4938515a17524a46bb56a112cf794ac3~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?)

防抖和节流是针对响应跟不上触发频率这类问题的两种解决方案。 在给 DOM 绑定事件时，有些事件我们是无法控制触发频率的。 如鼠标移动事件 onmousemove, 滚动滚动条事件 onscroll，窗口大小改变事件 onresize，瞬间的操作都会导致这些事件会被触发多次。 如果事件的回调函数较为复杂，就会导致响应跟不上触发，出现页面卡顿，\假死现象。 例如百度的输入框，在实时检查输入时，如果我们绑定 onkeyup 事件发请求去服务端检查，用户输入过程中，事件的触发频率也会很高，会导致大量的请求发出，响应速度会大大跟不上触发。

针对此类快速连续触发和不可控的高频触发问题，debounce 和 throttle 给出了两种解决策略；

## debounce

debounce（去抖动、防抖）。策略是当事件被触发时，设定一个周期延迟执行动作，若期间又被触发，则重新设定周期，直到周期结束时再执行动作。 这是 debounce 的基本思想，在后期又扩展了前缘 debounce，即执行动作在前，然后设定周期，周期内有事件被触发，不执行动作，且周期重新设定。

> 连续的高频操作只会触发一次事件，延迟是在高频事件解释后触发，前缘是在高频事件开始时触发。

延迟 debounce，示意图：

![延迟 debounce](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eecee070dc6148668a3c969454542f3f~tplv-k3u1fbpfcp-watermark.awebp?)

> 周期内每次事件触发都会更新周期，直到周期结束时才执行事件的逻辑

前缘 debounce， 示意图：

![前缘 debounce](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e1965ef3d34148d29dea633839269d45~tplv-k3u1fbpfcp-watermark.awebp?)

> 在周期开始时执行事件的逻辑，周期内每次触发事件都会更新周期

debounce 的特点是当事件快速连续不断触发时，动作只会执行一次。 延迟 debounce，是在周期结束时执行，前缘 debounce，是在周期开始时执行。但当触发有间断，且间断大于我们设定的时间间隔时，动作就会有多次执行。

**版本1:** 周期内有新事件触发，清除旧定时器，重置新定时器；这种方法，需要高频的创建定时器。

```js
// 暴力版： 定时器期间，有新操作时，清空旧定时器，重设新定时器
function debounce(fn, wait){
    let timer;
    return function(){
        // 如果 timer 存在则表示当前还在周期内，需要清空旧的定时器创建新的定时器
        if(timer){
            clearTimeout(timer);        }
        // 创建定时器，用于在周期结束后执行函数逻辑
        timer = setTimeout(()=>{
            fn.apply(this, arguments);
            clearTimeout(timer);
            timer = null;
        },wait);
    }
}
```

> 最简单最常见的实现

**版本2:** 周期内有新事件触发时，重置定时器开始时间戳，定时器执行时，判断开始时间戳，若开始时间戳被推后，重新设定延时定时器。

```js
// 优化版： 定时器执行时，判断 start time 是否向后推迟了，若是，设置延迟定时器
function debounce(fn, wait){
    let timer, startTimeStamp = 0;
    let context, args;

    let run = (timerInterval) => {
        timer = setTimeout(() => {
            let now = Date.now();
            let interval = now - startTimeStamp
            if(interval < timerInterval){ // 定时器开始时间已被重置，因此间隔小于 timerInterval
                startTimeStamp = now;
                run(wait - interval);  // 为剩余时间重置计时器
            }else{
                fn.apply(context, args);
                clearTimeout(timer);
                timer = null;
            }

        }, timerInterval);
    }

    return function(){
        context = this;
        args = arguments;
        let now = Date.now();
        startTimeStamp = now;

        if(!timer){
            run(wait);    // 一次新的周期开始
        }
    }
}
```

> 同理你也可以记录结束时间戳来实现

**版本3:** 在版本2基础上增加是否立即执行选项：

```js
function debounce(fn, wait, immediate=false){
    let timer, startTimeStamp=0;
    let context, args;

    let run = (timerInterval) => {
        timer= setTimeout(() => {
            let now = Date.now();
            let interval = now - startTimeStamp
            if(interval < timerInterval){ // 定时器开始时间已被重置，因此间隔小于 timerInterval
                startTimeStamp = now;
                run(wait - interval);  // 为剩余时间重置计时器
            }else{
                if(!immediate) {
                    fn.apply(context, args);
                }
                clearTimeout(timer);
                timer = null;
            }

        }, timerInterval);
    }

    return function(){
        context = this;
        args = arguments;
        let now = Date.now();
        startTimeStamp = now;

        if(!timer){
            if(immediate) {
                fn.apply(context, args);
            }
            run(wait);    // 一次新的周期开始
        }
    }
}
```

### throttle

throttle（节流），节流的策略是，固定周期内，只执行一次动作，若有新事件触发，不执行。周期结束后，又有事件触发，开始新的周期。 节流策略也分前缘和延迟两种。与 debounce 类似，延迟是指 周期结束后执行动作，前缘是指执行动作后再开始周期。

延迟 throttle 示意图：

![延迟 throttle](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b90f371919c4444f87d9851d556539a8~tplv-k3u1fbpfcp-watermark.awebp?)

前缘 throttle 示意图：

![前缘 throttle](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/36372274d80e4e7c8b0348a195538251~tplv-k3u1fbpfcp-watermark.awebp?)

throttle 的特点在连续高频触发事件时，动作会被定期执行，响应平滑。相比于 debounce ，throttle 并不会在每次事件触发时更新周期，新的周期在第一次触发时就已经确定。

**版本1：** 最简单的实现方式，在首次执行是设置定时器，在定时器执行之前如果再次被调用则更新参数即可。

```js
function throttle (fn, wait) {
    let timer;
    let context, args;

    return function () {
        context = this;
        args = arguments;
        // 如果不存在 timer 表示当前不在周期内
        if (!timer) {
            // 开始一个新周期
            timer = setTimeout(() => {
                fn.apply(context, args);
                // 周期结束
                clearTimeout(timer);
                timer = null;
            }, wait);
        }
    }
}
```

**版本2：** 增加前缘选项：（考虑情况较简单，复杂情况可参考 underscope 的_.throttle）

```js
function throttle (fn, wait, immediate = false) {
    let timer;
    let context, args;

    return function () {
        context = this;
        args = arguments;
        if (!timer) {
            if (immediate) {
                fn.apply(context, args);
            }
            // 开始一个新周期
            timer = setTimeout(() => {
                if (!immediate) {
                    fn.apply(context, args);
                }
                // 周期结束
                clearTimeout(timer);
                timer = null;
            }, wait);
        }
    }
}
```

## 例子：在 Vue 中更新 Echarts

我们知道 Echarts 是不会根据数据变化自动更新视图的，当我们在 Vue 中使用 Echarts 时，我们期望 Echarts 能做到识图根据数据的变化而变化，因为这样才显得更加的"Vue"。

所以我们可以监听相关数据的变化来重新调用 Echarts 的 setOptions 方法来更新图表。

但是在实际开发中我们可能会分多次修改 options ，这会导致 setOptions 被多次执行，由于 canvas 整图更新代价是比较大的，所以我们可以作用防抖来控制这个过程，在频繁的修改图表数据时，只有最后一个修改会更新到页面上。

```js
<template>
  <div id="main" ref="bar"></div>
</template>

<script>
import * as echarts from 'echarts';
function debounce(fn, wait, immediate=false){
  // ...
}
export default {
  name: 'Bar',
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  mounted () {
    this.init();
    this.renderCharts();
  },
  methods:{
    init(){
      this.isInit = true;
      this.charts = echarts.init(this.$refs.bar);
    },
    // 防抖渲染
    renderCharts:debounce(function (){
      if(this.isInit){
          this.charts.setOption(this.options);
      }
    }, 100)
  },
  watch:{
    // 监听数据变化，如果变化则更新图表
    options: {
      deep: true,
      handler: this.renderCharts
    }
  }
}
</script>
```

debounce 和 throttle 各有特点，在不同的场景要根据需求合理的选择策略。如果事件触发是高频但是有停顿时，可以选择 debounce； 在事件连续不断高频触发时，throttle，因为 debounce 可能会导致动作只被执行一次，界面出现跳跃。