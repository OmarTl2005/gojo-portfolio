let menuButton  = document.getElementById('menu-button');
let menu = document.getElementById('menu');
let close = document.getElementById('close');

const menuStyle = () => {
    menu.style.display = 'block';
}
menuButton.addEventListener('click', menuStyle);

const menuClose = () => {
    menu.style.display = 'none';
    menu.style.transition = 'all .55s ease-in-out';
}
close.addEventListener('click', menuClose);