/**
 * Created by Administrator on 2017/4/19.
 */
$(function () {
    lm_Full_page({
        bgColor: ['red', 'blue', 'white', 'pink'],
        transition: 'transform 1s cubic-bezier(0.165, 0.84, 0.44, 1)',
        rollTime: 1000,
        onLoad: function (index) {
            console.log('onLoad:' + index)
        },
        onLeave: function (index) {
            console.log('onLeave:' + index)
        }

    });
    function lm_Full_page(o) {


        var bg_color_arr = o.bgColor;
        for (var i = 0; i < $('.lm_section').length; i++) {
            $('.lm_section').eq(i).css('background-color', bg_color_arr[i])
        }


        var nowDocumentHeight = $(window).height();
        var lm_section_number = $('.lm_section').length;
        $('body').css({overflow: 'hidden'});
        var container = $('.lm_container');
        $('.lm_section').css({overflow: 'hidden', height: nowDocumentHeight});
        container.css({
            width: '100%',
            height: nowDocumentHeight * lm_section_number,
            transition: o.transition
        });
        //设置高度
        function setHeight() {
            nowDocumentHeight = $(window).height();
            $('.lm_section').css({height: nowDocumentHeight});
            container.css({
                height: nowDocumentHeight * lm_section_number,
            });
            container.css({transform: 'translateY(' + nowDocumentHeight * -current_page + 'px)'});
        }

        //监听窗口尺寸
        $(window).resize(function () {
            setHeight();
        });

        //设置页面数
        var current_page = 0;
        //设置限制解锁时长
        var delay_time = o.rollTime;
        //设置滚动锁
        var delay_lock = 1;
        //使用滚动锁
        function relieve_lock() {
            delay_lock = 0;
            setTimeout(function () {
                delay_lock = 1;
            }, delay_time)
        }

        $(window).on('mousewheel', function (e) {
            if (delay_lock) {
                var delta = e.originalEvent.wheelDelta ||  // chrome & ie
                    e.originalEvent.detail;              // firefox
                if (delta > 0) {
                    // 向上滚
                    if (current_page != 0) {
                        current_page--;
                        container.css({transform: 'translateY(' + nowDocumentHeight * -current_page + 'px)'});
                        relieve_lock();
                        o.onLeave(current_page + 1);
                        o.onLoad(current_page);
                    }


                } else if (delta < 0) {
                    // 向下滚
                    if (current_page != lm_section_number - 1) {
                        current_page++;
                        container.css({transform: 'translateY(' + nowDocumentHeight * -current_page + 'px)'});
                        relieve_lock();
                        o.onLeave(current_page - 1);
                        o.onLoad(current_page);
                    }
                }

            }
        })
    }
});