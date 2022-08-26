// import {footer} from "./footer.js"
// document.getElementById("footer_part").innerHTML = footer();
// import main_navbar from "./components.js";
// let con = document.getElementById("main_navbar");
// let navbar = main_navbar();
// console.log(navbar);
// con.innerHTML = navbar;
 
 
 
 var countDownDate = new Date("Aug 30, 20222 15:37:25").getTime();    
 var x = setInterval(function() {
    var now = new Date().getTime(); 
   var distance = countDownDate - now; 
  //  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
   document.getElementById("demo").innerHTML = "Ending In:"+ hours + "h "
   + minutes + "m " + seconds + "s ";
 }, 1000);

 /****************************************************************************/
const cartButton = document.querySelectorAll('.cart_items');
// let cart_arr = JSON.parse(localStorage.getItem("cartpage")) || [];
let container = document.getElementById("container");

// cartButton.forEach(box => {
//   box.addEventListener('click', function handleClick(event) {
//     console.log("Hello");
//     let obj={
//       image:"",
//       title:"",
//       price:"",
//     };
//     cart_arr.push(obj);
//     localStorage.setItem("cartpage", JSON.stringify());
//   });
// });

function Sortlh(a,b) {          //Sort low to high
  return a-b;
};

function Sorthl(a,b) {        // Sort high to low
  return b-a;
};