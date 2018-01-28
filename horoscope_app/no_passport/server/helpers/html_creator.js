module.exports = (obj) => {
	var str = "<html>";
	str += "<head><title>" + obj.zodiac + "</title>"
	str += "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>";
	str += '<link rel="stylesheet" type="text/css" href="../../../public/css/zodiac.css"></head>'
	str += '<body><div class="container"><h1 id="hello">' + obj.zodiac + '</h1><br>';
	str += '<div class="well">';
	str += '<h3>Horoscope: ' + obj.todays_horoscope + '</h3>';
	str += '<h3>Description: ' + obj.description + '</h3>';
	str += '</div>';
	str += '<div class="btn-group" role="group" aria-label="Basic example">'
	str += '<a id="home-button" href="/" type="button" class="btn btn-primary sign-buttons">';
	str += '<span class="glyphicon glyphicon-home" aria-hidden="true"></span>';
	str += '</a>';
	str += '</div></div>';
	str += "<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>";
	str += "<script src='../../../public/js/zodiac.js'></script>";
	str += "</body></html>";
	return str;
}