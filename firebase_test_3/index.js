var express = require('express');
var request = require('request');
var cookieParser = require('cookie-parser'); 
var path = require('path');
var port = process.env.PORT || 3000;



var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.use(express.urlencoded());
app.use(cookieParser());

app.listen(port, function(){
	console.log("listening in port: ", port);
});
app.get('/posts/', function(req, res){
	 request.get("https://us-central1-project-bc489.cloudfunctions.net/queri/posts/", function(error, response, body) {
	 	if (!error && response.statusCode == 200){
	 		if(body!="null"){
	 			console.log(body);
	 			res.json(JSON.parse(body));
	 		}else{
	 			res.end("Error getting a response: Empty response!");
	 		}
	 	}else{
	 		res.end("Error getting a response: URL may be invalid");
	 	}
    });
})

app.get('/posts/:post_id/', function(req, res){
	 request.get("https://us-central1-project-bc489.cloudfunctions.net/queri/posts/"+ req.params.post_id, function(error, response, body) {
	 	if (!error && response.statusCode == 200){
	 		if(body!="null"){
	 			console.log(body);
	 			res.json(JSON.parse(body));
	 		}else{
	 			res.end("Error getting a response: Empty response!");
	 		}
	 	}else{
	 		res.end("Error getting a response: URL may be invalid");
	 	}
    });
});


app.get('/posts/:post_id/comments/', function(req, res){
	 request.get("https://us-central1-project-bc489.cloudfunctions.net/queri/posts/"+ req.params.post_id + "/comments", function(error, response, body) {
	 	if (!error && response.statusCode == 200){
	 		if(body!="null"){
	 			console.log(body);
	 			res.json(JSON.parse(body));
	 		}else{
	 			res.end("Error getting a response: Empty response!");
	 		}
	 	}else{
	 		res.end("Error getting a response: URL may be invalid");
	 	}
    });
});
app.get('/posts/:post_id/comments/:comment_id/', function(req, res){
	 request.get("https://us-central1-project-bc489.cloudfunctions.net/queri/posts/"+ req.params.post_id + "/comments/" + req.params.comment_id, function(error, response, body) {
	 	if (!error && response.statusCode == 200){
	 		if(body!="null"){
	 			console.log(body);
	 			res.json(JSON.parse(body));
	 		}else{
	 			res.end("Error getting a response: Empty response!");
	 		}
	 	}else{
	 		res.end("Error getting a response: URL may be invalid");
	 	}
    });
});

app.get('/posts/:post_id/comments/:comment_id/username', function(req, res){
	 request.get("https://us-central1-project-bc489.cloudfunctions.net/queri/posts/"+ req.params.post_id + "/comments/" + req.params.comment_id + "/username/", function(error, response, body) {
	 	if (!error && response.statusCode == 200){
	 		if(body!="null"){
	 			console.log(body);
	 			res.json(JSON.parse(body));
	 		}else{
	 			res.end("Error getting a response: Empty response!");
	 		}
	 	}else{
	 		res.end("Error getting a response: URL may be invalid");
	 	}
    });
});
app.get('/posts/:post_id/comments/:comment_id/content', function(req, res){
	 request.get("https://us-central1-project-bc489.cloudfunctions.net/queri/posts/"+ req.params.post_id + "/comments/" + req.params.comment_id + "/content/", function(error, response, body) {
	 	if (!error && response.statusCode == 200){
	 		if(body!="null"){
	 			console.log(body);
	 			res.json(JSON.parse(body));
	 		}else{
	 			res.end("Error getting a response: Empty response!");
	 		}
	 	}else{
	 		res.end("Error getting a response: URL may be invalid");
	 	}
    });
});



app.get('/', function(req,res){
	res.render('index');
})