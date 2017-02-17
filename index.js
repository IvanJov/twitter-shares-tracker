var Twitter = require('twitter');
require('console.table');
var config = require('./config');

var client = new Twitter({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token_key: config.access_token_key,
  access_token_secret: config.access_token_secret
});

client.get('search/tweets', {q: 'http://ivanjov.com/working-with-http-streams-with-cycle-js/'}, function(error, tweets, response) {
  console.log(tweets.search_metadata);
});