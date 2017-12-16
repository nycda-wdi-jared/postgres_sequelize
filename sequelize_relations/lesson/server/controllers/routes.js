var express = require('express');
var path = require('path');

//using sequelize for my database connection
var models = require('./../models');
models.sequelize.sync();

var router = express.Router();

router.get('/get-users', function(req,res){
	models.User.findAll({
		attributes: ['name', 'username']
	}).then(function(users){
		res.json(users);
	});
});

//one to one relationship
router.get('/profile/:id', (req,res) => {
	models.Profile.findOne({where: {userID: req.params.id}}).then(function(profile){
		res.json(profile)
	})
});

//one to many relationship
router.get('/user/posts/:id', (req,res) => {
	models.Post.findAll({where: {userID: req.params.id}}).then((posts) => {
		res.json(posts)
	});
});

//many to many relationship
//the best way i came up with. There might be a better looking way
//try to better this
router.get('/user/songs/:id', (req,res) => {
	models.UserSong.findAll({where: {userID: req.params.id}}).then(function(user){
		var arr = [];
		for(var i = 0; i < user.length; i++){
			arr.push(user[i].songID)
		}
		models.Song.findAll({where: {id: {in: arr}}}).then(function(songs){
			var song_arr = [];
			for(var i = 0; i < songs.length; i++){
				song_arr.push({
				 	title: songs[i].title,
				 	artist: songs[i].artist,
				 	lyrics: songs[i].lyrics
			 	})
			}
			res.json(song_arr)
		});
	});
});

//since no client, here are my post routes to make life easier

router.post('/create-user', (req,res) => {
	models.User.create({
		name: req.body.name,
		username: req.body.username,
		password: req.body.password
	});
});

router.post('/create-song', (req,res) => {
	models.Song.create({
		title: req.body.title,
		artist: req.body.artist,
		lyrics: req.body.lyrics
	});
});

router.post('/create-usersong', (req,res) => {
	models.UserSong.create({
		userID: req.body.userID,
		songID: req.body.songID
	});	
});

router.post('/create-profile', (req,res) => {
	models.Profile.create({
		fav_veggie: req.body.fav_veggie,
		fav_fruit: req.body.fav_fruit,
		userID: req.body.userID
	});
});

router.post('/create-post', (req,res) => {
	models.Post.create({
		message: req.body.message,
		userID: req.body.userID
	});
});

module.exports = router;