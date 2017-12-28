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