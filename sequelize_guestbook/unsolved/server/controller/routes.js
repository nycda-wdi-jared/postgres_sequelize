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
		/* sequelize here */
	} else if (req.body.name === '' & req.body.message !== '') {
		/* sequelize here */
	} else if ((req.body.name !== '' && req.body.message === '') || (req.body.name === '' && req.body.message === '')) {
		res.json("null_message")
	}
});

router.get('/api/messages', (req,res) => {
	/* sequelize here */
});

router.delete('/api/delete-message/:id', (req,res) => {
	/* sequelize here */
});

router.put('/api/update-message/:id', (req,res) => {
	/* sequelize here */
});

module.exports = router;