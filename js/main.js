(function() {
    $('#content').height($(window).height());
    $('#content').width($(window).width());
    $( window ).resize(function() {
        $( "#content" ).height( $( window ).height() );
    });
})();
