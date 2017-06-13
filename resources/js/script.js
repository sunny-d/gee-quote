//credit: janschreiber - forum dot freecodecamp dot com/u/janschreiber
function getQuote() {
  var quoteBin = $("#quote-bin");
  var html = "";
  var items = [];
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function (jsonResponse) {
    items = jsonResponse;
    html = "<blockquote><i class='fa fa-quote-right' aria-hidden='true'></i><p>" + items[0].content;
    html += "</p><footer class='blockquote-footer'>";
    html += items[0].title;
    html += "</blockquote>";
    quoteBin.html(html);
  });
};

$("#get-quote").click(getQuote);

$(document).ready(function() {
  $.ajaxSetup({
    cache: false
  });
  getQuote();
});