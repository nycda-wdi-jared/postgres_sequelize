# Horoscope - Sequelize/ORM Homework

* Technologies you will be using:
	* Node.js
	* Express.js
	* jQuery
	* Postgres
	* Sequelize

<h2>Goal</h2>

Develop a horoscope application, using custom ORM middleware for your postgres database, that:

* Has a user enter their name & birthdate and then receive information about their zodiac.
* Displays information (name & birthdate) about all of the users that have used the app
* Displays information (name & birthdate) about all of the users who have the same zodiac (zodiac dropdown)
* Displays information about each zodiac (params route /zodiac/:zodiac)
* You can even scrape this site to display more information about the zodiac: http://www.astrology-zodiac-signs.com/zodiac-signs/ (Links to an external site.)Links to an external site.
* Uses jQuery, node, express, sequelize
* There will only be 2 pages
	* The homepage with the user form and list of the users and their zodiacs
	* A zodiac page which lists information about the zodiac

<h2>Assignment/Instructions</h2>

Now that you learned about Object-Relational Mapping(ORM) using Sequelize, go ahead and create your own ORM middleware within an application.

* Create a database called 'horoscope_app'
* Create 2 models/tables:
	* Zodiac
		* columns: zodiac, todays_horoscope, description, date_range
	* Users
		* columns: name, birthdate (string or date), zodiac
* Pre-populate the zodiac table with information
* In the model-controller.js file, make a function called createZodiac that adds zodiac information to the Zodiac model (i.e. models.Zodiac.create({}))
* Import that into the route-controller.js file
* Use postman to manually enter the information into the database
* Make sure to include all zodiacs (http://www.astrology-zodiac-signs.com/zodiac-signs/) (Links to an external site.)Links to an external site.
* On the homepage of the UI:
	* Have a section with the form for the user to enter their name and birthday
	* Have a section that lists all of the users and their zodiac
		* This list can be manipulated with the zodiac dropdown, where a zodiac is selected and only the users with that zodiac are listed
* On the zodiac (params) page:
	* List information about the zodiac in the parameter
* Here are some of the ORM functions you should have: getAllUsers, getAllZodiacs, getOneZodiac, getUsersByZodiac, createUnregisteredUser, createRegisteredUser

<h2>Bonus</h2>

1. Create a Table class on the side of the model-controller. The class should take in the name of a table in the constructor and the connection string and add them to the this object.

In this manner, users of your middleware can create instances of your class that represent their tables, which will automatically have methods on them that allow data retrieval from those tables.

2. Use Passport.js to create some type of authentication for when a user logs in and only certain information is displayed for that user and only that user.

3. Get some information on the site through scraping the zodiac website above or a website of your choice.

<h2>Grading Criteria</h2>

* Attempt at completing an application
* Effort shown
* Minimal copying and pasting from other exercises & lessons, as well as showing an understanding of the copying & pasting done.
* ORM used
* MVC architecture, proper file/folder naming conventions used
* Proper coding techniques, indentation, variable and function naming
* Submit the assignment through a github url.

<strong>Complete</strong> = Meets all grading criteria above.

<strong>Incomplete</strong> = Does not meet most of the grading criteria above. Needs improvement or missing submission.