$(document).ready(function () {
  $("#hide1st").hide();
  $("#hide2nd").hide();
  $(".grey-variant").css({ border: "1px solid black" });
  $(".lightCoral-variant").css({ border: "1px solid black" });

  $(".beige-variant").click(function (event) {
    event.preventDefault();
    $("#firstImg").hide();
    $("#hide1st").show();
    $(".beige-variant").css({ border: "1px solid black" });
    $(".grey-variant").css("border", "");
  });

  $(".grey-variant").click(function (event) {
    event.preventDefault();
    $("#hide1st").hide();
    $("#firstImg").show();
    $(".grey-variant").css({ border: "1px solid black" });
    $(".beige-variant").css("border", "");
  });

  $(".white-variant").click(function (event) {
    event.preventDefault();
    $("#secondImg").hide();
    $("#hide2nd").show();
    $(".white-variant").css({ border: "1px solid black" });
    $(".lightCoral-variant").css("border", "");
    $(".beige-variant2").css("border", "");
  });

  $(".lightCoral-variant").click(function (event) {
    event.preventDefault();
    $("#hide2nd").hide();
    $("#secondImg").show();
    $(".lightCoral-variant").css({ border: "1px solid black" });
    $(".white-variant").css("border", "");
    $(".beige-variant2").css("border", "");
  });
  $(".beige-variant2").click(function (event) {
    event.preventDefault();

    $(".beige-variant2").css({ border: "1px solid black" });
    $(".lightCoral-variant").css("border", "");
    $(".white-variant").css("border", "");
  });

 
});

