---
title: jmeter使用
date: 2023-05-08
categories:
 - 测试
tags:
 - 测试
 - Jmeter
---

# 一、jmeter安装与配置

## 1、jdk安装

Jmeter是基于JAVA的应用，所以需要安装jdk

jdk安装参考：[https://www.cnblogs.com/gaobobo/p/10674934.html](https://www.cnblogs.com/gaobobo/p/10674934.html)

## 2、jmeter下载安装

参考：[https://www.cnblogs.com/siduoxiaohua/p/11127669.html](https://www.cnblogs.com/siduoxiaohua/p/11127669.html)

## 3、jmeter配置

在jemter bin安装目录下修改jmeter.properties文件：

  （1）sampleresult.default.encoding=UTF-8 请求编码

  （2）CookieManager.save.cookies=true

# 二、jmeter目录结构简介

jmeter常用的目录主要有bin目录、lib目录

## 1、bin目录

主要包含jmeter的启动文件、配置文件和日志文件等

启动文件：Jmeter.bat/Jmeter.sh

配置文件：Jmeter.properties，一旦修改配置文件，需要重启jmeter才能生效

## 2、lib目录

lib\ext目录，用来存放第三方的组件和插件，包括我们自己编写的二次扩展包

# 三、jmeter常用组件

jmeter常用组件有：测试计划、线程、配置元件、定时器、前置处理器、后置处理器、断言、监听器、逻辑控制器、取样器

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/83b1aa7a-5817-4a00-984f-7d427f73e5a1.png)

## 1、测试计划

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/6838b788-e940-48c0-ba81-7ff0ba9f070a.png)

### （1）用户定义的变量

用户自定义的全局变量，可以在整个测试用例中使用

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/efd7f409-2e40-4573-94fc-9f18c912804a.png)

使用自定义变量${变量名称}：

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/20d1ac6d-83d8-4670-b72d-cafd21d6e8ff.png)

### （2）独立运行每个线程组

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/24be4237-faba-48ca-b25f-0c9e8dd9fec5.png)

勾选后，普通线程组之间间按上下排列顺序执行，而非默认的并行

勾选前，每个线程组并行运行，每次执行时的顺序是随机的：

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/f753f4d7-a5b0-4d5d-820c-c6ff05e58e0a.png)

勾选后，线程组按上下排列顺序执行：

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/9c3b1efa-644b-4a42-b3c2-53a61fd34196.png)

在使用时一般默认不勾选

### （3）添加目录或jar到classpath

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/12da4167-cf06-4732-98ce-5dedf5f080dd.png)

把jar文件的目录添加到指定的测试计划，关于jar的使用见下文

## 2、线程组

线程组是用来请求接口的，常用的有：线程组、jp@gc - Stepping Thread Group、setUp线程组、tearDown线程组

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/d9f84826-133d-431e-a28b-a3530c4d641f.png)

### （1）线程组

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/dddd1b26-f3d0-4edd-87c8-13fa9e17dfb2.png)

#### （一）在取样器错误后要执行的动作

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/ad25db90-e73f-4ac5-a9de-8f119b786267.png)

继续：线程出错继续执行

启动下一线程循环：开始下一次循环

停止线程：3个线程循环2次，如果第二个线程出问题，出错的线程停止，继续执行其余线程

停止测试：把线程运行的请求运行完才停止

立即停止测试：立刻停止所有线程

一般默认选择出错后继续执行

#### （二）线程属性

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/2fe49c6a-500d-4ce2-9a16-9d213e015359.png)

线程数：做接口功能测试时一般默认填写1，创建线程要消耗CPU，做并发测试时可以结合目标tps以及rt进行设置，应用处理快可以设置小点

Ramp-Up时间(秒)：线程在多少秒内启动，一般默认填写1。如果线程数是100，这里设置为10，表示10秒内启动100线程，但是不一定是每秒启动10个线程：

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/f922a87b-b384-4ab2-8467-bd200f2b153a.png)

循环次数：线程循环执行的次数

调度器：勾选后，可以设置持续时间和启动延迟时间

### （2）jp@gc - Stepping Thread Group

阶梯加压，可以设置在多长时间用多少线程压测

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/cba2e9c8-4099-46e0-90ba-4fb028f92cf3.png)

### （3）setUp线程组

执行前执行一次，应用场景是初始化数据

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/ace65262-0b23-49c6-bd0e-030dfd2f53fe.png)

### （4）tearDown线程组

执行最后执行一次，做关闭连接、清除垃圾数据等收尾工作

## 3、取样器

取样器中常用的是http请求

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/e813ad5b-7c62-4bbf-b45d-3ae5349170c2.png)

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/d24f3be5-8f52-440c-8086-bcc16703f9e8.png)

http请求中，需要填写协议、IP、端口号、请求方式(POST/GET)、请求路径

参数：Content-Type一般为form，格式如下：

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/99ec9a5c-13f1-486e-84f7-b99dd03832c6.png)

点击添加按钮新增一行，也可以批量粘贴

消息体数据：Content-Type为application/json，格式如下所示：

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/aabcda9e-d9e9-489c-905e-3e35d6e8d2dc.png)

## 4、配置元件

### （1）CSV 数据文件设置

可以用来定义全局变量，根据变量名称进行引用${变量名称}

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/df8c8da3-0044-4e7c-bb30-9348e986b72c.png)

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/11fafe41-fa99-4192-b79f-b6d3dca4ec15.png)

文件名称：文件的路径，路径不要包含空格、特殊字符

文件编码：一般选择UTF-8

变量名称：csv文件中每列的名称，如有多列，用英文逗号间隔，如果只有一列，则不加分隔符

忽略首行：如果参数文件中有很多列，为了区分每列，就在首行把列名写上，此时就要选True

分隔符（用'\t'代表制表符）：是变量值的分隔符，分隔符就是英文逗号

是否允许带引号？：如果是False，请求中保留引号；如果是True：请求中去掉引号

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/6b568ec5-cd2f-4618-9152-9522c2a3b4aa.png)

遇到文件结束符再次循环?：True表示循环，false表示不循环，一般保持默认False

遇到文件结束符结束线程？：值不够，是否停止线程，一般保持默认False，如果设置True，则遇到文件结束符再次循环中设置的True失效

线程共享模式：

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/87a12964-126a-41df-82d5-cd1ad7d716e5.png)

a、所有现场：默认值，多个线程组取值不一样，每个线程组内的线程取值也不一样

b、当前线程：多个线程组取值一样，每个线程组内的线程取值也一样

c、当前线程组：多个线程组取值一样，每个线程组内的线程取值不一样

### （2）HTTP信息头管理器

设置content-type、token等，在后续的请求header中会自动带入

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/85a5cf17-75a1-49d0-be3a-0ca0774445ef.png)

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/1fe825e8-5104-46a5-9d58-ca0bb2bb4643.png)

### （3）HTTP Cookie管理器

如果登录后有cookie，重定向时没cookie，就又跳转到登录页面，有cookie时添加cookie管理器

### （4）HTTP请求默认值

应用场景：相同的脚本，测试不同的环境(测试环境、开发环境等)，填写协议、ip、端口、公共参数等

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/93fead65-57fd-491d-8d53-1d85e073d4b7.png)

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/8db19433-4116-4f29-b688-e04315374a8e.png)

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/63358368-fcd5-4d06-8b33-9e774b7935fc.png)

## 5、前置处理器

前置处理器主要用来做一些请求前的准备工作，比如测试数据的生成

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/0e46d2ab-e27c-4b43-990f-3c51b6a8f94a.png)

## 6、后置处理器

后置处理器于运行结果数据的提取、处理等，常用的后置处理器有：json提取器、正则表达式提取器、beanshell后置处理器

beanshell后置处理器：

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/70b32e1a-cb40-457f-902f-5963748de56e.png)

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/16502a17-176b-4ba8-9ae6-f9ef3113e8ad.png)

token提取器：

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/9d788b0d-208d-4177-83f2-eb571fd0d269.png)

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/16a550ac-4faf-43e5-90e1-100d447a8384.png)

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/97cf010c-b524-4afc-bcd2-ecc3fb6331fb.png)

正则表达式提取器：

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/9ebe4986-e8c4-455d-80a8-cb7f64ed09f0.png)

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/b52ceb9c-1f60-493c-aeaf-f7094f45c54d.png)

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/e8862bbd-cd80-4eda-8c17-5879e7b9b50d.png)

## 7、定时器

接口请求前等待多少毫秒

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/6db45690-8f8a-479d-9f04-c12899c9f77e.png)

## 8、断言

响应断言用来判断接口是否响应成功

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/26f639c7-387e-42db-9671-3d46f6b8b473.png)

常用的断言有两种：响应文本、响应代码

响应文本：判断接口响应数据中是否包含某个字段

响应代码：接口响应状态码，如：200、404、504等

## 9、监听器

常用的监听器：查看结果树、聚合报告

### （1）查看结果树

用于查看接口的请求和响应内容

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/77280304-450d-42b7-87c1-b4832a290319.png)

### （2）聚合报告

用于查看接口的响应时间和tps

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/0bba33c2-9db0-49b9-9d4f-a40590877087.png)

## 10、逻辑控制器

### （1）循环控制器

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/3c4ebca1-0385-48d4-97d0-b8646c814c8d.png)

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/b214e970-4957-4163-ab3d-0c00350b75ff.png)

### （2）if控制器

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/aa2d516c-2158-4415-86c3-1ff6b5f3fc34.png)

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/864564d6-8505-4087-afd5-6142c9dc8874.png)

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/2d453ebb-4b4a-4993-a748-65803475e6c4.png)

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/d4f6cc1c-5242-404a-a501-b88d40654fc8.png)

### （3）吞吐量控制器

用于控制混合场景压测时的业务比例

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/c0cb7d5e-04f6-4950-91cd-8d3c633333f1.png)

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/15a7b087-bc04-474d-9c47-d0affd8f2e6f.png)

### （4）foreach控制器

例子：提取并打印出www.baidu.com响应结果中所有name值

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/e7aa417b-2fc4-4c17-aab9-b956d77dd92d.png)

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/5061ec3c-2a7e-4d2b-989f-8b6d5e8d5dec.png)

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/1a51eed1-21f3-4a8a-b4a4-a4ab8592ffc6.png)

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/be31fa0b-a777-42d7-85f4-45b2a808827a.png)

# 四、jmeter函数助手

## 1、生成随机数

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/926b2ec6-952a-4a4a-9c0f-5f046b3ca381.png)

## 2、获取随机时间

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/9541de2c-eb9b-400d-911f-ada2e9436e98.png)

## 3、获取当前时间/过去日期/未来日期

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/ab8527f6-524b-44f2-9aa0-0e9d39193aca.png)

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/1eb45c72-8fad-44bc-bef3-0ebc9da84b71.png)

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/a3694028-9fff-411d-b39e-aab674d71d23.png)

当前日期：${__timeShift(yyyyMMdd,,,,)}

昨天日期：${__timeShift(yyyyMMdd,,-P1D,,)}

明天日期：${__timeShift(yyyyMMdd,,P1D,,)}

当前时间：${__timeShift(yyyyMMdd HH:mm:ss,,,,)}

1个小时前：${__timeShift(yyyyMMdd HH:mm:ss,,-PT1H,,)}

20分钟前时间：${__timeShift(yyyyMMdd HH:mm:ss,,-PT20M,,)}

50秒之后：${__timeShift(yyyyMMdd HH:mm:ss,,PT50s,,)}

明天3小时20分钟50秒后：${__timeShift(yyyyMMdd HH:mm:ss,,P1DT3H20M50S,,)}

# 五、jmeter引入java文件

jmeter中使用java文件的场景多用于构造复杂数据，比如MD5加解密、生成身份证、手机号等，java代码可委托java开发帮忙编写

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/72c99e01-50c2-4579-a99e-a26a9fb14b1a.png)

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/5b45c338-ed9b-4b89-a83c-9d81be2bc038.png)

# 六、jmeter接口性能测试简介

## 1、什么是接口性能？

不同的角色关注的点不同：

用户--响应时间的快慢

产品--业务处理快慢

运维--响应时间、资源利用率（CPU、内存、磁盘IO、网络带宽）、稳定性

dba--数据库资源利用率，是否有慢sql、死锁等

开发--响应时间、代码性能

架构师--架构设计是否合理

测试--需要关注以上所有，响应时间快慢、资源利用率、稳定性、数据库、架构、TPS等

## 2、如何理解性能测试

性能测试是指，根据性能需求/指标(响应时间、业务容量TPS、服务器资源利用率)、业务模型(压测时每个业务的比例)，设计性能测试方案(包括压测环境、数据、场景、脚本、性能指标、压力策略、监控策略、风险)，以合理的线程数连续递增加压，并同时进行监控，根据监控数据找到性能瓶颈、并进行分析、定位、调优，最终得出结论来评估系统的性能指标是否满足业务需求。还要进行强度测试，找到系统的最大容量。

## 3、性能测试中什么是并发？线程、tps、rt之间的关系是什么？

性能测试中通常所说的并发并非jmeter的线程数，而是服务器每秒处理的线程数

![](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/MeYVOLeRQKPzlpz2/img/7eb6eaf3-c6d3-49f6-be96-61c7b966c3d7.png)

线程、tps、rt之间的关系：tps = 处理总请求/并发时间 = 线程数*(1000/rt)

## 4、性能测试的步骤

（1）了解业务场景

（2）性能需求评审，需要压测哪些接口、确定接口性能测试目标、接口业务模型

（3）申请性能测试环境

（4）编写压测方案

（5）编写性能测试用例，准备测试数据、设计业务场景

（6）部署性能指标监控工具

（7）预热测试

（8）执行压测、并监控性能指标

（9）根据监控指标分析定位性能瓶颈、并调优

（10）回归测试

（11）压测报告

## 5、性能测试思考题

### （1）思考题一

假设：牧原肉食平均每天有10000台冷链车外出送货，要监控这10000台车的物流轨迹，要求每秒实时上传车的位置到监控系统（假设不涉及定时任务进行批处理、异步处理）。

请根据以上场景，请提取性能需求

### （2）思考题二

假设：聚爱优选app，目前有500w用户，日活50w。用户在早中晚三个时段集中活跃，每个时段持续20分钟。商品查询业务每天平均请求总量在1000w平均响应时间在2s，下订单业务每天平均总请求量在100w，平均响应时间在3s。当前系统稳定运行。

由于业务快速发展，聚爱优选app用户暴增，业务要求支撑的用户达到5000w，要求测试目前的系统是否能够支撑？如果不能，需要确定当前能够支撑多少用户平稳运行。

请根据以上场景建立性能测试模型、估算性能测试指标