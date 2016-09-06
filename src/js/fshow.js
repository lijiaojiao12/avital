define(['jquery','swipe'],function($,swipe){
	if(location.href.indexOf('show.html')==-1) return;
    var swiper = new Swiper('.footer>.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView:3.07,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30
    });
})

