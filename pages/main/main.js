
let startScreenWrapper = document.querySelector('.wrapper');
let burgerMenu = document.querySelector('.burger-menu');
let burgerMenuItems = document.querySelector('.burger-header-menu');
let overlay = document.querySelector('.modal-overlay');
let starterScreen = document.querySelector('.start-screen');
let header = document.querySelector('.header');
let logo = document.querySelector('.logo');
let burgerMenuWrapper = document.querySelector('.burger-menu-wrapper');

let clickCounter = 1;

burgerMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    if (clickCounter % 2 == 0) return closeMenu();
    
    clickCounter++;
    console.log(clickCounter);
    burgerMenu.style.transform = "rotate(90deg)"; //burger animation rotate
    burgerMenu.style.zIndex = '5';
    burgerMenuWrapper.style.display = 'flex'; // burger items overlay visibile
    burgerMenuWrapper.classList.remove('animateSlideOut');
    burgerMenuWrapper.classList.add('animateSlideIn'); //animation menu burger block
    overlay.style.display = 'block';//add overlay
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'hidden';
    starterScreen.style.display = 'flex';
    starterScreen.style.flexFlow = 'column nowrap';
    startScreenWrapper.style.paddingRight = '0';
    header.style.alignSelf = 'flex-end';
    logo.style.zIndex = '3';
    header.style.width = '300px';
});

starterScreen.addEventListener('click', closeMenu);
burgerMenuItems.firstChild.addEventListener('click', closeMenu);
burgerMenuItems.addEventListener('click', closeMenu);


function closeMenu () {
    clickCounter++;
    burgerMenu.style.transform = "rotate(180deg)";
    burgerMenuWrapper.classList.remove('animateSlideIn');
    burgerMenuWrapper.style.right = '0';
    burgerMenuWrapper.classList.add('animateSlideOut');
    setTimeout(() => {
        overlay.style.display = 'none';
        burgerMenuWrapper.style.right = "-320px";
        burgerMenu.style.zIndex = '0';
    }, 1000);
    document.body.style.height = 'auto';
    document.body.style.overflowY = 'visible';
    header.style.width = '100%';
    starterScreen.style.display = 'block';
    startScreenWrapper.style.paddingRight = '10px';
};