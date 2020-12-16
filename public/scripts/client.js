/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

const renderTweets = function(tweets) {
  // loops through tweets
  for (let tweet of tweets) {
    // calls createTweetElement for each tweet
    let tweetElement = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $('#tweets-container').prepend(tweetElement);
  }
}

// return html
const createTweetElement = function(tweet) {
  const $tweet = `<article class="tweet">
  <header class="tweet-header">
    <div class="userID">
      <img src=${tweet.user.avatars} width="60" height="60">
      <p class="username">${tweet.user.name}</p>
    </div>
    <p class="handle">${tweet.user.handle}</p>
  </header>
  <p class="entry">${tweet.content.text}</p>
  <footer class="tweet-footer">
    <p class="timestamp">10 days ago</p>
    <div class="tweetIcons">
      <img src="/images/flags.png" width="20" height="20">
      <img src="/images/retweet.png" width="20" height="20">
      <img src="/images/like.png" width="20" height="20">
    </div>
  </footer>
</article>`
  
  return $tweet;
}


const loadTweets = function () {
  $('#tweetsContainer').on("load", function() {

    $.ajax({
      method: 'GET',
      url: '/tweets',
    })
    .then((result) => {
      renderTweets(result);
    })
    .catch((err) => {
      console.log(err);
    })
  })
}

loadTweets();

const submitTweet = function () {
  $('.submit-tweet').submit(function(event) {
    event.preventDefault();
  
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: $('.submit-tweet').serialize()
    })
    .then((result) => {
      loadTweets(result);
    })
    .catch((err) => {
      console.log(err);
    })
  });
}


/////////////////////////////////////////////////////
$(document).ready(function() {
  loadTweets();
})