define(['jquery'],function($){
	if(location.href.indexOf('b_3.html')==-1) return;
	$(".b_ellipsis").on('click',function(){
		var a=$('.b_inputs').text;
		console.log(a)
	})
	$('.b_ellipsis').on('click',function(){
		alert('Modify the success')
		location.href='b_2.html';
	})
	$('.b_heart').on('click',function(){
		location.href='b_2.html';
	})
})