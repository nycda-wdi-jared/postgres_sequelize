var mc = require('./../model-controller.js');
var User = require('./../../models').User;

module.exports.controller = (app) => {
	app.get('/users', (req, res) => {
		mc.findAll(User, (results) => {
			res.json(results)
		})
	})

	app.get('/user/:id', (req, res) => {
		mc.findOneWhere(User, {id: req.params.id}, (results) => {
			res.json(results)
		});
	})

	app.get('/users/:name', (req, res) => {
		mc.findAllWhere(User, {name: req.params.name}, (results) => {
			res.json(results)
		});
	})

	app.post('/add-user', (req, res) => {
		mc.insertInto(User, {name: req.body.name, username: req.body.username, password: req.body.password}, (results) => {
			res.json(results.dataValues)
		});
	});

	app.put('/update-user/:id', (req,res) => {
		mc.update(User, {id: req.params.id}, Object.keys(req.body)[0], req.body[Object.keys(req.body)[0]], (result) => {
			res.json(result)
		});
	});

	app.delete('/delete-user/:id', (req,res) => {
		mc.delete(User, {id: req.params.id}, (result) => {
			res.json(result)
		});
	});
}