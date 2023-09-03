let mobileMenu = document.getElementById('mobile-menu');

document.getElementById('menu-hamburguer').addEventListener('click', () => {
        mobileMenu.classList.remove('menu-hidden');
});

document.getElementById('close-menu').addEventListener('click', () => {
    mobileMenu.classList.add('menu-hidden');
});