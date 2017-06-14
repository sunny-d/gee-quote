
var tweetID = 0;
function getQuote() {
  var quoteBin = $("#quote-bin");
  var tweetBin = $("#tweet-bin");
  tweetBin.html("<a href='#' target='_blank'> hi/a>");
  var qContent = "";
  var html = "";
  var items = [];
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function (jsonResponse) {
    items = jsonResponse;
    qContent = items[0].content;
    tweetID = items[0].ID;
    html = "<blockquote><i class='fa fa-quote-right' aria-hidden='true'></i><p>" + qContent;
    html += "</p><footer class='blockquote-footer'>";
    html += items[0].title;
    html += "</blockquote>";
    quoteBin.html(html);
  });
};

function tweetQuote() {
  var url = "https://twitter.com/intent/tweet?text=https://quotesondesign.com/?p=" + tweetID;
  var win = window.open(url, '_blank');
  win.focus();
};

//credit: janschreiber - forum dot freecodecamp dot com/u/janschreiber
$("#get-quote").click(getQuote);
$("#tweet-quote").click(tweetQuote);

$(document).ready(function() {
  $.ajaxSetup({
    cache: false
  });
  getQuote();
});