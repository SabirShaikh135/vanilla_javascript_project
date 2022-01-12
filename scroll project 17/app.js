let setdate=document.getElementById("date");
setdate.innerHTML =new Date().getFullYear();

let navtoggle=document.querySelector(".nav-toggle");
let linksContainer =document.querySelector(".links-cantainer");
let link=document.querySelector(".link");

navtoggle.addEventListener("click",()=>{

    // console.log(linksContainer.classList.toggle("show-links"));

    let linkhight= link.getBoundingClientRect().height;
    let containerHeight =linksContainer.getBoundingClientRect().height;

    if(containerHeight===0){
        linksContainer.style.height=`${linkhight}px`;
    }
    else{

        linksContainer.style.height=0;
    }
});

let navbar=document.getElementById("nav");
let toplink=document.querySelector(".top-link");

window.addEventListener("scroll",()=>{

    let scrollhight=window.pageYOffset;
    console.log(scrollhight+"scrollhight");
    let navhight=navbar.getBoundingClientRect().height;
    if(scrollhight>navhight){
        navbar.classList.add("fixed-nav");
    }
    else
    {
        navbar.classList.remove("fixed-nav");
    }
    if(scrollhight>500){
        toplink.classList.add("show-link");
        
     }

     else{
         toplink.classList.remove("show-link");
     }
     console.log(toplink+"toplink");
});

let scrolllinks=document.querySelectorAll(".scroll-link");
scrolllinks.forEach((link)=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();
        let id=e.currentTarget.getAttribute("href").slice(1);
        let elemet =document.getElementById(id);
        let navhight=navbar.getBoundingClientRect().height;
        let containerHeight=linksContainer.getBoundingClientRect().height;
        let fixednav=navbar.classList.contains(".fixed-nav");
        let position=elemet.offsetTop-navhight;
        if(!fixednav){
           
            position=position-navhight;
            
        }
        if(navhight>82){
            position=position+containerHeight;
        }

        window.scrollTo({
            left:0,
            top:position,
        });
        linksContainer.style.height=0;
    });
});
    
