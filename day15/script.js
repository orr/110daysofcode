const file = document.querySelector('.file-input');
const icon = document.querySelector("#icon");
const filename = document.querySelector("#file-name")
const uploadbar = document.querySelector('.uploadbar');

file.addEventListener('change', (e) => {
    if(e.target.files[0]) {
        
        filename.innerHTML = e.target.files[0].name;
        filename.classList.toggle('closed');
        icon.classList.toggle('closed');
    }
})

const btn = document.querySelector("#btn");

btn.addEventListener('click', e => {
    icon.classList.toggle('closed');
    icon.classList.toggle('fa-cloud-upload');
    icon.classList.toggle('fa-refresh');
    icon.classList.toggle('rotate');
    filename.classList.toggle('closed');
    uploadbar.classList.toggle('animatebar');
})

uploadbar.addEventListener("animationend", () => {
    icon.classList.toggle('rotate');
    icon.classList.toggle('fa-refresh');
    icon.classList.toggle('fa-check');
  });

