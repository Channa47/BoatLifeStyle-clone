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
        img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_72207866-b34c-4b47-885d-998168d62245_400x.png?v=1648108781",
        img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        title:"TRebl boAt Smart Watches 131",
        rating:"4.6",
        reviews:"1112",
        price:1699,
        discountprice:"2990",
        save:"1891",
        quantity:1,
    },
    {
        label:"You save 60%",
        img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_86ea6392-558a-4943-ab86-f9f12fe8f4d9_400x.png?v=1646393709",
        img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        title:"boAt Smart Watches 411 ANC",
        rating:"4.8",
        reviews:"56",
        price:1999,
        discountprice:"4990",
        save:"2991",
        quantity:1,
    },

      {
        label:"NEW",
        img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_57e6221e-9677-434f-9175-f9051bc30c58_400x.png?v=1646027001",
        img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        title:"boAt Smart Watches 121 PRO",
        rating:"4.8",
        reviews:"565",
        price:1399,
        discountprice:"2990",
        save:"1591",
        quantity:1,
    },
    {
        label:"You save 73%",
        img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Untitled-5_400x.png?v=1658294451",
        img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        title:"boAt Smart Watches 402 - Wireless...",
        rating:"4.8",
        reviews:467,
        price:1599,
        discountprice:"5990",
        save:"4391",
        quantity:1,
    },
    {
        label:"You save 57%",
        img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_529ecf13-c993-4fe7-a2d6-9357f1a47db4_400x.png?v=1650387008",
        img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        title:"boAt Smart Watches 151 - Wireless...",
        rating:"4.9",
        reviews:"72",
        price:1299,
        discountprice:"2990",
        save:"1691",
        quantity:1,
    },
    {
        label:"TRENDING",
        img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e7910a39-186a-41f6-ac57-fc3e84108104_400x.png?v=1625045106",
        img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        title:"boAt Smart Watches 151 - Wireless...",
        rating:"4.8",
        reviews:"1112",
        price:1049,
        discountprice:"2990",
        save:"1891",
        quantity:1,
    },

    {
        label:"You save 58%",
        img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/black2_400x.png?v=1654312291",
        img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        title:"boAt Smart Watches 131 DC Edition",
        rating:"4.8",
        reviews:"1112",
        price:1440,
        discountprice:"2990",
        save:"1891",
        quantity:1,
    },
    {
        label:"You save 28%",
        img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-images_400x.png?v=1655198531",
        img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        title:"boAt Smart Watches 141 - Wireless...",
        rating:"4.8",
        reviews:"1112",
        price:1500,
        discountprice:"2990",
        save:"1891",
        quantity:1,
    },
    {
        label:"You save 58%",
        img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9da7e1ae-89f2-42c4-9714-76ac5ec83817_400x.png?v=1625045743",
        img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        title:"boAt Smart Watches 131 - Wireless...",
        rating:"4.8",
        reviews:"1112",
        price:1299,
        discountprice:"2990",
        save:"1691",
        quantity:1,
    },
    {
        label:"You save 52%",
        img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_d2f6ad16-c97c-4600-88c1-b835fd58c647_400x.png?v=1646394582",
        img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        title:"boAt Smart Watches 131 - Wireless...",
        rating:"4.8",
        reviews:"1112",
        price:1500,
        discountprice:"2990",
        save:"1891",
        quantity:1,
    },
    {
        label:"You save 28%",
        img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3-2_400x.png?v=1653637007",
        img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        title:"boAt Smart Watches 101 .",
        rating:"4.8",
        reviews:"1112",
        price:1500,
        discountprice:"2990",
        save:"1891",
        quantity:1,
    },
    {
        label:"You save 58%",
        img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-4_1_400x.png?v=1656016935",
        img2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        title:"boAt Smart Watches 111 - Wireless...",
        rating:"4.8",
        reviews:"1112",
        price:1500,
        discountprice:"2990",
        save:"1891",
        quantity:1,
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
        img1.src=element.img;
        let img2 = document.createElement("img")
        img2.src = element.img2
        subdiv1.append(labeldiv,img1)



        let subdiv2 = document.createElement("div")
        subdiv2.setAttribute("id","subdiv2")
        let title = document.createElement("h4")
        title.innerText = element.title;
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

        subdiv2.append(title,rating, line,price,offerprice,save,button)
        main_div.append(subdiv1,subdiv2)
        container.append(main_div)
      

    });
}

//footer.js

import{footer} from "./footer.js"
document.getElementById("footer_part").innerHTML=footer()