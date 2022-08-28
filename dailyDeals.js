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
 const cartButton = document.querySelectorAll('.add_cart');
//  let cart_arr = JSON.parse(localStorage.getItem("cartpage")) || [];
 let container = document.getElementById("container");
 let cart_arr =JSON.parse(localStorage.getItem("cart_items"));
//  let c_count = document.getElementById("num");
 cartButton.forEach(box => {
   box.addEventListener('click', function () {
     console.log("Hello");
     let obj={
       img:document.getElementById("img").src,
       title:document.getElementById("title").innerText,
       price:Number(document.getElementById("price").innerText),
       discount: document.getElementById("discount").innerText,
       quantity:1,
     };
     cart_arr.push(obj);
     localStorage.setItem("cart_items", JSON.stringify(cart_arr));
     window.location.reload();
   });
 });
 
 function Sortlh(a,b) {          //Sort low to high
   return a-b;
 };
 
 function Sorthl(a,b) {        // Sort high to low
   return b-a;
 };


 