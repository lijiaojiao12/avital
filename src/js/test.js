define(['jquery'],function($){
    chenga();
    function chenga(){
        $.ajax({
    			url:"../data/contain.json",
    			dataType:"json",
    			success:function(e){
                    //console.log(e);
    				var str="";
    				for(i  in e){
                        str+=
                            "<dl>"+
                                "<dt><img src='../"+e[i]['image']+"'></dt>"+
                                "<dd>"+e[i]['name']+"</dd>"+
                            "</dl>";
                    }
                    $(".test_box1").html(str);
                    $(".test_box1 dl").on("click",function(){
                        $(".test_bg").animate({"top":"0px"},300);
    		            $(".test_alert").animate({"top":"10%"},300);
                    })
    			}
    			
    		})
    }
    $(".test_bg").on("click",function(){
         $(".test_bg").animate({"top":"100%"},300);
         $(".test_alert").animate({"top":"100%"},300);
    })
    $('.test_no').on('click',function(){
        $(".test_bg").animate({"top":"200%"},300);
        $(".test_alert").animate({"top":"200%"},300);
    })
    function change(a,b,c){
        $(a).on("click",b,function(){
            $(this).addClass(c).siblings().removeClass(c);
        })
    }
    change(".test_botton ol","li","test_ol_bg");
    change(".test1_nav ul","li","test1_bg");

    $('.test_ol_bg').on('click',function(){
        location.href='test1.html';
    })
});