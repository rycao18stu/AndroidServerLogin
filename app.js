var express  = require('express');
var connect = require('connect');

var app = express();
var port = 8080;

app.use(express.static(__dirname + '/public'));
app.use(connect.logger('dev'));
app.use(connect.json());
app.use(connect.urlencoded());

require('./routes/routes.js')(app);

app.listen(port);

console.log('The App is running on port ' + port);