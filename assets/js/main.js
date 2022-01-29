$(document).ready(function () {
    $("select").niceSelect();





    // owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        animateOut: 'fadeOut',
        items: 1,
        autoplayTimeout: 8000,
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
    
});



//  new account 
document.querySelector(".sign_up").addEventListener("click", function(){
    document.querySelector(".create_account").classList.add("active");
} );

document.querySelector(".create_account .close_btn").addEventListener("click",function(){
    document.querySelector(".create_account").classList.remove("active");
} );

// log in 
document.querySelector(".log_in").addEventListener("click", function(){
    document.querySelector(".login_form").classList.add("log_active");
} );

document.querySelector(".login_form .close_log_btn").addEventListener("click",function(){
    document.querySelector(".login_form").classList.remove("log_active");
} );



// init Isotope
// var $grid = $('#product-list').isotope({
//     // options
// });
// // filter items on button click
// $('.filter-button-group').on( 'click', 'li', function() {
//     var filterValue = $(this).attr('data-filter');
//     $grid.isotope({ filter: filterValue });
// });