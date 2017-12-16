# Sequelize Relation Exercise

1. Create a database called sequelize relations
2. Once you run ```npm start```, the columns will be created for you, check out Postico
3. Create 5 users, and then create a few friends relationships
	* Just like in the lesson, do the creates through postman
	* Write the route and the sequelize query in the code
	* Remember, it is a post
4. Write a many to many relation that finds all of the friends of a user
	* The route will be named ```/user/friends/:id```
	* You will use a sequelize ```OR``` statement, as a user can be user_id_1 or user_id_2
	* https://stackoverflow.com/questions/20695062/sequelize-or-condition-object