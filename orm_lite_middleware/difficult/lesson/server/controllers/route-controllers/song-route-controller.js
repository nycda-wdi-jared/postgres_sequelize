var mc = require('./../model-controller.js');
var Song = require('./../../models').Song;

//routes for only my Song model
//look at the generic routes being used from the model-controller.js file
module.exports.controller = (app) => {
	app.get('/songs', (req, res) => {
		mc.findAll(Song, (results) => {
			res.json(results)
		});
	});
}