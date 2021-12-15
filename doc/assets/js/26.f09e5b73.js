(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{589:function(e,s,a){"use strict";a.r(s);var t=a(5),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://www.bemcss.com/icon.png",alt:"bemcss"}})]),e._v(" "),a("h2",{attrs:{id:"bem解决的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bem解决的问题"}},[e._v("#")]),e._v(" BEM解决的问题")]),e._v(" "),a("p",[e._v("css的样式应用是全局性的，没有作用域可言。考虑以下场景")]),e._v(" "),a("p",[e._v("场景一：开发一个弹窗组件，在现有页面中测试都没问题，一段时间后，新需求新页面，该页面一打开这个弹窗组件，页面中样式都变样了，一查问题，原来是弹窗组件和该页面的样式相互覆盖了，接下来就是修改覆盖样式的选择器...又一段时间，又开发新页面，每次为元素命名都心惊胆战，求神拜佛，没写一条样式，F5都按多几次，每个组件都测试一遍...")]),e._v(" "),a("p",[e._v("场景二：承接上文，由于页面和弹窗样式冲突了，所以把页面的冲突样式的选择器加上一些结构逻辑，比如子选择器、标签选择器，借此让选择器独一无二。一段时间后，新同事接手跟进需求，对样式进行修改，由于选择器是一连串的结构逻辑，看不过来，嫌麻烦，就干脆在样式文件最后用另一套选择器，加上了覆盖样式...接下来又有新的需求...最后的结果，一个元素对应多套样式，遍布整个样式文件...")]),e._v(" "),a("p",[e._v("以往开发组件，我们都用“重名概率小”或者干脆起个“当时认为是独一无二的名字”来保证样式不冲突，这是不可靠的。")]),e._v(" "),a("p",[e._v("理想的状态下，我们开发一套组件的过程中，我们应该可以随意的为其中元素进行命名，而不必担心它是否与组件以外的样式发生冲突。")]),e._v(" "),a("p",[e._v("BEM解决这一问题的思路在于，由于项目开发中，每个组件都是唯一无二的，其名字也是独一无二的，组件内部元素的名字都加上组件名，并用元素的名字作为选择器，自然组件内的样式就不会与组件外的样式冲突了。")]),e._v(" "),a("p",[e._v("这是通过组件名的唯一性来保证选择器的唯一性，从而保证样式不会污染到组件外。")]),e._v(" "),a("p",[e._v("这也可以看作是一种“硬性约束”，因为一般来说，我们的组件会放置在同一目录下，那么操作系统中，同一目录下文件名必须唯一，这一点也就确保了组件之间不会冲突。")]),e._v(" "),a("p",[e._v("BEM的命名规矩很容易记：block-name__element-name--modifier-name，也就是模块名 + 元素名 + 修饰器名。")]),e._v(" "),a("p",[e._v("一般来说，根据组件目录名来作为组件名字：")]),e._v(" "),a("p",[e._v("比如分页组件：")]),e._v(" "),a("p",[e._v("/app/components/page-btn/")]),e._v(" "),a("p",[e._v("那么该组件模块就名为page-btn，组件内部的元素命名都必须加上模块名，比如：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<div class="page-btn"> <button type="button" class="page-btn__prev">上一页</button> \x3c!-- ... --\x3e <button type="button" class="page-btn__next">下一页</button> </div> \n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("上面我们用双下划线来明确区分模块名和元素名，当然也可以用单下划线，比如page-btn_prev和page-btn_next。我们只需保留BEM的思想，其命名规范可以任意变通。")]),e._v(" "),a("p",[e._v("一开始了解BEM的时候，可能会产生误解，出现以下不正确的命名方式：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<div class="page-btn"> \x3c!-- ... --\x3e <ul class="page-btn__list"> <li class="page-btn__list__item"> <a href="#" class="page-btn__list__item__link">第一页</a> </li> </ul> \x3c!-- ... --\x3e </div> \n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("分页组件有个ul列表名为：page-btn__list，列表里面存放每一页的按钮，名为：page-btn__list__item__link，这是不对的。")]),e._v(" "),a("p",[e._v("首先，有悖BEM命名规范，BEM的命名中只包含三个部分，元素名只占其中一部分，所以不能出现多个元素名的情况，所以上述每一页的按钮名可以改成：page-btn__btn。")]),e._v(" "),a("p",[e._v("其次，有悖BEM思想，BEM是不考虑结构的，比如上面的分页按钮，即使它是在ul列表里面，它的命名也不应该考虑其父级元素。当我们遵循了这个规定，无论父元素名发生改变，或是模块构造发生的改变，还是元素之间层级关系互相变动，这些都不会影响元素的名字。")]),e._v(" "),a("p",[e._v("所以即使需求变动了，分页组件该有按钮还是要有按钮的，DOM构造发生变动，至多也就不同元素的增删减，模块内名称也随之增删减，而不会出现修改名字的情况，也就不会因为名字变动，牵涉到JS文件的修改，或样式文件的修改。")]),e._v(" "),a("h2",{attrs:{id:"bem命名好长"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bem命名好长"}},[e._v("#")]),e._v(" BEM命名好长")]),e._v(" "),a("p",[e._v("BEM的命名中包含了模块名，长长的命名会让HTML标签会显得臃肿。")]),e._v(" "),a("p",[e._v("其实每个使用BEM的开发团队多多少少会改变其命名规范，比如Instagram团队使用的驼峰式:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".blockName-elementName--modifierName { /* ... */ } \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("还有单下划线：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".block-name_element-name--modifierName { /* ... */ } \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("还有修饰器名用单横线连接：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".blockName__elementName-modifierName { /* ... */ } \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("其实这些对缩短命名没有多大的帮助，但我们也无需担心文件体积的问题，由于服务端有gzip压缩，BEM命名相同的部分多，压缩下来的体积不会太大。另外现在都用IDE来编写代码了，有自动提示功能，也无须担心重复的输入过长的名字。")]),e._v(" "),a("p",[e._v("因为命名长，我们是不是可以用子代选择器来代替BEM命名？这样至少在HTML编写时，让HTML标签看起来美观一点。")]),e._v(" "),a("p",[e._v("下面说说子代选择器带来的问题。")]),e._v(" "),a("h2",{attrs:{id:"子选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子选择器"}},[e._v("#")]),e._v(" 子选择器")]),e._v(" "),a("p",[e._v("子代选择器的方式是，通过组件的根节点的名称来选取子代元素。按照这个思路，分页按钮样式可以这么写：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<div class="page-btn"> \x3c!-- ... --\x3e <ul class="list"></ul> \x3c!-- ... --\x3e </div> \n.page-btn { /* ... */ } .page-btn .list { /* ... */ } \n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("HTML看起来美观多了，但这解决了样式冲突问题么？试想下，如果让你来接手这个项目，要增加一个需求，新增一个组件，你命名放心么？")]),e._v(" "),a("p",[e._v("你面临的问题是：你打开组件目录，里面有个分页组件，叫做page-btn，可是你完全不知道要怎么给新组件命名，因为即使新组件模块名与page-btn不一样，也不能保证新组件与分页组件不冲突。")]),e._v(" "),a("p",[e._v("比如新的需求是“新增一个列表组件”，如果该组件的名字叫做list，其根节点的名字叫list，那么这个组件下面写的样式，就很可能和.page-btn .list的样式冲突:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".list { /* ... */ } \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("这还仅仅只有两个组件而已，实际项目中，十几个或几十个组件，难道我们要每个组件都检查一下来“新组件名是否和以往组件的子元素命名冲突了”么？这不现实。")]),e._v(" "),a("p",[e._v("BEM禁止使用子代选择器，以上是原因之一。子代选择器不好的地方还在于，如果"),a("strong",[e._v("层次关系过长")]),e._v("，逻辑不清晰，非常不利于维护。为了懒得命名或者追求所谓的“精简代码”，写出下面这种选择器：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".page-btn button:first-child {} .page-btn ul li a {} /* ... */ /* 维护代码，新增需求 */ .page-btn .prev {} \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("用层次关系结构关系来定位元素，可能会因为需求改变而大面积的重写样式文件。试想一下维护这类代码有多么痛苦，我们要一边检查该元素的上下文DOM结构，一边对照着css文件，一一对比，找到该元素对应的样式，也就是说我为了改一个元素的代码，需要不断翻阅HTML文件和CSS文件，可维护性非常之差。更有甚者，来维护这块代码的同事，直接"),a("strong",[e._v("在样式文件最后")]),e._v("添加覆盖样式，这会造成一个"),a("strong",[e._v("非常严重")]),e._v("的问题了：同一个元素样式零散的分布在文件的不同地方，而且定位该元素的选择器也可能各不相同。")]),e._v(" "),a("p",[e._v("这样的样式文件只会越写越糟糕，可以说，当我们用子代选择器来定位元素时，这个样式文件就已经注定是要被翻来覆去的重构的了，甚至，每个来维护这个文件的人都会将其重构一遍。")]),e._v(" "),a("p",[e._v("子代选择器还会造成权重过大的问题，当我们要做响应式的时候，某个带样式的元素需要适配不同的屏幕，此时，我们还要"),a("strong",[e._v("不断的")]),e._v("确认该元素之前的选择器写法！为了覆盖前面权重过大的样式，甚至通过添加"),a("strong",[e._v("额外的类名或标签名")]),e._v("来增加权重。可想而知，此后这个样式文件的维护难度就像雪球一样，越滚越大。")]),e._v(" "),a("p",[e._v("如果我们用的是BEM，要覆盖样式很简单：找到要覆盖样式的元素，得知它的类名，在媒体查询中，用它的类名作为选择器，写下覆盖样式，样式就覆盖成功了，不需要担心前面样式的权重过大。")]),e._v(" "),a("h2",{attrs:{id:"bem修饰器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bem修饰器"}},[e._v("#")]),e._v(" BEM修饰器")]),e._v(" "),a("p",[e._v("根据不同的场景，组件可能会表现出不同的样式。比如分页组件在pc端具有具体的页码以及上下页按钮，但在移动端，因空间有限，可能只保留上下页按钮。我们可以用修饰器来区分这两种情况。默认情况下，分页按钮的类名为page-btn，但在移动端，我们需要加多个类名page-btn--min")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/* 缩小版分页组件中，具体页码按钮隐去 */ .page-btn--min .page-btn__btn { display: none; } .page-btn--min .page-btn__prev { width: 50%; } .page-btn--min .page-btn__prev { width: 50%; } \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("上面这种情况用了子代选择器，BEM是不允许这么写的，BEM中修饰器的样式不依赖于任何结构关系，也就是说，元素的状态改变只会影响自身，不对其他元素进行影响，但实际上，这很难做到的。以上的写法不会造成样式冲突的，而且权重的影响也不大。")]),e._v(" "),a("p",[e._v("BEM修饰器代表着元素的状态，但有时候元素的状态需要js来控制，此时遵循规范没有任何好处，比如激活状态，BEM推荐的写法是：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".block__element { display: none; } .block__element--active { display: block; } \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("当用js为该元素添加状态时，我们需要知道该元素的名字block__element，这样我们才能推导出它的激活状态为block__element--active，这是不合理的，因为很多时候我们无法得知元素的名称，所以这时候，我们应该统一js控制状态的类名格式，比如is-active、js-active等等，这些类名只用作"),a("strong",[e._v("标识")]),e._v("，不予许有默认的公共样式：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".block__element { display: none; } .block__element.is-active { display: block; } \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"原子类和bem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原子类和bem"}},[e._v("#")]),e._v(" 原子类和BEM")]),e._v(" "),a("p",[e._v('BEM可以不需要用到原子类，但是如果已经引入了类似Bootstrap的框架，也没必要强制避免使用原子类，比如“pull-right”、"ellipsis"、“clearfix”等等类，这些类非常实用，和BEM是可以互补的。')]),e._v(" "),a("p",[e._v("在组件开发中其实不推荐使用原子类，因为这会降低组件的可复用性。可复用性的最理想状态就是组件不仅仅在不同的页面中表现一致，在跨项目的情况下，也能够运行良好。如果组件的样式因为依赖于某"),a("strong",[e._v("几个")]),e._v("原子类就要依赖整个Bootstrap库，那么组件d 迁移负担就重很多了。")]),e._v(" "),a("p",[e._v("原子类更适合应用在实际页面中，这是因为页面"),a("strong",[e._v("变动大而且不可复用")]),e._v("，假设在header中，我们用到了两个组件logo和user-panel（用户操作面板），两个组件分别置于header的左侧和右侧，我们可以这么写：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<div class="header clearfix"> <div class="logo pull-left">\x3c!-- ... --\x3e</div> <div class="user-panel pull-left">\x3c!-- ... --\x3e</div> </div> \n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("header可以封装成一个模块，但它复用程度不高，不能算是组件，所以即使使用原子类也没有关系。在项目中，使用原子类之前应该考虑一下，这个场景是否"),a("strong",[e._v("变动大而且不可复用")]),e._v("，如果是的话，我们可以放心的使用原子类。")]),e._v(" "),a("p",[e._v("组件应该是“自洽的”，其本身就应该构成了一个“生态圈”，也就是说，他几乎不需要外部供给，自给自足就能够运转下去。")]),e._v(" "),a("h2",{attrs:{id:"实际页面中也应该使用bem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实际页面中也应该使用bem"}},[e._v("#")]),e._v(" 实际页面中也应该使用BEM")]),e._v(" "),a("p",[e._v("在实际页面中也需要用到BEM命名方法，不然乱起的一个名字很可能就和某一组件冲突了，导致样式相互覆盖。")]),e._v(" "),a("p",[e._v("假如我们有联系页面，路径是/pages/contact/。那么该页面的模块名可以是page-contact，其名下元素均以page-contact__element-name命名。")]),e._v(" "),a("p",[e._v("一般来说，实际页面中只是对组件进行调用，对组件的位置进行调整，但不会对组件内部细节进行修改。但实际情况下，同一个组件在不同页面不同模样的情况也是有的，所以会出现在实际页面中对组件样式进行微调的代码：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/* 联系页面对分页按钮进行微调 */ .page-contact .page-btn {} \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("但更推荐的做法是给分页组件添加一个修饰器，将上面的样式放到修饰器名下，再根据实际情况运用到页面中。")]),e._v(" "),a("h2",{attrs:{id:"webpack-css-loader-解决之道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-css-loader-解决之道"}},[e._v("#")]),e._v(" webpack css-loader 解决之道")]),e._v(" "),a("p",[e._v("BEM主要被诟病的一点在于其命名过长，结合Angular这种带有标签指令的框架时，整个HTML看起来会更混乱：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\x3c!-- 发帖页面 --\x3e <span ng-repeat="post in postData track by post.id" ng-if="$index === 0" class="page-post__post-item" ng-class="{\'page-post__post-item--even\': $even}" popover-content=""> </span> \n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("当然，我们可以通过换行来缓解这个问题:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\x3c!-- 发帖页面 --\x3e <span ng-repeat="post in postData track by post.id" ng-if="$index === 0" class="page-post__post-item" ng-class="{\'page-post__post-item--even\': $even}" popover-content=""> </span> \n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("但其实说穿了，BEM保证样式不冲突的核心就是：在元素名中加入唯一的标识。这个标识在BEM中对应的是模块名，也可能是一个独一无二的乱序字符串。")]),e._v(" "),a("p",[e._v("为模块中每个元素名加入标识，这可是重复的工作啊，重复的工作就应该交给机器去做。")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.bemcss.com/#",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack"),a("OutboundLink")],1),e._v("加载器css-loader，可在js中读取css样式，自2015年4月份起，该插件加入了placeholder功能，使得该插件可以解决CSS作用域的问题，原理也就是给元素的名称加入唯一的标识。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/* 分页组件 */ :local(.prev) {} \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("css-loader加载器自定义的语法：:local(.identifier){}向外暴露出选择器.prev。在JS代码中，我们可以拿到这个选择器：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import styles from './page-btn.css'; var $prevBtn = $('<button class=\"' + styles.prev + '\">上一页</button>'); // ... \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("styles.prev返回的是一串独一无二且随机的字符串，该字符串对应着样式文件中的选择器。这名字有悖语义化，但css-loader支持配置字符串的生成格式，")])])}),[],!1,null,null,null);s.default=n.exports}}]);