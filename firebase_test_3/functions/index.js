const functions = require('firebase-functions');
const express = require('express');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const cors = require('cors');



const app = express();
app.use(cors({ origin: true }));
function AddMeta(meta_reference, meta_type){
	let reference = meta_reference + "/" + meta_type;
	admin.database().ref(reference).transaction(function(meta_count){
	let newValue = (meta_count || 0) + 1;
		  return newValue;
	});
}






app.get('/UpdateFeatured', function(req, res){
	let voting_reference = "/posts/voting";
	admin.database().ref(voting_reference).orderByChild("meta/likes").limitToLast(1).once("value", function(snap){
		let ordered_by_votes  = [];

		admin.database().ref("/posts/featured").set(null);
		console.log(snap);



		snap.forEach(function(child) {			
			console.log(child.key);
            admin.database().ref("/posts/featured").child(child.key).set(child.val());
        });
        snap.forEach(function(child) {			
            admin.database().ref("/posts/voting").child(child.key).remove();
        });


		if(snap.val() == null){
			res.json(null);
		}else{
			res.json({"status":"success"});
		}
	});
});


app.get('/posts/', function(req,res){
	let post = undefined;
	let reference = "posts/";
	admin.database().ref(reference).once("value", function(snap){
		if(snap.val() == null){
			res.json(null);
		}else{
			res.json(snap.val());
		}
	});
});

app.get('/posts/:type/:post_id/meta', function(req,res){
	let post = undefined;
	let reference = "/posts/" + req.params.type + "/" + req.params.post_id + "/" + "meta";
	admin.database().ref(reference).once("value", function(snap){
		if(snap.val() == null){
			res.json(null);
		}else{
			res.json(snap.val());
		}
	});
});


app.get('/posts/:type/:post_id/meta/likes', function(req,res){
	let post = undefined;
	let reference = "/posts/" + req.params.type + "/" + req.params.post_id + "/" + "meta/likes";
	admin.database().ref(reference).once("value", function(snap){
		if(snap.val() == null){
			res.json(null);
		}else{
			res.json(snap.val());
		}
	});
});



app.get('/posts/', function(req,res){
	let post = undefined;
	let reference = "posts/";
	admin.database().ref(reference).once("value", function(snap){
		if(snap.val() == null){
			res.json(null);
		}else{
			res.json(snap.val());
		}
	});
});

app.get('/posts/:type/', function(req,res){
	let post = undefined;
	let reference = "posts/" + req.params.type;
	admin.database().ref(reference).once("value", function(snap){
	if(snap.val() == null){
			res.json(null);
		}else{
			res.json(snap.val());
		}
	});
});

// build multiple CRUD interfaces:
app.get('/posts/:type/:post_id', function(req,res){
	let post = undefined;
	let reference = "posts/"+ req.params.type + "/" + req.params.post_id;
	admin.database().ref(reference).once("value", function(snap){
		if(snap.val() == null){
			res.json(null);
		}else{
			res.json(snap.val());
		}
	});
});


app.get('/posts/:type/:post_id/comments/', function(req,res){
	let post = undefined;
	let reference = "posts/"+ req.params.type + "/" + req.params.post_id + "/comments/";
	admin.database().ref(reference).once("value", function(snap){
		if(snap.val() == null){
			res.json(null);
		}else{
			res.json(snap.val());
		}
	});
});
app.get('/posts/:type/:post_id/content/', function(req,res){
	let post = undefined;
	let reference = "posts/"+ req.params.type + "/" + req.params.post_id + "/content/";
	admin.database().ref(reference).once("value", function(snap){
		if(snap.val() == null){
			res.json(null);
		}else{
			res.json(snap.val());
		}
	});
});

app.get('/posts/:type/:post_id/comments/:comment_id', function(req,res){
	let post = undefined;
	let reference = "posts/"+ req.params.type + "/" + req.params.post_id + "/comments/" + req.params.comment_id;
	admin.database().ref(reference).once("value", function(snap){
		if(snap.val() == null){
			res.json(null);
		}else{
			res.json(snap.val());
		}
	});
});

app.get('/posts/:type/:post_id/comments/:comment_id/username', function(req,res){
	let post = undefined;
	let reference = "posts/"+ req.params.type + "/" + req.params.post_id + "/comments/" + req.params.comment_id + "/username/";
	admin.database().ref(reference).once("value", function(snap){
		if(snap.val() == null){
			res.json(null);
		}else{
			res.json(snap.val());
		}
	});
});

app.get('/posts/:type/:post_id/comments/:comment_id/content', function(req,res){
	let post = undefined;
	let reference = "posts/"+ req.params.type + "/" + req.params.post_id + "/comments/" + req.params.comment_id + "/content/";
	admin.database().ref(reference).once("value", function(snap){
		if(snap.val() == null){
			res.json(null);
		}else{
			res.json(snap.val());
		}
	});
});




app.post('/posts/:type/:post_id/comments/new', function(req,res){
	let content = req.body.content;
	let username = req.body.username;
	let reference = "posts/"+ req.params.type + "/" + req.params.post_id + "/comments/";
	let comment_object = {
		"content":content,
		"username":username
	}
	AddMeta("posts/"+ req.params.type + "/" + req.params.post_id + "/meta", "comments");
	admin.database().ref(reference).push().set(comment_object);
	res.json({"status":"success"});
});

app.post('/posts/:type/new', function(req,res){

	let content = req.body.content;
	let username = req.body.username;
	let reference = "posts/"+ req.params.type + "/";
	let post_object = {
		"content":content,
		"username":username
	}
	admin.database().ref(reference).push().set(post_object);
	res.json({"status":"success"});
});


app.put('/posts/:type/:post_id/meta/like', function(req,res){

	let reference = "/posts/" + req.params.type + "/" + req.params.post_id + "/" + "meta/likes";
	admin.database().ref(reference).transaction(function(likes) {
		  let newValue = (likes || 0) + 1;
		  return newValue;
		}).then(function(newValue){
			res.json({"result":newValue});
		});
});





// Expose Express API as a single Cloud Function:
exports.queri = functions.https.onRequest(app);
