var mc = require('./../model-controller.js');
var Song = require('./../../models').Song;

module.exports.controller = (app) => {
	app.get('/songs', (req, res) => {
		mc.findAll(Song, (results) => {
			res.json(results)
		});
	});
}