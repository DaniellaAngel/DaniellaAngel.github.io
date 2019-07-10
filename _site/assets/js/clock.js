(function(){
var clock = document.getElementById('clock');
// 时钟的外观设定 变量初始化
var width = clock.getAttribute('data-width'); //桌布宽度
var height = clock.getAttribute('data-height'); //桌布高度
var clockSkin = clock.getAttribute('data-body-color');//时钟颜色
var lightSkin = clock.getAttribute('data-light-color');//时钟小刻度颜色
var dotRaduis = clock.getAttribute('data-dot-raduis');//时钟原点半径
var dot = {
  x: width/2,
  y: height/2,
  raduis: dotRaduis
};//原点位置，半径
var raduis = clock.getAttribute('data-raduis');//圆半径
var borderWidth = clock.getAttribute('data-border-width');//圆边框宽度
//创建<canvas>元素
//创建两个canvas，将钟盘和指针分离开，指针需要根据当前时间擦除重绘
var clockPointers = document.createElement('canvas');
var clockBg = document.createElement('canvas');

clockPointers.width = clockBg.width = width;
clockPointers.height = clockBg.height = height;
clockPointers.style.position = 'absolute';
clockPointers.style.left = 0;
clockPointers.style.right = 0;

clock.appendChild(clockBg);
clock.appendChild(clockPointers);
//但凡要在<canvas>中绘图，都要先获得其上下文，对应的接口是 canvas.getContext
var bgCtx = clockBg.getContext('2d');
//绘制最外面的圆框
bgCtx.beginPath();
bgCtx.lineWidth = borderWidth;
bgCtx.strokeStyle = clockSkin;
bgCtx.arc(dot.x, dot.y, raduis, 0, 2*Math.PI, true);
bgCtx.stroke();
bgCtx.closePath();
//绘制圆点
bgCtx.beginPath();
bgCtx.fillStyle = clockSkin;
bgCtx.arc(dot.x, dot.y, dot.raduis, 0, 2*Math.PI, true);
bgCtx.fill();
bgCtx.closePath();
//绘制刻度
for (var i = 0, angle = 0, tmp, len; i < 60; i++){
  bgCtx.beginPath();
  //突出显示能被5除尽的刻度
  if (0 === i % 5) {
    bgCtx.lineWidth = 5;
    len = 12;
    bgCtx.strokeStyle = clockSkin;
}
else{
    bgCtx.lineWidth = 2;
    len = 6;
    bgCtx.strokeStyle = lightSkin;
}

  tmp = raduis - borderWidth/2;//因为圆有边框，所以要减去边框宽度
  bgCtx.moveTo(
    dot.x + tmp*Math.cos(angle),
    dot.y + tmp*Math.sin(angle)
    );
  tmp -= len;
  bgCtx.lineTo(dot.x + tmp*Math.cos(angle),dot.y+tmp*Math.sin(angle));
  bgCtx.stroke();
  bgCtx.closePath();

  angle += Math.PI / 30;//每次递增1/30π
}
//绘制指针
var ptxCtx = clockPointers.getContext('2d');
//画指针的操作每隔一秒执行一次
function updatePointers() {
ptxCtx.clearRect(0,0,width,height);//清掉原来的指针

//获取当前时间
var now = new Date();
var h = now.getHours();
var m = now.getMinutes();
var s = now.getSeconds();

//算出时分秒指针现在应该指向圆的几分之几处
h = h > 12 ? h - 12 : h;
h = h + m / 60;
h = h / 12;
m = m / 60;
s = s / 60;
drawPointers(h, 6, 65,clockSkin);//画时针
drawPointers(m, 4, 82,clockSkin);//画分针
drawPointers(s, 2, 92,clockSkin);//画秒针
}
//angle：角度；lineWidth：指针宽度；length：指针长度;pointerColor指针颜色
function drawPointers(angle, lineWidth, length,pointerColor){
  angle = angle * Math.PI * 2 - Math.PI / 2;

  ptxCtx.beginPath();
  ptxCtx.lineWidth = lineWidth;
  ptxCtx.strokeStyle = pointerColor;
  ptxCtx.moveTo(dot.x, dot.y);
  ptxCtx.lineTo(dot.x + length*Math.cos(angle), dot.y + length * Math.sin(angle));
  ptxCtx.stroke();
  ptxCtx.closePath();
}

setInterval(updatePointers,1000);
updatePointers(); 
}());
