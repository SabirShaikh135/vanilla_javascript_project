let hex=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D" ," E","F"];        //define 15 number to calculate color numbers
let btn= document.getElementById("btn");                        // get btn id
let color=document.querySelector(".color");                     //get .class form span for get color name
console.log(hex);
btn.addEventListener('click',function(){                       // on btn click event
    let hexcolor="#";                                           // define # before number
    for(let i=0;i<6;i++){                                   //color numbers digit is 6 limit so loop run 6 time
        hexcolor += hex[random()];                          //  add number of random into hex array and add numbers in hexcolor
        
    }
    console.log(random());
    console.log(hex[random()]   );
    console.log(hexcolor);
    color.textContent=hexcolor;                         //put color name into the span
    document.body.style.backgroundColor=hexcolor;           //set back ground color into hexcolor


});

function random(){                                            //make random funtion for making random

    return Math.floor(Math.random()*hex.length);                //calculate value for random number

}

