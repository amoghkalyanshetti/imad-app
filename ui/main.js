console.log('Loaded!');

//change the text of main-text div
var element=document.getElementById('main-text'
);
element.innerHTML='new Value';

//move the image
var img=document.getElementById("imag");
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onClick=function(){
  setInterval(moveRight,100);//every 100 milliseconds call movRight function
};