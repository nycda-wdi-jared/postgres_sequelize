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
		}
	)
});

module.exports = router;