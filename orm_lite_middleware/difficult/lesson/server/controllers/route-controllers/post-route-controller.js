var mc = require('./../model-controller.js');
var Post = require('./../../models').Post;

//routes for only my Post model
//look at the generic routes being used from the model-controller.js file
module.exports.controller = (app) => {
	app.get('/posts', (req, res) => {
		mc.findAll(Post, (results) => {
			res.json(results)
		})
	})

	app.get('/post/:id', (req, res) => {
		var data = {
			id: req.params.id
		}
		mc.findOneWhere(Post, data, (results) => {
			res.json(results)
		});
	})

	app.get('/user-posts/:id', (req, res) => {
		var data = {
			user_id: req.params.id
		}
		mc.findAllWhere(Post, data, (results) => {
			res.json(results)
		});
	})

	app.post('/add-post', (req, res) => {
		var data = {
			message: req.body.message, 
			userID: parseInt(req.body.userID)
		}
		mc.insertInto(Post, data, (results) => {
			res.json(results.dataValues)
		});
	});
}