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


var button=document.getElementById('counter');


button.onclick = function() 
{
    //create a request object
    var request =new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange=function()
    {
        if(request.readyState === XMLHttpRequest.DONE)
        {
            //take action
            if(request.status === 200)
            {
                var counter=request.responseText;
                console.log(counter);
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

var nameInput=document.getElementById('name');
var n=nameInput.value;
var submit=document.getElementById('sub');

submit.onclick=function()
{
    console.log('In submit onclick');
    //make a request to the server and send the name
    
    //capture the list of names and render it as a list
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i<names.length;i++)
    {
        list+='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('unordered');
    ul.setInnerHTML=list;
};













