$(document).ready(function() {
    $(".owl-one").owlCarousel({
        margin: 30,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            992: {
                items: 2,
            },
        },
    });
    $(".my-next-button").click(function() {
        $(".owl-one").trigger("next.owl.carousel");
    });

    $(".my-previous-button").click(function() {
        $(".owl-one").trigger("prev.owl.carousel");
    });
});


$(function() {
    const nexticon = '<i class="fas fa-chevron-right"></i>';
    const previcon = '<i class="fas fa-chevron-left"></i>';

    $(".owl-two").owlCarousel({
        loop: false,

        nav: false,
        margin: 30,
        nav: true,
        navText: [previcon, nexticon],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1220: {
                items: 4,
            },
        },
    });

});

$(document).ready(function() {
    $(".gallery-2").fancybox({
        transitionIn: "elastic",
        transitionEffect: "fade",
        transitionOut: "elastic",
        speedIn: 600,
        speedOut: 200,
        overlayShow: true,
        opacity: true,
        cyclic: true,
    });

    $.fancybox.defaults.buttons = ["zoom", "slideShow", "close"];
});



$(document).ready(function() {
    $(".owl-three").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dotsEach: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: false,
            },
            600: {
                items: 2,
                nav: false,
                loop: false,
            },
            768: {
                items: 3,
                nav: false,
                loop: false,
            },
            1100: {
                items: 4,
                nav: false,
                loop: false,
            },
        },
    });
});