var axios = require('axios');
axios.get('https://api.github.com/users/codeheaven-io');

// Google vars
var googleKey = 'key=AIzaSyDKKnJzDuzPOA_0dB2PoTMWtaBn1VaP9RY';
var googleSearch = 'cx=005367748168396004507:_mzf0ltwpxs';

// Spotify vars
var client_id = '27eb8b96e2de49f5b58e337bc2b6d638'; // Your client id
var client_secret = 'c62ace7bd7284c8c8fe1bbda40bad08a'; // Your secret
var redirect_uri = 'REDIRECT_URI'; // Your redirect uri

// Lyrics (Using google custom search)

export function getSongs(query){
    axios.get('https://www.googleapis.com/customsearch/v1?' + googleKey + '&' + googleSearch + '&' + 'q=' + query)
        .then(function(response){
            console.log(response.data);
            console.log(response.status);
        });
};

export function getSong(){
    // Parse results here?
};

// Spotify stuff
export function authorize(){
    // Have them login and get authorized
};

export function postRefresh(){
    // Get refresh and Access tokens
};

export function newPlaylist(){
    // Make a playlist
};

export function addSong(){
    // Add a song to the playlist
};