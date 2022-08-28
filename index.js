import main_navbar from "./components.js";

let container = document.getElementById("main_navbar");
document.getElementById("red_navbar").addEventListener("click",function(){
  window.location.reload();
})
let navbar = main_navbar();
container.innerHTML = navbar;

import {footer} from "./footer.js"
document.getElementById("footer_part").innerHTML = footer();


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//  
// })


document.getElementById("Shop_btn").addEventListener("mouseover",function(){
  bhoom();
})
function bhoom(){
  console.log("innn");
  let con = document.querySelector(".slideshow-container");
  con.innerHTML = null;
  let div = document.createElement("div");
  div.setAttribute("id","shop_more_div");

   let subdiv1 = document.createElement("div");
   subdiv1.setAttribute("id","subdiv1")
  let i1 = document.createElement("img");
  i1.setAttribute("class","p_img");
  i1.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_540x.png?v=1612338251"

  let i2 = document.createElement("img");
  i2.addEventListener("click",function(){
    window.location.href = "./rockerz.html"
  })
  i2.setAttribute("class","p_img");
  i2.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_540x.png?v=1612338387"

  let i3 = document.createElement("img");
  i3.setAttribute("class","p_img");
  i3.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/pro_gear_720x.jpg?v=1648546494"

  let i4 = document.createElement("img");
  i4.setAttribute("class","p_img");
  i4.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_540x.png?v=1612338356"

  // ----------------------------------------
  let subdiv2 = document.createElement("div");
   subdiv2.setAttribute("id","subdiv2")
  let i5 = document.createElement("img");
  i5.setAttribute("class","p_img");
  i5.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_540x.png?v=1612338436"

  let i6 = document.createElement("img");
  i6.setAttribute("class","p_img");
  i6.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_540x.png?v=1622452897"

  let i7 = document.createElement("img");
  i7.setAttribute("class","p_img");
  i7.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/bence-boros-253214-unsplash_720x.jpg?v=1648545875"

  let i8 = document.createElement("img");
  i8.setAttribute("class","p_img");
  i8.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/New-Category-Banners_with-Trebal_09_720x.png?v=1615033153";

  // --------------------------------------------------- //
  // --------------------------------------------------- //
  let subdiv3 = document.createElement("div");
   subdiv3.setAttribute("id","subdiv3")
  let i9 = document.createElement("img");
  i9.setAttribute("class","p_img");
  i9.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-limited-edition_540x.png?v=1612338560"

  let i10 = document.createElement("img");
  i10.setAttribute("class","p_img");
  i10.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/MISFIT-shop_720x.png?v=1624859990"

  let i11 = document.createElement("img");
  i11.setAttribute("class","p_img");
  i11.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Immortal_category_Image_720x.png?v=1626094103"

 
  subdiv1.append(i1,i2,i3,i4);
  subdiv2.append(i5,i6,i7,i8);
  subdiv3.append(i9,i10,i11);
  div.append(subdiv1,subdiv2,subdiv3);
  con.append(div);
  
}

let more_btn = document.getElementById("more_btn");
more_btn.addEventListener("click",function(){
  more();

});

let more = ()=>{
  event.preventDefault();
  let con = document.querySelector(".slideshow-container");
  con.innerHTML = null ;
 
  let div = document.createElement("div");
  div.setAttribute("id","more_btn_img");
  
  con.append(div);
  
  
}



// ==============================================================
//Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",topFunction)
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let car_arr = JSON.parse(localStorage.getItem("cart_items")) || [];
document.getElementById("num").innerText = car_arr.length;

 document.querySelector(".add_to_cart_btn").addEventListener("click",function(){
  addItemtocar();
 });

 let addItemtocar = () =>{
  let img = document.querySelector(".products").src;
  let title = document.querySelector(".name").innerText;
  let reviews = document.querySelector(".reviews").innerText;
  let price = document.querySelector(".price").innerText;

  console.log(img,title,reviews,price);

  function data (i,t,r,p,q){
    this.img = i;
    this.title = t;
    this.reviews = r;
    this.price = p;
    this.quantity = q;
  }
  let p1 = new data(img,title,reviews,price,1);
  console.log(p1);
  car_arr.push(p1);

  localStorage.setItem("cart_items",JSON.stringify(car_arr));
  let el = document.getElementById("num");
  el.innerText = null;
  el.innerText = car_arr.length;
 }
 

//  let data = JSON.parse(localStorage.getItem("cart_items")) || [];

//  let num = data.length;
//  console.log(num);


var input = document.getElementById("input");


input.addEventListener("keypress", function(event) {
  
  if (event.key === "Enter") {
    event.preventDefault();
    let q = input.value;
    if(q==="airpods"){
      window.location.href="./airpods.html"
    }else if(q==="smartwatch"){
      window.location.href="./smartwatch.html"
    }else if(q==="trending"){
      window.location.href = "../Project Files/payment/add_to_cart.html";
    }
  }
});

// document.querySelector(".p_img").addEventListener("click",function(){
//   window.location.href="./rockerz.html"
//   console.log("channna")
// })


 




