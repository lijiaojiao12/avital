require.config({
    paths:{
        'jquery':'lib/jquery',
        'swipe':'lib/swiper',
        'iscroll':'lib/iscroll',
        'zepto':'lib/zepto',
        'fastclick':'lib/fastclick',
        'template':'lib/template-native',
        'swiper':"lib/swiper.min"
    }
});

require(['fastclick','js/aindex','js/aregister','js/alogin','js/b_1','js/b_3','js/refresh','js/test','js/enews','js/enews2','js/enews3','js/fshow','js/fover','js/findex'],function(FastClick,index,fshow,fover,findex){
    FastClick.attach(document.body,{});
});