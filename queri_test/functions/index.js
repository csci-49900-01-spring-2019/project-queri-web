const functions = require('firebase-functions');
const express = require('express');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const cors = require('cors');



const app = express();
app.use(cors({ origin: true }));


app.get('/posts/', function(req,res){
	let post = undefined;
	admin.database().ref("posts/").once("value", function(snap){
		if(snap.val() == null){
			res.json(null);
		}else{
			res.json(snap.val());
		}
	});
});

// build multiple CRUD interfaces:
app.get('/posts/:post_id', function(req,res){
	let post = undefined;
	admin.database().ref("posts/"+req.params.post_id).once("value", function(snap){
		if(snap.val() == null){
			res.json(null);
		}else{
			res.json(snap.val());
		}
	});
});


app.get('/posts/:post_id/comments/', function(req,res){
	let post = undefined;
	admin.database().ref("posts/"+req.params.post_id + "/comments/").once("value", function(snap){
		if(snap.val() == null){
			res.json(null);
		}else{
			res.json(snap.val());
		}
	});
});

app.get('/posts/:post_id/comments/:comment_id', function(req,res){
	let post = undefined;
	admin.database().ref("posts/"+req.params.post_id + "/comments/" + req.params.comment_id).once("value", function(snap){
		if(snap.val() == null){
			res.json(null);
		}else{
			res.json(snap.val());
		}
	});
});



// Expose Express API as a single Cloud Function:
exports.queri = functions.https.onRequest(app);
