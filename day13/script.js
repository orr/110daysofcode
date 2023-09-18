const circles = document.querySelectorAll('.circle');
circles.forEach( c => {
    c.addEventListener('click', e => {
        document.querySelector('#top_overlay_item').classList.add('top_overlay_open');
        document.querySelector('#bottom_overlay_item').classList.add('bottom_overlay_open');
        document.querySelector('.profile').classList.add('profile_open');
        document.querySelector('.close-btn').classList.add('close-btn_open');
    })
})

const closebtn = document.querySelector('.close-btn');
closebtn.addEventListener('click', e => {
    document.querySelector('#top_overlay_item').classList.remove('top_overlay_open');
    document.querySelector('#bottom_overlay_item').classList.remove('bottom_overlay_open');
    document.querySelector('.profile').classList.remove('profile_open');
    document.querySelector('.close-btn').classList.remove('close-btn_open'); 
    //document.querySelector('.profile').style.transitionDelay = '0s';
})