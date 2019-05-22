require("dotenv").config();
import { spotify } from "./keys";

var keys = require("./keys");
var spotifyapi = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

spotify.search({ type: 'track', query: 'Hot For Teacher' }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data);
});

spotify.search({ type: 'artist', query: 'Van Halen' }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data);
});