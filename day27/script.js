const list = document.querySelectorAll(".item");

list.forEach( l => {
    const label = l.querySelector('label');
    const check = l.querySelector('.checkitem');
    const checkbox = l.querySelector('.checkbox');
    const block = l.querySelector('.block');

    label.addEventListener('click', e => {
       if ( checkbox.checked ){
        check.classList.remove('burst');
        check.classList.add('showBubble');
        block.classList.remove('showcheck');
        block.classList.add('hidecheck');
       } else {
        check.classList.add('burst');
        check.classList.remove('showBubble');
        block.classList.add('showcheck');
        block.classList.remove('hidecheck');
       }
        
    })
})