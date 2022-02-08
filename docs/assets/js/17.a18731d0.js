(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{579:function(_,v,t){"use strict";t.r(v);var i=t(5),s=Object(i.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("blockquote",[t("p",[_._v("编辑导读：产品经理在工作中会接触很多前所未有的领域，学习到很多新知识。本文作者在负责中后台产品相关工作中渐渐对软件工程、架构设计有了越来越多的理解，同时也补充学习了包括微服务架构、中台体系、领域驱动设计等技术知识体系。本文整理了过往产品架构设计中的一些心得，与你分享。")])]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/OIw2vP2lGFBNIHFxORtu.jpg",alt:"img"}})]),_._v(" "),t("p",[_._v("2009 – 2013 年在北航读本科，选了软件工程这个专业。那个时候其实也不太清楚软件工程和计算机有什么区别，大概软件工程轻松比较多。本科的课程都差不多，C++、数据结构、算法导论、计算机体系结构、计算机网络、操作系统原理、软件工程、职业生涯规划。毕业时正好赶上移动互联网和万众创业的浪潮，抱着改变世界一点点的想法，成为了一名的产品经理。")]),_._v(" "),t("p",[_._v("近几年工作中的不设边界，让我有机会接触了很多不同的知识体系。从产品、设计、运营到客户端、前端、后端、运维、架构再到管理、业务、投资，也有机会负责完整的产研团队。业务覆盖了 2C、2D、2B、2G 多个方向，包括数字城市、物联网平台、SCRM平台、海淘电商、商品导购、轻博客多个领域产品。")]),_._v(" "),t("p",[_._v("负责中后台产品相关工作中渐渐对软件工程、架构设计有了越来越多的理解，同时也补充学习了包括微服务架构、中台体系、领域驱动设计等技术知识体系。本文整理了过往产品架构设计中的一些心得，希望可以为大家提供一些有价值的内容作为参考。")]),_._v(" "),t("p",[_._v("参考学习资料：")]),_._v(" "),t("p",[_._v("关于产品：")]),_._v(" "),t("ul",[t("li",[_._v("徐峰：《有效需求分析》")]),_._v(" "),t("li",[_._v("产品经理认证（NPDP）知识体系指南")])]),_._v(" "),t("p",[_._v("关于设计：")]),_._v(" "),t("ul",[t("li",[_._v("设计工具：Ant Design + Kitchen + Sketch + 语雀")]),_._v(" "),t("li",[_._v("Ant Design 设计工程化")]),_._v(" "),t("li",[_._v("设计原则->设备模式->设计资产")]),_._v(" "),t("li",[_._v("四表一局：图表、表单、列表、表格和布局")]),_._v(" "),t("li",[_._v("知识图谱：AntV 图谱可视化设计")]),_._v(" "),t("li",[_._v("阿里云 CADT 云架构设计工具 https://bpstudio.console.aliyun.com/")])]),_._v(" "),t("p",[_._v("关于技术：")]),_._v(" "),t("ul",[t("li",[_._v("右军、李伟山 、 张洪亮、彭首長、刘朋：《程序员的三门课》")]),_._v(" "),t("li",[_._v("斯坦福 John Ousterhout 教授：《软件设计的哲学》常柱中文版译文")]),_._v(" "),t("li",[_._v("李运华：《从零开始学架构》")]),_._v(" "),t("li",[_._v("王启军：《持续演进的Cloud Native：云原生架构下微服务最佳实践》")]),_._v(" "),t("li",[_._v("覃宇：软件架构编年史(译)")])]),_._v(" "),t("p",[_._v("关于 DDD 领域驱动设计：")]),_._v(" "),t("ul",[t("li",[_._v("张建飞：《代码精进之路：从码农到工匠》")]),_._v(" "),t("li",[_._v("张逸：构建领域驱动设计知识体系")]),_._v(" "),t("li",[_._v("欧创新：深度解析DDD中台和微服务设计")]),_._v(" "),t("li",[_._v("欧创新、邓頔：《中台架构与实现：基于 DDD 和微服务》")]),_._v(" "),t("li",[_._v("有赞汤师爷：有赞零售中台建设方法的探索与实践")])]),_._v(" "),t("p",[_._v("关于数据中台：")]),_._v(" "),t("p",[_._v("郭忆：数据中台实战课")]),_._v(" "),t("p",[_._v("本文将按照业务认知、软件工程、架构设计、领域驱动设计、中台体系、参考产品方案等依次展开，内容侧重在于骨干知识体系梳理，细节知识可以阅读推荐的参考资料。")]),_._v(" "),t("h2",{attrs:{id:"一、关于业务认知"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、关于业务认知"}},[_._v("#")]),_._v(" 一、关于业务认知")]),_._v(" "),t("h3",{attrs:{id:"_1-业务是所有一切的根源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-业务是所有一切的根源"}},[_._v("#")]),_._v(" 1. 业务是所有一切的根源")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/BT6q5sgwfJjOgnMiqy5k.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("业务、产品、设计、技术是构建产品的四个核心元素。当我们想要做一个产品时，出发点都是为了解决一些问题。业务定义了问题是什么，产品定义了提供的解决方案，设计与技术支撑解决方案的实现。在我们的产研团队中也存在着业务负责人、产品经理、设计师、工程师与之对应。从上下游关系来看，产品的设计依赖于业务，而设计、技术的设计又依赖于产品。因此业务的变动是推动产品变动的核心因素，良好的产品架构应能快速响应业务的变动。")]),_._v(" "),t("h3",{attrs:{id:"_2-知识是从业务到产品的关键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-知识是从业务到产品的关键"}},[_._v("#")]),_._v(" 2. 知识是从业务到产品的关键")]),_._v(" "),t("p",[_._v("当我们要做一个电商平台产品时，需要了解电商业务体系，包括选品、采购、仓库、营销、订单、物流、售后等一系列业务板块。我们想要把某一块业务做好，需要团队有对应领域的相关知识。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/3WNrMfeu36TMPnI5IZis.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("知识的学习途径有很多，阅读书籍与文章、研究行业竞品、请教业务专家等等。研究行业竞品直观高效，而请教业务专家可以避免弯路。但从知识的结构化程度来说，作为出版物的书籍是系统学习更好的选择，它可以带给你完整的知识体系。随着近些年互联网行业的成熟，各类垂直业务的书籍也越来越丰富，大大降低知识获取的门槛。")]),_._v(" "),t("h3",{attrs:{id:"_3-知识积累是抽象到具体的过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-知识积累是抽象到具体的过程"}},[_._v("#")]),_._v(" 3. 知识积累是抽象到具体的过程")]),_._v(" "),t("p",[_._v("大家应该都有用过思维导图类的工具，知识的描述是从抽象到具体的。我们认知一个业务领域都是从主干开始，再到对应的枝杈模块，最后才是叶子细节。从小到大我们学过大量的知识，而在今天你很难对每个细节都记忆犹新，整个知识体系就像一个脉络地图，我们只记得枝干和重点的细节。当需要了解某个特定细节时，由于对枝干有清晰的认知，可以快速找到相应的细节信息。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/zKqQzcgb1FPuXQvuN853.jpeg",alt:"img"}})]),_._v(" "),t("h3",{attrs:{id:"_4-业务的知识散布在各个环节"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-业务的知识散布在各个环节"}},[_._v("#")]),_._v(" 4. 业务的知识散布在各个环节")]),_._v(" "),t("p",[_._v("当我们去做某一块业务时，不论什么岗位，都希望招到有相关业务工作经验的候选人。业务的领域知识会影响相关的运营知识、产品知识、技术知识、设计知识。例如电商平台的产品与社交平台的运营方法不同、产品存在巨大差异，技术挑战也不一样，设计上也有很多风格和细节的差异。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/U0kY98ftsONNCO8bj2wg.jpeg",alt:"img"}})]),_._v(" "),t("h3",{attrs:{id:"_5-知识的分拆与职能的分工"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-知识的分拆与职能的分工"}},[_._v("#")]),_._v(" 5. 知识的分拆与职能的分工")]),_._v(" "),t("p",[_._v("业务相关的知识是海量的，我们没有办法让团队所有人都掌握全部的知识。改进的方案有两个方向，一是通过知识库实现团队内知识共享，提高每个人所掌握的知识范围；二是通过职能分工的细拆降低每个人完成工作所需的知识量，也就是降低认知负荷。")]),_._v(" "),t("p",[_._v("当我们以横向：业务、产品、设计、技术，纵向：架构、模块、细节来将知识体系去做拆解，可以得到下面一张表格。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/9ju4IjTivPGMHlpOTBoQ.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("纵向看每条职能线的知识体系会与相应的岗位映射，以技术线为例，团队通常有架构师、技术经理、工程师多级岗位。从拥有知识的多少和内容来看架构师掌握宏观框架性的知识和重点的功能细节知识，而负责某个具体功能的工程师掌握该全部的细节知识，这样的分工使得每个人都专注在其工作相关的知识上。")]),_._v(" "),t("p",[_._v("横向看每个知识层次的各职能岗位间有很多的协同，业务、产品、设计、技术跨职能的知识体系碰撞融合是产品深化的关键，相同的业务领域知识背景也让沟通交流更顺畅。")]),_._v(" "),t("h3",{attrs:{id:"_6-内聚知识的功能特性团队"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-内聚知识的功能特性团队"}},[_._v("#")]),_._v(" 6. 内聚知识的功能特性团队")]),_._v(" "),t("p",[_._v("我们常见的团队组织模式是职能型的，产品经理输出产品方案进行组内评审，再流转给下一个环境的设计团队，最后在流转给工程师团队。这种模式会面临几个显著的问题，一是各团队负责人会接收大量的知识细节成为瓶颈点，二是由于缺乏跨职能部门的知识共享交流容易出现认知偏差，三是由于某个功能模块相应的人员配合关系不稳定，导致知识弥散在团队中，几个人都知道一部分但又都不完整。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/EWYah41lWk21bJRmCF2d.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("若我们按照功能特性式来进行虚拟团队划分，每个团队成员对负责的业务板块有差不多的业务认知，更有利于业务的推进和深化。在业务可拆分进行持续迭代的情况下，按照功能特性划分团队推进业务，职能线跟踪人员管理和专业培养，是大型团队管理比较好实践方案。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/S5VczOdrA3RrtDKPbdkW.jpeg",alt:"img"}})]),_._v(" "),t("p",[t("strong",[_._v("小结：")])]),_._v(" "),t("p",[_._v("进行产品架构与功能设计，本质是业务知识学习和表达转换的过程，在通过软件研发将方案进行编码实现。在软件工程领域有 问题域 和 解决方案域 的概念，明确了问题域，才能做出满足需求的产品。了解相关知识体系才能正确定义问题，同时设计出匹配的解决方案。")]),_._v(" "),t("h2",{attrs:{id:"二、关于软件工程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、关于软件工程"}},[_._v("#")]),_._v(" 二、关于软件工程")]),_._v(" "),t("h3",{attrs:{id:"_1-软件工程的起源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-软件工程的起源"}},[_._v("#")]),_._v(" 1. 软件工程的起源")]),_._v(" "),t("p",[_._v("20 世纪 60 年代由于计算机技术的飞速发展，软件系统的规模越来越大，复杂程度也越来越高。而早期的软件开发者大多是以充满了黑客精神的个人为主，在面对大型软件项目时需要大团队协作就出现了多问题，导致项目交付频繁延期，问题频出。这就是所谓的 软件危机，为了解决问题在 1968、1969 年连续召开两次著名的NATO会议，并同时提出软件工程的概念。")]),_._v(" "),t("h3",{attrs:{id:"_2-软件工程的发展过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-软件工程的发展过程"}},[_._v("#")]),_._v(" 2. 软件工程的发展过程")]),_._v(" "),t("p",[t("strong",[_._v("1）大爆炸模型")])]),_._v(" "),t("p",[_._v("早期的软件开发由于是以个人或小团队开发者为主，经常采用 Code&Fix 的模式或者团队封闭一段时间突然出现一个令人惊喜的结果，好的或者坏的，这种模式也被称为大爆炸模式。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/y3RlTSKixlMZquU6k7Yo.jpeg",alt:"img"}})]),_._v(" "),t("p",[t("strong",[_._v("2）瀑布模型")])]),_._v(" "),t("p",[_._v("软件工程从其他工程学例如土木建筑中吸取了很多经验，人类已经可以造成出非常宏伟的建筑，管理极其复杂的功能，通过早期尽可能详尽设计，来避免后续工程施工过程中问题。随着软件研发的工程化出现了瀑布模型，完成前一项工作在进行后一项工作，如果前项工作完成的没有问题，那么后面就会很顺利。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/ye5vdhn2fhWvVGyiuYwT.jpeg",alt:"img"}})]),_._v(" "),t("p",[t("strong",[_._v("3）改进瀑布模型")])]),_._v(" "),t("p",[_._v("我们很难一开始将设计都做的特别正确，所以会出现到了下一个环节发现需要对上一个环节进行修正，于是对瀑布模型做了改进，允许下一个环节的反馈来修正前一个环节。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/gBw9EkfOrUeyUCP1Hfxc.jpeg",alt:"img"}})]),_._v(" "),t("p",[t("strong",[_._v("4）快速原型模型")])]),_._v(" "),t("p",[_._v("但现实往往是残酷的，除了设计缺陷外还经常遇到项目到了测试环节，才发现做的一些东西并不符合客户的预期，导致大量的资源浪费。于是在前面又增加了原型环节，用低成本来验证所做的东西是不是符合客户的预期。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/QjFUWssKsTyyF6rwdxws.jpeg",alt:"img"}})]),_._v(" "),t("p",[t("strong",[_._v("5）增量与迭代")])]),_._v(" "),t("p",[_._v("瀑布式的研发方式，虽然利用了工程化的方式改善了软件研发过程，但没有解决一个问题就是需求的变动。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/XTwgJwr8tEOSrPUmX4o2.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("通过增量与迭代两种方法，可以降低需求变动带来的影响。增量是将功能进行拆分，先实现其中一部分，分批交付。迭代是将功能先进行简单的实现，实现快速交付。参考二八原则，系统内大部分功能的使用频次是很低的，可以将资源尽可能优先用在高频的功能研发上。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/cjTAglTMwR32a7UdUKAj.jpeg",alt:"img"}})]),_._v(" "),t("p",[t("strong",[_._v("6）精益与敏捷")])]),_._v(" "),t("p",[_._v("敏捷 与 精益 这两者很相近，要说差异大概在于精益的核心是避免浪费，敏捷的核心是快速响应。涉及知识体系较大，详细内容就不在此处赘述了。")]),_._v(" "),t("h3",{attrs:{id:"_3-核心理论与定律"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-核心理论与定律"}},[_._v("#")]),_._v(" 3. 核心理论与定律")]),_._v(" "),t("p",[t("strong",[_._v("1）盖尔定律")])]),_._v(" "),t("p",[_._v("“一个切实可行的复杂系统势必是从一个切实可行的简单系统发展而来的。从头开始设计的复杂系统根本不切实可行，无法修修补补让它切实可行。你必须由一个切实可行的简单系统重新开始。”")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/WDOJCyu5gaFqJcMCIXvY.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("这与产品构建 MVP 策略是相同的，我们很难一开始掌握全局和所有细节，一上来就做很宏大的设计会付出惨重的代价，我们要做的第一步是先让东西 run 起来。好的架构设计可以让我们再后面的完善过程中不会推倒重来，这种思路也叫渐进式设计。虽然保持了持续交付价值，但是每一代产品基本都推倒重来，在做大型业务时要避免这样的方案。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/xkK2BBxdal0OEnX7RaHp.jpeg",alt:"img"}})]),_._v(" "),t("p",[t("strong",[_._v("2）没有银弹")])]),_._v(" "),t("p",[_._v("这篇是一篇经典的论文《没有银弹：软件工程的本质性与附属性工作》，文中提出的核心观点： “所有软件创作都包括了本质性工作和附属性工作，本质性工作：即如何从抽象性问题，发展出具体概念上的解决方案；附属性工作：将概念上的构思施行于电脑上，所遭遇到的困难。软件工程面临的问题在于我们即使清除了大部分的次要复杂度，而剩余的主要本质性工作带来的复杂度都无法改变。”")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/NLJle3ihK8qPI7ap58FH.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("即业务本身带来的复杂度是无法改变，无论我们用什么样的语言、框架、工程管理方法。但其实在今天业务带来的本质性工作的复杂度是可以降低，例如电商业务的很多业务板块都已经非常成熟，我们可以采用一些通用的业务方案，这样可以缩小我们需要关注的业务的范围，以此来降低复杂性。如今的热点的中台体系，通过业务能力复用，实现了本质性工作的减少。")]),_._v(" "),t("p",[_._v("了解 DDD 领域驱动设计，可以将业务域可以划分为核心域、支撑域、通用域三类，我们的资源重点投入在核心域上，支撑域、通用域的部分内容可以考虑外采标准系统和找第三方定制开发来解决。")]),_._v(" "),t("p",[t("strong",[_._v("3）复杂性守恒定律")])]),_._v(" "),t("p",[_._v("“每个应用程序都具有其内在的、无法简化的复杂度。无论在产品开发环节还是在用户与产品的交互环节，这一固有的复杂度都无法依照我们的意愿去除，只能设法调整、平衡。”")]),_._v(" "),t("p",[_._v("很多的中后台系统中很多表单会存在大量的配置项，这些配置项是否可以简化，让平台变得更简单智能？大部分时候答案都是否定的，过度追求简化往往容易弄巧成拙。功能逻辑易于解释与理解才是更好的方案，当你试图简化降低复杂度，可能在其他地方埋了雷。")]),_._v(" "),t("p",[t("strong",[_._v("4）人月神话")])]),_._v(" "),t("p",[_._v("随着人员的增加，团队内沟通成本会呈指数增长。 公式：沟通成本 = n(n-1)/2。")]),_._v(" "),t("ul",[t("li",[_._v("5人项目组，需要沟通的渠道是 5*(5–1)/2 = 10")]),_._v(" "),t("li",[_._v("15人项目组，需要沟通的渠道是15*(15–1)/2 = 105")]),_._v(" "),t("li",[_._v("50人项目组，需要沟通的渠道是50*(50–1)/2 = 1,225")]),_._v(" "),t("li",[_._v("150人项目组，需要沟通的渠道是150*(150–1)/2 = 11,175")])]),_._v(" "),t("p",[_._v("因此在软件开发后期追加人员，由于沟通成本的上升，可能不会提速反而会更严重的延期。")]),_._v(" "),t("p",[_._v("任务根据特点可以拆接为 4 种类型，不同类型的 “人与月” 的曲线存在差异。")]),_._v(" "),t("ul",[t("li",[_._v("完全可以分解的任务，例如搬砖，加人就可以更快。")]),_._v(" "),t("li",[_._v("无法分解的任务，例如怀胎 10 月，加人不可能加速。")]),_._v(" "),t("li",[_._v("需要沟通的可分解任务，由于沟通成本引入了损耗。")]),_._v(" "),t("li",[_._v("关系错综复杂的任务，到一个阶段后人越多越乱。")])]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/TXxpxG5qy312fP11VfNC.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("软件研发属于关系错综复杂的任务，没办法像搬砖一样加人就提高效率。当我们不断的拆分任务与团队后，任务的复杂性会降低至需要沟通的可分解任务。")]),_._v(" "),t("p",[t("strong",[_._v("5）高内聚低耦合")])]),_._v(" "),t("p",[_._v("高内聚低耦合是软件设计的基本原则，大量的方法论都基于此衍生发展。假设将问题或者任务拆解成关联比较弱的两个部分，一个复杂的大问题就变成两个没那么复杂的问题，整体的复杂度就降低了。因此这一方法论是降低复杂度的关键方法，不仅适用于软件设计，也适用于团队管理。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/NvXx4xhXwkG2g9fqD6hK.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("在业务认知一节中有介绍通过对业务、知识的拆解，可以降低团队成员的认知负荷。拆解结果符合业务子域内的高内聚，业务子域间的低耦合，就是好的拆解。功能特性团队在高内聚的业务子域中具有更高的协作效率，团队间业务的低耦合降低沟通成本。")]),_._v(" "),t("p",[t("strong",[_._v("6）康威定律")])]),_._v(" "),t("p",[_._v("“产品结构反映了设计该产品的组织的沟通结构”，团队的结构影响会体现在产品上，组织架构会影响业务、产品、技术、设计等多个方面。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/XTlX9VApXiHW2LJkMVsE.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("业务架构推导出产品架构，产品架构推导出技术架构和数据架构。 组织架构会对一切造成影响，匹配的组织架构是落地好业务架构和技术架构的重要因素。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/7yaAracFviMOc8cQ0otC.jpeg",alt:"img"}})]),_._v(" "),t("p",[t("strong",[_._v("小结：")])]),_._v(" "),t("p",[_._v("软件工程的本质是管理复杂性，按照分而治之的思路高内聚低耦合将业务、团队进行拆解，降低团队成员完成任务的认知负荷。部分业务模块采用行业内第三方标准方案，是降低复杂性的一种很好的途径。《软件设计的哲学》一书中提出复杂性来自于依赖和模糊的积累，好的设计最重要的目标之一就是让系统变得显而易见。")]),_._v(" "),t("p",[_._v("若 A 依赖于 B，站在 A 的视角下对 B 的依赖越简单越好，这样负责 A 的团队认知负荷最低。由第三方提供的 B，通常会具备良好的设计文档，例如我们加 Google Analytics 的 SDK 实现数据统计分析，我方不需要掌握其内部的实现细节，只需要了解接口与产品使用，当需要了解其内部机制时可以查阅相关文档。")]),_._v(" "),t("p",[_._v("软件研发的发展是全行业的逐步沉淀过程，早期的数据分析需要自己搭建工具，再后来通过简单埋点使用标准产品就能实现。整个过程是设计思路的共识 -> 技术方案的共识 -> 第三方标准产品，即统一思路降低理解难度，复用行业通用开源方案降低理解难度，使用第三方产品再大幅降低理解难度。")]),_._v(" "),t("h2",{attrs:{id:"三、关于各种架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、关于各种架构"}},[_._v("#")]),_._v(" 三、关于各种架构")]),_._v(" "),t("h3",{attrs:{id:"_1-架构的定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-架构的定义"}},[_._v("#")]),_._v(" 1. 架构的定义")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/zzoH2EKOH3IBujt3ZH9M.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("我们打开搜索引擎搜“架构图”，可以看到各式各样五花八门的图片。它们大致像下图一样，整张图划分了很多个小区域，每个小区域里有一些内容，可能区域间箭头线段联系着。到底什么是架构？参考百度百科：架构就是对结构和组件的描述，可以让大家快速理解整个体系，指导一系列的细节设计。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/jE8e3w9B734ttFF3uxzf.jpeg",alt:"img"}})]),_._v(" "),t("h3",{attrs:{id:"_2-架构的种类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-架构的种类"}},[_._v("#")]),_._v(" 2. 架构的种类")]),_._v(" "),t("p",[_._v("我们经常会听到很多不一样的名词，方案架构、业务架构、应用架构、产品架构、技术架构、部署架构、信息架构。针对不同的视角维度，我们想要表达的结构和组件是不同的，因此存在不同的架构描述。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/7w6JZx10KuAkFKvfoTHu.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("常见的一些架构维度：")]),_._v(" "),t("ul",[t("li",[_._v("方案架构，描述我们向客户提供的东西是什么样子的，怎么解决客户对应的问题。")]),_._v(" "),t("li",[_._v("业务架构，描述我们要做一些什么样的事情，对应的业务流程和模式是怎样的。")]),_._v(" "),t("li",[_._v("应用架构，描述我们提供哪些功能以及如何去实现这些功能，可拆解为产品架构和技术架构。")]),_._v(" "),t("li",[_._v("产品架构，描述我们都实现了什么功能结构，它们之间的关系是怎样的。")]),_._v(" "),t("li",[_._v("信息架构，描述我们产品的导航、功能是怎样组织的，通常用思维导图标识。")]),_._v(" "),t("li",[_._v("技术架构，描述我们的技术实现方案，例如微服务间的关系，中间件的使用，组件的设计等。")]),_._v(" "),t("li",[_._v("数据架构，描述我们的数据逻辑模型、物理模型等。")]),_._v(" "),t("li",[_._v("部署架构，描述我们的各种服务如何在环境中部署的。")])]),_._v(" "),t("h3",{attrs:{id:"_3-产品架构设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-产品架构设计"}},[_._v("#")]),_._v(" 3. 产品架构设计")]),_._v(" "),t("p",[_._v("产品架构设计从了解业务流程开始学习业务知识，再梳理拆解成若干的子问题域。理想的产品架构设计方式是搭积木式的，例如我需要个商城系统就拼一个，需要个推荐系统再拼一个，需要个数据平台就再来拼一个。这就需要我们具有比较广阔的视野吗，电商系统、推荐系统、积分系统、数据系统、反垃圾系统、风控系统、内容管理系统、计费系统、工单系统、开发者系统、账号权限系统等等…….")]),_._v(" "),t("p",[_._v("以账号权限系统为例，账号、用户、组织、角色、权限、日志、审计、授权、单点登录有很多知识内容。电商系统中也有商品 SKU 管理、订单拆单与快照、订单状态机、优惠券与退单处理，还有如何设计订单号这种技术分库分表方案反向影响产品设计。")]),_._v(" "),t("p",[_._v("因此产品架构设计，战略部分来自对业务宏观的理解，将各类能力进行拼装。战术部分需要结合业务对各类子系统进行设计改造以适应现有的业务体系。不同的业务体量对产品方案有不同的需求，做一个小电商和淘宝、京东是不同的，小驴拉大车是拉不动了驴也累死了。即使我们采购了第三方非常完善的方案，团队去运营使用也是有巨大成本的。")]),_._v(" "),t("p",[_._v("高内聚低耦合就是先将板块拆解清楚，每个子模块都可以根据业务的发展情况进行独立迭代扩展而不影响其他模块，这样才是解耦的优秀架构。")]),_._v(" "),t("h3",{attrs:{id:"_4-技术架构设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-技术架构设计"}},[_._v("#")]),_._v(" 4. 技术架构设计")]),_._v(" "),t("p",[_._v("产品架构按照业务的天然特性进行功能板块拆解，通常情况下就是符合高内聚低耦合的，因为同一块子业务必然是高内聚的，业务模块互相之间是低耦合的。但到了技术阶段就是理想的状态和残酷的现实。")]),_._v(" "),t("p",[_._v("理想的状态：")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/otDeEE1HGKJvCiW1qbB8.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("残酷的现实：")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/nCEQTsjYuR50Hp3nTqJI.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("技术架构的发展从单体架构大泥球到分层架构，再到微服务架构、事件驱动架构、以及“万物皆流”的流计算架构。此处参考阅读 覃宇：软件架构编年史(译) 。")]),_._v(" "),t("p",[_._v("通过微服务架构可以将原本的单体架构进行拆解，例如账号微服务、订单微服务、工单微服务等。微服务架构有很多拆解设计的思路，此处参考阅读 王启军：《持续演进的Cloud Native：云原生架构下微服务最佳实践》")]),_._v(" "),t("p",[_._v("在微服务各类基础设施日益成熟后，微服务相关的软件研发附属性问题被解决，但是在如何拆解这个业务本质性问题出现了巨大的麻烦。不合理的微服务拆解，不仅不会降低复杂度，反而会制造出很大的麻烦。于是在 2019-2020 年，DDD 领域驱动设计开始热了起来。")]),_._v(" "),t("p",[_._v("对于复杂的中后台业务，通过面向领域的拆解可以与业务子域对应，将业务、产品、技术的设计思路上统一，这样业务引发产品需求变化，也会导致技术大规模的推倒重来。这也是 DDD 领域驱动设计战略层的精髓。")]),_._v(" "),t("p",[_._v("技术架构设计涉及的基础技术知识建议阅读：李运华：《从零开始学架构》")]),_._v(" "),t("h2",{attrs:{id:"四、关于领域驱动设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、关于领域驱动设计"}},[_._v("#")]),_._v(" 四、关于领域驱动设计")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/JWqk1QeNK4YUYYhTjZeP.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("此处参考阅读：")]),_._v(" "),t("ul",[t("li",[_._v("张建飞：《代码精进之路：从码农到工匠》")]),_._v(" "),t("li",[_._v("张逸：构建领域驱动设计知识体系")]),_._v(" "),t("li",[_._v("欧创新：深度解析DDD中台和微服务设计")]),_._v(" "),t("li",[_._v("欧创新、邓頔：《中台架构与实现：基于 DDD 和微服务》")]),_._v(" "),t("li",[_._v("有赞汤师爷：有赞零售中台建设方法的探索与实践")])]),_._v(" "),t("p",[_._v("DDD 领域驱动设计作为一个方法，分为战略设计与战术设计两部分。战略设计部分是业务、产品、技术相关的重点，战术设计更多是研发实现。对于业务方来说，理解 DDD 是不必要的，业务方在团队中往往扮演着业务知识提供者的角色，业务模型的梳理还是依靠产品来完成。对于做中后台产品的产品经理和工程师来说了解 DDD 也不一定是必要的，但一定是有好处的。")]),_._v(" "),t("h3",{attrs:{id:"_1-ddd-领域驱动设计的核心知识点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-ddd-领域驱动设计的核心知识点"}},[_._v("#")]),_._v(" 1. DDD 领域驱动设计的核心知识点")]),_._v(" "),t("ul",[t("li",[_._v("统一业务语言")]),_._v(" "),t("li",[_._v("问题空间与解决方案空间")]),_._v(" "),t("li",[_._v("核心域、支撑域、通用域")]),_._v(" "),t("li",[_._v("四色建模法")]),_._v(" "),t("li",[_._v("事件风暴")]),_._v(" "),t("li",[_._v("限界上下文、聚合根、实体、值对象")]),_._v(" "),t("li",[_._v("领域服务、领域事件、应用服务、BFF 层")]),_._v(" "),t("li",[_._v("失血模型、贫血模型、充血模型、胀血模型")]),_._v(" "),t("li",[_._v("CQRS 命令查询分离与 Event Sourcing 事件溯源")]),_._v(" "),t("li",[_._v("事件消息设计的自洽与回查")])]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/YVYX4gDbXEWaTTvxDGZe.jpeg",alt:"img"}})]),_._v(" "),t("h3",{attrs:{id:"_2-战略设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-战略设计"}},[_._v("#")]),_._v(" 2. 战略设计")]),_._v(" "),t("p",[_._v("统一语言，做领域驱动设计第一步就是拉齐认知，例如账号、用户到底指的是什么，有什么区别；电商系统的用户和论坛中的用户是不是一个用户等等。这样可以避免后续沟通时产生偏差。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/PDBkJnxlKjly02g0Bx9p.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("问题空间与解决方案空间：")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/XwdLiUbS35HR5jgOEti2.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("核心域、支撑域、通用域：")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/wyWedcJu97ArauXk3q3s.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("限界上下文与微服务拆解：")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/G3iHs11AWntWGXHslFeF.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("关于 DDD 领域驱动设计的知识不在此处赘述，阅读推荐资料即可。")]),_._v(" "),t("h3",{attrs:{id:"_3-ddd、中台、微服务间关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-ddd、中台、微服务间关系"}},[_._v("#")]),_._v(" 3. DDD、中台、微服务间关系")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/6x2zl6tLnmpXZVOlpED3.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("摘自欧创新老师文章：中台本质是领域中的某一个子域，需要抽象并标准化，按照单一职责原则建立可复用的领域模型。而微服务则是中台的最佳技术实现。DDD是一种可以同时指导中台业务建模和微服务设计的方法论，它遵循高内聚低耦合的原则，完成从业务端领域拆分、建模到应用端微服务实现的无缝落地。")]),_._v(" "),t("h2",{attrs:{id:"五、关于中台体系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、关于中台体系"}},[_._v("#")]),_._v(" 五、关于中台体系")]),_._v(" "),t("p",[_._v("阿里的双中台体系为“业务中台+数据中台”，中台的本质是企业能力的复用，实现降本增效。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/T1T9l69fkfA2vaPsItwM.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("按照 DDD 领域驱动设计可以划分出业务的核心域、支撑域、通用域，我们可以先将所有的中台都理解为业务中台，各种可复用的模块被拆解未业务中台中的 “XX中心”，例如账号中心、设备中心、数据中心、工单中心等等。其中有些模块因为其通用性，会有商业化的通用解决方案，可以被进一步从内部被拆离至外部。")]),_._v(" "),t("p",[_._v("常见的中台：")]),_._v(" "),t("ul",[t("li",[_._v("业务中台，与企业的业务高耦合，通常需要自己建设实现")]),_._v(" "),t("li",[_._v("数据中台，工具型，中耦合，业务中台与其他对接")]),_._v(" "),t("li",[_._v("技术中台，工具型，低耦合，业务中台与其他对接")]),_._v(" "),t("li",[_._v("身份中台，工具型，中耦合，业务中台与其他对接")]),_._v(" "),t("li",[_._v("低代码中台，工具型，中耦合，业务中台与其他对接")]),_._v(" "),t("li",[_._v("物联网中台，工具型，中耦合，业务中台与其他对接")]),_._v(" "),t("li",[_._v("视觉中台，工具型，中耦合，业务中台与其他对接")]),_._v(" "),t("li",[_._v("算法中台，工具型，低耦合，业务中台与其他对接")])]),_._v(" "),t("h2",{attrs:{id:"六、产品参考清单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、产品参考清单"}},[_._v("#")]),_._v(" 六、产品参考清单")]),_._v(" "),t("p",[_._v("行业标准产品参考：")]),_._v(" "),t("p",[_._v("身份中台：")]),_._v(" "),t("p",[_._v("Authing https://authing.cn/")]),_._v(" "),t("p",[_._v("数据中台：")]),_._v(" "),t("ul",[t("li",[_._v("袋鼠云 https://www.dtstack.com/")]),_._v(" "),t("li",[_._v("阿里云数据中台 https://dp.alibaba.com/")]),_._v(" "),t("li",[_._v("网易易数 https://www.163yun.com/product-bigdata")]),_._v(" "),t("li",[_._v("亿信华辰 https://www.esensoft.com/")])]),_._v(" "),t("p",[_._v("低代码中台：")]),_._v(" "),t("ul",[t("li",[_._v("简道云 https://www.jiandaoyun.cn/")]),_._v(" "),t("li",[_._v("轻流 https://qingflow.com/")]),_._v(" "),t("li",[_._v("宜搭 https://www.aliwork.com/")]),_._v(" "),t("li",[_._v("Mendix https://www.mendix.com/")]),_._v(" "),t("li",[_._v("Outsystems https://www.outsystems.com/")])]),_._v(" "),t("p",[_._v("物联网中台：")]),_._v(" "),t("ul",[t("li",[_._v("阿里云物联网平台 https://iot.aliyun.com/")]),_._v(" "),t("li",[_._v("UCloud 物联网平台 https://www.ucloud.cn/site/product/uiot.html")])]),_._v(" "),t("p",[_._v("视觉中台：")]),_._v(" "),t("ul",[t("li",[_._v("萤石云 https://open.ys7.com/cn")]),_._v(" "),t("li",[_._v("阿里云视频监控 https://www.aliyun.com/product/vs")])]),_._v(" "),t("p",[_._v("算法中台：")]),_._v(" "),t("ul",[t("li",[_._v("阿里云视觉智能开放平台 https://help.aliyun.com/document_detail/143096.html")]),_._v(" "),t("li",[_._v("火山引擎 https://www.volcengine.cn/product/imagerecognition")])]),_._v(" "),t("p",[_._v("数据分析：")]),_._v(" "),t("p",[_._v("神策数据 https://www.sensorsdata.cn/")]),_._v(" "),t("p",[_._v("效率工程平台：")]),_._v(" "),t("p",[_._v("OnesAI https://ones.ai/")]),_._v(" "),t("p",[_._v("VR拍摄：")]),_._v(" "),t("ul",[t("li",[_._v("Matterport https://matterport.com/")]),_._v(" "),t("li",[_._v("Insta360 https://www.insta360.com/cn/enterprise/industries/real_estate")]),_._v(" "),t("li",[_._v("如视 https://realsee.com/")])]),_._v(" "),t("p",[_._v("地球可视化：")]),_._v(" "),t("ul",[t("li",[_._v("Mapbox 地图引擎 https://www.mapbox.com/")]),_._v(" "),t("li",[_._v("Cesium 地球 3D 可视化https://cesium.com/cesiumjs/")]),_._v(" "),t("li",[_._v("Kepler 数据可视化引擎 https://kepler.gl/")]),_._v(" "),t("li",[_._v("Google Earth https://www.google.com/earth/")]),_._v(" "),t("li",[_._v("Airlook https://www.airlook.com/")]),_._v(" "),t("li",[_._v("Maxar https://www.maxar.com/")])]),_._v(" "),t("h2",{attrs:{id:"七、企业级架构探索"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七、企业级架构探索"}},[_._v("#")]),_._v(" 七、企业级架构探索")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/o5ynoesC7iR01YytIzkt.jpeg",alt:"img"}})]),_._v(" "),t("h2",{attrs:{id:"八、避免过度抽象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八、避免过度抽象"}},[_._v("#")]),_._v(" 八、避免过度抽象")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://image.woshipm.com/wp-files/2021/04/s6hrlinGTP57RopLd89M.jpeg",alt:"img"}})]),_._v(" "),t("p",[_._v("内容回顾：")]),_._v(" "),t("ul",[t("li",[_._v("关于软件工程")]),_._v(" "),t("li",[_._v("什么是软件工程")]),_._v(" "),t("li",[_._v("大爆炸、瀑布、原型、增量、迭代")]),_._v(" "),t("li",[_._v("RUP 统一软件开发过程")]),_._v(" "),t("li",[_._v("精益与敏捷")]),_._v(" "),t("li",[_._v("人月神话")]),_._v(" "),t("li",[_._v("功能特性团队")]),_._v(" "),t("li",[_._v("软件工程的本质是管理复杂性")]),_._v(" "),t("li",[_._v("高内聚，低耦合")]),_._v(" "),t("li",[_._v("康威定律")]),_._v(" "),t("li",[_._v("盖尔定律")]),_._v(" "),t("li",[_._v("复杂性守恒定律")]),_._v(" "),t("li",[_._v("关于架构")]),_._v(" "),t("li",[_._v("什么是架构")]),_._v(" "),t("li",[_._v("架构的种类与关系")]),_._v(" "),t("li",[_._v("业务、产品、技术、设计")]),_._v(" "),t("li",[_._v("组件化设计思维")]),_._v(" "),t("li",[_._v("演进式架构")]),_._v(" "),t("li",[_._v("关于领域驱动设计")]),_._v(" "),t("li",[_._v("统一业务语言")]),_._v(" "),t("li",[_._v("战略设计与战术设计")]),_._v(" "),t("li",[_._v("问题域与解决方案域")]),_._v(" "),t("li",[_._v("核心域、支撑域、通用域")]),_._v(" "),t("li",[_._v("限界上下文")]),_._v(" "),t("li",[_._v("领域模型，聚合、实体、值对象")]),_._v(" "),t("li",[_._v("领域服务、领域事件、应用服务")]),_._v(" "),t("li",[_._v("关于中台体系")]),_._v(" "),t("li",[_._v("大中台，小前台")]),_._v(" "),t("li",[_._v("双中台：业务中台与数据中台")]),_._v(" "),t("li",[_._v("关于企业级通用架构")]),_._v(" "),t("li",[_._v("场景应用")]),_._v(" "),t("li",[_._v("业务中台")]),_._v(" "),t("li",[_._v("数据中台")]),_._v(" "),t("li",[_._v("身份中台")]),_._v(" "),t("li",[_._v("低代码中台")]),_._v(" "),t("li",[_._v("物联网中台")]),_._v(" "),t("li",[_._v("关于技术")]),_._v(" "),t("li",[_._v("分层架构")]),_._v(" "),t("li",[_._v("微服务架构")]),_._v(" "),t("li",[_._v("事件驱动架构")]),_._v(" "),t("li",[_._v("流计算架构")]),_._v(" "),t("li",[_._v("SOLID 原则")])])])}),[],!1,null,null,null);v.default=s.exports}}]);