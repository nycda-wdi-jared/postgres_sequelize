var express = require('express');

var router = express.Router();
var mc = require('./model-controller.js');

router.get('/get-users', function(req,res){
	//look in the model-controller.js file to see what this imported function is supposed to do
	//calling that function, which is calling the sequelize query
	//the (users) => {} is the 'cb' parameter in the getAllUsers function in the model-controller.js
	mc.getAllUsers((users) => {
		//console.log(users)

		//remember to use postman on this route to see this res.json, which sends the requested info to the client
		res.json(users);
	})
});

router.post('/create-user', (req,res) => {
	//look in the model-controller.js file to see what this imported function is supposed to do
	//calling that function, which is calling the sequelize query
	//the (user) => {} is the 'cb' parameter in the getAllUsers function in the model-controller.js
	mc.createUser(
		//these are all of the parameters in the createUser function
		req.body.name, 
		req.body.username, 
		req.body.password, 
		(user) => {
			//console.log(users)

			//remember to use postman on this route to see this res.json, which sends the requested info to the client
			res.json(user)
	})
});

router.get('/posts', (req,res) => {
	//look in the model-controller.js file to see what this imported function is supposed to do
	//calling that function, which is calling the sequelize query
	//the (posts) => {} is the 'cb' parameter in the getAllUsers function in the model-controller.js
	mc.getAllPosts((posts) => {
		//console.log(posts)

		//remember to use postman on this route to see this res.json, which sends the requested info to the client
		res.json(posts)
	});
});

router.get('/posts/:id', (req,res) => {
	//look in the model-controller.js file to see what this imported function is supposed to do
	//calling that function, which is calling the sequelize query
	//the (userPosts) => {} is the 'cb' parameter in the getAllUsers function in the model-controller.js
	mc.getAllUserPosts(
		//this is the one parameter is the getAllUserPosts function
		req.params.id,
		(userPosts) => {
			//console.log(userPosts)

			//remember to use postman on this route to see this res.json, which sends the requested info to the client
			res.json(userPosts)
		}
	);
});

router.post('/create-post', (req,res) => {
	//look in the model-controller.js file to see what this imported function is supposed to do
	//calling that function, which is calling the sequelize query
	//the (post) => {} is the 'cb' parameter in the getAllUsers function in the model-controller.js
	mc.createPost(
		//these are all of the parameters in the createPost function
		req.body.message, 
		req.body.user_id,
		(post) => { 
			//console.log(post)

			//remember to use postman on this route to see this res.json, which sends the requested info to the client
			res.json(post)
		}
	)
});

module.exports = router;