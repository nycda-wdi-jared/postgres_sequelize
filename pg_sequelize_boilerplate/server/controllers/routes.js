var express = require('express');
var path = require('path');

//using sequelize for my database connection
var models = require('./../models');
models.sequelize.sync();

var router = express.Router();

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

router.get('/get-users', function(req,res){
	models.User.findAll({}).then(function(users){
		res.json(users);
	});
});

router.post('/create-user', function(req,res){
	models.User.create({
		name: req.body.name,
		username: req.body.username,
		password: req.body.password	
	});
});

router.put('/update-user/:id', function(req,res){
	models.User.findOne({ where: { id: req.params.id}}).then(function(user){
		user.set('name', req.body.name);
		user.save();
	}).then(function(success){
		res.json({message: "User Updated"})
	}).catch(function(err){
		throw err
	});
});

router.delete('/delete-user/:id', function(req,res){
	models.User.destroy({where: {id: req.params.id}});
})

module.exports = router;