 console.log('Loaded!');

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


var button=document.getElementById('b');


button.onclick = function() 
{
    //create a request object
    var request =new XMLHttpRequest();
    request.onreadystatechange=function()
    {
        if(request.readystate === XMLHttpRequest.DONE)
        {
            //take action
            if(request.status === 200)
            {
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML = counter.toString();            
            }
        }
    };
    //not done yet
    
    //make the request
    request.open('GET','http://amoghkalyanshetti.imad.hasura-app.io/counter',true);
    request.send(null);

    

};