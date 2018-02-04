require('dotenv').config();

var request = require('request');
var fs = require('fs');
var Twitter = require('twitter');
// var Spotify = require('Spotify');
var userInput = process.argv[2];
// tweets();

	var params = {screen_name: 'artisticbinary'};
	var client = new Twitter({
		consumer_key: process.env.TWITTER_CONSUMER_KEY,
		consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
		access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
		access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
	});
	client.get('statuses/tweets', params, function(error, tweets, response) {
		if (!error) {
			// for (var i=0; i<20; i++) {
				console.log("yay");
			// }
		}
		else {
		tweetsNull();
		console.log(error);
		}
	});

function tweetsNull() {
	var params = {screen_name: "N/A"};
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
	});
}