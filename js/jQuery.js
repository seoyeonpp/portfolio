////////////////jQuery
$(function () {
    /* 타이핑효과 */
    var typingBool = false;
    var typingIdx = 0;
    var liIndex = 0;
    var liLength = $('.typing-txt>ul>li').length;
    var del = -1;
    var tyInt = null;

    var typingTxt = $('.typing-txt>ul>li').eq(liIndex).text();
    typingTxt = typingTxt.split('');
    if (typingBool == false) {
        typingBool = true;
        tyInt = setInterval(typing, 200);
    };
    function typing() {
        if (typingIdx < typingTxt.length) {
            $('.typing').append(typingTxt[typingIdx]);
            typingIdx++;
            if (typingIdx == typingTxt.length) {
                clearInterval(tyInt);
                setTimeout(function () {
                    tyInt = setInterval(typing, 200);
                }, 1000);
            }
        } else {
            if (-typingTxt.length - 1 < del) {
                $('.typing').html(typingTxt.slice(0, del))
                del--;
            } else {
                if (liIndex >= liLength - 1) {
                    liIndex = 0;
                } else {
                    liIndex++;
                }
                typingIdx = 0;
                del = -1;
                typingTxt = $('.typing-txt>ul>li').eq(liIndex).text();
                clearInterval(tyInt);
                setTimeout(function () {
                    tyInt = setInterval(typing, 200);
                }, 1000);
            };
        };
    };

    /* nav menu 효과 */
    var menu = $('nav #menu li');
    var contents = $('#wrap section');
    menu.click(function (e) {
        var tg = $(this);
        var i = tg.index();
        var section = contents.eq(i);
        var st = section.offset().top;
        menu.removeClass('on').eq(i).addClass('on');
        $('html,body').stop().animate({ scrollTop: st }, 1000, 'easeInCubic');
    })

    /* 그래프효과 */
    var chartWrap = $('.chart_wrap');
    var chart = $('.chart');
    var chartosT = chart.offset().top - 700;
    var droplist = $('.tool_skills')

    $(window).scroll(function () {
        var sct = $(this).scrollTop();
        if (sct >= chartosT) {
            if (!chartWrap.hasClass('active')) {
                activeChart();
                chartWrap.addClass('active')
            }
            if (!droplist.hasClass('on')) {
                droplist.addClass('on')
            }
        }
    })

    function activeChart() {
        chart.each(function () {
            var item = $(this);
            var title = item.find('h4');
            var targetNum = title.attr('data-num');
            var circle = item.find('circle');
            $({ rate: 0 }).animate({ rate: targetNum }, {
                duration: 1500,
                progress: function () {
                    var now = this.rate;
                    var amount = 390 - (390 * now / 100);
                    title.text(Math.floor(now) + '%');
                    circle.css({ strokeDashoffset: amount });
                }
            })
        })
    }

    /* projects hover효과 */
    $('.hidden').hover(function () {
        var ah = $(this).innerHeight();
        var img = $(this).find('img');
        var imgh = img.innerHeight();
        img.stop().animate({ top: ah - imgh }, 3000);
    }, function () {
        var img = $(this).find('img');
        img.stop().animate({ top: 0 }, 3000);
    })
    /* project1 스크롤효과 */
    $(window).scroll(function () {
        var sct = $(window).scrollTop();
        var csst = $('#project1').offset().top;
        if (sct > csst - 800) {
            $('.project1_left').stop().animate({ left: '5px' }, 1000);
            $('.project1_right').stop().animate({ right: '10px' }, 1000);
        } else {
            $('.project1_left').stop().animate({ left: '-600px' }, 1000);
            $('.project1_right').stop().animate({ right: '-600px' }, 1000);
        }
    });
    /* project2 스크롤효과 */
    $(window).scroll(function () {
        var sct = $(window).scrollTop();
        var csst = $('#project2').offset().top;
        if (sct > csst - 800) {
            $('.project2_left').stop().animate({ left: '5px' }, 1000);
            $('.project2_right').stop().animate({ right: '10px' }, 1000);
        } else {
            $('.project2_left').stop().animate({ left: '-600px' }, 1000);
            $('.project2_right').stop().animate({ right: '-600px' }, 1000);
        }
    });
    /* project3 스크롤효과 */
    $(window).scroll(function () {
        var sct = $(window).scrollTop();
        var csst = $('#project3').offset().top;
        if (sct > csst - 800) {
            $('.project3_left').stop().animate({ left: '5px' }, 1000);
            $('.project3_right').stop().animate({ right: '10px' }, 1000);
        } else {
            $('.project3_left').stop().animate({ left: '-600px' }, 1000);
            $('.project3_right').stop().animate({ right: '-600px' }, 1000);
        }
    });
    /* project4 스크롤효과 */
    $(window).scroll(function () {
        var sct = $(window).scrollTop();
        var csst = $('#project4').offset().top;
        if (sct > csst - 800) {
            $('.project4_left').stop().animate({ left: '5px' }, 1000);
            $('.project4_right').stop().animate({ right: '10px' }, 1000);
        } else {
            $('.project4_left').stop().animate({ left: '-600px' }, 1000);
            $('.project4_right').stop().animate({ right: '-600px' }, 1000);
        }
    });
    /* app_design 스크롤효과 */
    $(window).scroll(function () {
        var sct = $(window).scrollTop();
        var csst = $('#app_design').offset().top;
        if (sct > csst - 800) {
            $('.app_left').stop().animate({ left: '5px' }, 1000);
            $('.app_right').stop().animate({ right: '10px' }, 1000);
        } else {
            $('.app_left').stop().animate({ left: '-600px' }, 1000);
            $('.app_right').stop().animate({ right: '-600px' }, 1000);
        }
    });
    /* aboutme 스크롤효과 */
    $(window).scroll(function () {
        var sct = $(window).scrollTop();
        var csst = $('#about').offset().top;
        if (sct > csst - 800) {
            $('.box').stop().animate({ opacity: 1 }, 1000);
        } else {
            $('.box').stop().animate({ opacity: 0 }, 1000);
        }
    });



}); /* //jQuery */