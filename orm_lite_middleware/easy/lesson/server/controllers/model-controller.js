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
	}
}