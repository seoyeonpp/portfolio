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
                    var amount = 515 - (515 * now / 100);
                    title.text(Math.floor(now) + '%');
                    circle.css({ strokeDashoffset: amount });
                }
            })
        })
    }

    // 메뉴호버효과
    var hover = $('section h2');
    hover.mousemove(function (e) {
        var rXP = (e.pageX - this.offsetLeft - $(this).width() / 2);
        var rYP = (e.pageY - this.offsetTop - $(this).height() / 2);
        hover.css('text-shadow', +rYP / 10 + 'px ' + rXP / 80 + 'px rgba(213, 82, 57,0.8), ' + rYP / 8 + 'px ' + rXP / 60 + 'px rgba(228,186,125,1), ' + rXP / 70 + 'px ' + rYP / 12 + 'px rgba(146,171,163,.7)');
    });
});

// 탑버튼
let Top = document.querySelector('#top_btn');

window.addEventListener('scroll', function () {
    if (this.scrollY > 700) {
        Top.classList.add('on');
    } else {
        Top.classList.remove('on');
    }
});
Top.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});