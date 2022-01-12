let hr=0;               //define hours variable
let min=0;              //define min variable
let=sec=0;              //define sec variable
let count=0;            //define count variable
let timer= false;       // set timer start or off


function start(){           // make fun for start timer
timer=true;                 // defult set true
stopwatch();                // call the main logic function

}

function stop(){            //make stop fun
timer=false;                // set false


}

function reset(){           // make reset fun
    timer=false;            //set false
    hr=0;
    min=0;
    sec=0;                  //set all variable to zero to reset
    count=0;
    document.getElementById("hr").innerHTML= "00";
    document.getElementById("min").innerHTML= "00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";

}

function stopwatch(){               //define main logic function
    // console.log("count");
    if(timer==true){                //check if true go to increse count
        count=count+1;
        if(count==100){             //count 100 then increase second +1
            count=0;
            sec=sec+1;
        }

        if(sec==60){                //check if sec 60 go to increse min and set sec=0
            min=min+1;              
            sec=0;
        }

        if(min==60){
            hr=hr+1;                    //check if sec 60 go to increse min and set min,sec to zero
            min=0;
            sec=0;
        }

        let hrstring=hr;                    //set double digit to show on start with only show single digit using string
        let minstring=min;                  
        let secstring=sec;
        let countstring=count;
        if(hr<10){                          // check if number is single digit then set zero in hours
            hrstring="0"+hrstring;
        }
        if(min<10){
            minstring="0"+minstring;        // check if number is single digit then set zero in min
        }
        if(sec<10){
            secstring="0"+secstring;          // check if number is single digit then set zero in sec
        }
        if(count<10){
            countstring="0"+countstring;        //// check if number is single digit then set zero in count
        }

        document.getElementById("count").innerHTML=countstring; //define and set value
        document.getElementById("sec").innerHTML=secstring;
        document.getElementById("min").innerHTML=minstring;
        document.getElementById("hr").innerHTML=hrstring;
        
        setTimeout("stopwatch()",10);           //call function again agin after 10 millsecon 1 sec=1000 ms
        
    }
  console.log(count);

}

