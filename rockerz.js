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
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_400x.png?v=1625045114",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"TRebl boAt Headphone 131",
        rating:"4.6",
        reviews:"1112",
        price:1699,
        discountprice:"2990",
        save:"1891",
    },
    {
        label:"You save 60%",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_4_400x.png?v=1655719698",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"boAt Headphone 411 ANC",
        rating:"4.8",
        reviews:"56",
        price:1999,
        discountprice:"4990",
        save:"2991",
    },

      {
        label:"NEW",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/35ca6350-d6f3-4bc2-a742-01b2c88d80c4_200x.png?v=1625552657",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"boAt Headphone 121 PRO",
        rating:"4.8",
        reviews:"565",
        price:1399,
        discountprice:"2990",
        save:"1591",
    },
    {
        label:"You save 73%",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_15634ca0-9f81-4d11-b891-9a1496f709b1_300x.png?v=1641801688",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"boAt Headphone 402 - Wireless...",
        rating:"4.8",
        reviews:467,
        price:1599,
        discountprice:"5990",
        save:"4391",
    },
    {
        label:"You save 57%",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/6b237ddc-f894-4dfd-a474-2435f93e6611_300x.png?v=1625046507",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"boAt Headphone 151 - Wireless...",
        rating:"4.9",
        reviews:"72",
        price:1299,
        discountprice:"2990",
        save:"1691",
    },
    {
        label:"TRENDING",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_300x.png?v=1641801662",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"boAt Headphone 151 - Wireless...",
        rating:"4.8",
        reviews:"1112",
        price:1049,
        discountprice:"2990",
        save:"1891",
    },

    {
        label:"You save 58%",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/756866f0-25e4-4b5d-8b7c-546c2111da69_300x.png?v=1625045615",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"boAt Headphone 131 DC Edition",
        rating:"4.8",
        reviews:"1112",
        price:1440,
        discountprice:"2990",
        save:"1891",
    },
    {
        label:"You save 28%",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_300x.png?v=1625046144",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"boAt Headphone 141 - Wireless...",
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
        name:"boAt Headphone 131 - Wireless...",
        rating:"4.8",
        reviews:"1112",
        price:1299,
        discountprice:"2990",
        save:"1691",
    },
    {
        label:"You save 52%",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_300x.png?v=1625045744",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"boAt Headphone 131 - Wireless...",
        rating:"4.8",
        reviews:"1112",
        price:1500,
        discountprice:"2990",
        save:"1891",
    },
    {
        label:"You save 28%",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/709d5346-3135-495f-ba7b-80fae784af83_300x.png?v=1625045493",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"boAt Headphone 101 .",
        rating:"4.8",
        reviews:"1112",
        price:1500,
        discountprice:"2990",
        save:"1891",
    },
    {
        label:"You save 58%",
        Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3b9db779-1d2f-4d55-a264-788c1eaba5ec_300x.png?v=1625046595",
        Image2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_400x.png?v=1642405569",
        name:"boAt Headphone 111 - Wireless...",
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
