////////////////javaScript
/* 탑버튼 */
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

/* 햄버거메뉴 */
function openMenu() {
    document.getElementById('site_map').classList.toggle('active')
    document.getElementById('menu').classList.toggle('open')
};