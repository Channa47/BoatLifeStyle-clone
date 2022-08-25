
const cartButton = document.querySelectorAll('.add_cart');
let cart_arr = JSON.parse(localStorage.getItem("cartpage")) || [];
let container = document.getElementById("container");

cartButton.forEach(box => {
  box.addEventListener('click', function handleClick(event) {
    console.log("Hello");
    let obj={
      image:"",
      title:"",
      price:"",
    };
    cart_arr.push(obj);
    localStorage.setItem("cartpage", JSON.stringify());
  });
});