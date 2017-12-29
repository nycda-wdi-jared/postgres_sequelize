var express = require('express');

var router = express.Router();
var mc = require('./model-controller.js');


var Table = require('./table_class.js');
var models = require('./../models');

var users = new Table(models.User);

users.getAll((res) => {
	console.log(res)
})

router.get('/get-users', function(req,res){
	//look in the model-controller.js file to see what this imported function is supposed to do
	//calling that function, which is calling the sequelize query
	mc.getAllUsers((users) => {
		//console.log(users);

		//remember to use postman for this
		res.json(users);
	})
});

router.post('/create-user', (req,res) => {
	//look in the model-controller.js file to see what this imported function is supposed to do
	//calling that function, which is calling the sequelize query
	mc.createUser(
		req.body.name, 
		req.body.username, 
		req.body.password, 
		(user) => {
			//console.log(user)

			//remember to use postman for this
			res.json(user)
		}
	)
});

module.exports = router;