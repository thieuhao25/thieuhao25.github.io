// Homepage
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      document.getElementById('header-menu').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('header-menu').classList.remove('fixed-top');
       // remove padding top from body
      document.body.style.paddingTop = '0';
    } 
});
$(".banner-carousel").owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    dots: false,
    navText: ['<i class="fa fa-3x fa-caret-left" aria-hidden="true"></i>','<i class="fa fa-3x fa-caret-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$(".service-slider").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navText: ['<i class="fa fa-3x fa-caret-left text-secondary" aria-hidden="true"></i>','<i class="fa fa-3x fa-caret-right text-secondary" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
});
$(".service-slider-mobile").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navText: ['<i class="fa fa-3x fa-caret-left text-secondary" aria-hidden="true"></i>','<i class="fa fa-3x fa-caret-right text-secondary" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
});
// End Homepage