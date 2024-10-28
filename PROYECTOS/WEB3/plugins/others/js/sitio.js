background: url(owl.video.play.png) no-repeat; 176
//Iniciamos WOW
new WOW().init();

//Iniciamos Smoothscroll
new SmoothScroll('a[href*="#"]').init({
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    offset: 60, // Integer. How far to offset the scrolling anchor location in pixels
});

/*---------------------------------
   CABECERA ANIMADA
 ----------------------------------*/
$(window).scroll(function () {
    var nav = $('.encabezado');
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        nav.addClass("fondo-menu");
    } else {
        nav.removeClass("fondo-menu");
    }
});