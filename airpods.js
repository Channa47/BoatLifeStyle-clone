//for navbar
import main_navbar from "./components.js"
let container = document.getElementById("main_navbar");
let navbar = main_navbar();
container.innerHTML = navbar;
//for sidebar
const filter = document.getElementById('filter1')
const sidebar = document.getElementById("sidebar")
const toggle = document.getElementById("toggle")

toggle.onclick = function(){
    filter.classList.remove("active")
    sidebar.classList.remove("active")
}

// document.onclick = function(e){
//     if(e.target.id !== 'sidebar' && e.target.id !== "filter"){
//         filter.classList.remove("active")
//         sidebar.classList.remove("active")
//     }
// }
filter.onclick = function(){
    filter.classList.toggle("active")
    sidebar.classList.toggle("active")
}


//product data 

let product =[
    {
        label:"You save 57%",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_400x.png?v=1642405569",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"TRebl boAt Airdopes 131",
        rating:"4.6",
        reviews:"1112",
        price:1699,
        discountprice:"2990",
        save:"1891",
    },
    {
        label:"You save 60%",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/pink_93d7a9ed-186f-4081-a184-bad918274e7b_400x.png?v=1658994528",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"boAt Airdopes 411 ANC",
        rating:"4.8",
        reviews:"56",
        price:1999,
        discountprice:"4990",
        save:"2991",
    },

      {
        label:"NEW",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/back_400x.png?v=1657869596",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"boAt Airdopes 121 PRO",
        rating:"4.8",
        reviews:"565",
        price:1399,
        discountprice:"2990",
        save:"1591",
    },
    {
        label:"You save 73%",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_3a9fc8f1-af42-4ce6-b87a-35aeed04e28a_400x.jpg?v=1658996617",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"boAt Airdopes 402 - Wireless...",
        rating:"4.8",
        reviews:467,
        price:1599,
        discountprice:"5990",
        save:"4391",
    },
    {
        label:"You save 57%",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_9230f72d-9f86-4aec-9ae2-a7d87d332877_400x.png?v=1647426798",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"boAt Airdopes 151 - Wireless...",
        rating:"4.9",
        reviews:"72",
        price:1299,
        discountprice:"2990",
        save:"1691",
    },
    {
        label:"TRENDING",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/iiolo_400x.png?v=1658150489",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"boAt Airdopes 151 - Wireless...",
        rating:"4.8",
        reviews:"1112",
        price:1049,
        discountprice:"2990",
        save:"1891",
    },

    {
        label:"You save 58%",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7925e2ed-89e7-4247-8f27-380ef0178294_400x.png?v=1625045867",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"boAt Airdopes 131 DC Edition",
        rating:"4.8",
        reviews:"1112",
        price:1440,
        discountprice:"2990",
        save:"1891",
    },
    {
        label:"You save 28%",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-3_e05a4bee-499f-42da-8db5-e3921a185f5c_300x.png?v=1655526604",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"boAt Airdopes 141 - Wireless...",
        rating:"4.8",
        reviews:"1112",
        price:1500,
        discountprice:"2990",
        save:"1891",
    },
    {
        label:"You save 58%",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_05260e43-8f0b-4776-a433-ea2089c7f7e7_300x.png?v=1659614550",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"boAt Airdopes 131 - Wireless...",
        rating:"4.8",
        reviews:"1112",
        price:1299,
        discountprice:"2990",
        save:"1691",
    },
    {
        label:"You save 52%",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Grey_560cad08-698b-45d6-a3dd-d10ae3fec8ee_300x.png?v=1657775492",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"boAt Airdopes 131 - Wireless...",
        rating:"4.8",
        reviews:"1112",
        price:1500,
        discountprice:"2990",
        save:"1891",
    },
    {
        label:"You save 28%",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-381-mediumspinggreen_43d63b08-d281-4c88-aa0c-ab9fab9add89_400x.png?v=1622527413",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"boAt Airdopes 101 .",
        rating:"4.8",
        reviews:"1112",
        price:1500,
        discountprice:"2990",
        save:"1891",
    },
    {
        label:"You save 58%",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-black_300x.png?v=1612765376",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"boAt Airdopes 111 - Wireless...",
        rating:"4.8",
        reviews:"1112",
        price:1500,
        discountprice:"2990",
        save:"1891",
    },

]
;
  document.querySelector("#krushna").addEventListener("click",function(){
  sortout(product)

  }) 
  document.querySelector("#krushna2").addEventListener("click",function(){
    sortout2(product)
  
    });

    function sortout2(product){
        append(product);
     //    console.log("hello world")
     product.sort(function(a,b){
         return b.price - a.price
      })
       }
  function sortout(product){
   append(product);
//    console.log("hello world")
product.sort(function(a,b){
    return a.price - b.price
 })
  }

append(product);

function append(product){

  
    let container = document.getElementById("products_data")
    container.innerHTML = null;
    product.forEach(element => {
        
        let main_div = document.createElement("div")

        let subdiv1 = document.createElement("div")

        let labeldiv = document.createElement("div")
        labeldiv.setAttribute("id","labeldiv")
        let label_text = document.createElement("p")
        label_text.innerText = element.label;

        labeldiv.append(label_text)
        let img1 = document.createElement("img")
        img1.src=element.Image;
        let img2 = document.createElement("img")
        img2.src = element.Image2
        subdiv1.append(labeldiv,img1)



        let subdiv2 = document.createElement("div")
        subdiv2.setAttribute("id","subdiv2")
        let name = document.createElement("h3")
        name.innerText = element.name;
        let rating = document.createElement("p")
        let offerprice = document.createElement("p")
        offerprice.innerText=`₹${element.discountprice}`
        
  
        offerprice.setAttribute("id", "offer")
        rating.innerText=`Rating ${element.rating} | ${element.reviews} Reviews`
        let price = document.createElement('p')
        let line = document.createElement("hr")
        price.innerText=`₹${element.price} `
        let save = document.createElement('p')
        save.innerText = `You Save : ₹${element.save}`
        let button = document.createElement("button")
        button.setAttribute("id","addtocart")
        button.innerText="ADD TO CART"
        button.addEventListener("click", function (el) {
      
            let cartitom = JSON.parse(localStorage.getItem("cart_items")) || []      
            cartitom.push(element)
                localStorage.setItem("cart_items", JSON.stringify(cartitom))
              })

        subdiv2.append(name,rating, line,price,offerprice,save,button)
        main_div.append(subdiv1,subdiv2)
        container.append(main_div)
      

    });
}

import{footer} from "./footer.js"
document.getElementById("footer_part").innerHTML=footer()