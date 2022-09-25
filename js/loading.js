let mask = document.querySelector('.mask');
let navbar = document.querySelector('.navbar');



window.addEventListener('load', () => {
    mask.classList.add('hide');
    navbar.classList.add('visible'); 
    setTimeout(() => {
        mask.remove();
    }, 600);
});

