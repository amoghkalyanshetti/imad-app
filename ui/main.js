// console.log('Loaded!');

// //change the text of main-text div
// var element=document.getElementById('main-text'
// );
// element.innerHTML='new Value';

// //move the image
// var img=document.getElementById("imag");
// var marginLeft=0;
// function moveRight()
// {
//     marginLeft=marginLeft+10;
//     img.style.marginLeft=marginLeft+'px';
// }
// img.onClick=function(){
//   var interval=setInterval(moveRight,100);//every 100 milliseconds call movRight function
// };

var counter=0;
button.onclick = function() 
{
    //make request to the counter endpoint
    
    //capture the response and store it in a variable
    
    //render the variable in  the correct span
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML = counter.toString();
    
    
    
    
    
};