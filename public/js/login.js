$(function() {
    $(".login").on("click", function () {
        $(window).on("mousemove",setEyeOffset);
        $("body").css("overflow","hidden");
        $(".login_content").show();
    });
    $(".login_close").on("click",function(){
        $("body").css("overflow","");
        $(window).off("mousemove",setEyeOffset);
        $(".eye_left").attr("top","67px").attr("left","77px").attr("style","");
        $(".eye_right").attr("top","132px").attr("left","77px").attr("style","");
        $(".login_content").hide();
    });

    $('.password').focus(function() {
        $('.owl-login').addClass('password');
    }).blur(function() {
        $('.owl-login').removeClass('password');
    });
    $(".no_acc").on("click", function () {
        $(".login_in").hide();
        $(".register").show();
    })
    $(".back_login").on("click", function () {
        $(".login_in").show();
        $(".register").hide();
    });

    var left_center_offset = {
            left: 75,
            top: 67
        },
        right_center_offset = {
            left: 132,
            top: 67
        },
        radius = 10;
    var setEyeOffset = function(event) {
        var offset = $(".owl-login").offset();
        var x1 = offset.left + left_center_offset.left;
        var y1 = offset.top + left_center_offset.top;
        var x2 = offset.left + right_center_offset.left;
        var y2 = offset.top + right_center_offset.top;
        var n1 = event.clientX - x1;
        var m1 = -(event.clientY - y1);
        var k1 = Math.atan2(m1, n1);
        var n2 = event.clientX - x2;
        var m2 = -(event.clientY - y2);
        var k2 = Math.atan2(m2, n2);
        var x11 = (Math.cos(k1) * radius + x1).toFixed(0);
        var y11 = (( - Math.sin(k1) * radius) + y1).toFixed(0);
        $(".eye_left").offset({
            left: x11,
            top: y11
        });
        var x22 = (Math.cos(k2) * radius + x2).toFixed(0);
        var y22 = (( - Math.sin(k2) * radius) + y2).toFixed(0);
        $(".eye_right").offset({
            left: x22,
            top: y22
        })
    };

});
