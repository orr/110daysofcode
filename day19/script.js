const ball = document.querySelector('#selectedball');
const purple = document.querySelector('.purple');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');



let position =0;

document.querySelector('#c1').addEventListener('click', ()=> {
    if( position != 0) {
      
        adjustBackGround(00);
        adjustPosition(0, 60);
    } 
})

document.querySelector('#c2').addEventListener('click', ()=> {
    if( position != 1) {
        
        adjustBackGround(-100);
        adjustPosition(1, 60);
    } 
})


document.querySelector('#c3').addEventListener('click', ()=> {
    console.log("loxa")   
    if( position != 2) {
        adjustBackGround(-200);
        adjustPosition(2, 60);
    } 
})

function adjustPosition(newIndex, size) {
    if( newIndex != position) {
        ball.style.transform = `translateX(${size*newIndex}px)`;
    }
    position = newIndex;
    
}

function adjustBackGround(position) {
    purple.style.transform = `translateX(${position}%)`;
    blue.style.transform = `translateX(${position}%)`;
    green.style.transform = `translateX(${position}%)`;
}