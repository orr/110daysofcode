const main = document.querySelector(".main");
const sidemenu = document.querySelector(".sidemenu");
const search = document.querySelector('.searchicon');
search.addEventListener('click', e => {
    
    document.querySelector('#searchinput').classList.toggle('active');
    //document.querySelector('.menu').classList.toggle('inactive');
});

const menu = document.querySelector('.menu');
menu.addEventListener('click', e => {
    sidemenu.classList.toggle('side-open');
    main.classList.toggle('main-close');
});