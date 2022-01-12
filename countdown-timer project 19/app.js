const months=['January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December',];
const weekdays=['Sunday',
'Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday',
'Saturday',];

const giveaway=document.querySelector(".giveaway");
const deadline=document.querySelector(".deadline");
const items=document.querySelectorAll(".deadline-format h4");

let tempdate= new Date();
let tempyear=tempdate.getFullYear();
let tempmonth=tempdate.getMonth();
let tempday=tempdate.getDate();
// console.log(tempyear);
// console.log(tempmonth);
// console.log(tempday);
const futuredate= new Date(tempyear,tempmonth,tempday+10,11,30,0);
// console.log(futuredate);

const year =futuredate.getFullYear();
const hours=futuredate.getHours();
const minutes=futuredate.getMinutes();
// console.log(year);
// console.log(hours);
// console.log(minutes);

let month=futuredate.getMonth();
// console.log(month);
month=months[month];
console.log(month);

let weekday=futuredate.getDay();
weekday=weekdays[weekday];
console.log(weekday);

let date= futuredate.getDate();
console.log(date);

giveaway.textContent=`GiveAway end on ${weekday}, ${date}-${month}-${year}  at Time  ${hours}:${minutes}am`;

let futrureTime=futuredate.getDate();
// console.log(futrureTime);

function GetRemindingTime(){
    let today =new Date().getTime();
    

    let t =futrureTime-today;
    console.log(t);
    let oneday=24*60*60*1000;
    let onehour=60*60*1000;
    let oneminute=60*1000;

    console.log(oneday);
    console.log(onehour);
    console.log(oneminute);

    let days= t/oneday;
    console.log(days);
days=Math.floor(days);
console.log(days);
let hours=Math.floor((t%oneday)/onehour);
let minutes=Math.floor((t%onehour)/oneminute);
let seconds=Math.floor((t%oneminute)/1000);
console.log(hours);
const values=[days,hours,minutes,seconds];
function format(item){
    if(item<10)
    {
        return(item=`0${item}`)
    }
    return item;
}
   items.forEach(function(item,index){

       item.innerHTML=format(values[index]);

   });

   if(t<0){
       clearInterval(countdoun);
       deadline.innerHTML=`<h4 class="expired">sorry, this giveaway has expired!</h4>`;
   }
}
let countdoun=setInterval(GetRemindingTime,1000);
GetRemindingTime();



