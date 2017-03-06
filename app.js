const express = require('express');
const headerParser = require('./utilities/header-parser');
const app = express();

app.get('/whoami', function(request, response) {

	// Destructuring assignment allows for multiple return values
	let [ ipAddress, software, language ] = headerParser(request);

	response.json({
		'ip-address': ipAddress,
		software,
		language
	});
});

module.exports = app.listen(process.env.PORT || 3000);