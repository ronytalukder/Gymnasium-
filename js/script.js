// banner slider start ==========================
$('.banner_slider').slick({
    dots: true,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
// banner slider end ==========================

// about video  start =================
$('.venobox').venobox(); 
// about video  end =================


// testmonial slider  start ============================
$('.tesst_slider').slick({
  dots: true,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// testmonial slider  end ============================
// counter js  starat ============================
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
// counter js  end ============================

// bottom slider start ============================
$('.clint_slider').slick({
  dots: false,
  arrows:true,
  
  prevArrow: '<i class="fas fa-angle-left next"></i>',
  nextArrow: '<i class="fas fa-angle-right prev"></i>',
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// bottom slider end ============================

// Menu fix animation start

var menutop = $('.main_menu').offset().top;

$(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > menutop) {
        $('.main_menu').addClass('menu_fix')
    } else {
        $('.main_menu').removeClass('menu_fix');
    }
})

// Menu fix animation end



//animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top -50
            }, 1500);
            return false;
        }
    }
});