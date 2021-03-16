$(document).ready(function() {
    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 0,
            showinfo: 0
        },
        vimeo: {
            color: 'f00'
        }
    });

    $(".fancybox").fancybox({
        'width': 1000,
        'height': 550,
        'autoSize': false,
    });
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        center: true,

    });
});

$(document).ready(function() {
    (function($) {
        let defaults = {
            duration: 120,
            on: "mouseover",
        };

        $.zoom = function(target, source, img, magnify) {
            ($target = $(target)),
            (position = $target.css("position")),
            ($source = $(source));

            target.style.position = /(absolute|fixed)/.test(position) ?
                position :
                "relative";
            target.style.overflow = "hidden";
            img.style.width = img.style.height = "";

            $(img)
                .addClass("zoomPhoto")
                .css({
                    position: "absolute",
                    opacity: 0,
                })
                .appendTo(target);

            return {
                init: function() {
                    targetWidth = $target.outerWidth();
                    targetHeight = $target.outerHeight();

                    if (source === target) {
                        sourceWidth = targetWidth;
                        sourceHeight = targetHeight;
                    } else {
                        sourceWidth = $source.outerWidth();
                        sourceHeight = $source.outerHeight();
                    }

                    xRatio = (img.width - targetWidth) / sourceWidth;
                    yRatio = (img.height - targetHeight) / sourceHeight;

                    offset = $source.offset();
                },
                move: function(e) {
                    let left = e.pageX - offset.left,
                        top = e.pageY - offset.top;

                    img.style.left = left * -xRatio + "px";
                    img.style.top = top * -yRatio + "px";
                },
            };
        };

        $.fn.zoom = function(options) {
            return this.each(function() {
                let settings = $.extend({}, defaults, options || {}),
                    target = (settings.target && $(settings.target)[0]) || this,
                    source = this,
                    $source = $(source),
                    img = document.createElement("img"),
                    $img = $(img),
                    mousemove = "mousemove.zoom",
                    touched = false;

                if (!settings.url) {
                    let srcElement = source.querySelector("img");
                    if (srcElement) {
                        settings.url = srcElement.src;
                    }
                }

                img.onload = function() {
                    let zoom = $.zoom(target, source, img, settings.magnify);

                    function start(e) {
                        zoom.init();
                        zoom.move(e);

                        $img
                            .stop()
                            .fadeTo(
                                $.support.opacity ? settings.duration : 0,
                                1,
                                $.isFunction(settings.onZoomIn) ?
                                settings.onZoomIn.call(img) :
                                false
                            );
                    }

                    function stop() {
                        $img
                            .stop()
                            .fadeTo(
                                settings.duration,
                                0,
                                $.isFunction(settings.onZoomOut) ?
                                settings.onZoomOut.call(img) :
                                false
                            );
                    }

                    if (settings.on === "hover") {
                        $source.on("mousedown.zoom", function(e) {});
                    } else if (settings.on === "mouseover") {
                        zoom.init();

                        $source
                            .on("mouseenter.zoom", start)
                            .on("mouseleave.zoom", stop)
                            .on(mousemove, zoom.move);
                    }

                    if ($.isFunction(settings.callback)) {
                        settings.callback.call(img);
                    }
                };

                img.setAttribute("role", "presentation");
                img.alt = "";
                img.src = settings.url;
            });
        };

        $.fn.zoom.defaults = defaults;
    })(window.jQuery);
    $("#bigProduct1").zoom();
    $("#bigProduct2").zoom();

    $("#bigProduct2").hide();
    $(".firstSmall").css({ border: "1px solid black" });

    $(".secondSmall").click(function(event) {
        event.preventDefault();
        $("#bigProduct1").hide();
        $("#bigProduct2").show();
        $(".secondSmall").css({ border: "1px solid black" });
        $(".firstSmall").css("border", "");
    });

    $(".firstSmall").click(function(event) {
        event.preventDefault();
        $("#bigProduct2").hide();
        $("#bigProduct1").show();
        $(".firstSmall").css({ border: "1px solid black" });
        $(".secondSmall").css("border", "");
    });
});

$(document).ready(function() {
    $("#qty").on("change keyup", function() {
        var qty = parseInt($(this).val()),
            priceForOne = parseInt($("#priceForOne").val());
        var totalPrice = (priceForOne * qty).toFixed(2);
        $("#total").text("$" + totalPrice);
    });

    $(".ulduz").click(function() {
        var necenci = parseInt($(this).data("no"));
        var qalan = 5 - necenci;
        for (let index = 0; index <= necenci; index++) {
            $(".ulduz" + index)
                .addClass("bi-star-fill")
                .removeClass("bi-star");
        }

        for (let index = necenci + 1; index <= 5; index++) {
            $(".ulduz" + index)
                .addClass("bi-star")
                .removeClass("bi-star-fill");
        }
    });

    $("#term").click(function() {
        if ($(this).is(":checked")) {
            $(".buynow").prop("disabled", false);
            $(".buynow").attr("title", "Buy it now");
        } else {
            $(".buynow").prop("disabled", true);
            $(".buynow").attr("title", "Please first agree terms & conditions");
        }
    });

    $("#product-add").on("submit", function() {
        var productName = $("#prd-name").text(),
            qty = parseInt($("#qty").val()),
            term = 0;
        var productID = $(".product-head").data("id"),
            priceForOne = parseInt($("#priceForOne").val());
        var totalPrice = (priceForOne * qty).toFixed(2);
        var productFullID = "pro" + productID;
        if ($("#term").is(":checked")) {
            term = 1;
        }
        if (!qty) {
            alert("Minumum order quantity is 1. Please select product quantity");
        } else if (term == 0) {
            alert("You must agree our terms & conditions");
        }
        if ($("#" + productFullID).length) {
            $("#" + productFullID + " span").text(
                "$" + totalPrice + "(" + qty + ") qty"
            );
            // alert("Product details refreshed");
        } else {
            $(".shop-list").append(
                '<li id="' +
                productFullID +
                '"><a href="#" class="dropdown-item">' +
                productName +
                ' <span class="badge bg-danger">$' +
                totalPrice +
                "(" +
                qty +
                ") qty</span></a></li>"
            );

        }

        $("#prodqty").text($(".shop-list .dropdown-item").length);

        return false;
    });


});