var axios = require('axios');
axios.get('https://api.github.com/users/codeheaven-io');

// Google vars
var googleKey = 'AIzaSyDKKnJzDuzPOA_0dB2PoTMWtaBn1VaP9RY';
var googleSearch = '005367748168396004507:_mzf0ltwpxs';

// Spotify vars
var client_id = '27eb8b96e2de49f5b58e337bc2b6d638'; // Your client id
var client_secret = 'c62ace7bd7284c8c8fe1bbda40bad08a'; // Your secret
var redirect_uri = 'http://localhost/spotify'; // Your redirect uri
var authVal;
var refresh;
var access;
var userID;
var playlistID;
var header= {
  headers: {
    'Authorization': authVal,
    'Content-Type': 'application/json'
  }
};

// Lyrics (Using google custom search)

export function getSongs(query){
  axios.get('https://www.googleapis.com/customsearch/v1?', {
    params: {
      key: googleKey,
      cx: googleSearch,
      q: query,
      fields: 'items(title)',
      start: 1
    }
  })
  .then(function(response){
      console.log(response.data);
      console.log(response.status);
      return response.data;
  });
};

export function getSong(){
  // Parse results here?
};

// Spotify stuff
export function authorize(){
  // Have them login and get authorized
  axios.get('https://localhost/https://accounts.spotify.com/authorize', {
    params: {
      client_id: client_id,
      response_type: 'code',
      redirect_uri: redirect_uri
    }
  })
  .then(function(response){
      //authVal=response.code;
      //postRefresh(response.code);
      console.log(response.data);
      console.log(response.status);
  });
};

export function getAuthorizeCode(){
  axios.get('/spotify')
  .then(function(response){
    authVal = response.code;
    console.log(response.data);
  });
}

export function postRefresh(code){
  // Get refresh and Access tokens
  axios.post('https://accounts.spotify.com/api/token',{
    grant_type: 'authorization_code',
    code: code, //the authorization code given by authorize
    redirect_uri: redirect_uri,
    client_id: client_id,
    client_secret: client_secret
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};

export function newPlaylist(name){
  // Make a playlist
  axios.post('https://api.spotify.com/v1/users/'+userID+'/playlists',{
    name: name,
  },header)
  .then(function (response) {
    playlistID=response.id;
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};

export function getUserID(authVal){
  axios.get('https://api.spotify.com/v1/me',header)
  .then(function(response) {
    userID=response.id;
  });

};

export function addSong(song){
  // Add a song to the playlist
  axios.post('https://api.spotify.com/v1/users/'+userID+'/playlists/'+playlistID+'/tracks',{
    uris:song
  },header)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};

export function findSong(title,artist){
  //find a song and add it to the playlist
  axios.get('https://api.spotify.com/v1/search',{
    params: {
      q:'track:'+title+' artist:'+artist,
      type: track,
      limit: '1'
    }
  })
  .then(function(response){
    addSong(response.uri);
  });
};
