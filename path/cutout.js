const context = document.getElementById('canvas').getContext('2d');

function drawGrid(tontext,color,stepx,stepy){
    context.strokeStyle = color;
    context.lineWidth = 0.5;

    for(let i = stepx + 0.5;i < context.canvas.width; i += stepx){
        context.beginPath();
        context.moveTo(i,0);
        context.lineTo(i, context.canvas.height);
        context.stroke();
    }

    for(let i = stepx + 0.5; i < context.canvas.height; i += stepx ){
        context.beginPath();
        context.moveTo(0,i);
        context.lineTo(context.canvas.width,i);
        context.stroke();
    }
}

function draw(){
    context.clearRect(0,0,
        context.canvas.width,
        context.canvas.height
    );

    context.save();

    drawGrid(context,'lightgray',10,10);

    context.shadowColor = `rgba(200,200,0,0.5)`;
    context.shadowOffsetX = 12;
    context.shadowOffsetY = 12;
    context.shadowBlur = 15;

    drawCutouts();
    strokeCutoutShapes();

    context.restore();
}


function drawCutouts(){
    context.beginPath();
    addOuterRectanglePath(); //外层

    addCirclePath(); //内部剪纸
    addRectanglePath(); 
    addTrianglePath();

    context.fill(); //裁剪形状
}

//裁剪形状的描边
function strokeCutoutShapes(){
    context.save();

    context.strokeStyle = 'rgba(0,0,0,0.7)';
    context.beginPath();
    addOuterRectanglePath();
    context.stroke();

    context.beginPath();

    addCirclePath();
    addRectanglePath();
    addTrianglePath();

    context.restore();
}

function rect(x,y,w,h,direction){
    if(direction){
        context.moveTo(x,y);
        context.lineTo(x, y + h);
        context.lineTo(x + w, y + h);
        context.lineTo(x + w, y);
        context.closePath();
    }else{
        context.moveTo(x,y);
        context.lineTo(x+w,y);
        context.lineTO(x+w,y+h);
        context.closePath();
    }
}

function addOuterRectanglePath(){
    context.rect(110,25,370,355);
}

function addCirclePath(){
    context.arc(300,300,40,0,Math.PI*2,true);
}

function addRectanglePath(){
    rect(310,55,70,35,true);
}

function addTrianglePath(){
    context.moveTo(400,200);
    context.lineTo(250,150);
    context.lineTo(200,200);
    context.closePath();
}

//Initialzation-------------------------------------------------------
 context.fillStyle = 'goldenrod';
 draw();