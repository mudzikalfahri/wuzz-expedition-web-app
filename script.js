// nav scrolling

$(window).on("scroll", function(){
    if ( $(window).scrollTop() ){
        $('nav').addClass('white-nav');
    }
    else {
        $('nav').removeClass('white-nav');
    }
});