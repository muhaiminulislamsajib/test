
$(document).ready(function() {
    $(function() {
        var header = $(".nav_main");
      
        $(window).scroll(function() {    
            var scroll = $(this).scrollTop();
            if (scroll >= 20) {
                header.addClass("scrolled");
            } else {
                header.removeClass("scrolled");
            } 
            if (scroll > 20){
                $(".backtotop").fadeIn();
            } else {
                $(".backtotop").fadeOut();
            }
        });
        
    });

    $('.testi_main').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 600,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });

    new VenoBox({
        selector: '.my-video-links',
    });
}); 


$('.counter').counterUp({
    delay: 10,
    time: 10000
});

$('.sponsor_main').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 600,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: ".next",
    prevArrow: ".prev",
});

$(".backtotop").click(function(){
    $("html, body").animate(
        {
            scrollTop: 0,
        },
        1000
    )
});

$(".switch").click (function(){
   $(".color_switcher").toggleClass("change")
})

$(".black").click (function(){
    $(".style").attr("href","css/black.css");
 });

 $(".blue").click (function(){
    $(".style").attr("href","css/blue.css");
 });

// const body = document.querySelector("body");
// const toggle = document.querySelector("#toggle");
// const sunIcon = document.querySelector(".toggle .bxs-sun");
// const moonIcon = document.querySelector(".toggle .bx-moon");

// toggle.addEventListener("change", () => {
    
//     body.classList.toggle("dark");
//     sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
//     moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";

// });