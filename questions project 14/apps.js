let quetions=document.querySelectorAll(".question");

quetions.forEach(function(question){

    let btn=question.querySelector(".question-btn");
    console.log(btn);

    btn.addEventListener("click",function(){

        quetions.forEach(function(item){

            if(item !== question){
                item.classList.remove("show-text");
                console.log(item)
            }
        });
        question.classList.toggle("show-text");
    });
});

