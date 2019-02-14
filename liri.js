//<--- Requierments--->
require("dotenv").config();


var keys = require("./keys.js")
var spotify = new Spotify(keys.spotify);

// <--- Commands needed to run the program using "switch" -->
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
// <---- Functions for each commands --->
function concert() {}

function song() {}

function movie() {}

function doIt() {}