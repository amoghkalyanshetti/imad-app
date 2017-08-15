var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne=
{
    title: 'Article One | Amogh Kalyanshetti' , 
    heading: 'Article One',
    date:   'August 15 2017',
    content: ` <p>
                    If you're creating a NEW TOPIC, please be aware that we WILL DELETE it if it matches another topic. You can just create a new post in the similar topic present already.
                </p>
                <p>
                    If you're creating a NEW TOPIC, please be aware that we WILL DELETE it if it matches another topic. You can just create a new post in the similar topic present already.
                </p>
                <p>
                    If you're creating a NEW TOPIC, please be aware that we WILL DELETE it if it matches another topic. You can just create a new post in the similar topic present already.
                </p>`
};

function createTemplate(data)
{
    title=data.title;
    heading=data.heading;
    content=data.content;
    date=data.date;
    var htmlTemplate=
    `
        <html>
        <head>
            <title>
                ${title}
            </title>
             <link href="/ui/style.css" rel="stylesheet" />
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            
        </head>
        
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                    <hr/>
                </div>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    
    `;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function (req,res)
{
   res.send(createTemplate(articleOne));
});

app.get('/article-two',function (req,res)
{
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function (req,res)
{
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
