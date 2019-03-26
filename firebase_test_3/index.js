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

//Posts
app.get('/posts/category/:name', function(req, res){
     request.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/category/:name", function(error, response, body) {
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

app.get('/posts/category/:name:post_id/', function(req, res){
     request.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/category/:name"+ req.params.post_id, function(error, response, body) {
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

app.get('/posts/category/:name:post_id/comments/', function(req, res){
     request.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/category/:name"+ req.params.post_id + "/comments", function(error, response, body) {
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

app.get('/posts/category/:name:post_id/comments/:comment_id/', function(req, res){
     request.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/category/:name"+ req.params.post_id + "/comments/" + req.params.comment_id, function(error, response, body) {
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

app.get('/posts/category/:name:post_id/comments/:comment_id/username', function(req, res){
     request.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/category/:name"+ req.params.post_id + "/comments/" + req.params.comment_id + "/username/", function(error, response, body) {
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
app.get('/posts/category/:name:post_id/comments/:comment_id/content', function(req, res){
     request.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/category/:name"+ req.params.post_id + "/comments/" + req.params.comment_id + "/content/", function(error, response, body) {
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
app.get('/posts/categories', function(req, res){
	request.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories", function(error, response, body) {
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

app.get('/posts/categories/:name', function(req, res){
	request.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/" +  req.params.name + "/", function(error, response, body) {
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

app.get('/posts/categories/:name/:count', function(req, res){
	request.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/" + req.params.name + "/" + req.params.count + "/", function(error, response, body) {
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

app.get('/posts/recent', function(req, res){
	request.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/recent", function(error, response, body) {
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

app.get('/posts/recent/:count', function(req, res){
	request.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/categories/recent/" + req.params.count + "/", function(error, response, body) {
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

app.get('/posts/archived', function(req, res){
	request.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/archived/", function(error, response, body) {
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

app.get('/posts/archived/:count', function(req, res){
	request.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/archived/" + req.params.count, function(error, response, body) {
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

app.get('/posts/category/:name/:p_id/meta/votes', function(req, res){
	request.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/category/" + req.params.name + "/" + req.params.p_id + "/" + "meta/votes/", function(error, response, body) {
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

app.put('/posts/category/:name/:p_id/meta/live', function(req, res){
	req.put("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/category/" + req.params.name + "/" + req.params.p_id + "/" + "meta/live/", function(error, response, body) {
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

app.put('/posts/category/:name/:p_id/meta/votes', function(req, res){
	req.put("https://us-central1-projectq-42a18.cloudfunctions.net/queri/posts/category/" + req.params.name + "/" + req.params.p_id + "/" + "meta/votes/", function(error, response, body) {
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

//Users
app.get('/users', function(req, res){
	request.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/users/", function(error, response, body) {
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

app.get('/users/:name', function(req, res){
	request.get("https://us-central1-projectq-42a18.cloudfunctions.net/queri/users/" + req.params.name + "/", function(error, response, body) {
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


//Home
app.get('/', function(req,res){
    res.render('index');
})