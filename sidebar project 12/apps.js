let togglebtn= document.querySelector(".slidebar-toggle");
let closebtn=document.querySelector(".close-btn");
let slidebar=document.querySelector(".slidebar");
 

togglebtn.addEventListener('click',function(){
    
    slidebar.classList.toggle("show-sidebar");
    console.log(slidebar.classList);
 });

 closebtn.addEventListener('click',function(){
     slidebar.classList.remove("show-sidebar");
     console.log(slidebar.classList);
 });