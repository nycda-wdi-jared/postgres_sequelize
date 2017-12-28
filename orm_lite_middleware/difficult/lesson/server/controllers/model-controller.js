//creating generic routes that can be used for all models
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
	}
}