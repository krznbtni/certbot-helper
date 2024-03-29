const express = require('express'),
      app = express();

// CERTBOT expects files in 'var/www/html' to be served statically
// so that it can find 'challenge' files in
// '/var/www/html/.well-known' during
// certification renewals
// MAKE SURE the folder '/var/www/html' exists
app.use(express.static('/var/www/html'));

app.listen(5000, function () {
  console.log('Webserver listening on port 5000');
});
