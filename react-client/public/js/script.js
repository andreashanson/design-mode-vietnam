$(document).ready(function() {

    let windowHeight = $(window).height();
    $(".main-section").css({"min-height": windowHeight});
    $(window).scroll(function () {
        console.log("SCROLL TOP");
        console.log($(this).scrollTop());
        console.log("window height");
        console.log(windowHeight);
        console.log(windowHeight*2);

        if ($(this).scrollTop() >= (windowHeight+200)) {
            $("body").addClass("red")
        }
        else if ($(this).scrollTop() <= (windowHeight+200)) {
            $("body").removeClass("red");
        }
        if ($(this).scrollTop() >= (windowHeight*2)+200*2 ) {
            $("body").addClass("yellow").removeClass("red");
        }
        else if ($(this).scrollTop() <= (windowHeight*2) + 200*2) {
            $("body").removeClass("yellow");
        }

        if ($(this).scrollTop() >= (windowHeight*3)+200*3 ) {
            $("body").addClass("blue").removeClass("yellow");
        }
        else if ($(this).scrollTop() <= (windowHeight * 3) + 200*3) {
            $("body").removeClass("blue");
        }
        if ($(this).scrollTop() >= (windowHeight * 4) + 200 * 4) {
            $("body").addClass("purple").removeClass("blue");
        }
        else if ($(this).scrollTop() <= (windowHeight * 4) + 200 * 4) {
            $("body").removeClass("purple");
        }
    });
});