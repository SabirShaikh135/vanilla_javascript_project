let btn=document.querySelector(".switch-btn");          //get btn id
let video=document.querySelector(".video-cantainer");  //get video tag id     
let preloder=document.querySelector(".preloder");        //get preload img div id 

window.addEventListener("load",()=>{                //hide preload img after load page

    preloder.classList.add("hide-preloder");        //add css class hide preloader img
});

btn.addEventListener("click" ,()=>{                 

    if(!btn.classList.contains("slide")){              //on btn click check if slide clss have or not  
        btn.classList.add("slide");                 //if not class  add
        video.pause();                               // and pause video
    }
    else{

        btn.classList.remove("slide")           // if class exist then remove it and paly the video
        video.play();
    }

});