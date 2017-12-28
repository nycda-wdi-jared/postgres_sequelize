//requiring my models to be used in this file
var models = require('./../models');

//exporting this file to be used somewhere else...route-controller.js file
module.exports = {
	//naming my exported functions appropriately
	getAllUsers: (cb) => {
		//using my model query here
		//asking for the only the name and username fields from this query
		//look how it's being called in the route-controller.js file
		models.User.findAll({
			attributes: ['name', 'username']
		}).then(function(res){
			cb(res)
		});
	},
	createUser: (name, username, password, cb) => {
		//another model query doing a different function
		//look for its usage in the route-controller.js file
		models.User.create({
			name: name,
			username: username,
			password: password
		}).then((res) => {
			cb(res);
		})
	}
}