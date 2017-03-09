const express = require('express');
const headerParser = require('./utilities/header-parser');

const app = express();

app.get('/whoami', (request, response) => {
  // Destructuring assignment allows for multiple return values
  const [ipAddress, software, language] = headerParser(request);

  response.json({
    'ip-address': ipAddress,
    software,
    language,
  });
});

module.exports = app.listen(process.env.PORT || 3000);
