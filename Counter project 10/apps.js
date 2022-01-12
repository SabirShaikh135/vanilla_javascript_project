let count=0;
 
let spanvalue= document.querySelector("#spanvalue");        //get span id
let button=document.querySelectorAll(".btn");               //get buttons id 

button.forEach(function(btn){                            // more then one button so we  use forEach loop to find one by one

    btn.addEventListener('click',function(e){               //add click listner in button of each
        let style=e.currentTarget.classList;            //find current element class name
        console.log(style);
        if(style.contains("Decrease")){                 // check if class name is same as of selected button go --counter
            count --;
            
        }
        
        else if(style.contains("Increase")){    // check if class name is same as of selected button go ++counter
            count ++;
        }

        else{
            count=0;                        // check if class name is not  same as of selected button go 0 =counter
        }

        if(count >0)                    //if counter value is greater then zero set color of counter green
        {
            spanvalue.style.color="green";
        }

        
        if(count < 0)               //if counter value is less then zero set color of counter red
        {
            spanvalue.style.color="red";
        }


        
        if(count===0)
        {
            spanvalue.style.color="#222";
        }

        spanvalue.textContent =count;


    
    });

});