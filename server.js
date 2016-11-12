var express = require('express');
var cons = require('consolidate');
var app = express();

app.engine('html',cons.handlebars);
app.set('port',(process.env.PORT || 3000));
app.set('view engine', 'html');
app.set('views', __dirname + '/public');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('app',{title: 'Balaman App', message: '<h1>Heroku App is running!</h1>'});
});
 
app.listen(app.get('port'),function(){
	console.log("Server is running at localhost:3000");
});