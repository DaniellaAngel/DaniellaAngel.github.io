---
layout: post
title:  "1.JavaScript基础(变量，数据类型)"
subtitle: 'JavaScript基础知识：变量和数据类型概述'
date:   2019-07-09 14:47:50 +0800
categories: jekyll update
---
### 1. 变量

#### 1.1 什么是变量
- 变量是计算机内存中存储数据的标识符，根据变量名称可以取得内存中存储的数据
- 为什么要使用变量
    + 使用变量可以方便获取或者修改内存中的数据

#### 1.2 如何使用变量
- var 声明变量
```javascript
var age;
```
- 变量赋值
```javascript
var age;
age = 10;
```
- 变量的初始化
```javascript
// 在声明的同时赋值 --- 变量的初始化
var age = 10;
```
- 同时声明多个变量
```javascript
var age, name, sex;
age = 10;
name = '张三';
```

- 同时声明多个变量并赋值
```javascript
var age = 18,name = '张三',sex = '男';
console.log(age, name, sex);
```

#### 1.3 变量的命名规则和规范

- 规则 - 必须遵守，不遵守就会报错
   - 由字母、数字、下划线、$符号组成，不能以数字开头
   - 不能是关键字和保留字，例如： for  while 等等
   - 区分大小写
- 规范 - 建议遵守，不遵守也不会报错
   - 变量名要有意义
   - 驼峰命名法。 首字母小写，后边单词的首字母大写。 `userName`

#### 1.4 字面量

 数值固定值的表示方法

8，9，10，'张三',false ,true

### 2. 数据类型
#### 2.1 简单数据类型

**Number、String、Boolean、undefined、null**
 
```javascript
  var age = 16;
  var name = '张三';

    // 在c 、 Java  c#中声明变量的时候就确定了数据类型
    // int age = 18;
    // 在JavaScript中，声明变量的时候并没有确定变量的数据类型，
    // JavaScript是一门弱类型的语言，是一门动态类型的语言
    // age = 'abc'; // 这样也是合法的
    // 在代码的执行过程中，才会确定变量的类型
```

#### 2.2 Number类型
 - 进制

 ```javascript
// 十进制
var num = 9;
// 在计算机中，存储的时候都是2进制，但是在计算中，一般都转换成10进制
// 其它进制表示方法
// 十六进制
var num = 0xA;
// 八进制
var num = 07;
 ```
- 浮点数

> 因为存储的都是2进制，所以浮点数会存在精度问题，永远不要用浮动数去做比较，要扩大倍数转换成整数比较。

```javascript
 let a = 0.1+0.2 //a  0.30000000000000004
 0.1+0.2==0.3 // false
```

- 数值的取值范围

```javascript
// 最大值：
Number.MAX_VALUE //1.7976931348623157e+308
// 最小值：
Number.MIN_VALUE //5e-324
//无穷大：
Infinity
// 负无穷
-Infinity

let a = 1;
a/0 //Infinity
```
- 数值判断
    + NaN   not a number 不是一个数字
        * ++NaN 与任何值都不相等，包括他本身++
    + isNaN()  用来判断是不是一个数字

#### 2.3 String类型
 - 字符串字面量

   '程序员','蛋壳er'

- 如何打印一下字符串
  - 我是一个"正直"的人
  - 我很喜欢"蛋壳er'蛋蛋'"

 - 转义字符

| 字面量 | 含义 |
| :----: | ---- |
|   \n   | 换行 |
|   \t   | 制表 |
|  等等  |      |

 - 获取字符串长度

    msg.length

 - 字符串拼接

    'hello' + 'world'

#### 2.4 Boolean类型
- 字面量  true,false
- 计算机内部，1为true,0为false

#### 2.5 undefined和null
1. undefiend 表示一个变量声明了，但是没有赋值
2. null表示 变量内容为null,必须通过手动设置。
   
   
#### 2.6 获取变量的类型
  typeof  用于获取变量的类型。
```javascript
    var age =18;
    var name='zs';
    console.log(typeof age);//number
    console.log(typeof name);//string

```

#### 2.7 注释
```javascript
// 单行注释

/*
多行注释

多行注释 一般用于描述 整个文档，或者描述某个函数

**/

```

### 3. 数据类型转换

使用谷歌浏览器，查看数据类型打印的样式
字符串是 黑色，数值类型和布尔类型 是蓝色 ，undefined和null 是灰色

#### 3.1 转换成字符串
- toString()方法
- String() 方法
- 通过字符串拼接的方法

```javascript
    var age = 18;
    var name  = 'zs';
    var isRight = true;
    var a;
    var b = null;
    // 五种数据类型在 console中打印的样式
    // console.log(age);
    // console.log(name);
    // console.log(isRight);
    // console.log(a);
    // console.log(b);


    // 转换成字符串的方法
    // 1.直接调用toString方法
    var num = 18;
    var isRight = true;
    var a;

    // console.log(typeof num.toString());
    // console.log(typeof irRight.toString());

    // null 和 undefined方法没有 toString方法
    // console.log(a.toString());//报错


    // 2. String() 强制类型转换
    //console.log(typeof String(num));
    //console.log(typeof String(isRight));

    //console.log(typeof String(a));

    // 3.字符串拼接(强制类型转换，并且undefined和null类型可以使用)
    console.log(typeof (num + ''));
    console.log(typeof (isRight + ''));
    console.log(typeof (a + ''));//undefined
```


#### 3.2 转换成数值类型
- Number() 强制类型转换
    + 只要字符串中包含字母，就是NaN
    + 布尔类型转换成 0 或 1
- parseInt() 转换成整数
    + 非数字 是 NaN
    + 布尔类型 是 NaN
    + 数字开头的字符串是 数字
    + 字母开头的字符串 是字母
- parseFloat() 转换成浮点数
    + 与parseInt非常类似
    + 解析第一个 . ，遇到第二个. 或者 非数字结束
    + 如果解析的内容只有整数，那么就返回整数
- 取正数 或者 负数 或者 - 0 运算  
    + 隐式转换
    + 如果带有非数字就是NaN
    + 能转换布尔类型
    + 注意不能 使用+ ,此时是 字符串拼接符

```javascript
   // 1. Number 强制类型转换
    var str = 'abc';
    var isRight = true;

    // console.log(Number(str)); // NaN
    // console.log(Number(isRight));

    // console.log(Number('123'));
    // console.log(Number('123abc'));// Number进行强制类型转换的时候，如果字符串中有一个 字符不是数字的，那么值是NaN

    // 2.parseInt 转换成整数类型

    console.log(parseInt(str));
    // parseInt 无法把布尔类型 转换成 数值
    console.log(parseInt(isRight));

    console.log(parseInt('123'));
    // parseInt在转换的时候，遇到数字则转换成数字，遇到非数字，则返回
    console.log(parseInt('123abc')); //


    // 3.parseFloat  用法跟parseInt 相似
    console.log(parseFloat('123.333.221.22')); // 123.333


    // 4. 取正 或取负  或者 进行 数学运算  隐式转换
    console.log(+'123');
    console.log(-'555');
    console.log(+'abc');
    console.log(+'123abc');
    console.log('444'-0);
```
    
    
#### 3.3 转换成布尔类型
只有Boolean() 强制类型转换

转换成false 的情况
- null
- undefined
- ''
- 0
- NaN
  
  
  其它情况都是true
  
```javascript
    var str = 'abc';
    var num = 123;
    var a;
    var b = null;
    console.log(Boolean(str));
    console.log(Boolean(num));
    console.log(Boolean(a));
    console.log(Boolean(b));
    // 转换成  false的五种情况
    // 数字0
    //  字符串 ''
    // undefined
    // null
    // NaN
```
