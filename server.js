var express = require('express');
var hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/',(req,res)=>{
  res.render('home.hbs');
});

app.listen(3000,()=>{
  console.log('Server is up and running on port 3000.')
});
