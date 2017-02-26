var express = require('express'),
app = express(),
methodOverride = require('method-override'),
morgan = require('morgan'),
serveStatic = require('serve-static'),
path = require('path'),
ejs = require('ejs');

var port = 80;

app.use(morgan('dev'));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/build'));


app.set("views",path.join("./build"));
app.set("view engine", "ejs");


app.get('*', function(req,res) {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});



app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
