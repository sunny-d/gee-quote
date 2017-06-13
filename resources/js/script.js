$(document).ready(function() {
  $("#get-quote").on("click", function () {
    console.log("script.js");
    var quoteBin = $("#quote-bin");
    //var authorBin = $("#author-bin");
    var html = "";
    var items = [];
    console.log(quoteBin.selector.length);
      $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function (jsonResponse) {
      console.log(jsonResponse);
      console.log(jsonResponse[0].ID);
      items = jsonResponse;
      html = "<blockquote><i class='fa fa-quote-right' aria-hidden='true'></i><p>" + items[0].content;
      html += "</p><footer class='blockquote-footer'>";
      html += items[0].title;
      html += "</blockquote>";
      //quoteBin = jsonResponse[0].content;
      //authorBin = jsonResponse[0].title;
      //quoteBin.html(html);
      //jsonResponse.end;
      quoteBin.html(html);
      });
      quoteBin.empty();      
    });
    $("#get-quote").click();
  });