/*
-----------------------------
|   | Bxslider 
-----------------------------
*/
$(function () {
    $('.bxslider').bxSlider({
        slideWidth:350,
        auto: true,
        minSlide:1,
        maxSlide:3,
        slideMargin:50
    });
}); 

/*
-----------------------------
|   | Counter
-----------------------------
*/
$(function () {
    $('.counter-number').counterUp({
        delay: 50,
        time: 2000
    });
});