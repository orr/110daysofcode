const search = document.querySelector('.searchicon');
search.addEventListener('click', e => {
    
    document.querySelector('#searchinput').classList.toggle('active');
    //document.querySelector('.menu').classList.toggle('inactive');
});