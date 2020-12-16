/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

const tweetData = [
    {"user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227 },

    {"user": {
      "name": "Egenaz",
      "avatars": "/images/philosopher.png",
        "handle": "@Sasdasdas"
      },
    "content": {
        "text": "asdfasdasda"
      },
    "created_at": 1461116232227 }
    ]




const renderTweets = function(tweets) {
  // loops through tweets
  for (let tweet of tweets) {
    // calls createTweetElement for each tweet
    let tweetElement = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    console.log(tweetElement)
    $('#tweets-container').prepend(tweetElement);
  }
}

// i need to return html
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

$(document).ready(function() {
  renderTweets(tweetData);

})



{/* <article class="tweet">${tweet.content.text}</article> */}


// `<article class="tweet">
//   <header class="tweet-header">
//     <div class="userID">
//       <img src="/images/philosopher.png" width="60" height="60">
//       <p class="username">Username</p>
//     </div>
//     <p class="handle">@handle</p>
//   </header>
//   <p class="entry">Some tweet, some more tweet!</p>
//   <footer class="tweet-footer">
//     <p class="timestamp">10 days ago</p>
//     <div class="tweetIcons">
//       <img src="/images/flags.png" width="20" height="20">
//       <img src="/images/retweet.png" width="20" height="20">
//       <img src="/images/like.png" width="20" height="20">
//     </div>
//   </footer>
// </article>`