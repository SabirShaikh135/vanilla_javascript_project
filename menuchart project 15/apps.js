let menu= [
    {
        id:1,
        title:  "buttermilk pancakes",
        category: "Breakfast",
        price:  15,
        img:    "images/item-1.jpeg",
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ",
    },

    {
        id:2,
        title:  "diner double",
        category: "Lunch",
        price: 3,
        img:    "images/item-2.jpeg",
        desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats.",
    },

    {
        id:3,
        title:  "godzilla milkshake",
        category: "Shakes",
        price:  3,
        img:    "images/item-3.jpeg",
        desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    },

    {
        id:4,
        title:  "buttermilk pancakes",
        category: "Breakfast",
        price:  20,
        img:    "images/item-4.jpeg",
        desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut ",
    },

    {
        id:5,
        title:  "egg attack",
        category: "Lunch",
        price:  18,
        img:    "images/item-5.jpeg",
        desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up ",
    },


    {
        id:6,
        title:  "oreo dream",
        category: "Shakes",
        price:  19,
        img:    "images/item-6.jpeg",
        desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday ",
    },


    {
        id:7,
        title:  "bacon overflow",
        category: "Breakfast",
        price:  6,
        img:    "images/item-7.jpeg",
        desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird ",
    },


    {
        id:8,
        title:  "american classic",
        category: "Lunch",
        price:  12,
        img:    "images/item-8.jpeg",
        desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    },

     {
        id:9,
        title:  "quarantine buddy",
        category: "Shakes",
        price:  16,
        img:    "images/item-9.jpeg",
        desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing. ",
    },


    {
        id:10,
        title:  "bison steak",
        category: "Dinner",
        price:  22,
        img:    "images/item-10.jpeg",
        desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    }
];

let sectioncenter=document.querySelector(".section-center");
let btncantainer=document.querySelector(".btn-cantainer");

window.addEventListener("DOMContentLoaded",function(){

    DisplayMenuItem(menu);
    DisplayMenuButton();
});


function DisplayMenuItem(menuitems){

        let displaymenu = menuitems.map(function(item){
                // console.log(item);

            return `  <article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title}>
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                      <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">
                ${item.desc}
                </p>
            </div>
        </article>`
        });

        displaymenu= displaymenu.join("");
        // console.log(displaymenu);

        sectioncenter.innerHTML=displaymenu;

}

function DisplayMenuButton(){
    let categories=menu.reduce(function(values ,item){

        if(!values.includes(item.category)){

            values.push(item.category);
        }
        console.log(item.category);
        // console.log(values);
        return values;
        

    },
    ["all"]
    
    );

    let categorybtns= categories.map(function(category){
categories
        return `<button type="button" data-id= ${category} class="fillter-btn" >${category}</button>`;
    }).join("");

    // console.log(categories);
btncantainer.innerHTML=categorybtns;
// console.log(btncantainer);
let filterbtn=btncantainer.querySelectorAll(".fillter-btn");
console.log(filterbtn+"btn");

filterbtn.forEach((btn) => {
    // console.log(btn+"btn");
    btn.addEventListener("click",(e)=>{
        // console.log(btn+"dddd");
        let category1=e.currentTarget.dataset.id;
        // console.log(category+"sss");
        let menucategory1=menu.filter((menuItem)=>{
            // console.log(menucategory+"sksk");
            if(menuItem.category===category1){
                return menuItem;
                
            }

            // console.log(menuItem.category+"menuItem.category");
        });

        if(category1==="all"){
            DisplayMenuItem(menu);
            // console.log(DisplayMenuItem(menu)+"category");
        }
        else{
            DisplayMenuItem(menucategory1);
        }
    });
});

    
}