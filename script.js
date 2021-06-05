// nav scrolling
$(window).on("scroll", function(){
    if ( $(window).scrollTop() ){
        $('nav').addClass('white-nav');
    }
    else {
        $('nav').removeClass('white-nav');
    }
});

let navlinks = document.getElementById("nav-link");

function showMenu(){
    navlinks.style.right="0";
}
function hideMenu(){
    navlinks.style.right="-200px"
}
