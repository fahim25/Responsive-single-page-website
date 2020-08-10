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

/*
-----------------------------
|   | Navbar
-----------------------------
*/
       

$(function () {
    showHideNav();
    $(window).scroll(function () {
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() < 250) {
            $('.navbar').css({
                'margin-top':'-100px',
                'opacity':'0'
            });
            
            $('.navbar-default').css({
                'background-color':'rgba(59,59,59,0)'
            });

        } else {

            $('.navbar').css({
                'margin-top':'0',
                'opacity':'1'
            });
            
            $('.navbar-default').css({
                'background-color':'rgba(59,59,59,0.7)'
            });
        }
    }
});


/*
====================================
|   |   |   | Smooth Scroll
====================================
*/


$(function () {

   $('.nav-link, #scroll-to-top')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });
}); 































