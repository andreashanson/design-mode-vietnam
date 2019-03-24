$(document).ready(function() {

    let windowHeight = $(window).height();
    let headerHeight = $("#App-header").height();

    let boutiqueHeight = $("#section-1").height();
    let storyHeight = $("#section-2").height();
    let communityHeight = $("#section-3").height();
    let reachUsHeight = $("#section-4").height();
    let shipReturnHeight = $("#section-5").height();
        
    $(".main-section").css({"min-height": windowHeight});
    $(window).scroll(function () {
        boutiqueHeight = $("#section-1").height();
        storyHeight = $("#section-2").height();
        communityHeight = $("#section-3").height();
        reachUsHeight = $("#section-4").height();
        shipReturnHeight = $("#section-5").height();
        
        // Scrollled to Boutique
        if ($(this).scrollTop() <= (boutiqueHeight + headerHeight)) {
            console.log("Boutique");
            $("body").removeClass();
        }
        // Scrolled to Story
        if ($(this).scrollTop() >= (boutiqueHeight+headerHeight) && $(this).scrollTop() <= (boutiqueHeight+storyHeight)+(headerHeight*2) ) {
            console.log("Story");
            $("body").removeClass().addClass("bg-pantone-2010-c");
        }
        
        // Scrolled to community
        if ($(this).scrollTop() >= (boutiqueHeight+storyHeight)+(headerHeight*2) && $(this).scrollTop() <= (boutiqueHeight + storyHeight + communityHeight) + (headerHeight * 3) ) {
            console.log("Community");
            $("body").removeClass().addClass("bg-pantone-531-u");
        }
        
        // Scrolled to Reach us
        if ($(this).scrollTop() >= (boutiqueHeight + storyHeight + communityHeight) + (headerHeight * 3) && $(this).scrollTop() <= (boutiqueHeight + storyHeight + communityHeight + reachUsHeight) + (headerHeight*4) ) {
            console.log("Entering Reach us section");
            $("body").removeClass().addClass("plain-white");
            $(".App-menu").removeClass("default");
        }

        // Scrolled to ship + return 
        if ($(this).scrollTop() >= (boutiqueHeight + storyHeight + communityHeight + reachUsHeight) + (headerHeight * 4) && $(this).scrollTop() <= (boutiqueHeight + storyHeight + communityHeight + reachUsHeight + shipReturnHeight) + (headerHeight*5)) {
            $("body").removeClass().addClass("afa-blue");
        }
    });
});