define(['jquery','swipe'],function($,swipe){
//减   
  $(".btn1").on("click",function(){
    if($(this).siblings(".t1").val()<=0) return;
    $(this).siblings(".t1").val($(this).siblings(".t1").val()/1 - 1);
    $("#t2").html(allMoney()); 
    $("#t3").html(allnumber()); 
  })
//加
  $(".btn2").on("click",function(){
    $(this).siblings(".t1").val($(this).siblings(".t1").val()/1 + 1);
    $("#t2").html(allMoney()); 
    $("#t3").html(allnumber()); 
  })

  function allMoney(){
    var Money=0;
    $('.t1').each(function(i,v){
       Money += $(v).data("money") * $(v).val() 
    });
    return Money;
  }

  function allnumber(){
    var number = 0;
    $('.t1').each(function(i,v){
       number += $(v).val() * 1;
    });
    return number;
  }




})