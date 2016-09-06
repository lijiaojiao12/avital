define(['jquery'],function($){
	if(location.href.indexOf('aregister.html')== -1) return;
	
	var ls=window.localStorage;
	if(!ls.getItem("info")){
		ls.setItem("info",'[]');
	}
	$(".abtn").on('click',function(){	     
        var email=document.getElementById('email').value;
        var username=document.getElementById('username').value;
        var password=document.getElementById('password').value;
        var confirm=document.getElementById('confirm').value;
	    var reg=/^\w{1,}@\w{2,}\.(com|net|cn|com\.cn)$/;
	    if(!reg.test(email)){
	    	//console.log(reg.test(email.value))
	    	alert("Email address format is not correct")
	    	return false;
	    }else if(username==''){
		    alert('User name cannot be empty');
		   	return false;
		}else if(password==''){
		    alert('Password cannot be empty');
		    return false;
		}else if(confirm==''||confirm!=password){
		    alert('Do not match the password input');
		    return false;
		}else{
			var arr=JSON.parse(ls.getItem("info"));
			arr.push({
				email:email,
				name:username,
				password:password
			})
			//console.log(arr);
			ls.setItem('info',JSON.stringify(arr));
			$("#email").val('');
			$("#username").val('');
			$("#password").val('');
			$("#confirm").val('');
			alert("Registration Successful")
			location.href='alogin.html';
		}

    })
 
});