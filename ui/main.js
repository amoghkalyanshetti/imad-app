console.log('Loaded!');

//change the text of main-text div
var element=document.getElementById('main-text'
);
element.innerHTML='new Value';

//move the image
var img=document.getElementById("imag");
img.onClick=function(){
  img.style.marginLeft='200px';   
};