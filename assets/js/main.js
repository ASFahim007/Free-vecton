$(document).ready(function () {
    $(".nice").niceSelect();

    
    





    // owl carousel
    $('.owl-theme').owlCarousel({
        loop:true,
        autoplay: true,
        animateOut: 'fadeOut',
        items: 1,
        autoplayTimeout: 10000,
        mouseDrag: false,
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
    })

    $('.earning-profile-slider').owlCarousel({
      loop:true,
      autoplay: true,
      margin:15,
      nav: true,
      items: 7,
      responsive:{
        0:{
            items:2
        },
        500:{
            items:3
        },
        700:{
            items:4
        },
        1300:{
            items:5
        }
    }
    })
    $('.contributor-profile-slider').owlCarousel({
      loop:true,
      autoplay: true,
      margin:15,
      nav: true,
      items: 7,
      responsive:{
        0:{
            items:2
        },
        500:{
            items:3
        },
        700:{
            items:4
        },
        1300:{
            items:5
        }
    }
    })

    $('.downloaded_content_slider').owlCarousel({
      loop:true,
      autoplay: true,
      margin:15,
      nav: true,
      items: 5,
      responsive:{
        0:{
            items:2
        },
        500:{
            items:3
        },
        700:{
            items:4
        },
        1300:{
            items:5
        }
    }
    })
    
});


// ddslick 
$('.options').ddslick(); 



// popup 
$(".popup-with-zoom-anim").magnificPopup({
  type: "inline",

  fixedContentPos: false,
  fixedBgPos: true,

  overflowY: "auto",

  closeBtnInside: false,
  preloader: false,

  midClick: true,
  removalDelay: 300,
  mainClass: "my-mfp-zoom-in",

  gallery: {
      enabled: true,
  },
});

$('.popup-with-move-anim').magnificPopup({
  type: 'inline',

  fixedContentPos: false,
  fixedBgPos: true,

  overflowY: 'auto',

  closeBtnInside: true,
  preloader: false,
  
  midClick: true,
  removalDelay: 300,
  mainClass: 'my-mfp-slide-bottom'
});







// sticky searc bar
const header = document.querySelector(".banner_content");
const sectionOne = document.querySelector(".banner");
const sectionOneOptions = {
  rootMargin: "-10% 0px 0px 0px"
};
const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("search_scrolled");
      header.classList.remove("search_absolute");
    } else {
      header.classList.remove("search_scrolled");
      header.classList.add("search_absolute");
    }
  });
},
sectionOneOptions);
sectionOneObserver.observe(sectionOne);



// //  new account 
// document.querySelector(".sign_up").addEventListener("click", function(){
//     document.querySelector(".create_account").classList.add("active");
// } );

// document.querySelector(".create_account .close_btn").addEventListener("click",function(){
//     document.querySelector(".create_account").classList.remove("active");
// } );

// // log in 
// document.querySelector(".log_in").addEventListener("click", function(){
//     document.querySelector(".login_form").classList.add("log_active");
// } );

// document.querySelector(".login_form .close_log_btn").addEventListener("click",function(){
//     document.querySelector(".login_form").classList.remove("log_active");
// } );



// init Isotope
// var $grid = $('#product-list').isotope({
//     // options
// });
// // filter items on button click
// $('.filter-button-group').on( 'click', 'li', function() {
//     var filterValue = $(this).attr('data-filter');
//     $grid.isotope({ filter: filterValue });
// });