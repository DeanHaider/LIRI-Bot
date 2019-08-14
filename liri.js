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
    moviethis();
    break;
  case "do-what-it-says":
    dowhatitsays();
    break;
}

function concertthis(){
    axios.get("https://rest.bandsintown.com/artists/" + searchResult + "/events?app_id=codingbootcamp")
    .then(function (response) {
        console.log("------------------------------------");
        for (let i = 0; i < response.data.length; i++) {
            console.log("Venue Name: " + response.data[i].venue.name);
            console.log("Venue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.region);
            console.log("Show Date: " + response.data[i].datetime);
            console.log("------------------------------------");
        }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
};



function moviethis(){
    axios.get("http://www.omdbapi.com/?t=" + searchResult + "&y=&plot=short&apikey=trilogy")
    .then(function (response) {
        console.log("------------------------------------");
        console.log("Movie Name: " + response.data.Title);
        console.log("Movie Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.Rated);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Production Country: " + response.data.Country);
        console.log("Movie Plot: " + response.data.Plot);
        console.log("Actors/Actress: " + response.data.Actors);
        console.log("------------------------------------");

    })
};

function dowhatitsays() {

}