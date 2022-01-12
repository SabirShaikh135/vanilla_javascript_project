let colors=["green","red","rgba(133,122,200)"];
let btn= document.getElementById("btn");
let color=document.querySelector(".color");

btn.addEventListener('click',function(){

    let randomnum= randomnumber();
    console.log(randomnum);
    document.body.style.backgroundColor=colors[randomnum];
    color.textContent=colors[randomnum];
});

function randomnumber(){

return Math.floor(Math.random()*colors.length);

}