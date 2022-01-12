let slides=document.querySelectorAll(".slide");
let prebtn=document.querySelector(".prebtn");
let nextbtn=document.querySelector(".nextbtn");

slides.forEach(function (slide,index){

    slide.style.left=`${index*100}%`;
    console.log(slide.style.left=`${index*100}%`);
    console.log(index);
});

let counter=0;

nextbtn.addEventListener("click",function(){

    counter++;
    newfunction();
});

prebtn.addEventListener("click",function(){

    counter--;
    newfunction();
});

function newfunction(){

    if(counter<slides.length-1)
    {
    nextbtn.style.display="block";
    console.log(counter<slides.length-1);
    }
    else{
    nextbtn.style.display="none";
    }

    if(counter>0){
        prebtn.style.display="block";
    }

    else{

        prebtn.style.display="none";
    }

        slides.forEach(function (slide){

            slide.style.transform=`translateX(-${counter*100}%)`;

            console.log( slide.style.transform=`translateX(-${counter*100}%)`);
        });

        }

        prebtn.style.display="none";