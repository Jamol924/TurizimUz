
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    header.classList.toggle('change', window.scrollY > 0);
})

const menuIcon = document.querySelector('.menu__icon');
menuIcon.addEventListener('click', ()=>{
    menuIcon.classList.toggle('active');
    header.classList.toggle('pageList')
})


