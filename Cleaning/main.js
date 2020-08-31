const toggleBar = document.querySelector('.navbar_toggleBar');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBar.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})