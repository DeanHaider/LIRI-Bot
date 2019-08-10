require("dotenv").config();
var keys = require("./keys.js");
const Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify);
const axios = require('axios');

var operator = process.argv[2];
var searchResult = process.argv.slice(3).join(" ")


switch (operator) {
    case "concert-this":
    concertthis();
    break;
  case "spotify-this-song":

    break;
  case "movie-this":

    break;
  case "do-what-it-says":

    break;
}

function concertthis(){
    axios.get("https://rest.bandsintown.com/artists/" + searchResult + "/events?app_id=codingbootcamp")
    .then(function (response) {
      // handle success
            console.log("------------------------------------");
        for (let i = 0; i < response.data.length; i++) {
            console.log(response.data[i].venue.name);
            console.log(response.data[i].venue.city + ", " + response.data[i].venue.region);
            console.log(response.data[i].datetime);
            console.log("------------------------------------");
        }
    
    //   console.log(response.data);
    //   console.log(response.data);

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
};