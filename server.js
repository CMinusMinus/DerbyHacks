var express = require('express'),
app = express(),
methodOverride = require('method-override'),
morgan = require('morgan'),
serveStatic = require('serve-static'),
path = require('path'),
ejs = require('ejs'),
axios = require('axios'),
bodyParser = require('body-parser');

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

var port = 80;

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/build'));


app.set("views",path.join("./build"));
app.set("view engine", "ejs");


app.get('*', function(req,res) {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.post('/api/postRefresh', function(req,res) {
  console.log("code", req.body.code);
  axios.post('https://accounts.spotify.com/api/token',{
    grant_type: 'authorization_code',
    code: req.body.code,
    redirect_uri: 'http://localhost/spotify',
    client_id: '27eb8b96e2de49f5b58e337bc2b6d638',
    client_secret: 'c62ace7bd7284c8c8fe1bbda40bad08a'
  },{ headers: {
    'Allow-Access-Control-Origin': '*',
    'Content-Type': 'application/x-www-form-urlencoded'
  }})
  .then(function(success) {
    console.log(success);
    res.send(success);
  })
  .catch(function(err) {
    console.log(err);
    res.send(err);
  });

});




app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
