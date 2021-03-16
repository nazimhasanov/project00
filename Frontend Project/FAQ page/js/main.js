$(document).ready(function() {



    $("#heading-1").on('click', function() {
        $(".plus-minus-toggle_1").toggleClass('plus');
        $(".mark_1").toggle();
        if ($(".mark_2").css('display', 'block')) {
            $(".mark_2").css('display', 'none')
        }
    });

    $("#heading-2").on('click', function() {
        $(".plus-minus-toggle_2").toggleClass('plus');
        $(".mark_2").toggle();
        if ($(".mark_1").css('display', 'block')) {
            $(".mark_1").css('display', 'none')
        }
    });

    $("#heading-3").click(function() {
        $(".plus-minus-toggle_3").toggleClass('plus');
        $(".mark_3").toggle();
    });

    $("#heading-4").click(function() {
        $(".plus-minus-toggle_4").toggleClass('plus');
        $(".mark_4").toggle();
    });

    $("#heading-5").click(function() {
        $(".plus-minus-toggle_5").toggleClass('plus');
        $(".mark_5").toggle();
    });

    $("#heading-6").click(function() {
        $(".plus-minus-toggle_6").toggleClass('plus');
        $(".mark_6").toggle();
    });

    $("#heading-7").click(function() {
        $(".plus-minus-toggle_7").toggleClass('plus');
        $(".mark_7").toggle();
    });

    $("#heading-8").click(function() {
        $(".plus-minus-toggle_8").toggleClass('plus');
        $(".mark_8").toggle();
    });

    $("#heading-9").click(function() {
        $(".plus-minus-toggle_9").toggleClass('plus');
        $(".mark_9").toggle();
    });

    $("#heading-10").click(function() {
        $(".plus-minus-toggle_10").toggleClass('plus');
        $(".mark_10").toggle();
    });

    $("#heading-11").click(function() {
        $(".plus-minus-toggle_11").toggleClass('plus');
        $(".mark_11").toggle();
    });

    $("#heading-12").click(function() {
        $(".plus-minus-toggle_12").toggleClass('plus');
        $(".mark_12").toggle();
    });

    $("#heading-13").click(function() {
        $(".plus-minus-toggle_13").toggleClass('plus');
        $(".mark_13").toggle();
    });

    $("#heading-14").click(function() {
        $(".plus-minus-toggle_14").toggleClass('plus');
        $(".mark_14").toggle();
    });

    $("#heading-15").click(function() {
        $(".plus-minus-toggle_15").toggleClass('plus');
        $(".mark_15").toggle();
    });

    $("#heading-16").click(function() {
        $(".plus-minus-toggle_16").toggleClass('plus');
        $(".mark_16").toggle();
    });

    $(".openbtn").click(function() {
        $("#mySidepanel").css({ "width": "350px", "height": "100vh", "margin-top": "-200px", "margin-bottom": "200px", "z-index": "110" })
        $(".faqSection").css({ "background-color": "black", "opacity": "0.6", "width": "100vw", "height": "200vh", "position": "absolute", "z-index": "109" })
    });

    $(".closebtn").click(function() {
        $("#mySidepanel").css("width", "0");
        $(".faqSection").css({ "display": "none" })
    });

});