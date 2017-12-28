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

router.get('/user/friends/:id', function(req,res){
	models.Friend.findAll({
		where: {
			$or: [
				{
					user_id_1:
						{
							$eq: req.params.id
						}
				},
				{
					user_id_2:
						{
							$eq: req.params.id
						}
				}
			]
		}
	}).then((friends) => {
		res.json(friends)
	})
});

//since no client, here are my post routes to make life easier

router.post('/create-user', (req,res) => {
	models.User.create({
		name: req.body.name,
		username: req.body.username,
		password: req.body.password
	});
});

router.post('/create-friend', (req,res) => {
	if(req.body.user_id_1 !== req.body.user_id_2){
		models.Friend.create({
			user_id_1: req.body.user_id_1,
			user_id_2: req.body.user_id_2
		}).then((friend) => {
			res.send("Friendship Created")
		})
	} else {
		res.send("You can't be friends with yourself")
	}
});

module.exports = router;