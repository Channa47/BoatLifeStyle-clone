const cartButton = document.querySelectorAll('.btn_add_cart');

cartButton.forEach(box => {
  box.addEventListener('click', function handleClick(event) {
    console.log("Hello");
  });
});

let getData = async () => {
  try {
    let res = await fetch(`http://localhost:3000/BoatData`);
  let data = await res.json();
  appendData(data);
  console.log('data:',data);
  }
  catch(error) {
    console.log('error:',error);
  };  
};
getData();

let container = document.getElementById("container");
let appendData = (data) => {
  data.forEach(function(element) {
    let div1 = document.createElement("div");
    let image = document.createElement("img");
    image.src = element.image;
    image.style.width = "200px";
    image.style.height = "200px";
    let div2 = document.createElement("div");
    div2.style.background = "white";
    div2.style.borderRadius = "15px";
    div2.style.width = "92%";
    div2.style.margin = "auto";
    div2.style.marginTop = "-20px";
    let title = document.createElement("h4");
    title.innerText = element.title;
    let rating = document.createElement("p");
    rating.innerText = element.rating;
    rating.style.marginTop = "-15px";
    rating.style.fontWeight = "lighter";
    let price = document.createElement("h3");
    price.innerText = element.price;
    price.style.marginTop = "-10px";
    price.style.color = "red";
    let discount = document.createElement("h4");
    discount.innerText = element.discount;
    discount.style.marginTop = "-15px";
    discount.style.fontWeight = "lighter";
    discount.style.marginBottom = "-2px";
    let button = document.createElement("button");
    button.innerText = "ADD TO CART";
    button.style.background = "#f6c00b";
    button.style.width = "92%";
    button.style.marginTop = "-15px";
    button.style.textAlign = "center";
    button.style.margin = "auto";
    button.style.borderRadius = "5px";
    let percent = document.createElement("p");
    percent.innerText = element.percent;
    percent.style.marginTop = "0px";
    percent.style.background = element.percent.value * "#f6c00b";

    div2.append(title,rating,price,discount,button,percent);  
    div1.append(image,div2)
    container.append(div1);
  });
}