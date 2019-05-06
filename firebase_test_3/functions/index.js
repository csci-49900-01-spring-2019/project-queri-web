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





function verify(idToken, do_this, res) {
  admin
    .auth()
    .verifyIdToken(idToken)
    .then(function(decodedToken) {
      var uid = decodedToken.uid;

      console.log(uid);
      do_this(uid);

      // ...
    })
    .catch(function(error) {
      // Handle error
      console.log(error);
      res.status(400).json({ status: 'error' });
    });
}



app.post('users/new', function(req, res) {
  let idToken = req.header('Authorization');
  let profile_pic = 'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-512.png';
  verify(idToken, function(uid) {
    let username = req.body.username;
    let reference = 'users/';
    let user = {
      user_info: {
        username: username
      }
    };
    admin
      .database()
      .ref(reference)
      .child(uid)
      .set(user);
    res.json({ status: 'success' });
  });
});
app.get('users/:id/user_info', function(req, res) {
  let idToken = req.header('Authorization');
  verify(idToken, function(uid) {
    let reference = 'users/' + req.params.id + '/user_info';
    admin
      .database()
      .ref(reference)
      .once('value', function(snap) {
        if (snap.val() == null) {
          res.json(null);
        } else {
          res.json(snap.val());
        }
      });
  });
});























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
	  verify(idToken, function(uid) {
	let content = req.body.content;
	let username = req.body.username;
	let reference = "posts/"+ req.params.type + "/" + req.params.post_id + "/comments/";
	let comment_object = {
		"content":content,
		"username":username
	}
	AddMeta("posts/"+ req.params.type + "/" + req.params.post_id + "/meta", "comments");
	let path = admin.database().ref(reference).push().set(comment_object);
	let key = path.key;
	admin.database().ref('users/'+uid+'created_comments/').push().set({'commentKey':key,'postKey':req.params.post_id});
	res.json({"status":"success"});});
});

app.post('/posts/voting/new', function(req,res){
	  verify(idToken, function(uid) {
	let content = req.body.content;
	let username = req.body.username;
	let reference = "posts/"+ req.params.type + "/";
	let post_object = {
		"content":content,
		"username":username
	}
	
	let path = admin.database().ref(reference).push().set(post_object);
	let key = path.key;
	admin.database().ref('users/'+uid +'created_questions/').push().set(key);
	res.json({"status":"success"});});
});


app.put('/posts/:type/:post_id/meta/like', function(req,res){
	  verify(idToken, function(uid) {
	let reference = "/posts/" + req.params.type + "/" + req.params.post_id + "/" + "meta/likes";
	admin.database().ref('users/'+uid+'/likes/').once('value', function(snap){
		let liked = false;
			if(snap.val()==null){
				return;
			}else{
				for(let like in snap.val()){
					if(snap.val()[like]===req.params.post_id){
						liked = true;
					}
				}
			}

			if(!liked){
				  admin.database().ref(reference).transaction(function(likes) {
				  let newValue = (likes || 0) + 1;
				  return newValue;
				}).then(function(newValue){
					res.json({"result":newValue});
					admin.database().ref('users/likes/').push().set(req.params.post_id);
				});
			}
	})});
});





// Expose Express API as a single Cloud Function:
exports.queri = functions.https.onRequest(app);
