let product =[
    {
        id:1,
        discount: "33%",
        img: "images/product-1.png",
        productName:"Organic Banana",
        price:"Rs 40",
        moprice:"Rs 50",
        quantity:1
    },

    {
        id:2,
        discount: "33%",
        img: "images/product-2.png",
        productName:"Organic Tomato",
        price:"Rs 40",
        moprice:"Rs 50",
        quantity:1
    },


    {
        id:3,
        discount: "33%",
        img: "images/product-3.png",
        productName:"Organic Orange",
        price:"Rs 40",
        moprice:"Rs 50",
        quantity:1
    },


    {
        id:4,
        discount: "33%",
        img: "images/product-4.png",
        productName:"Natural Mild",
        price:"Rs 40",
        moprice:"Rs 50",
        quantity:1
    },

    {
        id:5,
        discount: "33%",
        img: "images/product-5.png",
        productName:"Organic Grapes",
        price:"Rs 40",
        moprice:"Rs 50",
        quantity:1
    },


    {
        id:6,
        discount: "33%",
        img: "images/product-6.png",
        productName:"Natural Almonts",
        price:"Rs 40",
        moprice:"Rs 50",
        quantity:1
    },



    {
        id:7,
        discount: "33%",
        img: "images/product-7.png",
        productName:"Organic Apple",
        price:"Rs 40",
        moprice:"Rs 50",
        quantity:1
    },

    {
        id:8,
        discount: "33%",
        img: "images/product-8.png",
        productName:"Natural Butter",
        price:"Rs 40",
        moprice:"Rs 50",
        quantity:1
    },


    {
        id:9,
        discount: "33%",
        img: "images/product-9.png",
        productName:"Organic Carrot",
        price:"Rs 40",
        moprice:"Rs 50",
        quantity:1
    },

];

let sectionproduct=document.querySelector(".product");
let boxcantainer=document.querySelector(".box-cantainer");
let box=document.querySelector(".box");
window.addEventListener("DOMContentLoaded", function(){

    DisplayMenuProducts(product);

});

function DisplayMenuProducts(productItems){

    let displayproducts=productItems.map(function(item){
        console.log(item);

        return ` <div class="box">
        <span class="discount">${item.discount}</span>
            <div class="icons">
                <a href="" class="fas fa-heart"></a>
                <a href="#" class="fas fa-share"></a>
                <a href="#" class="fas fa-shopping-cart"></a>
            </div>

            <img src=${item.img} alt=${item.img}>
            <h3>${item.productName}</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <div class="price">${item.price}<span>${item.moprice}</span></div>
            <div class="quantity">
                <span>quantity:</span>
                <input type="number" min="1" max="100" value=${item.quantity}>
                <span>/Kg</span>
            </div>
            <a href="#" class="btn">add to cart</a>
            </div>
            `;
    });

    displayproducts=displayproducts.join("");
    boxcantainer.innerHTML=displayproducts;
    console.log(boxcantainer.innerHTML=displayproducts);

}




let menu =document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
let header=document.querySelector('.header2');
/* let heart=document.querySelector('.fa-heart');
console.log(heart);
heart.addEventListener('click',()=>{

    heart.classList.add('redheart');
});  */

menu.addEventListener('click',()=>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

});

window.onscroll= ()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY>150)
    {
        header.classList.add('active');

    }
    else{

        header.classList.remove('active');
    }
}

let countDate = new Date('september 21, 2021 00:00:00').getTime();

function CountDown(){

    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = -d;
    document.getElementById('Hour').innerText = -h;
    document.getElementById('minute').innerText = -m;
    document.getElementById('second').innerText = -s;

}

setInterval(function(){
    CountDown();
},1000)
