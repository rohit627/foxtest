(function() {
    $('#content').height($(window).height());
    $( window ).resize(function() {
        $( "#content" ).height( $( window ).height() );
    });
})();
