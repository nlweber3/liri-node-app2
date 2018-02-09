require('dotenv').config();

var request = require('request');
var fs = require('fs');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var omdb = require('omdb');


//function for choosing api call
function checkforinput() {
	if (process.argv[2] === 'tweets') {
		tweets();
	}
	else if (process.argv[2] === 'spotify') {
		spotifyThis();
	}
	else if (process.argv[2] === 'movie') {
		getMovie();
	}

};


//twitter api
function tweets() {
	var params = {screen_name: process.argv[3]};
	var client = new Twitter({
		consumer_key: process.env.TWITTER_CONSUMER_KEY,
		consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
		access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
		access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
	});
	
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) { 
			for (var i=0; i<20; i++) {
				console.log(tweets[i].text);
			}
		}
		else {
			console.log(error);
		}
	});

}



//spotify api
function spotifyThis() {
var spotify = new Spotify({
	id: process.env.SPOTIFY_ID,
	secret: process.env.SPOTIFY_SECRET
});


spotify.search({ type: 'artist', query: process.argv[3], limit:1 }, function(err, data) {
	if (error) {
		return console.log('Error occurred: ' + err);
	}
	else {
		console.log(data);	
	}

	 
});
}

//function ombd
function getMovie() {
	omdb.get({title: process.argv[3]}, true, function(err, movie) {
    if(err) {
        return console.error(err);
    }
 
    if(movies.length < 1) {
        return console.log('No movies were found!');
    }
    console.log(movie.title);
 
 });
}



checkforinput();