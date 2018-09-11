// 优化轮播图
$(function(){
    /*初始化工具提示*/
    $('[data-toggle="tooltip"]').tooltip();
    var items = $('.wjs_banner .item');
    $(window).on("resize",function(){
        var width = $(window).width();
        if (width >= 768) {
            items.each(function(index,value){
                var item = $(this);
                var srcImg  =item.data("pcImg");
                // console.log(srcImg);
                item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url('"+srcImg+"')"));
            })
        }else {
            items.each(function(index,value){
                var item = $(this);
                var srcImg  =item.data("smallImg");
                console.log(srcImg);
                item.html('<a href="javascript:;" class="mobileImg"><img src="'+srcImg+'" alt="..."></a>');
            })
        }
    }).trigger("resize");
    // 移动端手滑上下页,算出滑动距离,看是上还是下翻页,调用对应的点击事件函数
    var startX,endX;
    var carousel_inner = $('.carousel-inner')[0];  // 转js
    var carousel = $('.carousel');
    carousel_inner.addEventListener("touchstart",function(e){
        startX = e.targetTouches[0].clientX;
    })
    carousel_inner.addEventListener("touchend",function(e){
        endX = e.changedTouches[0].clientX;
        if (endX-startX > 0 ){
            carousel.carousel('prev');
        }else if (endX-startX < 0 ) {
            carousel.carousel('next');
        }
    })
// 产品导航栏在移动端滑动,需要内容宽大于父元素宽度
// 计算产品的原始宽度
    var ul = $(".wjs_product .nav-tabs");
    var lis = ul.find("li");
    var totaWidth=0;
    lis.each(function(index,value){
        // li的宽包括没人及边框
      // outerWidth()当前元素内容+padding+border
      //   innerWidth 当前元素内容+padding
      //   outerWidth(true) 当前元素内容+padding+margin
        totaWidth+= $(value).innerWidth();
    })
    ul.width(totaWidth);
    // 使用插件  调用 设置 水平滑动还是垂直滑动
    var myScroll = new IScroll('.tabs-parent',{
        scrollX:true,
        scrollY: false
});
})


