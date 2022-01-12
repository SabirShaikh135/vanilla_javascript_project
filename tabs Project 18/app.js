let about =document.querySelector(".about");
let btn= document.querySelectorAll(".tab-btn");
let articles=document.querySelectorAll(".content");

about.addEventListener("click",function(e){

    let id=e.target.dataset.id;
    console.log(id);

    if(id){

        btn.forEach(function(b){

            b.classList.remove("active");
            
        });
        
        e.target.classList.add("active");
        articles.forEach(function(article){

            article.classList.remove("active");

        });

        let elemnt=document.getElementById(id);
        elemnt.classList.add("active");
    }

    
    
});
