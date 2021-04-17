/* 풀페이지 */
$(function () {
    $('#fullpage').fullpage({
        //options here
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
        navigation: true,
        navigationPosition: 'right',
    });
});

/* 햄버거메뉴 */
function openMenu() {
    document.getElementById('site_map').classList.toggle('active')
    document.getElementById('nav').classList.toggle('open')
};