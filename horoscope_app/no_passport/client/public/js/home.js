$(document).ready(function(){

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
			console.log(res)
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

});