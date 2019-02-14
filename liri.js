require("dotenv").config();


var keys = require("./keys.js")
var spotify = new Spotify(keys.spotify);

switch(command) {
    case "concert-this":
    concert();
    break;

    case "spotify-this-song":
    song();
    break;

    case "movie-this":
    movie();
    break;
    
    case "do-what-it-says":
    doIt();
    break;

}
// <---- Ideas --->
function concert() {}

function song() {}

function movie() {}

function doIt() {}