var express = require('express');
var path = require('path');

//using sequelize for my database connection
var models = require('./../models');
models.sequelize.sync();

var router = express.Router();

router.get('/get-users', function(req,res){
	models.User.findAll({}).then(function(users){
		res.json(users);
	});
});

/* 
	write your many to many relation here
*/

//since no client, here are my post routes to make life easier

router.post('/create-user', (req,res) => {
	models.User.create({
		name: req.body.name,
		username: req.body.username,
		password: req.body.password
	});
});

router.post('/create-friend', (req,res) => {
	/* write your sequelize create here */
});

module.exports = router;