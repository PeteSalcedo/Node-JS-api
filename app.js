const http = require('http');
const bodyParser = require('body-parser')

const express = require('express');

const app = express();

app.use(bodyParser.urlencoded())

app.use('/add-product',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<form action="/product" method="post"><input type="text" name="title"><button type="sumit">Add Prduct</button></form>');
});

app.use('/product',(req, res, next) => {
    console.log('I sent you home!');
    console.log(req.body)
    res.redirect('/');
});


app.use('/',(req, res, next) => {
    //console.log('In Home middleware!');
    res.send('<h1>Hello from Home!</h1>');
});

const server = http.createServer(app);

server.listen(3000);