define(['jquery'],function($){
	if(location.href.indexOf('enews3.html')==-1) return;
    $(".e-ul").on("click","li",function(){

        $(this).addClass("e-active").siblings().removeClass("e-active");
    })
    

})