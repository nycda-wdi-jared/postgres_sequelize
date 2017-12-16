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