var express = require('express');
var path = require('path');
var passport = require('passport');

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

router.post('/api/sign-up', function(req,res,next){
	passport.authenticate('local-signup', function(err, user, info){
		if (err) {
			return next(err);
		} else {
			if(user){
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
					mc.updateUserZodiac(zod[0].zodiac, user.id);
				})					
			}
			res.json({user: user, info: info})
		}
	})(req, res, next);
});

router.post('/api/sign-in', function(req,res,next){
	passport.authenticate('local-signin', function(err, user, info){
	    if (err) {
	      	return next(err);
	    }
	    if (!user) {
	    	return res.json({success: false, message: 'authentication failed', info: info});
	    }
	    req.login(user, function(err){
			if(err){
				return next(err);
			}
	      	return res.json({success: true, message: 'authentication succeeded', object: user});        
		});
  	})(req, res, next);
});

router.post('/api/create-unreg-user', (req,res) => {
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
		res.set('Content-Type', 'text/html');
		res.send(html_creator(zodiac));
	});
});

router.get('/api/signed-in', (req, res) => {
	if(req.user){
		res.json({message: "user_signed_in", user: req.user});
	}
});

router.delete('/api/logout-user', (req, res) => {
	req.session.destroy(function(out){
		res.json(out)
	});
});

module.exports = router;