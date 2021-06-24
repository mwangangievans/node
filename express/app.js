const express = require('express');

const app = express();
console.log(app);

//listen for requests 

app.listen(3000);

app.get('/',(req,res)=>{
  res.send('<p>the home page </p>');
});
app.get('/about',(req,res)=>{
  res.send('<p>the About page page </p>');
});
app.get('/contact',(req,res)=>{
  res.send('<p>the contact page </p>');
});
app.get('/footer',(req,res)=>{
  res.send('<p>this is footer page </p>');
});