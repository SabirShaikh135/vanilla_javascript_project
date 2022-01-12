let modelbtn=document.querySelector(".model-btn");
let modaloverlay=document.querySelector(".modal-overlay");
let closebtn=document.querySelector(".close-btn");

modelbtn.addEventListener('click',function(){

    modaloverlay.classList.add("open-modal");
});

closebtn.addEventListener('click',function(){

    modaloverlay.classList.remove("open-modal");
});