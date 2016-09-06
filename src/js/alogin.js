define(['jquery'],function($){
	if(location.href.indexOf('alogin.html')== -1) return;
	$(".abtn").on('click',function(){	     
        var email1=document.getElementById('email').value;
        var password1=document.getElementById('password').value;
        var data=JSON.parse(window.localStorage.getItem('info'));
   		if(email1=='' && password1==''){
			alert("The user name or password cannot be empty");
			return false;
		}
		if(window.localStorage.length==''){
			$("#email").val('');
			$("#password").val('');	
			alert("Username is not registered");
			return false;
		}
		$.each(data,function(i,e){
			console.log(i)
			//console.log(e.email)
			if(email1==e.email && password1==e.password){
				location.href='b_1.html';
			}else{
				$("#email").val('');
				$("#password").val('');	
				alert("Username is not registered or the password mistake");
				return false;
			}
			
		})
		
    })
    $(".atext").on('click',function(){
    	location.href='aregister.html';

    })
    
});