let inputtext=document.querySelector(".input-text");
let submitbtn=document.querySelector(".submit-btn");
let listcantainer=document.querySelector(".list-cantainer");
let list=document.querySelector(".list");
let form=document.querySelector(".form");

let editelement;
let editflag=false;
let editid="";

form.addEventListener("submit",addItem)
    

function addItem(e){
    e.preventDefault();
    let value=inputtext.value;
    let id=new Date().getTime().toString();
    console.log(value);
    console.log(id);

    if(value !=="" && !editflag)
    {
        let element= document.createElement("article");
        let attr=document.createAttribute("data-id");
        attr.value=id;
        element.setAttributeNode(attr);
        element.classList.add("grocery-item");
        element.innerHTML=`<p class="title">${value}</p>
        <div class="div-btn">
        <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
         <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
    </div>
                            `;
          let editbtn=element.querySelector(".edit-btn");         
         let delbtn=element.querySelector(".delete-btn");   
        editbtn.addEventListener("click",editItem);
        delbtn.addEventListener("click",delItem);
        list.appendChild(element);

    }
}

    function delItem(e)
    {
    //  e.preventDefault();
        let element =e.currentTarget.parentElement.parentElement;
        let id = element.dataset.id;
        list.removeChild(element);


    }

    function editItem(e)
    {
        let
    }