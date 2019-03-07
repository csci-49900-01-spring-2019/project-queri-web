var express = require('express');
var request = require('request');
var cookieParser = require('cookie-parser'); 
var path = require('path');
var port = process.env.PORT || 3000;
var firebase = require('firebase');
var config = {
/*private*/
};
firebase.initializeApp(config);

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.use(express.urlencoded());
app.use(cookieParser());

app.listen(port, function(){
	console.log("listening in port: ", port);
});


//load homepage
app.get('/', function(req, res){

		res.render("index");
});


app.get('/posts/:id', function(req, res){
	let url = "/queri/posts/" + req.params.id;
	firebase.database().ref(url).once("value",function(snap){
		res.send(snap.val());
	}, function(err){
		res.send(err);
	});
});	

app.get('/posts/:id/comments', function(req, res){
	let url = "/queri/posts/" + req.params.id;
	firebase.database().ref(url).once("value",function(snap){
		res.send(snap.val());
	}, function(err){
		res.send(err);
	});
});	

app.post('/posts/createPost/', function(req, res){
	let url = "queri/posts/";
	let comment_object = {
		"name":req.body["username"],
		"content":req.body["content"]
	}

	firebase.database.ref(url).push().set(comment_object);
	res.send("added post!");  });

app.post('/posts/:id/createComment/', function(req, res){
	let url = "queri/posts/" + req.params.id;
	let comment_object = {
		"name":req.body["username"],
		"content":req.body["content"]
	}

	firebase.database().ref(url).push().set(comment_object);
	res.send("added comment!");
});


