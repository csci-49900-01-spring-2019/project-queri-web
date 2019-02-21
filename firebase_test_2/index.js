var express = require('express');
var request = require('request');
var cookieParser = require('cookie-parser'); 
var path = require('path');
var port = process.env.PORT || 3000;



var app = express();

app.set('view engine', 'ejs');
app.set('vies', path.join(__dirname, 'views'));



app.use(express.urlencoded());
app.use(cookieParser());

app.listen(port, function(){
	console.log("listening in port: ", port);
});


//load homepage
app.get('/', function(req, res){

		res.render("index");
});



app.post('/new_p', function(req, res){
	let name = req.body.username;
	let content = req.body.content;

	request.post("https://us-central1-databasea-468e3.cloudfunctions.net/new_post", {json:{'user':name,'content':content}}, function(error, response, body){
		console.log(body);
		res.render("index");
	})
});