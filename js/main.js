(function() {
    $('.header').css('padding-top', function() {
        if($(window).width() <= 480) {
            return Math.floor($(window).height()/3);
        }
        return Math.floor($(window).height()/3.3);
    })
    // $('#content').height($(window).height());
    // $('#content').width($(window).width());
    $( window ).resize(function() {
        $('.header').css('padding-top', function() {
            if($(window).width() <= 1140) {
                return Math.floor($(window).height()/3);
            }
        })
    });
})();
