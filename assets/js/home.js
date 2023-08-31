// let bool = 0;

// document.getElementById('menu-hamburguer').addEventListener('click', () => {
//     let top = document.getElementById('top');
//     let mid = document.getElementById('mid');
//     let fut = document.getElementById('fut');

//     if (bool == 0) {
//         mid.style.display = 'none';
//         top.style.rotate = '45deg';
//         fut.style.rotate = '-45deg';
//         fut.style.marginTop = '-5.5px';
//         bool = 1;
//     } 
//     else {
//         mid.style.display = 'block';
//         top.style.rotate = '0deg';
//         fut.style.rotate = '0deg';
//         fut.style.marginTop = '3.5px';
//         bool = 0;      
//     }
// });
let mobileMenu = document.getElementById('mobile-menu');

document.getElementById('menu-hamburguer').addEventListener('click', () => {
        mobileMenu.classList.remove('menu-hidden');
});

document.getElementById('close-menu').addEventListener('click', () => {
    mobileMenu.classList.add('menu-hidden');
});