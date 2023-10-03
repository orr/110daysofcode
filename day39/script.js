const nav = document.querySelector(".nav");
const bars = document.querySelector(".bars");
let first = false;

const barsTop = document.querySelector(".bar-top");
const barsBottom = document.querySelector(".bar-bottom");


bars.addEventListener('click', e => {
    addAnimations();
})

function addAnimations() {
    barsTop.classList.remove('paused');
    barsBottom.classList.remove('paused');
    barsTop.classList.toggle('active');
    barsBottom.classList.toggle('active');
    nav.classList.toggle('active');
}

const items = document.querySelectorAll('.item');
items.forEach(element => {
    element.addEventListener('click', () => addAnimations());
    
});