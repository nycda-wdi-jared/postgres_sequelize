var express = require('express');
var bodyParser = require('body-parser');

// var routes = require('./controller/routes.js');

var app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

// app.use('/', routes);
// app.use(express.static('./client'));

var models = require('./models');
models.sequelize.sync();

app.post('/create-song', function(req,res){
	models.Song.create({
		title: req.body.title,
		artist: req.body.artist,
		lyrics: req.body.lyrics
	});
});

app.post('/create-posts', function(req,res){
	models.Post.bulkCreate(req.body).then(function(posts){
		res.json(posts)
	})
})

app.post('/create-post', function(req,res){
	models.Post.create({
		name: req.body.name,
		message: req.body.message
	})
})

app.get('/posts', function(req,res){
	models.Post.findAll({}).then(function(posts){
		res.json(posts)
	});
});

app.get('/lyrics/doo', function(req,res){
	models.Song.findAll({where: {lyrics: 'doo'}}).then(function(songs){
		res.json(songs);
	});
});

app.get('/title/:title', function(req,res){
	models.Song.findAll({where:{title:req.params.title}}).then(function(songs){
		res.json(songs);
	})
});

app.delete('/delete-post', function(req,res){
	models.Post.destroy({where:{name: "Jared"}}).then(function(deletedPost){
		res.json(deletedPost)
	});
});

app.put('/update-post', function(req,res){
	models.Post.update({name: "Jack"},{where:{message: "yo"}}).then(function(post){
		res.json(post)
	})
})


var PORT = process.env.PORT || 8000;

app.listen(PORT, function(){
	console.log("Listening on PORT " + PORT);
});