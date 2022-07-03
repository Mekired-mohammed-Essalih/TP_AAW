var express = require('express');
var parser = require('body-parser');
var app = express();
//var router = express.Router();
var methodOverride = require('method-override');
app.use(methodOverride('_method'))
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

server = require('http').createServer(app);

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database    : 'test2'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
}); 

app.engine('.ejs', require('ejs').__express); 
app.set('views', __dirname + '/views');
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.render('inscription.ejs');
});
app.post('/response',function(req,res){
    var person = {
	    num: 45,
        nom : req.body.fname,
        prenom : req.body.lname
    }
	var query = connection.query('INSERT INTO client SET ?', person, function(err, result) {
        if (err) throw err;
		});
	console.log(person);
    res.render('home.ejs',{
        userValue : person,
        topicHead : 'Welcome'
	
	});
});
app.get('/obj1', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.render('supp.ejs');
});

app.delete('/obj2',function(req, res) {
    res.setHeader('Content-Type', 'text/html');
	var supperson = {
	    num: req.body.num
        }
		var query = connection.query('DELETE from client WHERE num= ?',[req.body.num], function(err, result) {
        if (err) throw err;
		});
        console.log(req.body.num);
    res.render('supp2.ejs');
  
});

app.listen(3000);