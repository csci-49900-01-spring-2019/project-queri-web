const functions = require('firebase-functions');
const express = require('express');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const cors = require('cors')({
  origin: true
});





// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });



/*
	Create A New Post:
			function:
				exports.new_post
			api request link:
				https://us-central1-projectq-42a18.cloudfunctions.net/new_post
			params:
				user: post creator username
				content: post content
			response:
				none

	Get All Posts in database:
			function:
				exports.get_posts
			api request link:
				https://us-central1-projectq-42a18.cloudfunctions.net/get_posts
			params:
				none
			response:
				JSON formatted, all posts in queri
					format:
						{"__post_id":{"content":"__post content","user":"__post creator username"},"__post_id":{..}}

	Create New Comment in identified post:
			function:
				exports.new_comment
			api request link:
				https://us-central1-projectq-42a18.cloudfunctions.net/new_comment
			params:
				user: comment creator username
				content: comment content
				post_id: post identification
			response
				none

	Get All Comments in identified post:
			function:
				exports.get_comments
			api request link:
				https://us-central1-projectq-42a18.cloudfunctions.net/get_comments
			params:
				post_id: post identification
			response:
				JSON formatted, all comments in queri under speficifed post
					format:
						{ '__comment_id': { "content": '__comment content', "user": '__comment username' }, '__comment_id': {..}, ...}
	



*/


exports.new_post = functions.https.onRequest((req, res)=>{
	cors(req,res,()=>{

		let user = req.body["user"];
		let content  = req.body["content"];
		let post = {
			'user':user,
			'content':content
		}


		var posts_ref = admin.database().ref("queri/posts");
		posts_ref.push().set(post);

		res.status(200).send("added post!");
	});
});


exports.get_posts = functions.https.onRequest((req, res)=>{
		cors(req,res,()=>{

			let posts_ref = admin.database().ref("queri/posts");
			posts_ref.once('value', function(snapshot){
				if(snapshot == null){
					res.status(400).send("queri/posts not found");
					return;
				}

				res.status(200).send(snapshot.val());
			});
		});
	});

exports.posts = functions.https.onRequest((req, res)=>{
		cors(req,res,()=>{
			let post_id = req.body["post_id"];
			let url = "queri/posts/" + post_id;
			let posts_ref = admin.database().ref(url);
			posts_ref.once('value', function(snapshot){
				if(snapshot == null){
					res.status(400).send("queri/post not found");
					return;
				}

				res.status(200).send(snapshot.val());
			});
		});
	});


exports.new_comment = functions.https.onRequest((req, res)=>{
	cors(req,res,()=>{

		let user = req.body["user"];
		let content  = req.body["content"];
		let post_id = "-LZYM5ikoodT2y-qbbeQ";
		let comment = {
			'user':user,
			'content':content
		}
		let url = "queri/posts/"+post_id + "/comments";


		var posts_ref = admin.database().ref(url);
		posts_ref.push().set(comment);

		res.status(200).send("added comment!");
	});
});

exports.new_user = functions.https.onRequest((req, res)=>{
	cors(req,res,()=>{

		let user = req.body["username"];
		let password  = req.body["password"];

		let user_object = {
			'user':user,
			'content':password
		}





		let url = "queri/users/";


		var users_ref = admin.database().ref(url);

		users_ref.set(user_object);

		res.status(200).send("added user!");
	});
});







exports.get_comments = functions.https.onRequest((req, res)=>{
		let post_id = req.body["post_id"];
		let url = "queri/posts/"+post_id+"/comments";

		cors(req,res,()=>{

			let posts_ref = admin.database().ref(url);
			posts_ref.once('value', function(snapshot){
				if(snapshot == null){
					res.status(400).send("queri/posts/{requested_id}/comments not found");
					return;
				}

				res.status(200).send(snapshot.val());
			});
		});
	});



exports.log_new_post = functions.database.ref('/queri/posts/{pushId}')
    .onCreate((snapshot, context)=>{
    	console.log(snapshot.val());

    	 return snapshot;
    });