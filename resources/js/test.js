$(document).ready(function() {
    $("#get-quote").on("click", function() {
        console.log("test.js");
        $.getJSON( "./resources/js/quotes.json", function( data ) {
            console.log("getJSON");
            console.log(data);
        var items = [];
        $.each( data, function( key, val ) {
            items.push( "<li id='" + key + "'>" + val + "</li>" );
        });
        
        $( "<ul/>", {
            "class": "my-new-list",
            html: items.join( "" )
        }).appendTo( "body" );
        });
    })
});

