var models = require('./../models');

module.exports = {
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
		/*
			Get All Posts
		*/
	},
	getAllUserPosts: (user_id, cb) => {
		/*
			Get All Posts for a User
		*/
	},
	createPost: (message, user_id, cb) => {
		/*
			Create a Post
		*/
	}
}