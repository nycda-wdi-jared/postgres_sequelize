var express = require('express');
// var bodyParser = require('body-parser');

// var routes = require('./controller/routes.js');

var app = express();

// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

// app.use('/', routes);
// app.use(express.static('./client'));

var models = require('./models');
models.sequelize.sync();

// models.Song.create({
// 	title: 'goodbye',
// 	artist: 'goodbye',
// 	lyrics: 'goodbye'
// });

// app.post('/create-user', function(req,res){
// 	models.Song.create({
// 		title: req.body.title
// 	})
// })

// models.Song.findAll({where: {title: 'goodbye'}}).then(function(songs){
// 	var data = [];
// 	for(var i = 0; i < songs.length; i++){
// 		data.push({title: songs[i].title, artist: songs[i].artist, lyrics: songs[i].lyrics})
// 	}
// 	console.log(data)
// })

models.Song.findOne({where: {title: "goodbye"}}).then(function(song){

	for(var i = 0; i < song.length: i++){

	}
})

var PORT = process.env.PORT || 8000;

app.listen(PORT, function(){
	console.log("Listening on PORT " + PORT);
});