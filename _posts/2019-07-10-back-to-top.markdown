---
layout: post
title:  "JavaScript实现回到顶部"
subtitle: '原生js实现回到顶部，越接近顶部滚动越慢的效果'
date:   2019-07-10 22:28:50 +0800
categories: jekyll update
---

直接上代码

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Javascript 回到顶部效果</title>
    <style type="text/css">
        #btn {
            width: 40px;
            height: 40px;
            position: fixed;
            display: none;
            right: 0px;
            bottom: 30px;
            background-color: #000;
        }

        #btn:hover {
            background-color: #999;
        }

        .box {
            width: 1190px;
            margin: 0 auto;
            height: 2000px;
            background: #ffafcc;
        }
    </style>
</head>

<body>
    <div class="box">
    </div>
    <a href="javascript:;" id="btn" title="回到顶部"></a>

    <script type="text/javascript">
        window.onload = function() {
            var obtn = document.getElementById('btn');
            var timer = null;
            var isTop = true;
                //获取页面的可视窗口高度
                var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

                //滚动条滚动时触发
                window.onscroll = function(){
                    //在滚动的时候增加判断
                    var osTop = document.documentElement.scrollTop || document.body.scrollTop;//特别注意这句，忘了的话很容易出错
                    if (osTop >= clientHeight) {
                        obtn.style.display = 'block';
                    }else{
                        obtn.style.display = 'none';
                    }

                    if (!isTop) {
                        clearInterval(timer);
                    }
                    isTop = false;
                };

                btn.onclick = function(){
                    //设置定时器
                    timer = setInterval(function(){
                        //获取滚动条距离顶部的高度
                        var osTop = document.documentElement.scrollTop || document.body.scrollTop;  //同时兼容了ie和Chrome浏览器

                        //减小的速度
                        var isSpeed = Math.floor(-osTop / 6);
                        document.documentElement.scrollTop = document.body.scrollTop = osTop + isSpeed;
                        //console.log( osTop + isSpeed);

                        isTop = true;

                        //判断，然后清除定时器
                        if (osTop == 0) {
                            clearInterval(timer);
                        }
                    },30);      
                };
            }
        </script>
    </body>

    </html>
```
### 知识点

#### 1. DOM

```javascript
document.documentElement.scrollTop;document.body.scrollTop//获取滚动条的位置
document.documentElement.clientHeight;//获取页面可视窗高度
```
#### 2. 事件
```javascript
window.onload//页面加载时
window.onscroll//滚动条滚动时
obtn.onclick//点击事件
```
#### 3. 定时器
