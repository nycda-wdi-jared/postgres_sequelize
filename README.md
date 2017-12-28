# Sequelize

* A javascript framework (only to be used on server side) built on top of database clients such as postgres & mysql
* Since the bootcamp uses postgres, we will be using sequelize with postgres
* Simply put, it makes writing your queries a little nicer
* Sequelize code is very similar to MongoDB code, where your tables/models/schemas are objects that built in sequelize functions are called on.
	* i.e., if you have a users table, then ```models.User.findAll()``` is equal to ```"SELECT * FROM users"```