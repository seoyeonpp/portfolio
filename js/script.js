$(function () {
    /* 풀페이지 */
    $('#fullpage').fullpage({
        //options here
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
        navigation: true,
        navigationPosition: 'right',
    });

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
});

/* 햄버거메뉴 */
function openMenu() {
    document.getElementById('site_map').classList.toggle('active')
    document.getElementById('nav').classList.toggle('open')
};