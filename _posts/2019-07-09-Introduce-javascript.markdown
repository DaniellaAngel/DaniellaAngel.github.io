---
layout: post
title:  "0.JavaScript简介"
subtitle: 'JavaScript的组成和引入方式'
date:   2019-07-09 14:41:49 +0800
categories: jekyll update
---
### 网页、网站和应用程序

> 网页： 单独的一个页面  
> 网站： 一些相关的网页组成在一起，就变成了网站  
> 应用程序： 可以和用户产生交互，并且实现某种功能  
>     使用web技术也可以用来做应用程序（百度脑图演示）


### JavaScript能做啥？
1. [impressJS](https://impress.js.org/#/step-2)
2. [百度脑图](http://naotu.baidu.com/)
3. [极客战记](https://codecombat.163.com/play)


### JavaScript介绍

#### JavaScript是什么

它最初由Netscape的Brendan Eich设计。Netscape在最初将其脚本语言命名为LiveScript，后来Netscape在与Sun合作之后将其改名为JavaScript。JavaScript最初受Java启发而开始设计的，目的之一就是“看上去像Java”，因此语法上有类似之处，一些名称和命名规范也借自Java。JavaScript与Java名称上的近似，是当时Netscape为了营销考虑与Sun微系统达成协议的结果。为了取得技术优势，微软推出了JScript来迎战JavaScript的脚本语言。为了互用性，ECMA国际创建了ECMA-262标准（ECMAScript）。两者都属于ECMAScript的实现。

> JavaScript 是一种运行在**客户端**的*脚本语言*  
> JavaScript 的解释器称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言。

#### JavaScript最初的目的
  为了减少网络请求响应时间，在客户端进行表单验证。


#### JavaScript的目前的应用场景
JavaScript 无所不能

1. 网页特效
2. 服务端开发([Node.js](https://nodejs.org))
3. 命令行工具（[Node.js](https://nodejs.org)）
4. 桌面应用（[Electron](https://electronjs.org/)）
5. App([Cordova](https://cordova.apache.org/))
6. 硬件控制-物联网（[Ruff](https://ruff.io/)）
7. 游戏开发（[Cocos2d-JS](https://www.cocos.com/docs/js/)）  
etc.

#### JavaScript 与 HTML、CSS的区别

1. HTML 提供网页结构，提供网页中的内容
2. CSS 用于美化页面
3. JavaScript 用来控制页面内容，给页面增加动态效果

#### JavaScript的组成


- ECMAScript  
ECMA 欧洲计算机联合会

定义了JavaScript的语法规范。它是JavaScript的核心，描述了语言的基本语法和数据类型，ECMAScirpt是一套标准，定义了语言的标准，与具体的实现是无关的。

- BOM - 浏览器模型对象
一套操作浏览器功能的API，比如 弹出框、控制浏览器跳转，获取分辨率等等

- DOM - 文档对象模型
一套操作页面的API，把HTML看成是一个文档树，通过DOM的API可以对树上的节点进行操作。


### JavaScript初体验
css书写位置  

js书写位置   


- 行内JS
- 内部JS
- 外部js
> 不能在引入外部js的同时，书写内部js代码

```javascript
<script src="demo.js">
  alert('1')
</script>
//这个1永远不会出现
```