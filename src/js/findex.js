define(['jquery','swipe'],function($,swipe){
    if(location.href.indexOf('index.html')==-1) return;
var swiper = new Swiper('.main>.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });	


    var galleryTop = new Swiper('.gallery-top', {
        loop:true,
        loopedSlides: 5, //looped slides should be the same     
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        slidesPerView: 4,
        touchRatio: 0.2,
        loop:true,
        loopedSlides: 5, //looped slides should be the same
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
})

