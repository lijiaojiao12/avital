define(['jquery','js/enews2'],function($,enews2){
	if(location.href.indexOf('enews2.html')==-1) return;
	$(".hearts").on("click",function(){
		var dzan=parseInt($(this).next().html()) + 1,
			zan=parseInt($(this).next().html()) - 1;
		if($(this).next().html()==144){
			$(this).next().html(zan);
			$(this).attr("src","../img/e-hearth.png");
		}else{
			$(this).next().html(dzan);
			$(this).attr("src","../img/e-heart.png");
		}
	})
	$(".e-sd").on("click",function(){
		var dzan=parseInt($(this).html()) + 1,
			zan=parseInt($(this).html()) - 1;
		if($(this).html()==6154){
			$(this).html(dzan);
		}else{
			$(this).html(zan);
		}
	})

	var myDate = new Date();
	data = myDate.toLocaleString( );
	$(".e-time").html(data)
	
})