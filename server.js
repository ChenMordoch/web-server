var express = require('express');
const PORT = process.env.PORT || 3000;

var app = express();
var middleware = require('./middleware');

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', function(req, res) {
  res.send('About us!!!');
});

app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

app.listen(PORT, function() {
  console.log('Express server started on port ' + PORT);
});