let inputtext= document.getElementById("input-text");
let buttons=document.querySelectorAll("button");
let screenvalue= "";
for(let item of buttons){

    item.addEventListener('click', function(e){

        let buttontext=e.target.innerText;
        if(buttontext=="x"){
        buttontext="*";
        screenvalue +=buttontext;
        inputtext.value=screenvalue;
        console.log(screenvalue+"screen");
        console.log(inputtext.value+"input");
        console.log(buttontext+"button");

        }
        else if(buttontext=="C"){
            screenvalue="";
            buttontext="";
            inputtext.value=screenvalue;

        }

        else if(buttontext== "="){

            inputtext.value=eval(screenvalue);
            screenvalue =inputtext.value;
            buttontext="";
            

        }

        /* if(buttontext=='clear'){
            
            // screenvalue +=buttontext;
            // inputtext.value=screenvalue;
            buttontext="";
            screenvalue="";
           
            let ss=screenvalue.replace(screenvalue,"");
            ss=inputtext.value;
            var myarray= String(ss).split("").map((ss)=>{
                return Number(ss);
                

            })
            let del=myarray.pop();
            inputtext.value=myarray;
            console.log(myarray);
            console.log(del);
            console.log(inputtext.value);
            
        

        } */
    
         else{

            screenvalue +=buttontext;
            inputtext.value=screenvalue;

         }



    })
}