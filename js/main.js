var i = 0;
var a = 0;
// var timer;
$(document).ready(function() {
	$("#bg-img li:nth-child(1)").addClass("show");
	setInterval("sectionOneBackground()", 4000);
    $("#work-experience").mouseenter(workArrowShow);
    $("#work-experience").mouseleave(workArrowHide);
    $(".work-experience-list").eq(0).show().siblings(".work-experience-list").hide();
    carousel();
    // showPlay();
    $(".writing-lists").mouseenter(showPlay);
    $(".writing-lists").mouseleave(hiddenPlay);
    // console.log(i);my-introduce
    $(".menu-right a").click(function () {
        $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top
        }, 500);
        return false;
    });
    $(".my-introduce a").click(function () {
        $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top
        }, 500);
        return false;
    });
    var sT;
    $(window).scroll(function(e) {
        animationAppear();
    });
})
function sectionOneBackground(){
    var length = 4;
    var randomBgIndex = Math.round(Math.random() * length);
    // console.log(randomBgIndex);
    $("#bg-img li").eq(randomBgIndex).addClass("show").siblings().removeClass("show");
//		$("#bg-img li").eq(randomBgIndex).css("display","block");
}
function workArrowShow() {
    $("#work-arrow-left").stop(true,true).fadeIn(500).css("cursor","pointer");
    $("#work-arrow-right").stop(true,true).fadeIn(500).css("cursor","pointer");
}
function workArrowHide() {
    $("#work-arrow-left").stop().fadeOut(500);
    $("#work-arrow-right").stop().fadeOut(500);
}
function carousel() {
    $("#work-arrow-left").click(function(){
        // clearTimeout(timer)
        if(i==0){
            i=3;
        }else {
            i--;
        }

        showCarousel();
        // console.log(i);
    })
    $("#work-arrow-right").click(function(){
        // clearTimeout(timer)
        if(i==3){
            i=0;
        }else {
            i++;
        }
        showCarousel();
        // console.log(i);
    })
}
function showCarousel() {
    $(".work-experience-list").eq(i).fadeIn(300).siblings(".work-experience-list").fadeOut(300);
}
function showPlay() {
    $(".writing-lists").mouseenter(function(){
        // alert("dws");
        a = $(this).index();
        $(".writing-lists").find(".writing-lists-black").eq(a).css({"display":"block"});
        $(".writing-lists").eq(a).addClass(".ccc");
        console.log(a);
    })
}
function hiddenPlay() {
    $(".writing-lists").mouseleave(function(){
        // alert("dws");
        a = $(this).index();
        $(".writing-lists").find(".writing-lists-black").eq(a).css("display","none");
        console.log(a);
    })
}
function animationAppear() {
    sT = $(window).scrollTop();
    if(sT >= $('.section:eq(0)').offset().top-1000){
        $('.about').addClass('appear-text');
    }
}
$(function(){
    var nav=$("#menu-bar"); //得到导航对象
    var win=$(window); //得到窗口对象
    var sc=$(document);//得到document文档对象。
    win.scroll(function(){
        if(sc.scrollTop()>=700){
            nav.addClass("menu-bar-fixed");
            // $(".navTmp").fadeIn();
        }else{
            nav.removeClass("menu-bar-fixed");
            // $(".navTmp").fadeOut();
        }
    })
})
		
