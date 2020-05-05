// JavaScript Document

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 500) {
            document.getElementsByTagName("HEADER")[0].addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("header").removeClass("active");
        }
    });
});