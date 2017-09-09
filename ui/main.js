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


// var button=document.getElementById('counter');


// button.onclick = function() 
// {
//     //create a request object
//     var request =new XMLHttpRequest();
    
//     //capture the response and store it in a variable
//     request.onreadystatechange=function()
//     {
//         if(request.readyState === XMLHttpRequest.DONE)
//         {
//             //take action
//             if(request.status === 200)
//             {
//                 var counter=request.responseText;
//                 console.log(counter);
//                 var span=document.getElementById('count');
//                 span.innerHTML = counter.toString();            
//             }
//         }
//     };
   
    
//     //make the request
//     request.open('GET','http://amoghkalyanshetti.imad.hasura-app.io/counter',true);
//     request.send(null);
// };


//submit userame password to login
var submit1=document.getElementById('submit_btn');

submit1.onclick=function()
{
    console.log('In submit onclick');
    //make a request to the server and send the name
    
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
             //capture the list of names and render it as a list
                // var names=request.responseText;
                // names=JSON.parse(names);
                // var list='';
                // for(var i=0;i<names.length;i++)
                // {
                //     list+='<li>'+names[i]+'</li>';
                // }
                // console.log(list);
                // var ul=document.getElementById('unordered');
                // ul.innerHTML=list; 
                
                console.log('user logged in');
                alert('logged in successfully');
               
               
            }
            else if(request.status===403)
            {
                alert('Username /password is incorrect');
            }
            else if(request.status==500)
            {
                alert('Something went wrong on the server');
            }
            
        }
    };
    console.log('here');
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://amoghkalyanshetti.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username:username,password:password}));
    
    
};













