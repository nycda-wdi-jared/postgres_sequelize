var express = require('express');
var path = require('path');

var router = express.Router();

var models = require('./../models');
models.sequelize.sync();

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

router.post('/api/message', (req,res) => {
	console.log(req.body)
	if(req.body.name !== '' && req.body.message !== ''){
		models.Guestbook.create({
			name: req.body.name,
			message: req.body.message
		}).then((guestbook) => {
			res.json(guestbook);
		})
	} else if (req.body.name === '' & req.body.message !== '') {
		models.Guestbook.create({
			name: "Guest",
			message: req.body.message
		}).then((guestbook) => {
			res.json(guestbook);
		})
	} else if ((req.body.name !== '' && req.body.message === '') || (req.body.name === '' && req.body.message === '')) {
		res.json("null_message")
	}
});

router.get('/api/messages', (req,res) => {
	models.Guestbook.findAll().then((messages) => {
		res.json(messages);
	});
});

router.delete('/api/delete-message/:id', (req,res) => {
	models.Guestbook.destroy({where: {id: req.params.id}});
});

router.put('/api/update-message/:id', (req,res) => {
	models.Guestbook.update(
		{
			message: req.body.message
		},
		{
			where:
			{
				id: req.params.id
			}
		}
	).then((updatedMessage) => {
		res.send("Message Updated");
	})
});

module.exports = router;