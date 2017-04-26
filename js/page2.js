/**
 * Created by Administrator on 2017/4/21.
 */
$(function () {
    $("#p2btn1").mouseover(function () {
        $(".p2li").css({opacity:0});
        $(".p2li").eq(0).css({opacity:1});


        $("#bor").css({"transform":"translate("+35+"px)"});
    });
    $("#p2btn2").mouseover(function () {
        $(".p2li").css({opacity:0});
        $(".p2li").eq(1).css({opacity:1});
        $("#bor").css({"transform":"translate("+158+"px)"});
    });
    $("#p2btn3").mouseover(function () {
        $(".p2li").css({opacity:0});
        $(".p2li").eq(2).css({opacity:1});
        $("#bor").css({"transform":"translate("+284+"px)"});
    });
    $("#p2btn4").mouseover(function () {
        $(".p2li").css({opacity:0});
        $(".p2li").eq(3).css({opacity:1});
        $("#bor").css({"transform":"translate("+374+"px)"});
    });

});