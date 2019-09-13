var express = require('express');
var hbs = require('hbs');
var app = express();
const port = process.env.PORT || 3000;
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/',(req,res)=>{
  res.render('home.hbs');
});

app.listen(port,()=>{
  console.log(`Server is up and running on port ${port}.`)
});
