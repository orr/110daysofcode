const btn = document.querySelector('.btn');
const modals = document.querySelectorAll('.modal');

modals[0].classList.add('show');

modals.forEach((b,index) => {
    
    b.addEventListener('click', e => {
        b.classList.add('fade');
        if( index < modals.length-1)
            modals[index+1].classList.add('show');
    })    
});

