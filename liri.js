//<--- Requierments--->
require("dotenv").config();


var keys = require("./keys.js")
var spotify = new Spotify(keys.spotify);

//<--- User input--->
var userChoice = process.argv[2]; 
var xInput = process.argv[3];

//<--- Function to execute -->
userInput(userChoice, xInput)

// <--- Functions -->
function userInput ( userChoice, xInput) {
    switch(userChoice) {
        case "concert-this": 
        concert(xInput);
        break;

        case "spotify-this-song":
        song(xInput);
        break;

        case "movie-this":
        movie(xInput);
        break;
    
        case "do-what-it-says":
        doIt();
        break;
    }
}
// <---- Functions for each commands --->

//<--- Concert function with info--->
function concert(xInput) {}

function song(xInput) {
    if (!inputs){
        inputs = 'The Sign';
    }
        spotify.search({type: 'track', query: inputs }, function(err,data) {
            if (err){
                console.log('Error: ' + err);
                return;
            }
        })


}

function movie() {}

function doIt() {}