define(['jquery','swiper','js/enews'],function($,swiper,enews){
    if(location.href.indexOf('enews.html')==-1) return;
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30
    });
    $(".e-pic").on("click",function(){
    	location.href = "enews2.html";
    })
    $(".e-btn").on("click",function(){
    	location.href = "enews3.html";
    })

    //点击菜单信息从左到有出现,并且将页面推出
    /*$(".e-list").on("click",function(){
        $(".left").css({
            "-webkit-transform":"translate3d(0,0,0)",
            "-webkit-transition":"transform 1s"
        });
        $(".right").css({
            "-webkit-transform":"translate3d(70%,0,0)",
            "-webkit-transition":"transform 1s"
        })
    })

    $(".e-content").on("click",function(){
        $(".left").css({
            "-webkit-transform":"translate3d(-70%,0,0)",
            "-webkit-transition":"transform 1s"
        });
        $(".right").css({
            "-webkit-transform":"translate3d(0%,0,0)",
            "-webkit-transition":"transform 1s"
        })
    })*/
})