define(['jquery','swiper'],function($,swiper){
   if(location.href.indexOf('aindex.html')== -1) return; 

    //调用插件
        var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        autoplay:1000,
        loop:true
    
        });
  
    $(".abtn").on('click',function(){
        location.href='alogin.html';
    })
})