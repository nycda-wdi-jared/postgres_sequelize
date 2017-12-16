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
		// var query = "INSERT INTO guestbook (name, message) VALUES ($1, $2)";
		// pgClient.query(query, [req.body.name, req.body.message], (error,queryRes) => {
		// 	if(error){
		// 		res.json(error)
		// 	} else {
		// 		res.json(queryRes)
		// 	}
		// });
		models.Guestbook.create({
			name: req.body.name,
			message: req.body.message
		}).then(function(message){
			res.json(message);
		});
	} else if (req.body.name === '' & req.body.message !== '') {
		// var query = "INSERT INTO guestbook (name, message) VALUES ($1, $2)";
		// pgClient.query(query, ["Guest", req.body.message], (error,queryRes) => {
		// 	if(error){
		// 		res.json(error)
		// 	} else {
		// 		res.json(queryRes)
		// 	}
		// });
		models.Guestbook.create({
			name: "Guest",
			message: req.body.message
		}).then(function(message){
			res.json(message);
		});	
	} else if ((req.body.name !== '' && req.body.message === '') || (req.body.name === '' && req.body.message === '')) {
		res.json("null_message")
	}
});

router.get('/api/messages', (req,res) => {
	models.Guestbook.findAll({}).then(function(messages){
		res.json(messages);
	});
// 	var query = "SELECT * FROM guestbook";
// 	pgClient.query(query, (error,queryRes) => {
// 		if(error){
// 			res.json(error)
// 		} else {
// 			res.json(queryRes)
// 		}
// 	});	
});

router.delete('/api/delete-message/:id', (req,res) => {
	// pgClient.query('DELETE FROM guestbook WHERE id=' + req.params.id, (err,res) => {
	// 	if(err){
	// 		console.log(err)
	// 	}
	// });
	models.Guestbook.destroy({where: {id: req.params.id}});
});

router.put('/api/update-message/:id', (req,res) => {
	// pgClient.query('UPDATE guestbook SET message=$1 WHERE id=' + req.params.id, [req.body.message], (err,results) => {
	// 	if(err){
	// 		res.json(err)
	// 	}
	// 	res.json({message: "Message Updated"})
	// });
	models.Guestbook.findOne({ where: { id: req.params.id}}).then(function(message){
		message.set('message', req.body.message);
		message.save();
	}).then(function(success){
		res.json({message: "Message Updated"})
	}).catch(function(err){
		throw err
	});
});

module.exports = router;