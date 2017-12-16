# Sequelize CRUD

* The old guestbook code is commented out in the server
* As you can tell, the only changes that i made on the client side was the callback object

# Heroku Details For Node/Postgres/Sequelize

<h2>Heroku</h2>

* Be sure that your current directory is connected to a git repo
* Run ```heroku create```
* Run ```heroku addons:create heroku-postgresql:hobby-dev```
* Run ```heroku config``` to see the env variable just added to the Heroku environment
* Resource: https://devcenter.heroku.com/articles/heroku-postgresql

<h2>More</h2>

* You can connect to this database through the credentials they give you
* You can see a breakdown of the credentials if you go to your app's page on heroku and find the database -> database credentials option