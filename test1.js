var express = require('express');
var parser = require('body-parser');
var app = express();
app.use(parser.urlencoded({ extended: true }))
app.engine('.ejs', require('ejs').__express); 
app.set('views', __dirname + '/views');
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.render('inscription.ejs');
});
app.post('/response',function(req,res){
    var person = {
        first : req.body.fname,
        last : req.body.lname
    }
	console.log(person);
    res.render('home.ejs',{
        userValue : person,
        topicHead : 'Welcome'
	
	});
});

app.listen(8888);