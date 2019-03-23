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
            $("body").addClass("bg-pantone-2010-c");
        }
        else if ($(this).scrollTop() <= (windowHeight+200)) {
            $("body").removeClass("bg-pantone-2010-c");
        }
        if ($(this).scrollTop() >= (windowHeight*2)+200*2 ) {
            $("body").addClass("bg-pantone-531-u").removeClass("bg-pantone-2010-c");
        }
        else if ($(this).scrollTop() <= (windowHeight*2) + 200*2) {
            $("body").removeClass("bg-pantone-531-u");
        }

        if ($(this).scrollTop() >= (windowHeight*3)+200*3 ) {
            $("body").addClass("plain-white").removeClass("bg-pantone-531-u");
            $(".App-menu").addClass("font-pantone-115-c").removeClass("default");
        }
        else if ($(this).scrollTop() <= (windowHeight * 3) + 200*3) {
            $("body").removeClass("plain-white");
            $(".App-menu").addClass("default").removeClass("font-pantone-115-c");
        }
        if ($(this).scrollTop() >= (windowHeight * 4) + 200 * 4) {
            $("body").addClass("afa-blue").removeClass("plain-white");
            $(".App-menu").addClass("default").removeClass("font-pantone-115-c");
        }
        else if ($(this).scrollTop() <= (windowHeight * 4) + 200 * 4) {
            $("body").removeClass("afa-blue");
        }
    });
});