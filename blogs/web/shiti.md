---
title: 手撕钉钉前端考试卷，offer，拿来吧你~
date: 2021-07-23
categories:
 - web开发
tags:
 - web
 - js
 - vue
---

## 题目

##### 1.列举你所了解的计算机存储设备类型？

答：

- 随机存储器 RAM

SRAM、DRAM（SDRAM、RDRAM、CDRAM 等）

- 只读存储器 ROM

MROM、PROM、EPROM、EEPROM

##### 2.一般代码存储在计算机的哪个设备中？代码在 CPU 中是如何运行的？

答： 1)易失性执行之前，我们的代码`主要`存储在内存中。 ②CPU读取内存中的数据并放在寄存器内，将寄存器中的数据写入内存并进行有序的四则运算、相关指令，在此过程中，寄存器主要用于存放计算数据，运算器负责操作寄存器中的数据。

##### 3.什么是指令和指令集？

答： 指令一般是指机器指令，是计算机可完成一个独立计算逻辑所要执行的的命令；一台常规的计算机的所有指令的集合，就是该计算机的指令集。

##### 4.JavaScript 是如何运行的？解释型语言和编译型语言的差异是什么？

答： ①JS代码->解析成 AST (期间伴随词法分析、语法分析)->生成字节码（V8）->生成机器码（编译器）

②很多资料会说，JavaScript、Python、Ruby都是"解释型语言"，是通过解释器来实现的。这么说其实很容易引起误解：语言一般只会定义其抽象语义，而不会强制性要求采用某种实现方式。

例如说C一般被认为是“编译型语言”，但C的解释器也是存在的，例如Ch。同样，C++也有解释器版本的实现，例如Cint。

一般被称为“解释型语言”的是主流实现为解释器的语言，但并不是说它就无法编译。例如说经常被认为是“解释型语言”的Scheme就有好几种编译器实现，其中率先支持R6RS规范的大部分内容的是Ikarus，支持在x86上编译Scheme；它最终不是生成某种虚拟机的字节码，而是直接生成x86机器码。

解释器就是个黑箱，输入是源码，输出就是输入程序的执行结果，对用户来说中间没有独立的“编译”步骤。这非常抽象，内部是怎么实现的都没关系，只要能实现语义就行。你可以写一个C语言的解释器，里面只是先用普通的C编译器把源码编译为in-memory image，然后直接调用那个image去得到运行结果；用户拿过去，发现直接输入源码可以得到源程序对应的运行结果就满足需求了，无需在意解释器这个“黑箱子”里到底是什么。

实际上很多解释器内部是以“编译器+虚拟机”的方式来实现的，先通过编译器将源码转换为AST或者字节码，然后由虚拟机去完成实际的执行。所谓“解释型语言”并不是不用编译，而只是不需要用户显式去使用编译器得到可执行代码而已。

这道题扯多了，肯定有掘金大佬来杠我。我的观点是如果一种语言的主流实现是解释器，其内部是编译器+虚拟机，而虚拟机又是采用解释方式实现的，或者内部实现是编译器+树遍历解释器，那它就是名副其实的“解释型语言”。如果内部用的虚拟机是用编译方式实现的，其实跟普遍印象中的"解释器"还是挺不同的。

可以举这样一个例子：ActionScript 3，一般都被认为是“解释型语言”对吧？但这种观点到底是把FlashPlayer整体看成一个解释器，因而AS3是"解释型语言"”"呢？还是认为FlashPlayer中的虚拟机采用解释执行方案，因而AS3是解释型语言呢？

##### 5.简单描述一下 Babel 的编译过程？

答： 首先，Babel的作用是 从一种源码到另一种源码，充当转换编译器的作用，可以简述为 `解析`（解析JS代码）->`转换`（解析和修改AST）->`重建`（将修改后的AST转换成另一种JS代码）

##### 6.JavaScript 中的数组和函数在内存中是如何存储的？

答： ①数组，JS里的数组主要就是 以连续内存形式存储的`FixedArray`、以哈希表形式存储的`HashTable`。

②函数，函数属于引用数据类型，存储在堆中，在栈内存中只是存了一个地址来表示对堆内存中的引用。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

##### 7.浏览器和 Node.js 中的事件循环机制有什么区别？

答： ①浏览器中的事件循环： macrotasks(宏任务):

- `script(整体代码)`
- `setTimeout`
- `setInterval`
- `setImmediate`
- `I/O`
- `UI rendering`
- `event listner`

microtasks(微任务):

- `process.nextTick`
- `Promises`
- `Object.observe`
- `MutationObserver`

在浏览器里，每当一个被监听的事件发生时，事件监听器绑定的相关任务就会被添加进回调队列。通过事件产生的任务是异步任务，常见的事件任务包括：

- 用户交互事件产生的事件任务，比如输入操作；
- 计时器产生的事件任务，比如setTimeout；
- 异步请求产生的事件任务，比如 HTTP 请求。

主线程运行的时候，会产生堆（heap）和栈（stack），其中堆为内存、栈为函数调用栈。我们能看到，Event Loop 负责执行代码、收集和处理事件以及执行队列中的子任务，具体包括以下过程。

- JavaScript 有一个主线程和调用栈，所有的任务最终都会被放到调用栈等待主线程执行。
- 同步任务会被放在调用栈中，按照顺序等待主线程依次执行。
- 主线程之外存在一个回调队列，回调队列中的异步任务最终会在主线程中以调用栈的方式运行。
- 同步任务都在主线程上执行，栈中代码在执行的时候会调用浏览器的 API，此时会产生一些异步任务。
- 异步任务会在有了结果（比如被监听的事件发生时）后，将异步任务以及关联的回调函数放入回调队列中。
- 调用栈中任务执行完毕后，此时主线程处于空闲状态，会从回调队列中获取任务进行处理。
- 上述过程会不断重复，这就是 JavaScript 的运行机制，称为事件循环机制（Event Loop）。

②NodeJs中的事件循环：

- timersj阶段：这个阶段执行timer（setTimeout、setInterval）的回调
- I/O callbacks：执行一些系统调用错误，比如网络通信的错误回调
- idle,prepare：仅node内部使用
- poll：获取新的I/O事件, 适当的条件下node将阻塞在这里
- check：执行 setImmediate() 的回调
- close callbacks：执行 socket 的 close 事件回调

③区别： 浏览器环境下，microtask的任务队列是每个macrotask执行完之后执行。而在Node.js中，microtask会在事件循环的各个阶段之间执行，也就是一个阶段执行完毕，就会去执行microtask队列的任务。如果是node11版本一旦执行一个阶段里的一个宏任务(setTimeout,setInterval和setImmediate)就立刻执行微任务队列，这就跟浏览器端运行一致。

```js
setTimeout(()=>{
    console.log('timer1')
    Promise.resolve().then(function() {
        console.log('promise1')
    })
}, 0)
setTimeout(()=>{
    console.log('timer2')
    Promise.resolve().then(function() {
        console.log('promise2')
    })
}, 0)

// 浏览器环境：
timer1=>promise1=>timer2=>promise2

// node V11之后
timer1=>promise1=>timer2=>promise2

// node 10及其之前
timer1=>promise1=>timer2=>promise2 (如果是第二个定时器还未在完成队列中)
timer1=>timer2=>promise1=>promise2 (如果是第二个定时器已经在完成队列中)
```

##### 8.ES6 Modules 相对于 CommonJS 的优势是什么？

答：

- CommonJS和ES6 Module都可以对引入的对象进行赋值，即对对象内部属性的值进行改变；
- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。即ES6 Module只存只读，不能改变其值，具体点就是指针指向不能变；
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
- CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载，有一个独立的模块依赖的解析阶段。
- import 的接口是 read-only（只读状态），不能修改其变量值。 即不能修改其变量的指针指向，但可以改变变量内部指针指向，可以对 commonJS 对重新赋值（改变指针指向），但是对 ES6 Module 赋值会编译报错。

优势： CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而 ES6 Modules不是对象，它的对外接口只是一种静态定义，`在代码静态解析阶段就会生成`。

##### 9.高级程序设计语言是如何编译成机器语言的？

答： 高级语言代码->解析成 AST (期间伴随词法分析、语法分析)->生成字节码（V8）->生成机器码（编译器）

##### 10.编译器一般由哪几个阶段组成？数据类型检查一般在什么阶段进行？

答： 编译器一般由4个阶段工作完成：

- Parse 阶段：V8 引擎负责将 JS 代码转换成 AST（抽象语法树）；
- Ignition 阶段：解释器将 AST 转换为字节码，解析执行字节码也会为下一个阶段优化编译提供需要的信息；
- TurboFan 阶段：编译器利用上个阶段收集的信息，将字节码优化为可以执行的机器码；
- Orinoco 阶段：垃圾回收阶段，将程序中不再使用的内存空间进行回收。

数据类型检查一般在 `Parse 阶段之前 就进行了`，因为在生成AST之前 就要进行语法分析，提取出句子的结构。广义来说输入一般是程序的源码，输出一般是语法树（syntax tree，也叫parse tree等）或抽象语法树（abstract syntax tree，AST）。进一步剥开来，广义的解析器里一般会有扫描器（scanner，也叫tokenizer或者lexical analyzer，词法分析器），以及狭义的解析器（parser，也叫syntax analyzer，语法分析器）。扫描器的输入一般是文本，经过词法分析，输出是将文本切割为单词的流。狭义的解析器输入是单词的流，经过语法分析，输出是语法树或者精简过的AST。

##### 11.编译过程中虚拟机的作用是什么？

答：虚拟机（VM），`其意义是实现高级语言的语义`。VM既然被称为“机器”，一般认为`输入是满足某种指令集架构（instruction set architecture，ISA）的指令序列，中间转换为目标ISA的指令序列并加以执行，输出为程序的执行结果的，就是VM`。源与目标ISA可以是同一种，这是所谓 `same-ISA VM`。 虚拟机 并不是神奇的就能执行代码了，它也得采用某种方式去实现输入程序的语义，并且同样有几种选择：“编译”，例如微软的.NET中的CLR；“解释”，例如CPython、CRuby 1.9，许多老的JavaScript引擎等；也有介于两者之间的混合式，例如Sun的JVM，HotSpot。如果采用编译方式，VM会把输入的指令先转换为某种能被底下的系统直接执行的形式（一般就是native code），然后再执行之；如果采用解释方式，则VM会把输入的指令逐条直接执行。

##### 12.什么是中间代码（IR），它的作用是什么？

答： IR是由LLVM生成的中间代码，作用是优化编译器或VM，使优化后的机器代码执行效率更高，同时避免缓存编译后的二进制代码占用更多的内存。。

##### 13.什么是交叉编译？

答： 是指是在一个平台上生成另一个平台上的可执行代码。

##### 14.发布 / 订阅模式和观察者模式的区别是什么？

答： 在观察者模式中，被观察者通常会维护一个观察者列表。当被观察者的状态发生改变时，就会通知观察者。

在发布订阅模式中，具体发布者会动态维护一个订阅者的列表：可在运行时根据程序需要开始或停止发布给对应订阅者的事件通知。

区别在于发布者本身并不维护订阅列表（它不会像观察者一样主动维护一个列表），它会将工作委派给具体发布者（相当于秘书，任何人想知道我的事情，直接问我的秘书就可以了）；订阅者在接收到发布者的消息后，会委派具体的订阅者来进行相关的处理。

##### 15.装饰器模式一般会在什么场合使用？

答： 装饰器模式一般是指允许动态地向一个现有的对象添加新的功能，同时又不改变其结构，相当于对现有的对象进行了一个包装。

使用场景很多，比如以前写jQ项目，可以自己快速动态拓展jQ上面的方法，或者vue的自定义指令，主要是希望通过继承的方式扩展老旧功能。

##### 16.谈谈你对大型项目的代码解耦设计理解？什么是 Ioc？一般 DI 采用什么设计模式实现？

答： ①代码解耦、一定要按模块划分而不是按功能划分

- 各个模块的生命周期（初始化、销毁）统一由框架进行管理：通过提供通用类Disposable，统一管理相关资源的注册和销毁。
- 模块间不直接引入和调用，而是通过声明依赖的方式，从框架中获取相应的服务并使用。
- 不直接使用全局事件进行通信，而是通过订阅具体服务的方式来处理：通过使用同样的方式this._register()注册事件和订阅事件，将事件相关资源的处理统一挂载到dispose()方法中

②各个部分各个模块开发职责的仔细拆分 ③代码开发尽快组件化、提高可复用性，避免业务逻辑过度耦合臃肿，最终难以拓展

Ioc是指依赖注入，简单理解就是借助于"第三方"实现具有依赖关系的对象之间的解耦。一般使用代理模式。

##### 17.列举你所了解的编程范式？

答：声明式、命令式、函数式

##### 18.什么是面向切面（AOP）的编程？

答：面向切面编程是面向对象中的一种方式而已。在代码执行过程中，动态嵌入其他代码，叫做面向切面编程。

##### 19.什么是函数式编程？什么是响应式编程？什么是函数响应式编程？

答： 函数式编程是面向数学的抽象，关心数据（代数结构）之间的映射关系。函数式编程将计算描述为一种表达式求值。

响应式编程是一种基于数据流和变化传递的声明式的编程范式。

函数响应式编程是一种混合体，响应式编程思想为体, 函数式编程思想为用。

##### 20.如何实现一个上中下三行布局，顶部和底部最小高度是 100px，中间自适应?

答：

```html
<div class="layout">
  <div class="top">top</div>
  <div class="content">content</div>
  <div class="bottom">bottom</div>
</div>
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  /*定义页面整体高度为100%，重要*/
}
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.top {
  height: 100px;
  background: red;
}
.content {
  flex: 1;
  background: yellow;
}
.bottom {
  height: 100px;
  background: blue;
}
```

##### 21.如何判断一个元素 CSS 样式溢出，从而可以选择性的加 title 或者 Tooltip?

答： 可以用元素的scrollHeight属性和clientHeight属性来判断, 当scrollHeight大于clientHeight的时候，元素就是可以垂直滚动的；如果检测水平滚动的话，可以用scrollWidth和clientWidth。

##### 22.如何让 CSS 元素左侧自动溢出（... 溢出在左侧）？

答： 左侧宽度自动增长，右侧宽度自动增长并且不可溢出省略。当左侧文字长度超出的时候，左侧文字溢出省略。 在 css 有个 direction 属性，把文本方向设置为从右向左：`direction: rtl`

```css
/* css */
.footer {
  width: 300px;
  height: 20px;
  display: flex;
  overflow: hidden;
}
.left {
  background: #3cc8b4;
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 50px;
}
.right {
  background: #9bc;
  max-width: 250px;
}
.right-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* html */
<div class="footer">
   <div class="left">
     leftleftleftleftleftleftleftleftleftleftleftleftleft
  </div>
  <div class="right">
    <div class="right-ellipsis">
      rightrightrightrightrightrightrightrightright
    </div>
  </div>
</div>
```

##### 23.什么是沙箱？浏览器的沙箱有什么作用？

答： 沙箱设计的目的是为了让不可信的代码运行在一定的环境中，从而限制这些代码访问隔离区之外的资源。

##### 24.如何处理浏览器中表单项的密码自动填充问题？

答： 表单中当input是password类型时，打开浏览器会自动填充浏览器存储的密码，在input中加入autocomplete="new-password"即可解决。之所以new-password能够解决off失效的原因是autocomplete属性的有效值只有on和off，默认值是on，如果autocomplete的属性是除on和off外的值，那么就是个无效值，那么浏览器就会放弃对该属性的执行。

```html
<input type="password" name="password" placeholder="请输入密码" autocomplete="new-password"/>
```

##### 25.Hash 和 History 路由的区别和优缺点？

答： `hash`  路由模式的实现主要是基于下面几个特性：

- URL 中 hash 值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash 部分不会被发送；
- hash 值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制hash 的切换；
- 可以通过 a 标签，并设置 href 属性，当用户点击这个标签后，URL 的 hash 值会发生改变；或者使用  JavaScript 来对 loaction.hash 进行赋值，改变 URL 的 hash 值；
- 我们可以使用 hashchange 事件来监听 hash 值的变化，从而对页面进行跳转（渲染）。

`history` 路由模式的实现主要基于存在下面几个特性：

- pushState 和 repalceState 两个 API 来操作实现 URL 的变化 ；
- 我们可以使用 popstate  事件来监听 url 的变化，从而对页面进行跳转（渲染）；
- history.pushState() 或 history.replaceState() 不会触发 popstate 事件，这时我们需要手动触发页面跳转（渲染）。

##### 26.JavaScript 中的 const 数组可以进行 push 操作吗？为什么？

答： 可以，也可以进行splice()操作。

const声明创建一个值的只读引用。但这并不意味着它所持有的值是不可变的，只是变量标识符不能重新分配。例如，在引用内容是对象的情况下，这意味着可以改变对象的内容（例如，其参数）。

##### 27.JavaScript 中对象的属性描述符有哪些？分别有什么作用？

答：

- Configurable(可配置性)

可配置性决定是否可以使用delete删除属性，以及是否可以修改属性描述符的特性，默认值为true

- Enumerable(可枚举性)

可枚举性决定属性是否出现在对象的属性枚举中，比如是否可以通过for-in循环返回该属性，默认值为true

- Writable(可写性)

可写性决定是否可以修改属性的值，默认值为true

- Value(属性值)

属性值包含这个属性的数据值，读取属性值的时候，从这个位置读；写入属性值的时候，把新值保存在这个位置。默认值为undefined

- getter

在读取属性时调用的函数。默认值为undefined

- setter

在写入属性时调用的函数。默认值为undefined

##### 28.JavaScript 中 console 有哪些 api ?

答： 我只用过console.clear()、console.log()、console.info()、console.warn()、console.error()、console.time()、console.timeEnd()。其他的不知道，我也不常用

##### 29.简单对比一下 Callback、Promise、Generator、Async 几个异步 API 的优劣？

答： 首先callback不是异步API，它是早年JS异步编程实现的一种手段。

Promise是社区为了解决回调地狱的问题在ES6版本提出的一种解决方案；

Generator也是一种异步编程解决方案，它最大的特点就是可以交出函数的执行权，Generator 函数可以看出是异步任务的容器，需要暂停的地方，都用 yield 语法来标注；

Async/await是 ES7 中提出的新的异步解决方案，async 是 Generator 函数的语法糖，async/await 的优点是`代码清晰`（不像使用 Promise 的时候需要写很多 then 的方法链）。async/await 不仅仅是 JS 的异步编程的一种方式，其可读性也接近于同步代码，让人更容易理解。

##### 30.Object.defineProperty 有哪几个参数？各自都有什么作用？

答： 首先它的用法是 Object.defineProperty(object, propertyname, descriptor)

- object 必需。 要在其上添加或修改属性的对象。 这可能是一个本机 JavaScript对象（即用户定义的对象或内置对象）或 DOM 对象。
- propertyname 必需。 一个包含属性名称的字符串。
- descriptor 必需。 属性描述符。 它可以针对数据属性或访问器属性。

它内部的descriptor参数如下：

- value

属性的值，默认为 undefined。

- writable

该属性是否可写，如果设置成 false，则任何对该属性改写的操作都无效（但不会报错），对于像前面例子中直接在对象上定义的属性，这个属性该特性默认值为为 true。

- configurable

如果为false，则任何尝试删除目标属性或修改属性以下特性（writable, configurable, enumerable）的行为将被无效化，对于像前面例子中直接在对象上定义的属性，这个属性该特性默认值为为 true。 。

- enumerable

是否能在for-in循环中遍历出来或在Object.keys中列举出来。对于像前面例子中直接在对象上定义的属性，这个属性该特性默认值为为 true。

- get

一旦目标对象访问该属性，就会调用这个方法，并返回结果。默认为 undefined。

- set

一旦目标对象设置该属性，就会调用这个方法。默认为 undefined。

##### 31.Object.defineProperty 和 ES6 的 Proxy 有什么区别？

答： Proxy的优势如下

- Proxy可以直接监听整个对象而非属性。
- Proxy可以直接监听数组的变化。
- Proxy有13中拦截方法，如ownKeys、deleteProperty、has 等是 Object.defineProperty 不具备的。
- Proxy返回的是一个新对象，我们可以只操作新的对象达到目的，而Object.defineProperty只能遍历对象属性直接修改;
- Proxy做为新标准将受到浏览器产商重点持续的性能优化,也就是传说中的新标准的性能红利。

Object.defineProperty 的优势如下

- 兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平。

Object.defineProperty 不足在于：

- Object.defineProperty 只能劫持对象的属性,因此我们需要对每个对象的每个属性进行遍历。
- Object.defineProperty不能监听数组。是通过重写数据的那7个可以改变数据的方法来对数组进行监听的。
- Object.defineProperty 也不能对 es6 新产生的 Map,Set 这些数据结构做出监听。
- Object.defineProperty也不能监听新增和删除操作，通过 Vue.set()和 Vue.delete来实现响应式的。

##### 32.ES6 中 Symbol、Map、Decorator 的使用场景有哪些？或者你在哪些库的源码里见过这些 API 的使用？

答： 使用场景太多了，业务上也天天用，略。

##### 33.为什么要使用 TypeScript ? TypeScript 相对于 JavaScript 的优势是什么？

答： 首先，不一定非要用TS，大型业务产品、多人协作写大堆的业务代码不适合TS。

优势： 1.为JavaScript、IDE和实践（如静态检查）提供了高效的开发工具。（主要） 2.其他的比如强大的类型系统，泛型支持、模块支持等等（次要）

##### 34.TypeScript 中 const 和 readonly 的区别？枚举和常量枚举的区别？接口和类型别名的区别？

答： const 和 readonly 的区别：

- const是一个编译期常量， readonly是一个运行时常量
- const只能声明基元类型，枚举类型，字符串类型。readonly则无限制
- const天生为静态数据，无需再添加static标识
- readonly是运行时变量，只能赋值一次。特例是可以定义时赋值一次，构造函数中再赋值一次

枚举和常量枚举的区别： 常量枚举通过在枚举上使用 const 修饰符来定义，常量枚举不同于常规的枚举，他们会在编译阶段被删除。常量枚举成员在使用的地方会被内联进来，之所以可以这么做是因为，常量枚举不允许包含计算成员；如上例所示，在运行时是没有 Size 变量的，因此常量枚举会带来一个对性能的提升。

接口和类型别名的区别：

- 类型别名可以用于其它类型 （联合类型、元组类型、基本类型（原始值）），interface不支持
- nterface 可以多次定义 并被视为合并所有声明成员 type 不支持
- type 能使用 in 关键字生成映射类型，但 interface 不行。
- 默认导出方式不同

##### 35.TypeScript 中 any 类型的作用是什么？

答： Any就是任意类型，可以将 TypeScript 进化成强大的 AnyScript。

##### 36.TypeScript 中 any、never、unknown 和 void 有什么区别？

答： `any` 顾名思义就是任意类型。 `never` 表示永不存在的值的类型。 `unknown` 表示未知类型，即写代码的时候还不清楚会得到怎样的数据类型，它能被赋值为任何类型，但不能被赋值给除了 any 和 unknown 之外的其他类型，同时，不允许执行 unknown 类型变量的方法（any 可以）。 `void` 表示无任何类型，正好与 any 相反，没有类型，如果是函数则应没有返回值或者返回 undefined

##### 37.TypeScript 中 interface 可以给 Function / Array / Class（Indexable）做声明吗？

答： 可以，interface 能够描述 JavaScript 对象的任何形式，包括函数。

interface 也可以被 class 类 implements，这里相当于声明了一个 interface 包含了各种属性，需要 class 去实现，注意给类本身声明类型，其实就是给构造器进行类型声明，不能添加其他属性。

##### 38.TypeScript 中可以使用 String、Number、Boolean、Symbol、Object 等给类型做声明吗？

答： 可以

##### 39.TypeScript 中的 this 和 JavaScript 中的 this 有什么差异？

答： this 无法在未声明的情况下使用，在编写函数是需要在函数里首位声明this

##### 40.TypeScript 中使用 Unions 时有哪些注意事项？

答： 联合类型表示取值可以为多种类型中的一种，当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法（交集）。

##### 41.TypeScript 如何设计 Class 的声明？

答： TypeScript 类型声明非常灵活，这也意味着一千个莎士比亚就能写出一千个哈姆雷特。在团队协作中，为了更好的可维护性， 我们应该尽可能地践行以下3条原则：

- 泛型优于联合类型

第一，类型定义使 getSmallPet变得局限。从代码逻辑看，它的作用是返回一个不下蛋的动物，返回的类型指向的是Fish或Bird。但我如果只想在一群鸟中挑出一个不下蛋的鸟呢？通过调用这个方法，我只能得到一个 可能是Fish、或者是Bird的神奇生物。

第二，代码重复、难以扩展。比如，我想再增加一个乌龟，我必须找到所有类似 Fish | Bird 的地方，然后把它修改为 Fish | Bird | Turtle

第三，类型签名无法提供逻辑相关性。我们再审视一下类型签名，完全无法看出这里为什么是 Fish | Bird 而不是其他动物，它们两个到底和逻辑有什么关系才能够被放在这里

- 善用typeof推导优于自定义类型
- 善用内置工具函数优于重复声明

##### 42.TypeScript 中如何联合枚举类型的 Key?

答： 用 mapped type，用完之后不能加额外的属性，用类型并运算解决。

```ts
type Props = {
    [key in Link]: U;
} & { type: string;}
```

##### 43.TypeScript 中 ?.、??、!.、_、** 等符号的含义？

答： ？：表示该属性或参数为可选项 ！：表示强制解析（告诉typescript编译器，这里一定有值）,变量后使用 ！：表示类型推断排除null、undefined ?? 如果??运算符左侧的表达式求值为undefined或null，则返回其右侧的值；否则，返回其左侧的值

##### 44.TypeScript 中预定义的有条件类型有哪些？

答：

```ts
Exclude<T, U> -- 从T中剔除可以赋值给U的类型。
Extract<T, U> -- 提取T中可以赋值给U的类型。
NonNullable<T> -- 从T中剔除null和undefined。
ReturnType<T> -- 获取函数返回值类型。
InstanceType<T> -- 获取构造函数类型的实例类型。
```

##### 45.简单介绍一下 TypeScript 模块的加载机制？

答： Typescrit的模块机制与es6的模块基本类似，也提供了转换为amd，es6，umd，commonjs，system的转换。typescript的按需加载，也叫动态加载，编译器会检测是否每个模块都会在生成的JavaScript中用到。 如果一个模块标识符只在类型注解部分使用，并且完全没有在表达式中使用时，就不会生成`require`这个模块的代码。 省略掉没有用到的引用对性能提升是很有益的，并同时提供了选择性加载模块的能力。这种模式的核心是`import id = require("...")`语句可以让我们访问模块导出的类型。 模块加载器会被动态调用（通过`require`）。

模块加载的最佳实践

- 1、尽可能地在顶层导出

用户应该更容易地使用你模块导出的内容。 嵌套层次过多会变得难以处理，因此仔细考虑一下如何组织你的代码。

- 2、模块里避免使用命名空间

模块中使用命名空间是不必要的，在模块中导出的东西肯定不能重名，而导入时使用者肯定会为其命名或者直接使用，也不存在重名，使用命名空间是多余的。

- 3、如果仅导出单个 `class` 或 `function`，使用 `export default。`如刚才所说，default是比较好的实践。
- 4、如果要导出多个对象，把它们放在顶层里导出
- 5、导入时明确地列出导入的名字
- 6、导入大量模块时使用命名空间
- 7、使用重新导出进行扩展

你可能经常需要去扩展一个模块的功能。 JS里常用的一个模式是JQuery那样去扩展原对象。 如我们之前提到的，模块不会像全局命名空间对象那样去*合并*。 推荐的方案是*不要*去改变原来的对象，而是导出一个新的实体来提供新的功能。

##### 46.简单聊聊你对 TypeScript 类型兼容性的理解？抗变、双变、协变和逆变的简单理解？

答： TypeScript里的类型兼容性是基于结构子类型的。 结构类型是一种只使用其成员来描述类型的方式。 它正好与名）类型形成对比。TypeScript的结构性子类型是根据JavaScript代码的典型写法来设计的。 因为JavaScript里广泛地使用匿名对象，例如函数表达式和对象字面量，所以使用结构类型系统来描述这些类型比使用名义类型系统更好。

- 协变 *(Covariant)* ：协变表示`Comp<T>`类型兼容和`T`的一致。
- 逆变 *(Contravariant)* ：逆变表示`Comp<T>`类型兼容和`T`相反。
- 双向协变 *(Covariant)* ：双向协变表示`Comp<T>`类型双向兼容。
- 不变 *(Bivariant)* ：不变表示`Comp<T>`双向都不兼容。

##### 47.TypeScript 中对象展开会有什么副作用吗？

答： 展开操作符正与解构相反。 它允许你将一个数组展开为另一个数组，或将一个对象展开为另一个对象。对象的展开比数组的展开要复杂的多。 像数组展开一样，它是从左至右进行处理，但结果仍为对象。 这就意味着出现在展开对象后面的属性会覆盖前面的属性。对象展开还有其它一些意想不到的限制。 首先，它仅包含对象 [自身的可枚举属性](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FEnumerability_and_ownership_of_properties)。 大体上是说当你展开一个对象实例时，你会丢失其方法：

##### 48.TypeScript 中 interface、type、enum 声明有作用域的功能吗？

答： 有，叫类作用域，***\*类变量\**** 也可以称为 字段。类变量 声明在一个类里头，但在类的方法外面，可以**通过类的实例化对象来访问**。***\*静态变量\**** 静态的类变量，静态的变量可以**通过类名直接访问**

##### 49.TypeScript 中同名的 interface 或者同名的 interface 和 class 可以合并吗？

答： 同名interface接口会自动合并，interface同名的class也会自动聚合。 但type不能自动聚合，因为type声明不能重名。

##### 50.如何使 TypeScript 项目引入并识别编译为 JavaScript 的 npm 库包？

答： 可以选择安装其npm包的typescript版本，`npm install @types/包名 --save`，一般都是这样命名。 如果是自己写的js库 可以单独编写.d.ts文件

##### 51.TypeScript 的 tsconfig.json 中有哪些配置项信息？

答：

```ts
{
   "files": [  # 指定需要编译文件，相对配置文件所在
        "core.ts",
        "sys.ts",
        "types.ts",
        "scanner.ts",
        "parser.ts",
        "utilities.ts",
        "binder.ts",
        "checker.ts",
        "emitter.ts",
        "program.ts",
        "commandLineParser.ts",
        "tsc.ts",
        "diagnosticInformationMap.generated.ts"
    ],
    "exclude": [ # 指定不需要编译文件
        "node_modules",
        "**/*.spec.ts"
    ],
    "include": [ # 指定需要编译文件; 不配置files,include，默认除了exclude的所有.ts,.d.ts,.tsx
        "src/**/*"
    ],
	# 指定基础配置文件路径 大部分配置 compilerOptions, files, include, and exclude。切忌循环引用。
	"extends": "./configs/base",
    "compilerOptions": {   # 告知TypeScript 编译器怎么编译
		"baseUrl": "./",
		"paths": {   # 相对于baseUrl配置 
			"jquery": ["node_modules/jquery/dist/jquery"] ,
			 "*": [
					"*",
					"generated/*"
			 ]
		},
		"rootDirs":[ # 找平路径配置依赖
				"src/views",
				"generated/templates/views"
	    ],
        "module": "commonjs",
        "noImplicitAny": true,
        "removeComments": true, # 移除代码注解 
        "preserveConstEnums": true,
        "sourceMap": true
		"types": []  #不会自动导入@types定义的包
		"noResolve":true , # 不会自动导入import 依赖, 编译会报错
		"downlevelIteration":true # 进行js 语法降级 for..of 
		"module": "esnext",
       "moduleResolution": "node",
		"strictNullChecks": true  # 开启null，检测
		"target":'ES5'
		"strictBindCallApply":true
		"skipLibCheck":true, 
    },
	# 以上属性，为常用配置属性
	"compileOnSave": false, # 整个工程而言，需要编译器支持，譬如Visual Studio 2015 with TypeScript 1.8.4+
	"typeAcquisition":{   # 整个工程的类型定义.d.ts
		    "enable":false,  # 默认值 false 
			"include" : ["jquery", "lodash"] 
			"exclue"：["jquery", "lodash" ]
	},
   "references":[{ # 引用的工程 
	   path: 'xxxx'
	 }]  
}
```

##### 52.TypeScript 中如何设置模块导入的路径别名？

答： 通过tsconfig.json中的paths项来配置

##### 53.React Class 组件有哪些周期函数？分别有什么作用？

答：

- `constructor()` 挂载类组件的时候，先执行构造函数
- `static getDerivedStateFromProps() `会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
- `render()` 渲染真实的DOM节点
- `componentDidMount()`会在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。如需通过网络请求获取数据，此处是实例化请求的好地方。

更新：

- `static getDerivedStateFromProps() 同一次挂载时的 getDerivedStateFromProps() 一致`
- `shouldComponentUpdate() 可以在这里进行性能优化，减少浅层比较`
- `render() 插入真实的DOM节点树上`
- `getSnapshotBeforeUpdate() 能在最近一次渲染中，从之前的DOM拿到一些有用的信息，比如滚动位置等`
- `componentDidUpdate()` 当组件更新后，可以在此处对 DOM 进行操作。如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求。（例如，当 props 未发生变化时，则不会执行网络请求）

卸载：

- `componentWillUnmount() 这里是卸载及销毁组件前的调用方法 可以在这里清空一些数据，比如取消网络请求、 componentDidmount中创建的一些数据等等`

##### 54.React Class 组件中请求可以在 componentWillMount 中发起吗？为什么？

答： 看情况，如果是服务端渲染会拿不到数据。

componentWillMount方法的调用在constructor之后，在render之前，在这方法里的代码调用setState方法不会触发重渲染，所以它一般不会用来作加载数据之用，它也很少被使用到。

一般的从后台(服务器)获取的数据，都会与组件上要用的数据加载有关，所以都在componentDidMount方法里面作。虽然与组件上的数据无关的加载，也可以在constructor里作，但constructor是作组件state初绐化工作，并不是设计来作加载数据这工作的，所以所有有副作用的代码都会集中在componentDidMount方法里。

##### 55.React Class 组件和 React Hook 的区别有哪些？

答： Hook代码可读性更强，原本同一块功能的代码逻辑被拆分在了不同的生命周期函数中，容易使开发者不利于维护和迭代，通过 React Hooks 可以将功能代码聚合，方便阅读维护;

组件树层级变浅，在原本的代码中，我们经常使用 HOC/render/Props 等方式来复用组件的状态，增强功能等，无疑增加了组件树层数及渲染，而在 React Hooks 中，这些功能都可以通过强大的自定义的 Hooks 来实。

hooks组件其实是降低了react开发的使用难度的，让新手可以在不使用class组件的情况下依然可以进行项目开发。

##### 56.React 中高阶函数和自定义 Hook 的优缺点？

答：

高阶组件实际上就是把一个组件当参数传入，再返回一个新的组件出来。业务过度封装的高阶组件，可能会导致组件层次嵌套变深。

而自定义 Hook 可以不用使用高阶组件依然可以进行功能复用。

##### 57.简要说明 React Hook 中 useState 和 useEffect 的运行原理？

答： useState返回一个有状态值和一个函数来更新它。在初始渲染期间，返回的状态（状态）与作为第一个参数（initialState）传递的值相同。setState 函数用于更新状态。它接受一个新的状态值，并排队等待重新渲染该组件。 在更新过程中，

- 首次渲染，render()
- render会调用App函数，得到虚拟DIV，创建真实DIV
- 用户点击Button，调用setN(n+1)，render函数被再一次调用
- render进一步调用App函数，得到虚拟DIV，Diff，更新真实DIV
- 每一次setN都会再次调用render，进而调用App

而useEffect的运行流程

- 初次渲染的时候，按照 useState，useEffect 的顺序，把 state，deps 等按顺序塞到 memoizedState 数组中。
- 更新的时候，按照顺序，从 memoizedState 中把上次记录的值拿出来。
- useState，useEffect 和使用的不是同一个数据
- 核心就在于每次更新把cursor赋值为零，然后更新时按照hooks顺序，依次从 memoizedState 中把上次记录的值拿出来，useEffect接受useState(返回新值)和旧值进行比较

##### 58.React 如何发现重渲染、什么原因容易造成重渲染、如何避免重渲染？

答： 当内部data发生改变，state发生改变(通过调用this.setState()) 以及父组件传过来的props发生改变时，会导致组件重新渲染。

react生命周期中有这样一个钩子，叫shouldComponentUpdate函数，是重渲染时render()函数调用前被调用的函数，两个参数 nextProps和nextState ，分别表示下一个props和state的值。当函数返回false时，阻止接下来的render()函数的调用，阻止组件重渲染，返回true时，组件照常渲染。 前后不改变state的值的setState和无数据交换的父组件的重渲染都会导致组件的重渲染，但我们可以通过shouldComponentUpdate来阻止这两种情况，shouldComponentUpdate并不是完美的，只能阻止扁平的对象，这时候可以考虑`Immutable.js`(Immutable.js 的基本原则是对于不变的对象返回相同的引用，而对于变化的对象，返回新的引用)或者`PureRenderMixin` 插件。

##### 59.React Hook 中 useEffect 有哪些参数，如何检测数组依赖项的变化？

答： 不传参数、空数组、有一个或者多个值得数组、返回一个函数。

useEffect的第二个参数可用于定义其依赖的所有变量。如果其中一个变量发生变化，则useEffect会再次运行。如果包含变量的数组为空，则在更新组件时useEffect不会再执行，因为它不会监听任何变量的变更。

##### 60.React 的 useEffect 是如何监听数组依赖项的变化的？

答： useEffect的第二个参数可用于定义其依赖的所有变量。如果其中一个变量发生变化，则useEffect会再次运行。如果包含变量的数组为空，则在更新组件时useEffect不会再执行，因为它不会监听任何变量的变更。

##### 61.React Hook 和闭包有什么关联关系？

答：

首先闭包是由函数以及创建该函数的词法环境组合而成。这个词法环境包含了该闭包创建时所能访问的所有局部变量。划重点是闭包创建时的变量值，闭包创建之后即使这些变量值改变了也不会影响到闭包内保存的这个变量。

而useEffect、useMemo、useCallback都是自带闭包的。每一次组件的渲染，它们都会捕获当前组件函数上下文中的状态(state, props)，所以每一次这三种hooks的执行，反映的也都是当前的状态，你无法使用它们来捕获上一次的状态。

对 Hook 过时闭包的解决办法：

- 添加依赖项

注意依赖项为空和不传依赖项是两个概念，前者是传了依赖项但它是一个空数组，后者是直接不传这个参数。前者只有依赖项改变时才会执行函数，后者只要组件数据改变了就执行。

- 以函数的形式更新state

以函数的形式更新state，同 react 的 setState 一样，useState Hook 也可以通过函数的形式来修改 state，并且使用当前的 state 值作为函数参数。

- 使用useRef

通过 useRef 生成的对象来绑定 state，这样更新 state 的时候就可以不用依赖于该 state，而是直接在该绑定对象上的基础上更新即可。

- 使用useReducer

useReducer 可以达到和使用函数形式更新的 useState 一样的效果，也是在更新时在当前的 state 基础上进行操作。

##### 62.React 中 useState 是如何做数据初始化的？

答： 一个函数组件，在react执行渲染时该函数都会被调用，所以函数内的useState在每次都会被调用。useState在不同阶段，其对应的实现不一样，在onMount阶段：初始化state；在onUpdate阶段：更新state。useState返回的是一个数组，数组的第二项是一个函数，该函数每次被调用后，都会触发react的更新。

##### 63.列举你常用的 React 性能优化技巧？

答：

- 使用 shouldComponentUpdate 规避冗余的更新逻辑
- PureComponent + Immutable.js
- React.memo 与 useMemo

##### 64.Vue 2.x 模板中的指令是如何解析实现的？

答： 指令本质上就是一个 JavaScript 对象，对象上挂着一些钩子函数，无论是官方提供的指令，还是自定义指令，一个指令从第一次被绑定到元素上到最终与被绑定的元素解绑，它会经过以下几种状态：

- bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
- update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。
- componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
- unbind：只调用一次，指令与元素解绑时调用。

了每个状态的钩子函数，这样我们就可以让指令在不同状态下做不同的事情。当虚拟DOM渲染更新的时候会触发create、update、destory这三个钩子函数，从而就会执行updateDirectives函数来处理指令的相关逻辑，执行指令函数，让指令生效。

##### 65.简要说明 Vue 2.x 的全链路运作机制？

答：

- 初始化以及挂载init, mount
- 在进行模板编译compile，将template编译为渲染函数render function
- 执行render function生成Virtual DOM, render function => VNode tree
- 再进行响应式依赖收集，render function => getter, setter => Watcher.update => patch。以及使用队列进行异步更新的策略。
- 最后通过diff算法后进行patch更新视图

##### 66.简单介绍一下 Element UI 的框架设计？

答：

支持 npm 方式和 cdn 方式，并支持按需引入、支持多语言、文档详尽、组件丰富。（不了解）

##### 67.如何理解 Vue 是一个渐进式框架？

答：

渐进式代表的含义是：没有多做职责之外的事。

你可以使用jsx开发，你也可以写template；你可以使用vue全家桶，你也可以把它做为某个业务的轻量视图，随你，不强求不主张。

##### 68.Vue 里实现跨组件通信的方式有哪些？

答：

- 父子通信：

父向子传递数据是通过 props，子向父是通过 events（emit）；通过父链/子链也可以通信（emit）；通过父链 / 子链也可以通信（emit）；通过父链/子链也可以通信（parent / children）；ref也可以访问组件实例；provide/injectAPI；children）；ref 也可以访问组件实例；provide / inject API；children）；ref也可以访问组件实例；provide/injectAPI；attrs/$listeners

- 兄弟通信：

Bus；Vuex

- 跨级通信：

Bus；Vuex；provide / inject API、attrs/attrs/attrs/listeners

##### 69.Vue 中响应式数据是如何做到对某个对象的深层次属性的监听的？

答：

使用watch并且搭配deep:true 就可以实现对对象的深度监听

##### 70.MVVM、MVC 和 MVP 的区别是什么？各自有什么应用场景？、

答：

MVC 是一种使用 MVC（Model View Controller 模型-视图-控制器）设计创建 Web 应用程序的模式。

- 耦合性低
- 重用性高
- 生命周期成本低

MVP 是从经典的模式MVC演变而来，它们的基本思想有相通的地方Controller/Presenter负责逻辑的处理，Model提供数据，View负责显示。

- 模型与视图完全分离，我们可以修改视图而不影响模型
- 可以更高效地使用模型，因为所有的交互都发生在一个地方——Presenter内部
- 我们可以将一个Presenter用于多个视图，而不需要改变Presenter的逻辑。这个特性非常的有用，因为视图的变化总是比模型的变化频繁。
- 如果我们把逻辑放在Presenter中，那么我们就可以脱离用户接口来测试这些逻辑（单元测试）

MVVM 本质上就是MVC 的改进版。MVVM 就是将其中的View 的状态和行为抽象化，让我们将视图 UI 和业务逻辑分开。

- 低耦合
- 可重用性
- 独立开发
- 可测试

##### 71.什么是 MVVM 框架？

答： MVVM，特点是采用双向绑定(data-binding): View的 变动，自动反映在View Model，反之亦然。这样开发者就不用处理接收事件和View更新的工作，框架已经帮你做好了。

##### 72.Vue CLI 3.x 有哪些功能？Vue CLI 3.x 的插件系统了解？

答：

插件系统是给vue项目提供可选功能的npm包，如：Babel/TypeScript 转译、ESLint 集成、unit和 e2e测试 等

##### 73.Vue CLI 3.x 中的 Webpack 是如何组装处理的？

答：

对比vue-cli2，cli3 最主要的就是生成的项目中，进行webpack配置的文件没有了。cli3的脚手架封装了webpack绝大部分配置，使得生成的项目更加清晰，但是在开发中免不了会有自己的个性需求，来添加一些自己的项目配置，此时只需在项目的根目录下新建一个vue.config.js文件即可。而webpack中是通过 resolve.alias 来实现此功能的。在vue.config.js中修改webpack的配置，可以通过configureWebpack方法。

##### 74.Vue 2.x 如何支持 TypeScript 语法？

答：

- 配置ts-loader，tsconfig
- 增加类型扩展，让ts识别vue文件
- vue文件中script里面换成ts写法， 需要增加几个ts扩展的package， 比如vue-property-decorator

##### 75.如何配置环境使得 JavaScript 项目可以支持 TypeScript 语法？

答：

- 利用 Babel 的 @babel/plugin-transform-typescript 插件来实现。
- 利用 ts-loader 结合官方 typescript 库来实现。

##### 76.如何对 TypeScript 进行 Lint 校验？ESLint 和 TSLint 有什么区别？

答：

ESLint 和 TSLint 都是 Javascript 的语法检查器，通常使用 ESLint 或 TSLint 用于解决团队开发上不同代码风格所带来的一系列不和谐的问题。

ESLint 支持几种格式的配置文件：

- JavaScript：使用 .eslintrc.js 然后输出一个配置对象。
- YAML：使用 .eslintrc.yaml 或 .eslintrc.yml 去定义配置的结构。
- JSON：使用 .eslintrc.json 去定义配置的结构，ESLint 的 JSON 文件允许 JavaScript 风格的注释。
- (弃用)：使用 .eslintrc，可以使 JSON 也可以是 YAML。

package.json：在 package.json 里创建一个 eslintConfig 属性，在那里定义你的配置。

TSLint 是配合 Typescript 来使用的。TSLint 执行规则的方式存在一些框架问题，从而影响性能，而修复这些问题会破坏现有的规则。ESLint 的性能更好，并且社区用户通常拥有 ESLint 的规则配置（比如 React 和 Vue 的配置），而不会拥有 TSLint 的规则配置。

##### 77.Node.js 如何支持 TypeScript 语法？

答：

Node是基于Chrome V8引擎开发的能使JavaScript在服务器端运行的运行时环境，TS最终编译成JS，然后生成字节码->机器码。 Node.js支持TS语法，有什么疑问吗，毕竟最终都是编译成JS？

##### 78.TypeScript 如何自动生成库包的声明文件？

答：

编译选项，在这里找到与生成相应的 .d.ts 文件和 声明文件 相关的选项，其中包括：

- declaration
- declarationDir
- types
- typeRoots

配置完 tsconfig.json 文件后，再次执行 npm run build 会在项目根目录下生成 types 文件夹，该文件夹主要存放自动生成的 TypeScript 声明文件。

##### 79.Babel 对于 TypeScript 的支持有哪些限制？

答：

在使用babel-preset-typescript可以使 JavaScript 与 TypeScript 并存，且在编译过程是同一阶段进行的。透过 Babel preset 配置，可以更容易的实现我们所需的JS项目平滑转移到 TS项目过程。

但是，这对Babel有一定的要求，而不同版本的Babel对于 monorepo 存在相容性问题，特别是要从 subrepo 引用 module 时，会导致 Babel 的配置无法正确取得。

##### 80.Webpack 中 Loader 和 Plugin 的区别是什么？

答：

在webpack中 Loader 就是负责完成项目中各种各样资源模块的加载，从而实现整体项目的模块化，而 Plugin 则是用来解决项目中除了资源模块打包以外的其他自动化工作，对比 Loader 只是在模块的加载环节工作，而插件的作用范围几乎可以触及 Webpack 工作的每一个环节。

##### 81.在 Webpack 中是如何做到支持类似于 JSX 语法的 Sourcemap 定位？

答：

```js
// 见试卷背面
```

##### 82.发布 Npm 包如何指定引入地址？

答：

```js
// 见试卷背面
```

##### 83.如何发布开发项目的特定文件夹为 Npm 包的根目录？

答：

一般情况下，npm包的根目录时node_modules，可以使用package.json的directories属性里的directories.lib，更改 Npm 包的根目录。

##### 84.如何发布一个支持 Tree Shaking 机制的 Npm 包？

答：

通常人们在使用打包工具的 babel 插件编译代码时都会屏蔽掉 node_modules 目录下的文件。因为按照约定大家发布到 npm 的模块代码都是基于 ES5 规范的，因此配置 babel 插件屏蔽 node_modules 目录可以极大的提高编译速度。但用户如果使用了我们发布的基于 ES6 规范的包就必须配置复杂的屏蔽规则以便把我们的包加入编译的白名单。

如果用户是在 NodeJS 环境使用我们的包，那么极有可能连打包这一步骤都没有。如果用户的 NodeJS 环境又恰巧不支持 ES6 模块规范，那么就会导致代码报错。

基于以上两个原因，pkg.module 字段要指向的应该是一个基于 ES6 模块规范的使用ES5语法书写的模块。基于 ES6 模块规范是为了用户在使用我们的包时可以享受 Tree Shaking 带来的好处；使用 ES5 语法书写是为了用户在配置 babel 插件时可以放心的屏蔽 node_modules 目录。相当于在一个包内同时发布了两种模块规范的版本。

当打包工具遇到我们的模块时：

- 如果它已经支持 pkg.module 字段则会优先使用 ES6 模块规范的版本，这样可以启用 Tree Shaking 机制。
- 如果它还不识别 pkg.module 字段则会使用我们已经编译成 CommonJS 规范的版本，也不会阻碍打包流程。

##### 85.Npm 包中 peerDependencies 的作用是什么？

答：

peerDependencies的目的是提示宿主环境去安装满足插件peerDependencies所指定依赖的包，然后在插件import或者require所依赖的包的时候，永远都是引用宿主环境统一安装的npm包，最终解决插件与所依赖包不一致的问题。

##### 86.如何优雅的调试需要发布的 Npm 包？

答：

- 在需要调试的npm包目录下结构下的控制台输入npm link 这个命令会把当前包映射到本地的一个全局的npm包里面；
- 在引用的目录结构下的控制台输入 npm link 包名称 这个命令会把本地引用的这个npm包的路径定位到全局的npm包下；
- 全局的npm包相当于一个中转站，在编辑区域与引用区域之间中转。

##### 87.在设计一些库包时如何生成版本日志？

答：

`npm run changelog` 自动生成的版本日志信息

##### 88.了解 Git （Submodule）子模块吗？简单介绍一下 Git 子模块的作用？

答：

子模块是进行开发和需求进行对接将需求文档作为子模块项目，嵌入开发人员的项目中。子模块的使用既可以减少需求或设计人员的git操作，又可以及时的将doc文档发布到项目的目录文件下，而且不会对开发人员的项目产生任何影响。

##### 89.Git 如何修改已经提交的 Commit 信息？

答：

- `git rebase -i <commit id> 列出 commit 列表`
- 找到需要修改的 commit 记录，把 pick 修改为 edit 或 e，:wq 保存退出
- 修改 commit 的具体信息git commit --amend，保存并继续下一条git rebase --continue，直到全部完成
- 中间也可跳过或退出git rebase (--skip | --abort)

##### 90.Git 如何撤销 Commit 并保存之前的修改？

答：

- 查看commit `git log --pretty=oneline`
- 撤销到上一个commit，但是保存当前的修改。` git reset --soft <commit>`
- 修改成功。重建分支，进行提交。

##### 91.Git 如何 ignore 被 commit 过的文件？

答：

- 删除 track 的文件 (已经 commit 的文件)
- 在 .gitignore 文件中添加忽略规则

在 .gitignore 文件中添加 ignore 条目, 如: .DS_Store 提交 .gitignore 文件: git commit -a -m "添加ignore规则"

- 推送到远程仓库让 ignore 规则对于其他开发者也能生效

##### 92.在使用 Git 的时候如何规范 Git 的提交说明（Commit 信息）？

答：

用Commitizen，Commitizen 是一个撰写符合上面 Commit Message 标准的一款工具。 在push操作时检查commit的信息，使用正则检查是否匹配（比如使用angular的git规范），不符合的不允许Push。

##### 93.简述符合 Angular 规范的提交说明的结构组成？

答：

commit格式如下:

```js
<type>: <subject>
<BLANK LINE>
<body>
type - 提交 commit 的类型
```

feat: 新功能

fix: 修复问题

docs: 修改文档

style: 修改代码格式(不影响逻辑功能，比如格式化、补充分号等等)

refactor: 重构代码(fix bug或增加新功能不属于此范围)

perf: 提升页面性能

test: 增加/修改测试用例

chore: 修改工具相关（包括但不限于文档、代码生成等, 比如修改了README，webpack配置文件等等）

deps: 升级依赖

subject - 用一句话清楚的描述这次提交做了什么

body - 补充subject，适当增加原因、目的等相关因素，可选。

##### 94.Commit 信息如何和 Github Issues 关联？

答：

当你提交一个commit的时候在commit message里面使用#issue, 比如#8, github就会自动关联issue 8跟这个commit. 当然在github上面写comment的时候使用这个也是有效的，在confirm merge的时候可以使用一下命令来关闭相关issue。

```bash
fixes #xxx
fixed #xxx
fix #xxx
closes #xxx
close #xxx
closed #xxx
```

##### 95.Git Hook 在项目中哪些作用？

答：

Git Hooks是定制化的脚本程序，所以它实现的功能与相应的git动作相关,如下几个简单例子：

- 多人开发代码语法、规范强制统一
- commit message 格式化、是否符合某种规范
- 如果有需要，测试用例的检测
- 服务器代码有新的更新的时候通知所有开发成员
- 代码提交后的项目自动打包（git receive之后）
- 等等...

##### 96.Git Hook 中客户端和服务端钩子各自用于什么作用？

答：

客户端钩子由诸如提交和合并这样的操作所调用， 而服务器端钩子作用于诸如接收被推送的提交这样的联网操作。

##### 97.Git Hook 中常用的钩子有哪些？

答：

ClientSide hooks：

- pre-commit，当执行commit动作时先执行此hook，可以用此hook做一些检查，比如代码风格检查，或者先跑测试。
- prepare-commit-msg， 当commit时需要输入message前会触发此hook，可以用此hook来定制自己的default message信息。
- commit-msg，当用户输入commit的message后被触发，可以用此hook校验message的信息，比如是否符合规定，有没有cr等。
- post-commit, 当commit完成后被触发，可以用此hook发送 notification 等。
- pre-rebase, rebase之前会被触发，可以用此hook来拒绝所有的已经push的commits进行rebase操作。
- post-merge, 当merge成功后，会触发此hook。
- pre-push, 当push时，remote refs被更新，但是在所有的objects传输前被触发。
- pre-auto-gc, 当git gc –auto执行前被触发。在垃圾回收之前做一些验证或备份是挺不错的。

ServerSide hooks:

- pre-receive, 当收到push动作之前会被执行。
- update, 也是收到push动作之前被执行，但是有可能被执行多次，每个branch一次。
- post-receive, 当push动作已经完成的时候会被触发，可以用此hook来 push notification等，比如发邮件，通知持续构建服务器等。

##### 98.pre-commit 和 commit-msg 钩子的区别是什么？各自可用于做什么？

答：

pre-commit是客户端hooks之一，也是接下来要介绍的钩子。pre-commit在git add提交之后，然后执行git commit时执行，脚本执行没报错就继续提交，反之就驳回提交的操作。 这个钩子中可以实现：对将要提交的代码进行检查、优化代码格式、或者对提交的图片进行压缩等等任务。

Git 每次提交代码，都要写 Commit message（提交说明），否则就不允许提交。

##### 99.husky 以及 ghook 等工具制作 Git Hook 的原理是什么？

答：

代码提交之前会通过 husky 配合 git hook 进行提交信息校验，一旦提交信息不符合 Angular 规范，则提交会失败。

##### 100.如何设计一个通用的 Git Hook ？

答：

借助Commitizen，使用 git cz 代替 git commit 进行复合 Angular 规范的 Commit Message 信息提交，规范团队的git规范。代码提交之前会通过 husky 配合 git hook 进行提交信息校验，一旦提交信息不符合 团队的git规范，正则匹配失败，则提交会失败。

##### 101.Git Hook 可以采用 Node 脚本进行设计吗？如何做到？

答：

可以。钩子都被存储在 Git 目录下的 hooks 子目录中。 也即绝大部分项目中的 .git/hooks 。 当你用 git init 初始化一个新版本库时，Git 默认会在这个目录中放置一些示例脚本。这些脚本除了本身可以被调用外，它们还透露了被触发时所传入的参数。 所有的示例都是 shell 脚本，其中一些还混杂了 Perl 代码，不过，任何正确命名的可执行脚本都可以正常使用 —— 你可以用 Ruby 或 Python，或其它语言编写它们。 这些示例的名字都是以 .sample 结尾，如果你想启用它们，得先移除这个后缀。

比如说用 Node.js 来写一个拒绝提交没有被解决的冲突的文件的钩子，写这个钩子的初衷是因为在多人合作项目中，总是难免会遇到文件冲突的情况，而有些同事没有找到全部的冲突文件并一一解决，这个钩子就会在 commit 的时候检查是否有冲突，如果有冲突，就会把所有冲突找到，并提示出错文件后，拒绝 commit。

```js
#!/usr/bin/env node
// 在 commit 之前检查是否有冲突，如果有冲突就 process.exit(1)

const execSync = require('child_process').execSync

// git 对所有冲突的地方都会生成下面这种格式的信息，所以写个检测冲突文件的正则
const isConflictRegular = "^<<<<<<<\\s|^=======$|^>>>>>>>\\s"

let results

try {
 // git grep 命令会执行 perl 的正则匹配所有满足冲突条件的文件
    results = execSync(`git grep -n -P "${isConflictRegular}"`, {encoding: 'utf-8'})
} catch (e) {
    console.log('没有发现冲突，等待 commit')
    process.exit(0)
}

if(results) {
    console.error('发现冲突，请解决后再提交，冲突文件：')
    console.error(results.trim())
    process.exit(1)
}

process.exit(0)
```

把这个文件拷贝到 .git/hooks/pre-commit 下，并执行 chmod 777 pre-commit 就可以在每次 commit 的情况下检查之前文件是否有冲突。

##### 102.如何确保别人上传的代码没有 Lint 错误？如何确保代码构建没有 Lint 错误？

答：

在使用cli构建项目时，勾选 Use ESLint to lint your code。 在 .eslintrc.js 文件里，找到文件中的rules，我们可以在其中定义一些代码检查的规则

```js
'semi': ['error', 'always']
```

常用规则

```js
'rules': {
      "comma-dangle": ["error", "never"], //是否允许对象中出现结尾逗号
      "no-cond-assign": 2, //条件语句的条件中不允许出现赋值运算符
      "no-console": 2, //不允许出现console语句
      "no-constant-condition": 2, //条件语句的条件中不允许出现恒定不变的量
      "no-control-regex": 2, //正则表达式中不允许出现控制字符
      "no-debugger": 2, //不允许出现debugger语句
      "no-dupe-args": 2, //函数定义的时候不允许出现重复的参数
      "no-dupe-keys": 2, //对象中不允许出现重复的键
      "no-duplicate-case": 2, //switch语句中不允许出现重复的case标签
      "no-empty": 2, //不允许出现空的代码块
      "no-empty-character-class": 2, //正则表达式中不允许出现空的字符组
      "no-ex-assign": 2, //在try catch语句中不允许重新分配异常变量
      "no-extra-boolean-cast": 2, //不允许出现不必要的布尔值转换
      "no-extra-parens": 0, //不允许出现不必要的圆括号
      "no-extra-semi": 2, //不允许出现不必要的分号
      "no-func-assign": 2, //不允许重新分配函数声明
      "no-inner-declarations": ["error", "functions"], //不允许在嵌套代码块里声明函数
      "no-invalid-regexp": 2, //不允许在RegExp构造函数里出现无效的正则表达式
      "no-irregular-whitespace": 2, //不允许出现不规则的空格
      "no-negated-in-lhs": 2, //不允许在in表达式语句中对最左边的运算数使用取反操作
      "no-obj-calls": 2, //不允许把全局对象属性当做函数来调用
      "no-regex-spaces": 2, //正则表达式中不允许出现多个连续空格
      "quote-props": 2, //对象中的属性名是否需要用引号引起来
      "no-sparse-arrays": 2, //数组中不允许出现空位置
      "no-unreachable": 2, //在return，throw，continue，break语句后不允许出现不可能到达的语句
      "use-isnan": 2, //要求检查NaN的时候使用isNaN()
      "valid-jsdoc": ["error", {
          "requireReturn": false,
          "requireParamDescription": false,
          "requireReturnDescription": true
      }], //强制JSDoc注释
      "valid-typeof": ["error", {
          "requireStringLiterals": true
      }], //在使用typeof表达式比较的时候强制使用有效的字符串
      "block-scoped-var": 2, //将变量声明放在合适的代码块里
      "complexity": 0, //限制条件语句的复杂度
      "consistent-return": 2, //无论有没有返回值都强制要求return语句返回一个值
      "curly": ["error", "all"], //强制使用花括号的风格
      "default-case": 0, //在switch语句中需要有default语句
      "dot-notation": ["error", {"allowKeywords": false, "allowPattern": ""}], //获取对象属性的时候使用点号
      "eqeqeq": ["error", "smart"], //比较的时候使用严格等于
      "no-alert": 1, //不允许使用alert，confirm，prompt语句
      "no-caller": 2, //不允许使用arguments.callee和arguments.caller属性
      "guard-for-in": 0, //监视for in循环，防止出现不可预料的情况
      "no-div-regex": 2, //不能使用看起来像除法的正则表达式
      "no-else-return": 0, //如果if语句有return，else里的return不用放在else里
      "no-labels": ["error", {
          "allowLoop": false,
          "allowSwitch": false
      }], //不允许标签语句
      "no-eq-null": 2, //不允许对null用==或者!=
      "no-eval": 2, //不允许使用eval()
      "no-extend-native": 2, //不允许扩展原生对象
      "no-extra-bind": 2, //不允许不必要的函数绑定
      "no-fallthrough": 2, //不允许switch按顺序全部执行所有case
      "no-floating-decimal": 2, //不允许浮点数缺失数字
      "no-implied-eval": 2, //不允许使用隐式eval()
      "no-iterator": 2, //不允许使用__iterator__属性
      "no-lone-blocks": 2, //不允许不必要的嵌套代码块
      "no-loop-func": 2, //不允许在循环语句中进行函数声明
      "no-multi-spaces": 2, //不允许出现多余的空格
      "no-multi-str": 2, //不允许用\来让字符串换行
      "no-global-assign": 2, //不允许重新分配原生对象
      "no-new": 2, //不允许new一个实例后不赋值或者不比较
      "no-new-func": 2, //不允许使用new Function
      "no-new-wrappers": 2, //不允许使用new String，Number和Boolean对象
      "no-octal": 2, //不允许使用八进制字面值
      "no-octal-escape": 2, //不允许使用八进制转义序列
      "no-param-reassign": 0, //不允许重新分配函数参数"no-proto": 2, //不允许使用__proto__属性
      "no-redeclare": 2, //不允许变量重复声明
      "no-return-assign": 2, //不允许在return语句中使用分配语句
      "no-script-url": 2, //不允许使用javascript:void(0)
      "no-self-compare": 2, //不允许自己和自己比较
      "no-sequences": 2, //不允许使用逗号表达式
      "no-throw-literal": 2, //不允许抛出字面量错误 throw "error"
      "no-unused-expressions": 2, //不允许无用的表达式
      "no-void": 2, //不允许void操作符
      "no-warning-comments": [1, {"terms": ["todo", "fixme", "any other term"]}], //不允许警告备注
      "no-with": 2, //不允许使用with语句
      "radix": 1, //使用parseInt时强制使用基数来指定是十进制还是其他进制
      "vars-on-top": 0, //var必须放在作用域顶部
      "wrap-iife": [2, "any"], //立即执行表达式的括号风格
      "yoda": [2, "never", {"exceptRange": true}], //不允许在if条件中使用yoda条件
      "strict": [2, "function"], //使用严格模式
      "no-catch-shadow": 2, //不允许try catch语句接受的err变量与外部变量重名"no-delete-var": 2, //不允许使用delete操作符
      "no-label-var": 2, //不允许标签和变量同名
      "no-shadow": 2, //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
      "no-shadow-restricted-names": 2, //js关键字和保留字不能作为函数名或者变量名
      "no-undef": 2, //不允许未声明的变量
      "no-undef-init": 2, //不允许初始化变量时给变量赋值undefined
      "no-undefined": 2, //不允许把undefined当做标识符使用
      "no-unused-vars": [2, {"vars": "all", "args": "after-used"}], //不允许有声明后未使用的变量或者参数
      "no-use-before-define": [2, "nofunc"], //不允许在未定义之前就使用变量"indent": 2, //强制一致的缩进风格
      "brace-style": [2, "1tbs", { "allowSingleLine": false}], //大括号风格
      "camelcase": [2, {"properties": "never"}], //强制驼峰命名规则
      "comma-style": [2, "last"], //逗号风格
      "consistent-this": [0, "self"], //当获取当前环境的this是用一样的风格
      "eol-last": 2, //文件以换行符结束
      "func-names": 0, //函数表达式必须有名字
      "func-style": 0, //函数风格，规定只能使用函数声明或者函数表达式
      "key-spacing": [2, {"beforeColon": false, "afterColon": true}], //对象字面量中冒号的前后空格
      "max-nested-callbacks": 0, //回调嵌套深度
      "new-cap": [2, {"newIsCap": true, "capIsNew": false}], //构造函数名字首字母要大写
      "new-parens": 2, //new时构造函数必须有小括号
      "newline-after-var": 0, //变量声明后必须空一行
      "no-array-constructor": 2, //不允许使用数组构造器
      "no-inline-comments": 0, //不允许行内注释
      "no-lonely-if": 0, //不允许else语句内只有if语句
      "no-mixed-spaces-and-tabs": [2, "smart-tabs"], //不允许混用tab和空格
      "no-multiple-empty-lines": [2, {"max": 2}], //空行最多不能超过两行
      "no-nested-ternary": 2, //不允许使用嵌套的三目运算符
      "no-new-object": 2, //禁止使用new Object()
      "fun-call-spacing": 2, //函数调用时，函数名与()之间不能有空格
      "no-ternary": 0, //不允许使用三目运算符
      "no-trailing-spaces": 2, //一行最后不允许有空格
      "no-underscore-dangle": 2, //不允许标识符以下划线开头
      "no-extra-parens": 0, //不允许出现多余的括号
      "one-var": 0, //强制变量声明放在一起
      "operator-assignment": 0, //赋值运算符的风格
      "padded-blocks": [2, "never"], //块内行首行尾是否空行
      "quote-props": 0, //对象字面量中属性名加引号
      "quotes": [1, "single", "avoid-escape"], //引号风格
      "semi": [2, "always"], //强制语句分号结尾
      "semi-spacing": [2, {"before": false, "after": true}], //分后前后空格
      "sort-vars": 0, //变量声明时排序
      "space-before-blocks": [2, "always"], //块前的空格
      "space-before-function-paren": [2, {"anonymous": "always", "named": "never"}], //函数定义时括号前的空格
      "space-infix-ops": [2, {"int32Hint": true}], //操作符周围的空格
      "keyword-spacing": 2, //关键字前后的空格
      "space-unary-ops": [2, { "words": true, "nonwords": false}], //一元运算符前后不要加空格
      "wrap-regex": 2, //正则表达式字面量用括号括起来
      "no-var": 0, //使用let和const代替var
      "generator-star-spacing": [2, "both"], //生成器函数前后空格
      "max-depth": 0, //嵌套块深度
      "max-len": 0, //一行最大长度，单位为字符
      "max-params": 0, //函数最多能有多少个参数
      "max-statements": 0, //函数内最多有几个声明
      "no-bitwise": 0, //不允许使用位运算符
      "no-plusplus": 0 //不允许使用++ --运算符
  }
```

##### 103.如何在 Vs Code 中进行 Lint 校验提示？如何在 Vs Code 中进行 Lint 保存格式化？

答：

- 打开终端，运行npm install eslint -g全局安装ESLint。
- vscode安装插件
- scode 扩展设置

##### 104.ESLint 和 Prettier 的区别是什么？两者在一起工作时会产生问题吗？

答：

这俩解决的不是一个问题，ESLint 主要解决的是代码质量问题;Prettier主要解决的是代码风格问题。 两者在一起会产生问题。

需要解决： 首先我们需要使用 eslint-config-prettier 来关掉 (disable) 所有和 Prettier 冲突的 ESLint 的配置（这部分配置就是上面说的，格式问题的配置，所以关掉不会有问题），方法就是在 .eslintrc 里面将 prettier 设为最后一个 extends。

```js
// .eslintrc    
{      
    "extends": ["prettier"] // prettier 一定要是最后一个，才能确保覆盖    
}
```

(可选，推荐) 然后再启用 eslint-plugin-prettier ，将 prettier 的 rules 以插件的形式加入到 ESLint 里面。这里插一句，为什么"可选" ？当你使用 Prettier + ESLint 的时候，其实格式问题两个都有参与，disable ESLint 之后，其实格式的问题已经全部由 prettier 接手了。那我们为什么还要这个 plugin？其实是因为我们期望报错的来源依旧是 ESLint ，使用这个，相当于把 Prettier 推荐的格式问题的配置以 ESLint rules 的方式写入，这样相当于可以统一代码问题的来源。

```js
// .eslintrc    
{      
    "plugins": ["prettier"],      
    "rules": {        
        "prettier/prettier": "error"      
    }    
}
```

将上面两个步骤和在一起就是下面的配置，也是官方的推荐配置

```js
// .eslintrc
{
  "extends": ["plugin:prettier/recommended"]
}
```

##### 105.如何有效的识别 ESLint 和 Prettier 可能产生冲突的格式规则？如何解决此类规则冲突问题？

答：

- 鼠标右键，选择文档格式设置方式。
- 在弹出的下拉列表中选择prettier。这时已经使用了prettier格式化了代码。
- ctrl+shift+p,然后下拉列表中选择格式化文档。

假设你的默认格式化程序是prettier，那么稍作改变即可，相信你已经知道怎样操作，不再赘述。 这样，你先使用prettier格式化了代码，再使用eslint去纠正了不符合eslint规则的部分，就实现了两者冲突的解决。

##### 106.在通常的脚手架项目中进行热更新（hot module replacement）时如何做到 ESLint 实时打印校验错误信息？

答：

Ctrl+s / command+s 时自动修复代码的格式错误,自动修复的规则是读取项目根目录的Eslint规则。

##### 107.谈谈你对 SourceMap 的了解？

答：

sourceMap就是一个信息文件，里面储存着打包前的位置信息。也就是说，转换后的代码的每一个位置，所对应的转换前的位置。有了它，出错的时候，浏览器控制台将直接显示原始代码出错的位置，而不是转换后的代码，点击出错信息将直接跳转到原始代码位置。方便定位和解决问题。

##### 108.如何调试 Node.js 代码？如何调试 Node.js TypeScript 代码？在浏览器中如何调试 Node.js 代码？

答：

从nodejs8开始,node去掉了_debugger , 内部集成了inspect , 以往使用node-inspect实现的在线调试不再可用.node8开始要用新方法了。

- 在服务端用inspect模式运行nodejs

```js
node --inspect-brk=0.0.0.0:8080 index.js
```

- 打开chrome浏览器 地址栏输入`chrome://inspect`,在弹出的界面中输入ip:port即可调试。

##### 109.列举你知道的所有构建工具并说说这些工具的优缺点？这些构建工具在不同的场景下应该如何选型？

答：

Grunt、Gulp、Webpack、vite、Rollup

##### 110.VS Code 配置中的用户和工作区有什么区别？

答：

VS Code提供了两种设置方式：

- 用户设置： 这种方式进行的设置，会应用于该用户打开的所有工程；
- 工作空间设置：工作空间是指使用VS Code打开的某个文件夹，在该文件夹下会创建一个名为.vscode的隐藏文件夹，里面包含着仅适用于当前目录的VS Code的设置，工作空间的设置会覆盖用户的设置。

"用户设置"会应用于用户打开的所有工程；

"工作区设置"仅适用于当前目录的VS Code的设置。

##### 111.VS Code 的插件可以只对当前项目生效吗？

答：

当然不是。

##### 112.你所知道的测试有哪些测试类型？

答：

功能测试,性能测试,界面测试

##### 113.你所知道的测试框架有哪些？

答：

Selenium、cypress、Appium 、Requests、Jmeter、Mitmproxy

##### 114.什么是 e2e 测试？有哪些 e2e 的测试框架？

答：

端到端测试；

cypress 、Selenium 、puppeteer、nightwatch

##### 115.假设现在有一个插入排序算法，如何对该算法进行单元测试？

答：

```js
// 见试卷背面
```

##### 116.CDN 服务如何实现网络加速？

答：

CDN的工作原理就是将您源站的资源缓存到位于全球各地的CDN节点上，用户请求资源时，就近返回节点上缓存的资源，而不需要每个用户的请求都回您的源站获取，避免网络拥塞、缓解源站压力，保证用户访问资源的速度和体验。

##### 117.WebSocket 使用的是 TCP 还是 UDP 协议？

答：

是基于TCP的,websocket的协议是在TCP/IP协议簇的应用层，和http在同一层。

##### 118.什么是单工、半双工和全双工通信？

答：

- 单工数据传输只支持数据在一个方向上传输;
- 半双工数据传输允许数据在两个方向上传输，但是，在某一时刻，只允许数据在一个方向上传输，它实际上是一种切换方向的单工通信；
- 全双工数据通信允许数据同时在两个方向上传输，因此，全双工通信是两个单工通信方式的结合，它要求发送设备和接收设备都有独立的接收和发送能力。

##### 119.简单描述 HTTP 协议发送一个带域名的 URL 请求的协议传输过程？（DNS、TCP、IP、链路）

答： 略（内容太多）

简单回答一个不全的答案，剩下需要深入的等面试官一个一个问：

- 浏览器通过请求得到一个HTML文本
- 渲染进程解析HTML文本，构建DOM树
- 解析HTML的同时，如果遇到内联样式或者样式脚本，则下载并构建样式规则（stytle rules），若遇到JavaScript脚本，则会下载执行脚本。
- DOM树和样式规则构建完成之后，渲染进程将两者合并成渲染树（render tree）
- 渲染进程开始对渲染树进行布局，生成布局树（layout tree）
- 渲染进程对布局树进行绘制，生成绘制记录
- 渲染进程的对布局树进行分层，分别栅格化每一层，并得到合成帧
- 渲染进程将合成帧信息发送给GPU进程显示到页面中

##### 120.什么是正向代理？什么是反向代理？

答：

代理其本质上可以理解为中介。当A和B不方便进行交互时，往往会引入一个中间角色C，那么C便是中介，便是代理。

正向代理服务器通常位于客户端和服务器之间，类似一个跳板机，通过代理服务器可以访问到目标服务器。

正向代理时，通常，客户端发送对目标服务器的请求，代理服务器在中间将请求转发给目标服务器，并将结果返回给客户端。

反向代理与正向代理恰好相反，代理服务位于服务器端。

对客户端来说，反向代理服务器就好像是目标服务器。反向代理服务器接收客户端发来的请求，然后将其分发到内网的服务器，并将内网服务器返回的结果返回给客户端。

整个过程客户端并不会感知到反向代理后面的服务，也不需要客户端做任何设置，只需要把反向代理服务器当成真正的服务器就行。

##### 121.Cookie 可以在服务端生成吗？Cookie 在服务端生成后的工作流程是什么样的？

答：

可以。 HTTP 协议中的 Cookie 包括 Web Cookie 和浏览器 Cookie，它是服务器发送到 Web 浏览器的一小块数据。服务器发送到浏览器的 Cookie，浏览器会进行存储，并与下一个请求一起发送到服务器。通常，它用于判断两个请求是否来自于同一个浏览器，例如用户保持登录状态。

##### 122.Session、Cookie 的区别和关联？如何进行临时性和永久性的 Session 存储？

答：

- Session

客户端请求服务端，服务端会为这次请求开辟一块内存空间，这个对象便是 Session 对象，存储结构为 ConcurrentHashMap。Session 弥补了 HTTP 无状态特性，服务器可以利用 Session 存储客户端在同一个会话期间的一些操作记录。

- Cookies

HTTP 协议中的 Cookie 包括 Web Cookie 和浏览器 Cookie，它是服务器发送到 Web 浏览器的一小块数据。服务器发送到浏览器的 Cookie，浏览器会进行存储，并与下一个请求一起发送到服务器。通常，它用于判断两个请求是否来自于同一个浏览器，例如用户保持登录状态。

服务器端session,如果你不指定session的存储时间，在你打开的浏览器中存储的值，是可以在新打开的框口内得到的，关闭后就自动消失（消失的其实是session_id,因为session的机制是依赖于cookie的（还可以依赖其他的）。

##### 123.设置 Cookie 时候如何防止 XSS 攻击？

答：

在服务器端设置cookie的时候设置 http-only, 这样就可以防止用户通过JS获取cookie。对cookie的读写或发送一般有如下字段进行设置：

- http-only: 只允许http或https请求读取cookie、JS代码是无法读取cookie的(document.cookie会显示http-only的cookie项被自动过滤掉)。发送请求时自动发送cookie.
- secure-only: 只允许https请求读取，发送请求时自动发送cookie。
- host-only: 只允许主机域名与domain设置完成一致的网站才能访问该cookie。

设置Cookie，可以防止攻击者拿到正常用户的Cookie冒充身份非法调用网站接口。

##### 124.简单描述一下用户免登陆的实现过程？可能会出现哪些安全性问题？一般如何对用户登录的密码进行加密？

答：

在用户第一次登录成功的时候，后端会返回一个 Token，这个值Token 主要的作用就是用于识别用户的身份。相当于账号密码。正常情况下，前端给后端发送请求的时候，后端都需要先判断用户的身份，来返回相应的数据给用户。获取到Token后，你需要把 Token 存在 Cookie中。接着向服务器发送请求时，你从  Cookie 中取出 Token，在请求头中携带上  Token 。Token过期时间设置足够长，只要token没过期，这段时间用户都是免登录。

安全问题：其他人使用本机，实现免登录，无法在每次使用应用时验证用户的身份。提供了便捷，失去了安全校验。

对用户登录的密码进行加密，密码MD5化，不使用明文传输。

##### 125.HTTP 中提升传输速率的方式有哪些？常用的内容编码方式有哪些？

答：

- 使用压缩技术把实体主体压小，在客户端再把数据解析。
- 使用分块传输编码，将实体主体分块传输，当浏览器解析到实体主体就能够显示了。

常用的内容编码方式：

- 非归零码
- 曼彻斯特编码
- 差分曼彻斯特编码

##### 126.传输图片的过程中如果突然中断，如何在恢复后从之前的中断中恢复传输？

答：

文件的断点续传，

前端工作

- 为每一个文件切割块添加不同的标识
- 当上传成功的之后，记录上传成功的标识
- 当我们暂停或者发送失败后，可以重新发送没有上传成功的切割文件

后端工作

- 接收每一个切割文件，并在接收成功后，存到指定位置，并告诉前端接收成功
- 收到合并信号，将所有的切割文件排序，合并，生成最终的大文件，然后删除切割小文件，并告知前端大文件的地址

##### 127.什么是代理？什么是网关？代理和网关的作用是什么？

答：

代理是中间人，使用代理的主机发出的IP报文的目的IP是代理的，但是会在应用层里明确告诉代理，自己真实需求是什么。 网关即Gateway，它是连接基于不同通信协议的网络的设备，使文件可以在这些网络之间传输。

##### 128.HTTPS 相比 HTTP 为什么更加安全可靠？

答：

因为 HTTPS 保证了传输安全，防止传输过程被监听、防止数据被窃取，可以确认网站的真实性（具体细节二面再说）。不过需要注意的是，即便使用 HTTPS 仍可能会被抓包，因为HTTPS 只防止用户在不知情的情况下通信被监听，如果用户主动授信，是可以构建“中间人”网络，代理软件可以对传输内容进行解密。

##### 129.什么是对称密钥（共享密钥）加密？什么是非对称密钥（公开密钥）加密？哪个更加安全？

答：

传统的对称式加密需要通讯双方都保存同一份密钥，通过这份密钥进行加密和解密。所以非对称加密也称为单密钥加密。 在非对称加密中，加密和解密使用的是不同的密钥。非对称加密中的密钥分为公钥和私钥。公钥顾名思义就是公开的，任何人都可以通过公钥进行信息加密，但是只有用户私钥的人才能完成信息解密。非对称加密带来了一个好处，避免了对称式加密需要传输和保存同一份密钥的痛苦。

非对称加密一定比对称加密机密性更高吗? 不一定, 因为机密性高低是根据秘钥长度而变化的。而且非对称加密最大的问题，就是性能较差，无法应用于长期的通信。

##### 130.你觉得 HTTP 协议目前存在哪些缺点？

答：

HTTP不具备必要的安全功能，与最初的设计相比，现今的Web网站应用的HTTP协议的使用方式已发生了翻天覆地的变化。几乎现今所有的Web网站都会使用会话(session)管理、加密处理等安全性方面的功能，而HTTP协议内并不具备这些功能。

从整体上看，HTTP就是一个通用的单纯协议机制。因此它具备较多优势，但是在安全性方面则呈劣势。 就拿远程登录时会用到的SSH协议来说，SSH具备协议级别的认证及会话管理等功能，HTTP协议则没有。另外在架设SSH服务方面，任何人都可以轻易地创建安全等级高的服务，而HTTP即使已架设好服务器，但若想提供服务器基础上的Web应用，很多情况下都需要重新开发。

因此，开发者需要自行设计并开发认证及会话管理功能来满足Web应用的安全。而自行设计就意味着会出现各种形形色色的实现。结果，安全等级并不完备，可仍在运作的Web应用背后却隐藏着各种容易被攻击者滥用的安全漏洞的Bug。

##### 131.在 React 中如何识别一个表单项里的表单做到了最小粒度 / 代价的渲染？

答：

首先，最小粒度 / 代价的渲染的表单项or组件应该具备什么样的特性:

- 简单易用
- 父组件可通过代码操作表单数据
- 避免不必要的组件重绘
- 支持自定义组件
- 支持表单校验

而这个表单项or组件实现起来主要分为三部分：

- Form：用于传递表单上下文。
- Field： 表单域组件，用于自动传入value和onChange到表单组件。
- FormStore： 存储表单数据，封装相关操作。

为了能减少使用ref，同时又能操作表单数据（取值、修改值、手动校验等），我将用于存储数据的FormStore，从Form组件中分离出来，通过new FormStore()创建并手动传入Form组件。

符合以上标准，就可以认为这个表单做到了最小粒度/最小代价的渲染。

对于有大量表单的页面，可以使用Lighthouse作为衡量工具，来排查和优化页面。

##### 132.在 React 的开发的过程中你能想到哪些控制渲染成本的方法？

答：

- 使用 shouldComponentUpdate 规避冗余的更新逻辑
- PureComponent + Immutable.js
- React.memo 与 useMemo

使用 useMemo，我们可以对函数组件的执行逻辑进行更加细粒度的管控（尤其是定向规避掉一些高开销的计算），同时也弥补了 React.memo 无法感知函数内部状态的遗憾，这对我们整体的性能提升是大有裨益的。

##### 133.Vue CLI 3.x 的插件系统是如何设计的？

答：

[Vue-cli@3.0](https://link.juejin.cn/?target=mailto%3AVue-cli%403.0) 采用了一套基于插件的架构，它将部分核心功能收敛至 CLI 内部，同时对开发者暴露可拓展的 API 以供开发者对 CLI 的功能进行灵活的拓展和配置。

整个插件系统当中包含2个重要的组成部分：

- @vue/cli，提供 cli 命令服务，例如vue create创建一个新的项目；

@vue/cli 提供 vue cli 命令，负责偏好设置，生成模板、安装插件依赖的工作，例如 `vue create <projectName> `、 `vue add <pluginName>`

- @vue/cli-service，提供了本地开发构建服务。

@vue/cli-service 作为 @vue/cli 整个插件系统当中的内部核心插件，提供了 webpack 配置更新，本地开发构建服务

前者主要完成了对于插件的依赖管理，项目模板的拓展等，后者主要是提供了在运行时本地开发构建的服务，同时后者也作为 @vue/cli 整个插件系统当中的内部核心插件而存在。在插件系统内部也对核心功能进行了插件化的拆解，例如 @vue/cli-service 内置的基础 webpack 配置，npm script 命令等。

@vue/cli-service 插件系统当中几个核心的模块：

- Service.js 提供服务的基类，它提供了 @vue/cli 生态当中本地开发构建时：插件加载(包括内部插件和项目应用插件)、插件的初始化，它的单例被所有的插件所共享，插件使用它的单例去完成 webpack 的更新。
- PluginAPI.js 提供供插件使用的对象接口，它和插件是一一对应的关系。所有供 @vue/cli-service 使用的本地开发构建的插件接收的第一个参数都是 PluginAPI 的实例（ api ），插件使用这个实例去完成 CLI 命令的注册及对应服务的执行、webpack 配置的更新等。

##### 134.Webpack 中的插件机制是如何设计的？

答：

Webpack 插件机制的目的是为了增强 Webpack 在项目自动化构建方面的能力。在webpack中 Loader 就是负责完成项目中各种各样资源模块的加载，从而实现整体项目的模块化，而 Plugin 则是用来解决项目中除了资源模块打包以外的其他自动化工作，对比 Loader 只是在模块的加载环节工作，而插件的作用范围几乎可以触及 Webpack 工作的每一个环节。

Webpack 的插件机制就是我们在软件开发中最常见的钩子机制。钩子机制也特别容易理解，它有点类似于 Web 中的事件。在 Webpack 整个工作过程会有很多环节，为了便于插件的扩展，Webpack 几乎在每一个环节都埋下了一个钩子。这样我们在开发插件的时候，通过往这些不同节点上挂载不同的任务，就可以轻松扩展 Webpack 的能力。

##### 135.\r\n（CRLF） 和 \n （LF）的区别是什么？(Vs Code 的右下角可以切换)

答：

\r\n 表示回车并换行 (则会将打印纸张上移一行，且下一个打字位置将回到该行的最左侧) \n 表示换行

##### 136./dev/null 的作用是啥？

答：

/dev/null:表示 的是一个黑洞，通常用于丢弃不需要的数据输出， 或者用于输入流的空文件

- 将无用的输出流写入到黑洞丢弃。

curl -Iwww.baidu.com 2>/dev/null | head -l  错误信息定位到黑洞

- 清空文件

cat /dev/null > /home/omc/h.txt

- 在书写定时任务总，规范的写法就是将所有定时任务脚本结尾加上>/dev/null 2>&1，让所有的输出流（包括错误的和正确的）都定向到空设备丢弃。

##### 137.如何在 Mac 的终端中设置一个命令的别名？

答：

- 打开编辑.bash_profile
- 配置别名

```bash
alias dev="npm run dev"
```

- 保存之后重新打开terminal或者执行

##### 138.如何在 Windows 中设置环境变量？

答：

- 查看当前所有可用的环境变量：输入 set 即可查看。
- 查看某个环境变量：输入 “set 变量名”即可，比如想查看path变量的值，即输入 set path
- 修改环境变量 ：输入 “set 变量名=变量内容”即可
- 修改变量（设置为空：如果想将某一变量设置为空，输入“set 变量名=”即可。 修改成其他值：输入“set 变量名=%变量名%;变量内容”）

##### 139.Mac 的文件操作系统默认区分文件路径的大小写吗？

答：

默认不区分，想要区分，就在重装系统or单独分区的时候，选择 MAC OS 扩展（区分大小写，日志格式）

##### 140.编写 Shell 脚本时如何设置文件的绝对路径？

答：

```bash
SHELL_FOLDER=$(dirname $(readlink -f "$0"))
```

##### 141.Session、Cookie 的区别和关联？如何进行临时性和永久性的 Session 存储？

答：

- Session

客户端请求服务端，服务端会为这次请求开辟一块内存空间，这个对象便是 Session 对象，存储结构为 ConcurrentHashMap。Session 弥补了 HTTP 无状态特性，服务器可以利用 Session 存储客户端在同一个会话期间的一些操作记录。

- Cookies

HTTP 协议中的 Cookie 包括 Web Cookie 和浏览器 Cookie，它是服务器发送到 Web 浏览器的一小块数据。服务器发送到浏览器的 Cookie，浏览器会进行存储，并与下一个请求一起发送到服务器。通常，它用于判断两个请求是否来自于同一个浏览器，例如用户保持登录状态。

服务器端session,如果你不指定session的存储时间，在你打开的浏览器中存储的值，是可以在新打开的框口内得到的，关闭后就自动消失（消失的其实是session_id,因为session的机制是依赖于cookie的（还可以依赖其他的）。

##### 142.如何部署 Node.js 应用？如何处理负载均衡中 Session 的一致性问题？

答：

题目太大，篇幅有限，略。

##### 143.如何提升 Node.js 代码的运行稳定性？

答：

- 保障进程安全

由于一个用户的异常访问或者数据异常，加上没有做好异常处理和安全保护，直接导致了整个 Node.js 服务重启了，从而中断了所有人的请求，用户体验非常差。 ①由于 Node.js 使用的是 JavaScript，而JavaScript 是一个弱类型语言，因此在现网经常会引发一些由代码逻辑的异常导致的进程异常退出。 ②其次在 Node.js 中也经常会因为内存的使用不当，导致内存泄漏，当在 64 位系统中达到 1.4 G（32 位系统 0.7 G）时，Node.js 就会异常崩溃。 ③再而由于Node.js 的 I/O 较多也较为频繁，当启用较多 I/O 句柄，但是没有及时释放，同样会引发进程问题。

- parameters error

关于 JSON.parse 很多时候我们都比较自然地将其他接口或者第三方的数据拿来解析，但是这里往往会忽略其非 JSON 字符串的问题，在这里需要进行try catch 异常判断。

- other errors

当前 Node.js 的 Promise 应用越来越广泛了，因此对于 Promise 的 catch 也应该多进行重视，对于每个 Promise 都应该要处理其异常 catch 逻辑，不然系统会提示 warning 信息。 还有一些常见的长连接的服务，比如 Socket、Redis、Memcache 等等，我们需要在连接异常时进行处理，如果没有处理同样会导致异常，比如 Socket 提供了 Socket.on(‘error’) 的监听。

- 注意服务异常方面的内存泄露

设置最大临时缓存数，超出则不使用缓存；设置最大缓存句柄数，超出则不使用缓存；定时清理当前的临时缓存和句柄缓存。

- 避免全局变量

一般情况下不建议使用全局变量，全局变量必须要有一定的上限和清理规则才能保证服务的安全。

- 避免单例模块中的变量内存泄漏

要注意一个点，有些模块我们使用单例的模式，就是在每次 require 后都返回这个对象，这种情况也比较容易引发内存泄漏的问题。因为单例模式会引发每个用户访问的数据的叠加。

- 主动关闭打开文件后未关闭的情况

一般打开文件句柄后，我们都应该主动关闭，如果未主动关闭，就会导致文件句柄越来越多，从而引发句柄泄漏问题。

##### 144.GraphQL 与 Restful 的区别，它有什么优点？

答：

QraphQL是对后端REST API向业务层的聚合与裁剪，REST更关注对业务细粒度的拆分与重用。

其实就是增加了一个中间层对前端的请求和响应做预处理和后处理，前端的工作少了，后端的工作也没多，却加入了中端的依赖，好处是避免前端和后端的多次远距离的交互。 而graphql存在一个很难控制的问题就是查询复杂度。在开发过程中需要把控好解析粒度，而就目前主流关系型数据库，restful api依旧是最好的选择。graphql准确的说在查询图结构数据时更有优势，这也是其名称的主意。

##### 145.Vue SSR 的工作原理？Vuex 的数据如何同构渲染？

答：

在Vue SSR中，创建Vue实例、创建store和创建router都是套了一层工厂函数的，目的就是避免数据的交叉污染。在服务端只能执行生命周期中的created和beforeCreate，原因是在服务端是无法操纵dom。服务端渲染和客户端渲染不同，需要创建两个entry分别跑在服务端和客户端，并且需要webpack对其分别打包；SSR服务端请求不带cookie，需要手动拿到浏览器的cookie传给服务端的请求。SSR要求dom结构规范，因为浏览器会自动给HTML添加一些结构比如tbody，但是客户端进行混淆服务端放回的HTML时，不会添加这些标签，导致混淆后的HTML和浏览器渲染的HTML不匹配。

对于同构应用来说，我们必须实现客户端与服务端的路由、模型组件、数据模型的共享。Vuex是实现我们客户端和服务端的状态共享的关键，我们可以不使用vuex，但是我们得去实现一套数据预取的逻辑；可以尝试封装一个可以给组件们共享的EventBus，在main.js中export出我们的EventBus以便两个entry使用，接下来是我们的两个entry了。server用来匹配我们的组件并调用组件的asyncData方法去获取数据，client用来将预渲染的数据存储到我们eventBus中的data中。这样就相当于实现类Vuex的功能。

##### 146.SSR 技术和 SPA 技术的各自的优缺点是什么？

答：

SSR：

- 更利于SEO。
- 更利于首屏渲染
- 服务端压力较大

SPA：

- 页面之间的切换非常快
- 一定程度上减少了后端服务器的压力（不用管页面逻辑和渲染）
- 后端程序只需要提供API，完全不用管客户端到底是Web界面还是手机等
- 不利于SEO
- 首屏加载压力大

##### 147.如何处理 Node.js 渲染 HTML 压力过大问题？

答：

暂时没遇到慢的情况，无法回答，放弃此题。

##### 148.你所知道的 CI / CD 工具有哪些？在项目中有接触过类似的流程吗？

答：

CICD，持续集成和持续交付,各个部门合作同一个项目时，各种管理的仓库发生变更，就会自动对代码进行测试和构建，等Pipline跑完之后，反馈运行结果，自动打出最新的master包。

常用的CICD工具有Jenkins 、Travis 等等。

##### 149.如果让你实现一个 Web 前端的 CI / CD 工程研发平台，你会如何设计？

答：

题目太大，篇幅有限，略。

##### 150.如果我们需要将已有项目中的线上产物资源（例如图片）转换成本地私有化资源，你有什么解决方案？

答：

不知道这道题是想问我如何把线上已有的资源重新搜集成本地的素材中心，还是单纯的把 显示资源换成本地的。 我对这道题目的理解是： 比如一个页面内有一个el-table，5000页，每页20个商品，你也不知道每个商品的链接，每个商品后面的URL还没有规律，此时对于开发者而言，你所知道的也就是页面的节点、接口的API这两个关键信息了。想要把这20*5000个商品的商品详情图重新整理本地素材中心，那就手写一个爬虫，一次性爬完，把所有的资源路径拿下来。或者写一个chrome插件一键收集。

如果只是单纯的想把本应用的生产环境静态资源换成本地的，直接找到 应用的静态资源链接，找到它的baseUrl，换成本地的dev环境下的baseUrl就可以了。一般项目的静态资源和服务端服务都是分开发的，两者独立，分开推送。并且每次发版，静态资源都有自己所属的版本号。

##### 151.如何使用 Vue CLI 3.x 定制一个脚手架？比如内部自动集成了 i18n、 axios、Element UI、路由守卫等？

答：

```js
// 见试卷背面
```

##### 152.Jenkins 如何配合 Node.js 脚本进行 CI / CD 设计？

答：

```js
// 见试卷背面
```

##### 153.如果让你设计一个通用的项目脚手架，你会如何设计？一个通用的脚手架一般需要具备哪些能力？

答：

参考vue-cli，至少满足以下几点：

- 解耦：脚手架与模板分离
- 脚手架负责构建流程，通过命令行与用户交互，获取项目信息
- 模板负责统一项目结构、工作流程、依赖项管理
- 脚手架需要检测模板的版本是否有更新，支持模板的删除与新建

##### 154.如果让你设计一个通用的工具库，你会如何设计？一个通用的工具库一般需要具备哪些能力？

答：

至少满足4个条件

- 选择通用、合适、便捷的构建工具，方便打包代码，并且易于调试；
- 注重代码质量和开发效率，有类型推断及静态检查能力（提前写好TS）；
- api简单易用，易于上手，文档实时更新；
- 易于开发者拓展、版本升级保持向前兼容。

##### 155.假设你自己实现的 React 或 Vue 的组件库要设计演示文档，你会如何设计？设计的文档需要实现哪些功能？

答：

写代码之前就要写好文档，没有文档的组件库=白写。文档不仅仅是给使用者看的，同时也是维护者给自己产品的一种宏观把控。 文档第一要实时、简洁，易于上手；第二要做好版本控制，无论是Vue组件库，还是小程序组件库，很多时候都要考虑大环境的限制（比如Vue的api变动、小程序基础库的变动），要实时更新和兼容，遇到无法兼容的版本隔阂，要特别说明，适当的地方throw waring；第三，要支持按需加载和通用性和高拓展性，我曾经也只是一个组件库api调用大师，现在也在维护自己的组件库，我深知UI库最大的问题不是样式不全，而是别人觉得你的不好用，为了用你一个toast而要下载整个组件库，得不偿失，按需加载很重要，支持拓展更重要，方便其他的开发者在你的组件库上打补丁。

##### 156.在设计工具库包的时候你是如何设计 API 文档的？

答：

这个不算是问题，设计和整理API文档，能体现维护者对自己产品的态度，在开发之时就要开始整理，而不是等全部开发完。在写API文档的同时还可以帮助你从旁观者的角度审核你的产品功能。具体API文档的实现方案，可以使用vuepress、rap2等等之类的。

##### 157.什么是单点登录？如何做单点登录？

答： 单点登录是指在同一帐号平台下的多个应用系统中，用户只需登录一次，就可访问所有相互信任的应用系统。比如你在网页中登录了百度云盘，随后你再去贴吧发帖 是不需要二次登录的。

单点登录的本质就是在多个应用系统中共享登录状态。如果用户的登录状态是记录在 Session 中的，要实现共享登录状态，就要先共享 Session，比如可以将 Session 序列化到 Redis 中，让多个应用系统共享同一个 Redis，直接读取 Redis 来获取 Session。

因为不同的应用系统有着不同的域名，尽管 Session 共享了，但是一个企业不同应用的域名不同，依然可能出现跨站or跨域。

前端方面的实现方式:

- 父域 Cookie
- 认证中心
- LocalStorage 跨域

##### 158.如何做一个项目的国际化方案？

答：

方式有2类，

一、通过i18等插件，在项目代码中定义语言环境，通过通用的语言翻译函数，提供的功能就是静态和动态文案的翻译。主要思路就是通过构建工具去完成样式, 图片替换, class属性等的替换工作，在业务代码中不会出现过多的因国际化而多出的变量名，同时使用一个通用的翻译函数去完成静态文案及动态文案的翻译工作，而不用使用不同框架提供的相应的国际化插件。

二、在项目中不使用插件，而是封装一套通用的翻译函数，在后台服务那边定义语言环境，通过API服务调用不同的主题和语言环境，返回不同的字段和页面内容。（项目代码中无中文，全是用翻译函数包裹后的变量）

##### 159.如何做一个项目的监控和埋点方案？

答：

监控是做法，埋点是工具，数据分析是目的。这三者一条道上的不同角色。

监控什么，一般前端项目所要监控的数据主要分为5种：

- 系统的生命周期数据，可用于观察页面性能情况、整体访问情况等。
- HTTP 测速数据，可用于观察外部服务调用情况 、页面性能优化等。
- 系统异常数据，可用于观察系统稳定性、系统异常问题。
- 用户行为数据，可用于观察页面稳定性、整体访问情况等。
- 用户日志，用于进行用户反馈的问题排查。

前端常见的埋点方案有三种：代码埋点、可视化埋点、无痕埋点。 不管使用哪种埋点方式，我们都需要对数据进行标准化处理。由于最终的数据需要落盘到服务端并进行计算和监控，因此我们需要将采集的数据，按照与服务端约定好的协议格式来进行转换。

为了快速发现并定位问题，我们需要将这些埋点的数据、运行的日志上报发送到服务端，服务端再进行转换、存储、计算和监控。一般采用new一个gif的形式上报，同时为了避免数据的上报过于频繁、增加服务端的压力，我们可以在本地进行数据的整合，比如通过队列或数组的方式进行维护，然后选择以下方式/时机进行上报。

```
插一句话，有些场景我们需要知道用户设备崩溃or异常的数据情况，但往往这种情况下埋点没有触发，或者该触发的时候用户退出应用了，所以这里建议把需要埋点上报的数据离线上传，就是把埋点上报队列，放在缓存里，慢慢吐泡泡，同时不跟主业务流程中的API服务竞争资源。
```

数据上报完成后，一般来说需要搭建可视化的管理端，来对这些数据进行直观的监控。在日常监控中，我们还会通过对监控数据、配置告警阈值等方式，结合邮件、机器人等方式推送到相关的人员，来及时发现并解决问题。比如如果5分钟的异常数量大于阀值，就钉钉or短信报警，让相关同事及时修复功能异常。如果想要做得更多，我们甚至可以结合其他系统来进行协作，比如关联 BUG 管理系统、自动生成 BUG 单，将 BUG 单绑定到对应的版本分支上，通过提交对应的修复分支、进行测试验证后，自动地扭转 BUG 单状态，等等。

##### 160.如何建设项目的稳定性（监控、灰度、错误降级、回滚...）？

答：

我没有当过Leader，以下纯从队友角度回答。

事前：进行合理的分工排期，对项目风险进行把控，学会自测，不要把所有的风险都抛给测试同学处理。

事后：对发布上线的产品及时监控，观察是否运行正常，是否符合预期。遇到上线后带了bug，或者上线版本异常，此时首要目标时恢复业务，及时回滚，不要尝试用新版本覆盖。

复盘：及时发现自己的问题并改进，避免掉进同一个坑；让团队成员和管理者知道自己在做什么；整理沉淀和分享项目经验，不奢求让整个团队都得到成长，至少自己在这个产品开发周期内有所收获。

##### 161.一般管理后台型的应用需要考虑哪些性能方面的优化？

答：

一般的管理后台应用，基本就是Vue+Element，或者React+antd这样的组件，并且业务还是toB，to内部使用的这种，一般都是SPA，在性能方面，也不是那么讲究， 代码角度的优化：

- 各个模块间解耦，将各个模块统一交由框架处理，梳理各个模块的职责，明确每个模块负责的工作和提供的功能，确定各个模块间的边界和调用方式。
- 模块以服务的方式进行注册，通过声明依赖的方式来获取需要使用的服务，框架会对模块间依赖关系进行分析，判断某个服务是否需要初始化和销毁，从而避免了不必要的服务被加载。
- 拆公共库、拆组件库，代码复用，对重复逻辑进行组件和公共库的抽象和封装。避免出现一个方法重复到处copy的情况；UI库按需引用，移除不必要的代码（比如使用 Tree-shaking）。异步加载模块，根据业务需要将模块拆分成多个步骤加载（比如优化依赖注入框架对模块分批初始化）。
- 差异化服务，对于不同场景只加载所需要的模块内容（比如读写分离）。

工程角度的优化：

- 静态资源使用 CDN
- 压缩文件
- 对于图表比较多的CRM管理平台应用，考虑图片优化，比如精灵图、懒加载
- HTTP2
- 通过 webpack 按需加载代码，提取第三库代码，减少 ES6 转为 ES5 的冗余代码

`骚操作禁区`：

- 不要在后台管理仪表盘首页一次性请求大量的echart图表数据，如果这个页面的访问量不多，不要尝试在登录后自动跳转到这个页面，除非它真的很快，不然就是无效加载。
- 前端不要尝试请求 第0页第100000条 数据来尝试读取某个表的全部数据，问后端要接口，别自己浪，等页面卡死了，运营拿小锅锅敲你头。

##### 162.简述一些提升项目体验的案例和技术方案（骨架屏、Loading 处理、缓存、错误降级、请求重试...）？

答：

- 直播活动，商品详情页访问量大，页面加骨骼屏，等待时间过长时loading引导客户先去其他活动转转，不让用户盲等。
- 对于无论是H5还是小程序，埋点数据全部走离线上传，把埋点队列里的埋点请求全部放在缓存里，一个一个慢慢发送慢慢吐泡泡，既保证了不与主流程业务请求竞争，也不会因为用户设备退出应用闪退，而侦测不到数据，因为下次进入时只要缓存里有没吐完的泡泡（埋点请求队列）就继续发送。
- 应用的业务http请求封装一层 熔断任务队列，增加重试机制，增加token自动刷新请求等等。
- 应用页面适当的缓动动画，不仅可以为请求数据争取时间，还可以提高用户体验，不那么突兀。
- H5可使用龙骨动画、spine动画，小程序可以使用帧动画、css animation提高页面的动感，以及一定的互动营销效果。从实现和编码方面都比裸写DOM要好得多。

##### 163.假设需要对页面设计一个水印方案，你会如何设计？

答：

- 通过canvas生成水印，用canvas来生成base64图片，通过CanIUse网站查询兼容性。
- 通过SVG生成水印，相比Canvas，SVG有更好的浏览器兼容性，使用SVG生成水印的方式与Canvas的方式类似，只是base64Url的生成方式换成了SVG。
- 服务端画图，通过NodeJS生成水印。前端发一个请求，参数带上水印内容，后台返回图片内容。

##### 164.如何设计一个通用的 JSON Schema 协议使其可以动态渲染一个通用的联动表单？

答：

```js
// 见试卷背面
```

##### 165.一般的低代码平台需要具备哪些能力？

答：

阿里的imgCook、云凤蝶、京东的通天塔、满帮的码良、徐小夕的H5 Doring等等，无一例外，至少都满足一下几种能力：

- 面向业务的软件设计模式，低代码主要是给运营用的，通过模块or组件的使用，给运营人员提供物料，搭建他们自己想要的营销活动页面。
- 能够提供可复用业务组件的知识库，组件之间可以相互联合，组成新的业务组件，而不是单一独立的基础组件，可复用性、可拓展性非常高。
- 能够方便实现与第三方系统整合的流程整合能力与数据整合能力等，能够以SDK，或者npm包的形式嵌入到其他应用，或者其他应用嵌入进来，支持数据之间的整合。
- 能够支持多种部署模式，不受平台本身的限制
- 支持高度可配置化，以满足不同环境、不同规模、不同业务场景的特定要求

##### 166.使用 TypeScript 语法将没有层级的扁平数据转换成树形结构的数据

答：

```ts
interface Config {
	id?: string
	pid?: string
	children?: string
}

/**
 * constrcut 方法
 * 根据提供的 id, pid 和 children 将一个个节点构建成一棵或者多棵树
 * @param nodes 节点对象
 * @param config 配置对象
 */
export function construct(nodes: object[], config?: Config) {
	const id = config && config.id || 'id'
	const pid = config && config.pid || 'pid'
	const children = config && config.children || 'children'

	const idMap = {}
	const jsonTree = []

	nodes.forEach((v) => { v && (idMap[v[id]] = v) })
	nodes.forEach((v) => {
		if (v) {
			let parent = idMap[v[pid]]
			if (parent) {
				!parent[children] && (parent[children] = [])
				parent[children].push(v)
			} else {
				jsonTree.push(v)
			}
		}
	})

	return jsonTree
}

/**
 * destruct 方法
 * 根据配置的 id, pid 和 children 把解构化的树型对象拆解为一个个节点
 * @param forest 单个或者多个树型对象
 * @param config 配置
 */
export function destruct(forest: object[] | object, config?: Config) {
	const id = config && config.id || 'id'
	const pid = config && config.pid || 'pid'
	const children = config && config.children || 'children'

	function flatTree(tree: object) {
		const queue = [tree]
		const result = []
		while (queue.length) {
			let currentNode = queue.shift()
			if (currentNode.hasOwnProperty(id)) {
				if (!currentNode.hasOwnProperty(pid)) {
					currentNode = { ...currentNode, [pid]: null }
				}
				if (currentNode[children]) {
					currentNode[children].forEach((v) => { v && queue.push({ ...v, [pid]: currentNode[id] }) })
				}
				result.push(currentNode)
				delete currentNode[children]
			} else {
				throw new Error('you need to specify the [id] of the json tree')
			}
		}
		return result
	}

	if (Array.isArray(forest)) {
		return forest.map((v) => flatTree(v)).reduce((pre, cur) => pre.concat(cur))
	} else {
		return flatTree(forest)
	}
}

export default {
	construct,
	destruct,
}
```

##### 167.实现一个简易的模板引擎

答： 模板引擎的作用是将模板文件转换成另一种模板格式的工具，引擎内部流程是把模板文件里的内容当成字符串传入到模板引擎中，然后模板引擎根据一定语法对该字符串进行解析处理，然后返回一个函数，之后我们在执行函数时把数据传输进去，即可拿到根据模板和数据得到的新字符串。

模板 ----> 输入到模板引擎 ----> 生成函数 ----> 把数据当成参数，执行该函数 ----> 输出结果。

马上开始实现一个满足 变量定义、插值、条件判断、数组遍历 功能的建议模板引擎。

```js
"use strict";

var __PARSE__ = (function () {
  /* 语法正则 */
  const regmap = [
    // if语句开始
    {
      reg: /^if\s+(.+)/i,
      val: (all, condition) => {
        return `if(${condition}) {`;
      },
    },
    // elseif 语句开始
    {
      reg: /^elseif\s+(.+)/i,
      val: (all, condition) => {
        return `} else if(${condition}) {`;
      },
    },
    // else语句结束
    { reg: /^else/i, val: "} else {" },
    // if语句结束
    { reg: /^\/\s*if/i, val: "}" },
    // list语句开始
    {
      reg: /^list\s+([\S]+)\s+as\s+([\S]+)/i,
      val: (all, arr, item) => {
        return `for(var __INDEX__=0;__INDEX__<${arr}.length;__INDEX__++) {var ${item}=${arr}[__INDEX__];var ${item}_index=__INDEX__;`;
      },
    },
    // list语句结束
    { reg: /^\/\s*list/i, val: "}" },
    // var 语句
    {
      reg: /^var\s+(.+)/i,
      val: (all, expr) => {
        return `var ${expr};`;
      },
    },
  ];

  /** 默认的过滤器 */
  const defaultFilter = {
    // 防注入用
    escape: (str) => {
      // 防注入转码映射表
      var escapeMap = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        " ": "&nbsp;",
        '"': "&quot;",
        "'": "&#39;",
        "\n": "<br/>",
        "\r": "",
      };

      return str.replace(/\<|\>|\&|\r|\n|\s|\'|\"/g, (one) => {
        return escapeMap[one];
      });
    },
  };

  /* 转换模板语句 */
  let transStm = function (stmJs) {
    stmJs = stmJs.trim();
    for (let item of regmap) {
      if (item.reg.test(stmJs)) {
        return typeof item.val === "function"
          ? stmJs.replace(item.reg, item.val)
          : item.val;
      }
    }
  };

  /* 解析模板 */
  let doParseTemplate = function (content, data, filter) {
    content = content
      .replace(/\t/g, "  ")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r");

    // 初始化模板生成器结构
    let out = [];
    let struct = [
      "try { var OUT = [];",
      "", //放置模板生成器占位符
      "return OUT.join(''); } catch(e) { throw e; }",
    ];

    // 初始化模板变量
    let vars = [];
    Object.keys(data).forEach((name) => {
      vars.push(`var ${name} = DATA['${name}'];`);
    });
    out.push(vars.join(""));

    // 初始化过滤器
    let filters = ["var FILTERS = {};"];
    Object.keys(filter).forEach((name) => {
      if (typeof filter[name] === "function") {
        filters.push(`FILTERS['${name}'] = FILTER['${name}'];`);
      }
    });
    out.push(filters.join(""));

    // 解析模板内容
    let beg = 0; // 解析文段起始位置
    let stmbeg = 0; // 表达式起始位置
    let stmend = 0; // 表达式结束位置
    let len = content.length;
    let preCode = ""; // 表达式前的代码
    let endCode = ""; // 最后一段代码
    let stmJs = ""; // 表达式
    while (beg < len) {
      /* 开始符 */
      stmbeg = content.indexOf("{", beg);
      while (content.charAt(stmbeg - 1) === "\\") {
        // 遇到转义的情况
        stmbeg = content.indexOf("{", stmbeg + 1);
      }
      if (stmbeg === -1) {
        // 到达最后一段代码
        endCode = content.substr(beg);
        out.push("OUT.push('" + endCode + "');");
        break;
      }

      /* 结束符 */
      stmend = content.indexOf("}", stmbeg);
      while (content.charAt(stmend - 1) === "\\") {
        // 遇到转义的情况
        stmend = content.indexOf("}", stmend + 1);
      }
      if (stmend === -1) {
        // 没有结束符
        break;
      }

      // 开始符之前代码
      preCode = content.substring(beg, stmbeg);

      if (content.charAt(stmbeg - 1) === "$") {
        // 针对变量取值
        out.push(`OUT.push(\'${preCode.substr(0, preCode.length - 1)}\');`);
        stmJs = content.substring(stmbeg + 1, stmend);

        // 处理过滤器
        let tmp = "";
        stmJs.split("|").forEach((item, index) => {
          if (index === 0) {
            // 变量，强制转码
            tmp = item;
          } else {
            // 过滤器
            let farr = item.split(":");
            tmp = `FILTERS['${farr[0]}'](${tmp}`;

            if (farr[1]) {
              // 带变量的过滤器
              farr[1].split(",").forEach((fitem) => {
                tmp = `${tmp}, ${fitem}`;
              });
            }

            tmp = `${tmp})`; // 追加结尾
          }
        });

        out.push(`OUT.push((${tmp}).toString());`);
      } else {
        // 针对js语句
        out.push(`OUT.push(\'${preCode}\');`);
        stmJs = content.substring(stmbeg + 1, stmend);
        out.push(transStm(stmJs));
      }
      beg = stmend + 1;
    }

    // 合并内容
    struct[1] = out.join("");
    return new Function("DATA", "FILTER", struct.join(""));
  };

  /** 根据模板数据生成代码 */
  return function (content, data, filter) {
    try {
      data = data || {};
      filter = Object.assign({}, defaultFilter, filter);
      // 解析模板生成代码生成器
      let f = doParseTemplate(content, data, filter);
      return f(data, filter);
    } catch (ex) {
      return ex.stack;
    }
  };
})();

if (typeof module !== "undefined" && typeof exports === "object") {
  module.exports = __PARSE__;
} else {
  window.parse = __PARSE__;
}
```

##### 168.简单实现一个发布 / 订阅模式

答：

```js
const eventEmitter = {
  list: {},

  /** 订阅 */
  on(event, fn) {
    let _this = this;
    (_this.list[event] || (_this.list[event] = [])).push(fn);
    return _this;
  },

  /** 监听一次 */
  once(event, fn) {
    // 先绑定，调用后删除
    let _this = this;
    function on() {
      _this.off(event, on);
      fn.apply(_this, arguments);
    }
    on.fn = fn;
    _this.on(event, on);
    return _this;
  },

  /** 卸载 */
  off(event, fn) {
    let _this = this;
    let fns = _this.list[event];
    if (!fns) return false;
    if (!fn) {
      fns && (fns.length = 0);
    } else {
      let cb;
      for (let i = 0, cbLen = fns.length; i < cbLen; i++) {
        cb = fns[i];
        if (cb === fn || cb.fn === fn) {
          fns.splice(i, 1);
          break;
        }
      }
    }
    return _this;
  },

  /** 发布 */
  emit() {
    let _this = this;
    let event = [].shift.call(arguments),
      fns = [..._this.list[event]];
    if (!fns || fns.length === 0) {
      return false;
    }
    fns.forEach((fn) => {
      fn.apply(_this, arguments);
    });
    return _this;
  },
};
```

##### 169.匹配出字符串中 const a = require('xxx') 中的 xxx

答：

```js
// 见试卷背面
```

## 参考文献

`考试大纲`如下

基础知识主要包含以下几个方面：

- 基础：计算机原理、编译原理、数据结构、算法、设计模式、编程范式等基本知识了解
- 语法：JavaScript、ECMAScript、CSS、TypeScript、HTML、Node.js 等语法的了解和使用
- 框架：React、Vue、Egg、Koa、Express、Webpack 等原理的了解和使用
- 工程：编译工具、格式工具、Git、NPM、单元测试、Nginx、PM2、CI / CD 了解和使用
- 网络：HTTP、TCP、UDP、WebSocket、Cookie、Session、跨域、缓存、协议的了解
- 性能：编译性能、监控、白屏检测、SEO、Service Worker 等了解
- 插件：Chrome 、Vue CLI 、Webpack 等插件设计思路的理解
- 系统：Mac、Windows、Linux 系统配置的实践
- 后端：Redis 缓存、数据库、Graphql、SSR、模板引擎等了解和使用