module.exports = 
class Table {
	constructor(table) {
		this.table = table;
	}
	getAll(cb){
		this.table.findAll({}).then(function(res){
			cb(res)
		});
	}
}