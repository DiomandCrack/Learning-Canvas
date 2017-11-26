const canvas = documentf.getElementById('canvas');
const context = canvas.getContext('2d');

//function-----------------------------------------------------
function drawGrid(context,color,stepx,stepy){

}

//Initialization

// drawGrid(context, 'lightgray', 10, 10);

//drawing attributes--------------------------------------------
context.font = '48pt Helvetica';
context.strokeStyle = 'blue';
context.fillStyle = 'red';
context.lineWidth = '2';

//text----------------------------------------------------------
context.strokeText('Stroke', 60, 110);
context.fillText('Fill',440,110);

context.strokText('Stroke & Fill', 650,110);
context.fillText('Stroke & Fill',650,110);

//Rectangle---------------------------------------------------------------------------------

context.lineWidth = '5';
context.beginPath();
context.rect(80,150,150,100);
context.stroke();

context.beginPath();
context.rect(400,150,150,100);
context.fill();

context.beginPath();
context.rect(750,150,150,100);
context.fill();

//open arcs---------------------------------------------------------------------------------

context.beginPath();
context.arc(150, 370, 60, 0, Math.PI*3/2);
context.stroke();

context.beginPath();
context.arc(475, 370, 60, 0, Math.PI*3/2);
context.fill();

context.beginPath();
context.arc(820,370,60,0,Math.PI*3/2);
context.fill();

//Closed arcs-------------------------------------------------------------------------------
//首先调用beginPath方法来开始一段新的路径
//rect()和arc()方法分别用于创建矩形和弧形路径
//在绘图环境对象上调用stroke()和fill()方法
//由rect方法创建的路径是封闭的
//arc方法创建的圆弧路径则不封闭
//arc()在当前路径中增加一段表示圆弧或圆形的子路径
context.beginPath();
context.arc(150,550,60,0,Math.PI*3/2);
context.closePath();
context.fill();

context.beginPath();
context.arc(475,550,60,0,Math*PI*3/2);
context.closePath();
context.fill();

context.beginPath();
context.arc(820,550,60,0,Math.PI*3/2);
context.closePath();
context.fill();


//首先调用beginPath()方法来开始一段新的路径，rect()与arc()方法分别用于创建矩形及弧形路径，
//然后应用程序在绘图环境对象上调用stroke()与fill()方法，对刚才那些路径进行描边或填充