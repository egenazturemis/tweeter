// Prevent XSS
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;

};

const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    let tweetElement = createTweetElement(tweet);
    $('#tweets-container').prepend(tweetElement);
  };

};

const createTweetElement = function(tweet) {
  const $tweet = `<article class="tweet">
  <header class="tweet-header">
    <div class="userID">
      <img src=${tweet.user.avatars} width="60" height="60">
      <p class="username">${tweet.user.name}</p>
    </div>
    <p class="handle">${tweet.user.handle}</p>
  </header>
  <p class="entry">${escape(tweet.content.text)}</p>
  <footer class="tweet-footer">
    <p class="timestamp">10 days ago</p>
    <div class="tweetIcons">
      <img id="i1" src="/images/flag.png" width="15" height="15">
      <img id="i2" src="/images/retweet.png" width="18" height="18">
      <img id="i3" src="/images/like.png" width="15" height="15">
    </div>
  </footer>
</article>`
  return $tweet;

};


const loadTweets = function () {
  $.ajax({
    method: 'GET',
    url: '/tweets',
  })
  .then((result) => {
    renderTweets(result);
  })
  .catch((err) => {
    console.log(err);
  });

};


$(document).ready(function() {
  loadTweets();
  
  $('.submit-tweet').submit(function(event) {
    event.preventDefault();
    let tweetBox = $('#tweet-text').val()
    
    if (tweetBox.length > 140) {
      const alert = "<p>You've exceeded the max. character limit of 140 characters!</p>";
      $('.throwError').append(alert);
      $('.throwError').slideDown();
  
    } else if (tweetBox === null || tweetBox === '') {
      const alert = "<p>Can't post an empty tweet! Type something to post.</p>";
      $('.throwError').append(alert);
      $('.throwError').slideDown();
  
    } else {
      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: $('.submit-tweet').serialize()
      })
      .then((result) => {
        $('.throwError').slideUp();
        loadTweets();
        $('#tweet-text').val('');
      })
      .catch((err) => {
        console.log(err);
      });
    };
  });
});
