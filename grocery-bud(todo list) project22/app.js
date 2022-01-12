let form= document.querySelector(".form");
let alert= document.querySelector(".alert");
let inputgrocery=document.getElementById("grocery");
let submitbtn=document.querySelector(".submit_btn");
let grocerycantainer=document.querySelector(".grocery-cantainer");
let grocerylist= document.querySelector(".grocery-list");
let filtersearch=document.getElementById("filter");
let clearbtn=document.querySelector(".clear");

let editElement;
let editflag=false;
let editID="";



form.addEventListener("submit",addItem);
clearbtn.addEventListener('click',clearItem);
window.addEventListener("DOMContentLoaded",setupItem);  //display item on load


function addItem(e){
    e.preventDefault();
    let value= inputgrocery.value;
    let id= new Date().getTime().toString();
    console.log(id);
    console.log(value);

    if(value !== "" && !editflag){

        createListItem(id,value);
    //     let element=document.createElement("article");
    //     let attr=document.createAttribute("data-id");
    //     attr.value=id;
    //     element.setAttributeNode(attr);
    //     element.classList.add("grocery-item");
    //     element.innerHTML=`<p class="title">${value}</p>
    //     <div class="btn-container">
    //       <!-- edit btn -->
    //       <button type="button" class="edit-btn">
    //         <i class="fas fa-edit"></i>
    //       </button>
    //       <!-- delete btn -->
    //       <button type="button" class="delete-btn">
    //         <i class="fas fa-trash"></i>
    //       </button>
    //     </div>
    //   `;

    // let delbtn=element.querySelector(".delete-btn");
    // delbtn.addEventListener("click",deleteItem);
    // let editbtn=element.querySelector(".edit-btn");
    // editbtn.addEventListener("click",eidtItem);

    // grocerylist.appendChild(element);
    displayAlert("item added to the list","success");

    grocerycantainer.classList.add(".show-container");
    addToLocalStorage(id,value);
    setBackToDefault();

    }

    else if(value !=="" && editflag){

        editElement.innerHTML=value;

        displayAlert("value change","success");

        editLocalStorage(editID ,value);
        setBackToDefault();
    }
    else{

        displayAlert("please enter value ","danger");
    }

   
    
}

//display alert

function displayAlert(text ,action){

    alert.textContent= text;
    alert.classList.add(`alert-${action}`);

        //remove alert

        setTimeout(function(){

            alert.textContent="";
            alert.classList.remove(`alert-${action}`);
        },1000);


        //  setTimeout(function () { window.top.location = window.top.location; }, 1000);
}

// clear items

function clearItem(){

    let items= document.querySelectorAll(".grocery-item");
    if(items.length >0){

    items.forEach(function(item){

        grocerylist.removeChild(item);
    });
 }

 grocerycantainer.classList.remove(".show-container");
 displayAlert("emptylist" ,"danger");
 setBackToDefault();
//  clearbtn.textContent="";

 localStorage.removeItem("list");

 

}

//delete item

function deleteItem(e){

        let element =e.currentTarget.parentElement.parentElement;
        let id= element.dataset.id;
        grocerylist.removeChild(element);

        if(grocerylist.children.length===0){

            grocerycantainer.classList.remove(".show-container");

        }

        displayAlert("item remove","danger");
        setBackToDefault();
        removeFromLocalStorage(id);  //remove from local storege
}



//edit item


function eidtItem(e){

    let element=e.currentTarget.parentElement.parentElement;
    // set data element

    editElement=e.currentTarget.parentElement.previousElementSibling;
    inputgrocery.value=editElement.innerHTML;
    editflag=true;
    editID= element.dataset.id;

    submitbtn.textContent="Edit";
}

function setBackToDefault(){

    inputgrocery.value="";
    editflag=false;
    editID="";
    submitbtn.textContent="Submit";
}

//local storege  add to local storage

function addToLocalStorage(id,value){

    let grocery={id ,value};
    let items=getLocalStorage();
    items.push(grocery);
    localStorage.setItem("list",JSON.stringify(items));

}


function getLocalStorage(){
    return localStorage.getItem("list")? JSON.parse(localStorage.getItem("list")):[];

}


function removeFromLocalStorage(id){

    let items= getLocalStorage();

    items=items.filter(function(item){

        if(item.id !==id){
            return item;
        }
    });


    localStorage.setItem("list",JSON.stringify(items));

}


function editLocalStorage(id ,value){
    let items=getLocalStorage();

    items=items.map(function (item){

        if(item.id=== id){
            item.value=value;
        }

        return item;
    });

    localStorage.setItem("list" ,JSON.stringify(items));

}


//  setup items  SETUP LOCALSTORAGE.REMOVEITEM('LIST');

function setupItem(){

    let items=getLocalStorage();

    if(items.length>0){
        items.forEach(function (item){

            createListItem(item.id, item.value);
        });
        
        grocerycantainer.classList.add("show-container");

    }
}

function createListItem(id ,value){

    let element= document.createElement("article");
    let attr=document.createAttribute("data-id");
    attr.value=id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
    element.innerHTML=`<p class="title">${value}</p>
    <div class="btn-container">
      <!-- edit btn -->
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <!-- delete btn -->
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `;

   // add event listeners to both buttons;

   let deletebtn= element.querySelector(".delete-btn");
    deletebtn.addEventListener("click" ,deleteItem);
    let editbtn=element.querySelector(".edit-btn");
    editbtn.addEventListener("click" ,eidtItem);
     // append child

     grocerylist.appendChild(element);


}

filtersearch.addEventListener('keyup',debounce(searchitem,600));
let count=0;
function searchitem(){

    // let text= e.currentTarget.value;
    let text= filtersearch.value;
    console.log(text);

    let items=grocerylist.getElementsByTagName('article');
  
    console.log(items);
    Array.from(items).forEach(function(item){

        let itemlist=item.firstChild.textContent;
        console.log(itemlist);
        
        if(itemlist.indexOf(text) != -1){
            item.style.display='flex';
            console.log(itemlist);      
        }
        else{
            item.style.display='none';

        }
    });
}

function debounce(funpara, delay)
{
    let timer;
    return function()
    {
        let context=this;
        args=arguments;
        console.log(context);
        console.log(args);
        clearTimeout(timer);
        timer=setTimeout(()=>{

            searchitem.apply(context,arguments);

        } ,delay);
    }

}





















