//requiring my models to be used in this file
var models = require('./../models');

//exporting this file to be used somewhere else...route-controller.js file
module.exports = {
	createZodiac: (obj, cb) => {
		//another model query doing a different function
		//look for its usage in the route-controller.js file
		models.Zodiac.bulkCreate(obj).then((res) => {
			cb(res);
		})
	},
	createUnregisteredUser: (name, birthdate, zodiac, cb) => {
		models.Unreg_User.create({
			name: name,
			birthdate: birthdate,
			zodiac: zodiac
		}).then((res) => {
			cb(res);
		});
	},
	getAllUsers: (cb) => {
		models.Unreg_User.findAll({}).then((res) => {
			cb(res);
		});
	},
	getAllZodiacs: (cb) => {
		models.Zodiac.findAll({}).then((res) => {
			cb(res);
		});
	},
	getAllZodiacsDateRange: (cb) => {
		models.Zodiac.findAll({
			attributes: ['date_range']
		}).then((res) => {
			cb(res)
		})
	},
	getZodiac: (zodiac, cb) => {
		models.Zodiac.findOne({where: {zodiac: zodiac}}).then((res) => {
			cb(res)
		});
	}
}