var express = require('express');
var cons = require('consolidate');
var app = express();

app.engine('html',cons.handlebars);
app.set('view engine', 'html');
app.set('views', __dirname + '/public');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('app',{title: 'Balaman App', message: '<h1>ehem</h1>'});
});
 
app.listen(3000,function(){
	console.log("Server is running at localhost:3000");
});