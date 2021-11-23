$('.slider-partners').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayHoverPause:true,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        },
        1360:{
            items:6
        }
    }
})

$('.small-menu').click(function(){
    $(this).toggleClass('active');
    $('.dropdown-menu').toggleClass("show",function(){});
});
    
    