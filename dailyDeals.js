
import {footer} from "./footer.js"
document.getElementById("footer_part").innerHTML = footer();
import main_navbar from "./components.js";
let con = document.getElementById("main_navbar");
let navbar = main_navbar();
console.log(navbar);
con.innerHTML = navbar;
 
 var countDownDate = new Date("Aug 30, 20222 15:37:25").getTime();    
 var x = setInterval(function() {
    var now = new Date().getTime(); 
   var distance = countDownDate - now; 
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000); 
   document.getElementById("demo").innerHTML = "Ending In:"+ hours + "h "
   + minutes + "m " + seconds + "s ";
 }, 1000);

 /****************************************************************************/
const cartButton = document.querySelectorAll('.add_cart');
let cart_arr = JSON.parse(localStorage.getItem("cartpage")) || [];
let container = document.getElementById("container");
cartButton.forEach(box => {
  box.addEventListener('click', function handleClick(event) {
    alert("Item added to Cart")
    let obj={
      img:document.getElementById("img").src,
      title:document.getElementById("title").innerText,
      price: Number(document.getElementById("price").innerText),
      discount: document.getElementById("discount").innerText
    };
    cart_arr.push(obj);
    localStorage.setItem("cart_items", JSON.stringify(cart_arr));
  });
});


let price = Number(document.getElementById("price").value);
function Sortlh(a,b) {                                       //Sort low to high
  // return a.price - b.price;
  console.log('Sorted');
};

function Sorthl(a,b) {                                       // Sort high to low
  // return b.price - a.price;
};

function Add() {
  alert("Thank You for subscribing. Please check your inbox!")
}