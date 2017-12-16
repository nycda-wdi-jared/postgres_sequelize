var express = require('express');

var router = express.Router();
var mc = require('./model-controller.js');

router.get('/get-users', function(req,res){
	mc.getAllUsers((users) => {
		res.json(users);
	})
});

router.post('/create-user', (req,res) => {
	mc.createUser(
		req.body.name, 
		req.body.username, 
		req.body.password, 
		(user) => {
			res.json(user)
	})
});

router.get('/posts', (req,res) => {
	mc.getAllPosts((posts) => {
		res.json(posts)
	});
});

router.get('/posts/:id', (req,res) => {
	mc.getAllUserPosts(
		req.params.id,
		(userPosts) => {
			res.json(userPosts)
		}
	);
});

router.post('/create-post', (req,res) => {
	mc.createPost(
		req.body.message, 
		req.body.user_id,
		(post) => { 
			res.json(post)
		}
	)
});

module.exports = router;