var mc = require('./../model-controller.js');
var Post = require('./../../models').Post;

module.exports.controller = (app) => {
	app.get('/posts', (req, res) => {
		mc.findAll(Post, (results) => {
			res.json(results)
		})
	})

	app.get('/post/:id', (req, res) => {
		mc.findOneWhere(Post, {id: req.params.id}, (results) => {
			res.json(results)
		});
	})

	app.get('/user-posts/:id', (req, res) => {
		mc.findAllWhere(Post, {user_id: req.params.id}, (results) => {
			res.json(results)
		});
	})

	app.post('/add-post', (req, res) => {
		mc.insertInto(Post, {message: req.body.message, userID: parseInt(req.body.userID)}, (results) => {
			res.json(results.dataValues)
		});
	});
}