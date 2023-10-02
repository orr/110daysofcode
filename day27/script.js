const list = document.querySelectorAll(".item");
const checkwrapper = document.querySelectorAll(".checkwrapper");

list.forEach( l => {
    const label = l.querySelector('label');
    
    const checkbox = l.querySelector('.checkbox');
    const block = l.querySelector('.block');

    label.addEventListener('click', e => {
        const check = l.querySelector('.checkitem');
        console.log("label  " + checkbox.checked)
        if ( checkbox.checked ){
        check.classList.remove('burst');
        label.classList.remove('selected');
        check.classList.add('showBubble');
        block.classList.remove('showcheck');
        block.classList.add('hidecheck');
       } else {
        check.classList.add('burst');
        label.classList.add('selected');
        check.classList.remove('showBubble');
        block.classList.add('showcheck');
        block.classList.remove('hidecheck');
       }
        
    })
})

checkwrapper.forEach( l => {
    const p = l.parentNode;
    const label = p.querySelector('label');
    
    const checkbox = p.querySelector('.checkbox');
    const block = p.querySelector('.block');

    l.addEventListener('click', e => {
        const check = p.querySelector('.checkitem');
        console.log("ch  " + checkbox.checked)
        checkbox.checked = !checkbox.checked;
        if ( !checkbox.checked ){
        check.classList.remove('burst');
        label.classList.remove('selected');
        check.classList.add('showBubble');
        block.classList.remove('showcheck');
        block.classList.add('hidecheck');
       } else {
        check.classList.add('burst');
        label.classList.add('selected');
        check.classList.remove('showBubble');
        block.classList.add('showcheck');
        block.classList.remove('hidecheck');
       }
        
    })
})