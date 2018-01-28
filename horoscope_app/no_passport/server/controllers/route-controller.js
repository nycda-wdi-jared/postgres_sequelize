var express = require('express');
var path = require('path');

var router = express.Router();
var mc = require('./model-controller.js');
var date_range = require('../helpers/date_range.js');
var html_creator = require('../helpers/html_creator.js');

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/public/html/home.html'));
});

router.post('/api/create-zodiac', (req,res) => {
	mc.createZodiac(req.body, (zodiacs) => {
		res.json(zodiacs)
	});
});

router.post('/api/create-unreg-user', (req,res) => {
	//console.log(req.body)
	var dateSplit = req.body.birthdate.split("-");
	dateSplit.splice(0,1);
	mc.getAllZodiacs((zodiacs) => {
		var dataArr = [];
		for(var i = 0; i < zodiacs.length; i++){
			data = {
				zodiac: zodiacs[i].zodiac,
				date_range: date_range(new Date(zodiacs[i].date_range.split(" - ")[0]), new Date(zodiacs[i].date_range.split(" - ")[1]))
			}
			dataArr.push(data);
		}
		var zod = [];
		for(var i = 0; i < dataArr.length; i++){
			for(var j = 0; j < dataArr[i].date_range.length; j++){
				if(dateSplit.join("/") === dataArr[i].date_range[j]){
					zod.push(dataArr[i])
				}
			}
		}
		mc.createUnregisteredUser(req.body.name, req.body.birthdate, zod[0].zodiac, (unRegUser) => {
			mc.getAllZodiacs((zodiacs) => {
				var userZod = [];
				for(var i = 0; i < zodiacs.length; i++){
					if(zodiacs[i].zodiac === unRegUser.zodiac){
						userZod.push(zodiacs[i]);
					}
				}
				res.json({user: unRegUser, zodiac: userZod});
			})
		});
	});
});

router.get('/api/users', (req, res) => {
	mc.getAllUsers((users) => {
		res.json(users);
	});
});

router.get('/api/zodiacs', (req, res) => {
	mc.getAllZodiacs((zodiacs) => {
		res.json(zodiacs);
	});
});

router.get('/zodiac/:zodiac', (req, res) => {
	mc.getZodiac(req.params.zodiac, (zodiac) => {
		//res.json(zodiac);
		res.set('Content-Type', 'text/html');
		res.send(html_creator(zodiac));
	});
});

module.exports = router;