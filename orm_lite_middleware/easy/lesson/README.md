# ORM Lite Middleware

* You are learning how to do a little bit of separation between the models and the routes.
* The main parts of this lesson are in the model-controller.js & route-controller.js files.
* The model functions in the model-controller.js file is being exported into the route-controller.js file. That is it!!!

# Postgres Sequelize Client Boilerplate + Heroku Push

<h2>Heroku</h2>

* Run ```heroku create```
* Run ```heroku addons:create heroku-postgresql:hobby-dev```
* Run ```heroku config``` to see the jawsdb env variable just added
* Resource: https://devcenter.heroku.com/articles/heroku-postgresql

<h2>Other</h2>

* You can connect to this database through the credentials they give you
* You can see a breakdown of the credentials if you go to your app's page on heroku and find the database option