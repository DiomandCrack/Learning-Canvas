const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const repeatRadio = document.getElementById('repeatRadio');
const repeatXRadio = document.getElementById('repeatXRadio');
const repeatYRadio = document.getElementById('repeatYRadio');
const noRepeatRadio = document.getElementById('noRepeatRadio');
const image = new Image();

//用一副图像来创建图案对象，用fillStyle属性设置为该图案，然后用次图案填充整个canvas
//functions---------------------------------------------------------------
function fillCanvasWithPattern(repeatString){
    //图案可以是 image canvas元素 video元素
    //createPattern 创建图案 参数2个：图案本身，如何重复图案的字符串
    const pattern = context.createPattern(image,repeatString);
    //创建一个可以用来在canvas之中对图形和文本进行描边与填充的图案
    context.clearRect(0, 0, canvas.width,canvas.height);
    context.fillStyle = pattern;
    context.fillRect(0,0,canvas.width,canvas.height);
    context.fill();
}

//Event handles--------------------------------------------------------------------

repeatRadio.onclick = function(e){
    fillCanvasWithPattern('repeat');
};

repeatXRadio.onclick = function(e){
    fillCanvasWithPattern('repeat-x');
};

repeatYRadio.onclick = function(e){
    fillCanvasWithPattern('repeat-y');
};

noRepeatRadio.onclick = function(e){
    fillCanvasWithPattern('no-repeat');
}

//Initialization-------------------------------------------------------------

image.src = 'redball.png';
image.onload = function(e){
    fillCanvasWithPattern('repeat');
};