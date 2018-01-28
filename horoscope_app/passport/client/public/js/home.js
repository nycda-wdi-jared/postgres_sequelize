$(document).ready(function(){

	$.ajax({
		method: 'GET',
		url: '/api/signed-in'
	}).then((res) => {
		if(res.user){
			$('#horoscope-form-div').hide();
			$("#sign-in-nav").hide();
			$("#sign-up-nav").hide();

			var signedInDiv = $('<div id="signed-in-div">');

			var zodImgA = $('<a>', {
				href: '/zodiac/' + res.user.zodiac
			});

			var zodImg = $('<img>',{
				src: './public/images/' + res.user.zodiac + '.jpg',
				height: '35px'
			});
			zodImgA.append(zodImg);

			var nameP = $('<p id="nav-user">');
			nameP.addClass('nav-text');
			nameP.text('Hello ' + res.user.name);
			nameP.css({color: colorZodiac(res.user.zodiac)})

			var logoutA = $('<a>', {
				href: '#',
				id: 'home-page-logout-button'
			});
			logoutA.addClass('nav-text');
			logoutA.text('Logout');

			signedInDiv.append(zodImgA).append(nameP).append(logoutA);
			$('#nav-right').append(signedInDiv);
		}
	});

	$(document).on('click', '#home-page-logout-button', function(){		
		$.ajax({
			method: 'DELETE',
			url: '/api/logout-user'
		}).then(function(res){
			window.location.href = "/"
		});
	});

	$('#horoscope-form').on('submit', function(e){
		e.preventDefault();

		var guestBookObj = {
			name: $('#name-input').val(),
			birthdate: $('#birthdate-input').val()
		}
		$.ajax({
			method: 'POST',
			url: '/api/create-unreg-user',
			dataType: 'json',
			data: JSON.stringify(guestBookObj),
			contentType: 'application/json'
		}).then(function(res){
			$('#result-div').remove();

			var resultDiv = $('<div id="result-div">');

			var resultText = $('<p>');
			resultText.addClass('text-center')
			resultText.text('Congrats, You\'re zodiac is ' + res.zodiac[0].zodiac);

			var zodButton = $('<a>', {
				text: 'See Results',
				href: '/zodiac/' + res.zodiac[0].zodiac,
				id: 'nav-button'
			});
			zodButton.addClass('btn btn-info text-center center-block');

			resultDiv.append(resultText).append(zodButton);

			$('#nav-button-div').append(resultDiv);

			userData();
			$('#name-input').val("");
			$('#birthdate-input').val("");
		});

	});

	function userData(){
		$.ajax({
			method: 'GET',
			url: '/api/users'
		}).then((users) => {
			if(users.length > 0){
				var tableStr = "<table id='users-table' class='col-md-4 col-md-offset-4 table'><thead><tr><th>#</th><th>Name</th><th>Birthdate</th><th>Zodiac</th></tr></thead><tbody id='users-tbody'>";
				for(var i = 0; i < users.length; i++){
					tableStr += "<tr><td>" + (i + 1) + "</td><td>" + users[i].name + "</td><td>" + users[i].birthdate + "</td><td>" + users[i].zodiac + "</td></tr>"
				}
				tableStr += "</tbody></table>";
				$('#user-table-div').html(tableStr)
			} else {
				$('#zodiac-input').hide();
			}

			$('#zodiac-input').on('change', function(){
				$('#users-table').remove();
				if ($(this).val() !== 'all'){
					var tableStr = "<table id='users-table' class='col-md-4 col-md-offset-4 table'><thead><tr><th>#</th><th>Name</th><th>Birthdate</th><th>Zodiac</th></tr></thead><tbody id='users-tbody'>";
					for(var i = 0; i < users.length; i++){
						if($(this).val() === users[i].zodiac){
							tableStr += "<tr><td>" + (i + 1) + "</td><td>" + users[i].name + "</td><td>" + users[i].birthdate + "</td><td>" + users[i].zodiac + "</td></tr>"
						}
					}
					tableStr += "</tbody></table>";
					$('#user-table-div').html(tableStr);
				} else {
					var tableStr = "<table id='users-table' class='col-md-4 col-md-offset-4 table'><thead><tr><th>#</th><th>Name</th><th>Birthdate</th><th>Zodiac</th></tr></thead><tbody id='users-tbody'>";
					for(var i = 0; i < users.length; i++){
						tableStr += "<tr><td>" + (i + 1) + "</td><td>" + users[i].name + "</td><td>" + users[i].birthdate + "</td><td>" + users[i].zodiac + "</td></tr>"
					}
					tableStr += "</tbody></table>";
					$('#user-table-div').html(tableStr)
				}
			});
		});
	}
	userData();

	$('#sign-in-nav').on('click', function(){
		$('#sign-in-modal').modal();
	});

	$('#sign-in-form').on('submit', function(e){
		e.preventDefault();

		var username = $("#sign-in-username-input").val();
		var password = $("#sign-in-password-input").val();

		if(username !== "" && password !== ""){
				var data = {
					username: username,
					password: password
				}
				$.ajax({
					method: 'POST',
					url: '/api/sign-in',
					dataType: 'json',
					data: JSON.stringify(data),
					contentType: 'application/json',
				}).then((res) => {
					if(res.message){
						if(res.message === "authentication succeeded"){
							userData();
							window.location.href = '/'
						}
					}
				})
		} else {
			alert("Please fill out all fields");
		}
	});

	$('#sign-up-form').on('submit', function(e){
		e.preventDefault();

		var name = $("#sign-up-name-input").val();
		var username = $("#sign-up-username-input").val();
		var birthdate = $("#sign-up-birthdate-input").val();
		var password = $("#sign-up-password-input").val();
		var confirmPassword = $("#sign-up-confirm-password-input").val();

		if(name !== "" && username !== "" && birthdate !== "" && password !== "" && confirmPassword !== ""){
			if(password === confirmPassword){
				var data = {
					name: name,
					username: username,
					birthdate: birthdate,
					password: password
				}
				$.ajax({
					method: 'POST',
					url: '/api/sign-up',
					dataType: 'json',
					data: JSON.stringify(data),
					contentType: 'application/json',
				}).then((res) => {
					if(res.user){
						userData();
						window.location.href = '/'
					}
				})
			} else {
				alert("Passwords do not match");
			}
		} else {
			alert("Please fill out all fields")
		}
	});

	$('#sign-up-nav').on('click', function(){
		$('#sign-up-modal').modal();
	});

	var colorZodiac = (zodiac) => {
		switch(zodiac){
			case 'aquarius':
				return 'lightgreen';
				break;
			case 'pisces':
				return 'green';
				break;
			case 'aries':
				return 'lightblue';
				break;
			case 'taurus':
				return 'blue';
				break;
			case 'gemini':
				return 'purple';
				break;
			case 'cancer':
				return 'lightpurple';
				break;
			case 'leo':
				return 'pink';
				break;
			case 'virgo':
				return 'red';
				break;
			case 'libra':
				return 'orange';
				break;
			case 'scorpio':
				return 'lightorange';
				break;
			case 'sagittarius':
				return 'lightorange';
				break;
			case 'capricorn':
				return 'yellow';
				break;
		}
	}

});