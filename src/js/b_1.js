define(['jquery'],function($){
	if(location.href.indexOf('b_1.html')==-1) return;
	$('.b_heart').on('click',function(){
		var a=$('.b_like>.num').text();
		
		if(a==2561){
			
			$(this).css('color','#fff');
			alert("your don't like this");
			a--;
			$('.b_like>.num').html(a);
		}else{
			a++;
			$('.b_like>.num').html(a);
			$(this).css('color','red');
			alert("your like this");
			//15530196214
		}
	});
	$('.b_btn').on('click',function(){
		location.href='b_2.html';
	})
	
	//点击菜单信息从左到有出现,并且将页面推出
	$(".back").on("click",function(){
	    /*$(".left").css({
	        "-webkit-transform":"translate3d(0,0,0)",
	        "-webkit-transition":"transform .5s"
	    });
	    $(".right").css({
	        "-webkit-transform":"translate3d(70%,0,0)",
	        "-webkit-transition":"transform .5s"
	    })*/
	    $('.b_container').css({
	        "-webkit-transform":"translate3d(70%,0,0)",
	        "-webkit-transition":"transform .5s"
	    })
	})

	$(".b_main").on("click",function(){
	   /* $(".left").css({
	        "-webkit-transform":"translate3d(-70%,0,0)",
	        "-webkit-transition":"transform .5s"
	    });
	    $(".right").css({
	        "-webkit-transform":"translate3d(0%,0,0)",
	        "-webkit-transition":"transform .5s"
	    })*/
	    $('.b_container').css({
	        "-webkit-transform":"translate3d(0,0,0)",
	        "-webkit-transition":"transform .5s"
	    })
	})

})