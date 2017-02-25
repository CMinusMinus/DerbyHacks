var express = require('express'),
app = express(),
methodOverride = require('method-override'),
morgan = require('morgan'),
serveStatic = require('serve-static'),
path = require('path');

var port = 80;

app.use(morgan('dev'));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use('/', express.static(__dirname + '/src'));

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname + 'index.html'));
});

app.get('/spotify', function(req,res) {
  res.send(req.query);
  res.redirect('/');
});

app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
