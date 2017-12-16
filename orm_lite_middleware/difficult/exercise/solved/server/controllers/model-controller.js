module.exports = {
	findAll: function(table, cb){
		table.findAll({}).then((res) => {
			var arr = [];
			for(var i = 0; i < res.length; i++){
				arr.push(res[i].dataValues)
			}
			cb(arr)
		})
	},
	insertInto: function(table, obj, cb){
		table.create(obj).then((res) => {
			cb(res)
		});
	},
	findOneWhere: function(table, obj, cb){
		table.findOne({where: obj}).then((res) => {
			cb(res.dataValues)
		});
	},
	findAllWhere: function(table, obj, cb){
		table.findAll({where: obj}).then((res) => {
			var arr = [];
			for(var i = 0; i < res.length; i++){
				arr.push(res[i].dataValues)
			}
			cb(arr)
		});
	},
	update: function(table, obj, field, updatedValue, cb){
		table.findOne({where: obj}).then((res) => {
			res.set(field, updatedValue);
			res.save();
			cb(res);
		})
	},
	delete: function(table, obj, cb){
		table.destroy({where: obj}).then((res) => {
			cb(res)
		})
	}
}

// var arr = [{
// 	message: "yo",
// 	userID: 1
// },{
// 	message: "you",
// 	userID: 1
// }]

// for(var i = 0; i < arr.length; i++){
// 	models.Post.create(arr[i]);
// }

// models.Song.create({
// 	title: "x",
// 	artist: "y",
// 	lyrics: "z"
// })

// models.UserSong.create({
// 	userID: 1,
// 	songID: 1
// })

// models.Profile.create({
// 	fav_veggie: "broccoli",
// 	fav_fruit: "pineapple",
// 	userID: 1
// })

// models.Post.create({
// 	message: "yo",
// 	userID: 1
// })