define(['iscroll','zepto'],function(iscroll,zepto){
    var myScroll;

    //鼠标滑动时，触发
    document.addEventListener('touchmove',function(e){
        e.preventDefault();
    },false)
    
    window.addEventListener('DOMContentLoaded',getScroll,false);

    //使用计时器，获取json数据加载
    function pullData(direction) {
         setTimeout(function(){
             $.getJSON('../data/test.json',function(data){                
                  console.log(data.data);
                 if(data.state==1) {
                     direction=="down" ?  $("#news-lists").prepend(data.data) :  $("#news-lists").append(data.data);
                     myScroll.refresh();
                 } 

             });
         },2000)
    }
    /**
        * 初始化iScroll控件
    */
    //加载箭头指向
    function getScroll() { 
        var pullUp=document.getElementById('pullUp');
        var bottomHeight=pullUp.offsetHeight; 
        // console.log(topHeight);    
        myScroll=new iScroll("wrapper",{
              vScrollbar:false,
               onRefresh: function () {
                    if (pullUp.className.match('loading')) {
                        pullUp.className = '';
                        pullUp.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
                    }
                },
              onScrollMove:function() {
                 console.log(this.y);
                  if(this.y<(this.maxScrollY-5) && !pullUp.className.match("flip")) {                 
                      pullUp.className="flip";
                      pullUp.querySelector('.pullUpLabel').innerHTML="松开手开始刷新...";
                  }
              },
            onScrollEnd:function() {
                if(pullUp.className.match("flip")) {
                     pullUp.className="loading";
                     pullUp.querySelector('.pullUpLabel').innerHTML="加载中...";
                     pullData('up');
                }
            }

        })
    }
});