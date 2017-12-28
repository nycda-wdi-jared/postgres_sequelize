//requiring my models to be used in this file
var models = require('./../models');

//exporting this file to be used somewhere else...route-controller.js file
module.exports = {
	//naming my exported functions appropriately
	//just calling my model queries here instead of the route-controller.js file
	
	//cleans up your files a little bit, and lets you and others reading your code know where
	//to look for your database queries and where to look for your routes
	getAllUsers: (cb) => {
		models.User.findAll({
			attributes: ['name', 'username']
		}).then(function(res){
			cb(res)
		});
	},
	createUser: (name, username, password, cb) => {
		models.User.create({
			name: name,
			username: username,
			password: password
		}).then((res) => {
			cb(res);
		})
	},
	getAllPosts: (cb) => {
		models.Post.findAll({}).then((res) => {
			cb(res);
		});
	},
	getAllUserPosts: (user_id, cb) => {
		models.Post.findAll({where: {user_id: user_id}}).then((res) => {
			cb(res);
		})
	},
	createPost: (message, user_id, cb) => {
		models.Post.create({
			message: message,
			user_id: user_id
		}).then((res) => {
			cb(res);
		});
	}
}