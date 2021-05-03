$(function () {
    /* 타이핑효과 */
    var typingBool = false;
    var typingIdx = 0;
    var liIndex = 0;
    var liLength = $('.typing-txt>ul>li').length;
    var del = -1;
    var repeatInt = null;
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

    /* 그래프효과 */
    var chartWrap = $('.chart_wrap');
    var chart = $('.chart');
    var chartosT = chart.offset().top - 700;

    $(window).scroll(function () {
        var sct = $(this).scrollTop();
        if (sct >= chartosT) {
            if (!chartWrap.hasClass('active')) {
                activeChart();
                chartWrap.addClass('active')
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
                    var amount = 565 - (565 * now / 100);
                    title.text(Math.floor(now) + '%');
                    circle.css({ strokeDashoffset: amount });
                }
            })
        })
    }


});
