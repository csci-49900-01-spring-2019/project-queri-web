const functions = require('firebase-functions');

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



exports.new_post = functions.https.onRequest((req, res)=>{
	cors(req,res,()=>{

		let user = "bobby";
		let content  = "Hey whats up!";
		let post = {
			'user':req.body["user"],
			'content':req.body["content"]
		}


		var posts_ref = admin.database().ref("queri/posts");
		posts_ref.push().set(post);

		res.status(200).send("added post!");
	});
});



exports.log_new_post = functions.database.ref('/queri/posts/{pushId}')
    .onCreate((snapshot, context)=>{
    	console.log(snapshot.val());

    	 return snapshot;
    });