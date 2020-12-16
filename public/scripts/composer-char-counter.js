// Character limit countdown functionality 
// (counter turns red when character limit has been reached)

$(document).ready(function() {
  const textarea = $("#tweet-text");
  
  textarea.on('input', function() {
    let remainingChar = 140 - $(this).val().length;

    // dom traverse to the counter & update the text for the counter (jquery.text())
    $("#tweet-text").siblings(".tweetButtonNCount").children(".counter").text(remainingChar);
    
    // if base value is < 0, then add a class to the counter (jquery.addclass() / removeclass)
    // remember to add class to new-tweet.css
    if (remainingChar < 0) {
      $(".counter").addClass("negativeCount");

    } else if (remainingChar > 0) {
      $(".counter").removeClass("negativeCount");
    }

  
  })
});