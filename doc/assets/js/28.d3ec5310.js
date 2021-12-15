(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{593:function(e,a,t){"use strict";t.r(a);var s=t(5),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/252c963c71b043918874623358cc1059~tplv-k3u1fbpfcp-watermark.image",alt:"img"}})]),e._v(" "),t("blockquote",[t("p",[e._v("谈及flex布局，很多人都将其当成对齐工具，但从未深入理解过flex,它的很多属性也都是浅尝辄止。目前很多文章也都是直接翻译的外文，本文将一\n文档艰涩难懂的风格，大白话给你讲清楚flex布局，你害怕的flex-grow/flex-basis/flex-shink/align-self等等，今天我们一起给他整明白！")])]),e._v(" "),t("h2",{attrs:{id:"什么是flex布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是flex布局"}},[e._v("#")]),e._v(" 什么是Flex布局")]),e._v(" "),t("p",[e._v("Flex 是 "),t("code",[e._v("Flexible Box")]),e._v(" 的缩写，意为"),t("code",[e._v('"弹性布局"')]),e._v("，用来为盒状模型提供最大的灵活性。换句话说，你想要的任何布局灵活的flex基本都能帮你实现。")]),e._v(" "),t("blockquote",[t("p",[e._v("任何一个父元素都可以指定为 Flex 布局。")])]),e._v(" "),t("p",[e._v('采用 Flex 布局的元素，称为 Flex 父元素（flex container），简称"父元素"。 它的所有子元素自动成为父元素成员，称为 Flex 子元素（flex item），简称"子元素"。')]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/497d5bbf39884407a2e664da6ea86d76~tplv-k3u1fbpfcp-watermark.image",alt:"0.png"}})]),e._v(" "),t("ul",[t("li",[e._v("父元素默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。")]),e._v(" "),t("li",[e._v("子元素默认沿主轴排列。单个子元素占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。")])]),e._v(" "),t("blockquote",[t("p",[e._v("这里的“父元素(container)”很多地方会直译为“容器”，个人认为叫“父元素”更通俗易懂，本文统称“父元素”，同理，其他地方“子元素（item）”会被直译为“项目”，本文统称“子元素”。")])]),e._v(" "),t("h3",{attrs:{id:"重点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重点"}},[e._v("#")]),e._v(" 重点")]),e._v(" "),t("p",[e._v("与“主轴”垂直的轴称为“交叉轴”，通过对flex-direction的设定，主轴和交叉轴可以改变。")]),e._v(" "),t("h2",{attrs:{id:"父元素的属性-flex-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#父元素的属性-flex-container"}},[e._v("#")]),e._v(" 父元素的属性(Flex-container)")]),e._v(" "),t("p",[e._v("以下6个属性设置在父元素上。")]),e._v(" "),t("h3",{attrs:{id:"一、flex-direction-方向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、flex-direction-方向"}},[e._v("#")]),e._v(" 一、flex-direction 方向")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("flex-direction: row(default) | row-reverse | column | column-reverse\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("决定主轴的方向（即子元素的排列方向）")]),e._v(" "),t("ul",[t("li",[e._v("row（默认值）：主轴为水平方向，起点在左端。")]),e._v(" "),t("li",[e._v("row-reverse：主轴为水平方向，起点在右端。")]),e._v(" "),t("li",[e._v("column：主轴为垂直方向，起点在上沿。")]),e._v(" "),t("li",[e._v("column-reverse：主轴为垂直方向，起点在下沿。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/720f2bf4311847acb53368abfdf8bf22~tplv-k3u1fbpfcp-watermark.image",alt:"1.png"}})]),e._v(" "),t("h3",{attrs:{id:"二、flex-wrap-换行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、flex-wrap-换行"}},[e._v("#")]),e._v(" 二、flex-wrap 换行")]),e._v(" "),t("p",[e._v('默认情况下，子元素都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。')]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("flex-wrap: nowrap(default) | wrap | wrap-reverse\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("nowrap（默认）：不换行")]),e._v(" "),t("li",[e._v("wrap：换行，第一行在上方")]),e._v(" "),t("li",[e._v("wrap-reverse：换行，第一行在下方")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8d96cc589454768a49027f37386156d~tplv-k3u1fbpfcp-watermark.image",alt:"2.png"}})]),e._v(" "),t("h3",{attrs:{id:"三、flex-flow-流向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、flex-flow-流向"}},[e._v("#")]),e._v(" 三、flex-flow 流向")]),e._v(" "),t("p",[e._v("flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。")]),e._v(" "),t("blockquote",[t("p",[e._v("简单理解 方向+换行一起决定了流向")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("flex-flow: <flex-direction> || <flex-wrap>;\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"四、justify-content-主轴对齐方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、justify-content-主轴对齐方式"}},[e._v("#")]),e._v(" 四、justify-content 主轴对齐方式")]),e._v(" "),t("p",[e._v("属性定义了子元素在主轴上的对齐方式")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("justify-content: flex-start | flex-end | center | space-between | space-around;\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("flex-start（默认值）：左对齐")]),e._v(" "),t("li",[e._v("flex-end：右对齐")]),e._v(" "),t("li",[e._v("center： 居中")]),e._v(" "),t("li",[e._v("space-between：两端对齐，子元素之间的间隔都相等。")]),e._v(" "),t("li",[e._v("space-around：每个子元素两侧的间隔相等。所以，子元素之间的间隔比子元素与边框的间隔大一倍。")])]),e._v(" "),t("h3",{attrs:{id:"五、align-items-交叉轴对齐方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、align-items-交叉轴对齐方式"}},[e._v("#")]),e._v(" 五、align-items 交叉轴对齐方式")]),e._v(" "),t("p",[e._v("属性定义子元素在交叉轴上如何对齐")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("align-items: flex-start | flex-end | center | baseline | stretch(default)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("flex-start：交叉轴的起点对齐。")]),e._v(" "),t("li",[e._v("flex-end：交叉轴的终点对齐。")]),e._v(" "),t("li",[e._v("center：交叉轴的中点对齐。")]),e._v(" "),t("li",[e._v("baseline: 子元素的第一行文字的基线对齐。")]),e._v(" "),t("li",[e._v("stretch（默认值）：如果子元素未设置高度或设为auto，将占满整个父元素的高度。")])]),e._v(" "),t("h3",{attrs:{id:"六、align-content-多行交叉轴对齐方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、align-content-多行交叉轴对齐方式"}},[e._v("#")]),e._v(" 六、align-content 多行交叉轴对齐方式")]),e._v(" "),t("p",[e._v("align-content属性定义了多根轴线的对齐方式。如果子元素只有一根轴线，该属性不起作用。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("align-content: flex-start | flex-end | center | space-between | space-around | stretch(default);\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("flex-start：与交叉轴的起点对齐。")]),e._v(" "),t("li",[e._v("flex-end：与交叉轴的终点对齐。")]),e._v(" "),t("li",[e._v("center：与交叉轴的中点对齐。")]),e._v(" "),t("li",[e._v("space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。")]),e._v(" "),t("li",[e._v("space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。")]),e._v(" "),t("li",[e._v("stretch（默认值）：轴线占满整个交叉轴。")])]),e._v(" "),t("h3",{attrs:{id:"align-content-vs-align-items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#align-content-vs-align-items"}},[e._v("#")]),e._v(" align-content vs align-items")]),e._v(" "),t("h4",{attrs:{id:"相同点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相同点"}},[e._v("#")]),e._v(" 相同点：")]),e._v(" "),t("p",[e._v("都被用来设置对齐行为")]),e._v(" "),t("h4",{attrs:{id:"不同点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不同点"}},[e._v("#")]),e._v(" 不同点：")]),e._v(" "),t("ul",[t("li",[e._v("align-items 的设置对象是行内成员;")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/444e55012c3149f18e0995cd4dafc678~tplv-k3u1fbpfcp-watermark.image",alt:"3.png"}})]),e._v(" "),t("ul",[t("li",[e._v("align-content 的设置对象是所有行，且只有在多行弹性盒子容器中才生效。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e93a42359d134e6fb99bed37c3dc48b8~tplv-k3u1fbpfcp-watermark.image",alt:"4.png"}})]),e._v(" "),t("h2",{attrs:{id:"子元素的属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子元素的属性"}},[e._v("#")]),e._v(" 子元素的属性")]),e._v(" "),t("p",[e._v("以下6个属性设置在子元素上")]),e._v(" "),t("h3",{attrs:{id:"一、order-顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、order-顺序"}},[e._v("#")]),e._v(" 一、order 顺序")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("order: <integer>;\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("属性定义子元素的排列顺序。数值越小，排列越靠前，默认为0。")]),e._v(" "),t("h3",{attrs:{id:"二、flex-grow-放大"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、flex-grow-放大"}},[e._v("#")]),e._v(" 二、flex-grow 放大")]),e._v(" "),t("p",[e._v("grow译翻译过来是生长，所以这个属性一定是和子元素的放大有关的")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".item {\n  flex-grow: <number>; /* default 0 */\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h4",{attrs:{id:"父元素空间充足-子元素默认不变"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#父元素空间充足-子元素默认不变"}},[e._v("#")]),e._v(" 父元素空间充足，子元素默认不变")]),e._v(" "),t("p",[e._v("flex-grow属性定义子元素的放大比例，默认为"),t("code",[e._v("0")]),e._v("，即如果存在剩余空间，也不放大。 "),t("strong",[e._v("简单理解：子元素flex-grow的值越大所占比例越大")])]),e._v(" "),t("h4",{attrs:{id:"使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[e._v("#")]),e._v(" 使用场景")]),e._v(" "),t("p",[e._v("子元素默认是不会放大的，所以使用的场景是父元素空间充足时，子元素需要放大/子元素放大比例不一")]),e._v(" "),t("blockquote",[t("p",[e._v("如果所有子元素的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个子元素的flex-grow属性为2，其他子元素都为1，则前者占据的剩余空间将比其他项多一倍。")])]),e._v(" "),t("h3",{attrs:{id:"三、flex-shrink-缩小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、flex-shrink-缩小"}},[e._v("#")]),e._v(" 三、flex-shrink 缩小")]),e._v(" "),t("p",[e._v("shrink翻译过来是缩小，故这个属性一定是和子元素缩小有关的")]),e._v(" "),t("h4",{attrs:{id:"父元素空间不足-子元素默认等比缩小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#父元素空间不足-子元素默认等比缩小"}},[e._v("#")]),e._v(" 父元素空间不足，子元素默认等比缩小")]),e._v(" "),t("p",[e._v("flex-shrink属性定义了子元素的缩小比例，默认为1，即如果空间不足，该子元素将缩小。")]),e._v(" "),t("p",[t("strong",[e._v("简单理解：和flex-grow刚好相反，子元素flex-shrink的值越大所占比例越小")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".item {\n  flex-shrink: <number>; /* default 1 */\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h4",{attrs:{id:"使用场景-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-2"}},[e._v("#")]),e._v(" 使用场景")]),e._v(" "),t("p",[e._v("默认是会等比缩小的，所以使用的场景是空间不足时，子元素缩小比例不同/不需要缩小")]),e._v(" "),t("blockquote",[t("p",[e._v("如果所有子元素的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个子元素的flex-shrink属性为0，其他子元素都为1，则空间不足时，前者不缩小。 负值对该属性无效。")])]),e._v(" "),t("h3",{attrs:{id:"四、flex-basis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、flex-basis"}},[e._v("#")]),e._v(" 四、flex-basis")]),e._v(" "),t("p",[e._v("flex-basis属性定义了在分配多余空间之前，子元素占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即子元素的本来大小。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".item {\n  flex-basis: <length> | auto; /* default auto */\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("它可以设为跟width或height属性一样的值（比如350px），则子元素将占据固定空间。")]),e._v(" "),t("h3",{attrs:{id:"五、flex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、flex"}},[e._v("#")]),e._v(" 五、flex")]),e._v(" "),t("p",[e._v("flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("//缩写记忆顺序为gsb\n.item {\n  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("h4",{attrs:{id:"该属性的快捷值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#该属性的快捷值"}},[e._v("#")]),e._v(" 该属性的快捷值")]),e._v(" "),t("ul",[t("li",[e._v("auto (1 1 auto)")]),e._v(" "),t("li",[e._v("none (0 0 auto)")]),e._v(" "),t("li",[e._v("1 (1 1 0%)")]),e._v(" "),t("li",[e._v("0 (0 1 0%)")])]),e._v(" "),t("h4",{attrs:{id:"flex-auto和flex-1的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-auto和flex-1的区别"}},[e._v("#")]),e._v(" flex:auto和flex:1的区别")]),e._v(" "),t("p",[e._v("实际上就是flex-basis为0%和auto的区别,auto为默认值即为子元素的大小")]),e._v(" "),t("ul",[t("li",[e._v("flex-basis为0%，可以覆盖width")]),e._v(" "),t("li",[e._v("flex-basis为auto，width权限更高")])]),e._v(" "),t("blockquote",[t("p",[e._v("flex:auto=>flex-basis:auto 表示flex-basis:$width 是相当于设置了Flex-basis为宽度的 "),t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0269f2128a1a493f965b10e945e0253f~tplv-k3u1fbpfcp-watermark.image",alt:"5.png"}}),e._v(" flex:1=>flex-basis:0 相当于未设置flex-basis "),t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8578670df8384198bcd1bedfc5d4ed9b~tplv-k3u1fbpfcp-watermark.image",alt:"6.png"}})])]),e._v(" "),t("h5",{attrs:{id:"结论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[e._v("#")]),e._v(" 结论：")]),e._v(" "),t("p",[e._v("存在多余空间时，flex为1，width将会被忽略；flex为auto时，width的设置将是有效的")]),e._v(" "),t("h3",{attrs:{id:"六、align-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、align-self"}},[e._v("#")]),e._v(" 六、align-self")]),e._v(" "),t("p",[e._v("align-self属性允许单个子元素有与其他子元素不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。")]),e._v(" "),t("h4",{attrs:{id:"使用场景-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-3"}},[e._v("#")]),e._v(" 使用场景")]),e._v(" "),t("p",[e._v("单个子元素有与其他子元素有不一样的对齐方式")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".item {\n  align-self: auto | flex-start | flex-end | center | baseline | stretch;\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("该属性可能取6个值，除了auto，其他都与align-items属性完全一致。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d0e6a6bfab64474ebe0662f7537b0646~tplv-k3u1fbpfcp-watermark.image",alt:"7.png"}})]),e._v(" "),t("h2",{attrs:{id:"附-属性查询表-自制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附-属性查询表-自制"}},[e._v("#")]),e._v(" 附：属性查询表（自制）")]),e._v(" "),t("h3",{attrs:{id:"父元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#父元素"}},[e._v("#")]),e._v(" 父元素")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ef42edac78b4678928e828ceae1bfd6~tplv-k3u1fbpfcp-watermark.image",alt:"table1.png"}})]),e._v(" "),t("h3",{attrs:{id:"子元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子元素"}},[e._v("#")]),e._v(" 子元素")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2526d82a2a044bb38b94fed8140e6bd1~tplv-k3u1fbpfcp-watermark.image",alt:"table2.png"}})]),e._v(" "),t("p",[e._v("本文主要参考 "),t("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("阮一峰 Flex 布局教程"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);