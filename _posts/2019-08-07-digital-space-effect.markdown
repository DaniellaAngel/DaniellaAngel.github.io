---
layout: post
title:  "浏览器还原电影《黑客帝国》的数字雨"
subtitle: '原生javaScript实现'
date:   2019-08-07 21:11:50 +0800
categories: jekyll update
---
觉得很酷，所以记录一下。更改unicode字符编码区间，可获取不同的字符效果。常用unicode字符编码区间后有附上。
转载地址：

https://codepen.io/yuanchuan/pen/YoqWeR

直接上实现代码：

```html
<!DOCTYPE html>
<html>

<head>
    <title>socket</title>
    <meta charset="UTF-8">
    <style>
        html, body { 
              height: 100%; 
              margin: 0; 
              overflow: hidden;
        }
        body { 
              display: flex; 
              align-items: center; 
              justify-content: center;
              background: #000; 
        }
        main {
              display: flex;
        }
        p {
              line-height: 1;
        }
        span {
              display: block;
              width: 2vmax; 
              height: 2vmax; 
              font-size: 2vmax; 
              color: #9bff9b11;
              text-align: center;
              font-family: "Helvetica Neue", Helvetica, sans-serif;
        }
    </style>
</head>
<body>
    <main></main>
</body>
<script type="text/javascript">
    function r(from, to) {
        return ~~(Math.random() * (to - from + 1) + from);
    }
    function pick() {
        return arguments[r(0, arguments.length - 1)];
    }
    function getChar() {
        //通过选取一定的unicode字符编码区间，来决定展示的内容是什么字符
        return String.fromCharCode(pick(
            r(0x30, 0x31),
            r(0x30, 0x31),
            r(0x30, 0x31)
        ));
    }
    function loop(fn, delay) {
        let stamp = Date.now();
        function _loop() {
            if (Date.now() - stamp >= delay) {
                fn(); stamp = Date.now();
            }
            requestAnimationFrame(_loop);
        }
        requestAnimationFrame(_loop);
        /*
        *window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，
        *并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
        *该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
        */
    }
    class Char {
        constructor() {
            this.element = document.createElement('span');
            this.mutate();
        }
        mutate() {
            this.element.textContent = getChar();
        }
    }
    class Trail {
        constructor(list = [], options) {
            this.list = list;
            this.options = Object.assign({ size: 10, offset: 0 }, options);
            this.body = [];
            this.move();
        }
        traverse(fn) {
            this.body.forEach((n, i) => {
              let last = (i == this.body.length - 1);
              if (n) fn(n, i, last);
          });
        }
        move() {
            this.body = [];
            let { offset, size } = this.options;
            for (let i = 0; i < size; ++i) {
              let item = this.list[offset + i - size + 1];
              this.body.push(item);
          }
          this.options.offset = 
          (offset + 1) % (this.list.length + size - 1);
        }
    }
    class Rain {
        constructor({ target, row }) {
            this.element = document.createElement('p');
            this.build(row);
            if (target) {
                target.appendChild(this.element);
            }
            this.drop();
        }
        build(row = 20) {
            let root = document.createDocumentFragment();
            let chars = [];
            for (let i = 0; i < row; ++i) {
              let c = new Char();
              root.appendChild(c.element);
              chars.push(c);
              if (Math.random() < .5) {
                loop(() => c.mutate(), r(1e3, 5e3));
            }
        }
        this.trail = new Trail(chars, { 
          size: r(10, 30), offset: r(0, 100) 
        });
        this.element.appendChild(root); 
    }
    drop() {
        let trail = this.trail;
        let len = trail.body.length;
        let delay = r(10, 100);
        loop(() => {
          trail.move();
          trail.traverse((c, i, last) => {
            c.element.style = `
            color: hsl(136, 100%, ${85 / len * (i + 1)}%)
            `;
            if (last) {
              c.mutate();
              c.element.style = `
              color: hsl(136, 100%, 85%);
              text-shadow:
              0 0 .5em #fff,
              0 0 .5em currentColor;
              `;
          }
        });
      }, delay);
    }
}
const main = document.querySelector('main');
for (let i = 0; i < 50; ++i) {
  new Rain({ target: main, row: 50 });
}
</script>
</html>
```
unicode字符编码区间：

常见Unicode编码范围：

汉字：[0x4e00,0x9fa5]（或十进制[19968,40869]）
数字：[0x30,0x39]（或十进制[48, 57]）
小写字母：[0x61,0x7a]（或十进制[97, 122]）
大写字母：[0x41,0x5a]（或十进制[65, 90]）
其他：除上所有
其他：

一、中文汉字区：

(1)生冷字：

0x3400--0x4DB5

(2)普通：

0x4E00--0x9FA5

(3)其它：

0xF900--0xFA2C

二、韩文区：

(1)韩文音标字符区

0x1100--0x11F9

0x3130--0x318E

(2)韩文：

0xAC00--0xD7A3

三、符号表情：

(1)分段字符（如：① ⑴ ⒈ ）

0x2460--0x24E9

(2)制表附助、特殊字符等(┊┌┍ ▃ ▄ ▅)

0x2500--0x25FF

(3)实物体字符

0x2600--0x2671

0x2700--0x27FF

(4)全角括号(《》「」『』【】〔〕〖〗等)

0x3007--0x301A

(5)特殊序号或单位元素区(㈠ ㎎ ㎏ ㎡ 等)

0x3200--0x33FF

(6)与ANSI对应的全角字符

0xFF00--0xFF5E

对应： 0x0020--0xFF7E (即 ! -- ~ 的区间)

(7)其它特殊符号

0x2000--0x22FF

四、日本字符或假名符号区：

0x3041--0x30FF

0x3104--0x312A

0xFF66--0xFF9E

其中平假名：0x3041--0x3094

片假名：0x30A1--0x30FA

五、其它字条或音标区：

(1)罗马音标

0x00C0--0x0232

(2)类罗马音标或欧洲字符

0x0386--0x04F3

0x1E00--0x1EFF

0x1F00--0x1FFF

(3)阿拉伯语

0x0620--0x06FF

(4)佛教混合梵语

0x0904--0x0970

0x0A00--0x0AEF

0x0E00--0x0E32