/**
 * Created by Administrator on 2017/4/21.
 */
$(function () {
    var winHight = $(window).height();
    var winWidth = $(window).width();
    $(window).resize(function () {
        setSize();
    });
    //根据屏幕尺寸改变video尺寸
    function setSize() {
        winWidth = $(window).width();
        winHight = $(window).height();
        var v1Width = $("#v1").width();
        var v1Height = $("#v1").height();
        var aSize = 1134.22/638;
        if(winWidth/winHight<aSize){
            $("#v1").height(winHight);
            v1Height = $("#v1").height();
            $("#v1").width(v1Height*aSize);
            v1Width = $("#v1").width();
        }else {
            $("#v1").css({"width":"100%","height":"auto"});
        }
        //if(winWidth<1100){
        //    var changeWidth = -(1100 - winWidth)/2;
        //
        //    $("#v1").css({"marginLeft":changeWidth});
        //}else {
        //    $("#v1").css({"marginLeft":0});
        //}


        //if(winWidth<1500){
        //    var changeWidth = -(1500-winWidth)/2;
        //    $("#v1").css({"marginLeft":changeWidth});
        //}


        ////alert(winWidth);
        //if(winWidth/winHight < aSize){
        //    v1Height = $("#v1").height(winHight);
        //    $("#v1").width(v1Height*aSize);
        //
        //}else {
        //    $("#v1").height();
        //}


    }





});
