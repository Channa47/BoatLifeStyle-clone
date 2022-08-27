
let user_details=JSON.parse(localStorage.getItem("cart_items")) || []

let open_manual=()=>{
        document.getElementById("manual").style.display="block";
}
document.getElementById("open_manual").addEventListener("click",open_manual);



let submit=()=>{

        // if(document.getElementById("cvv_i").value!="123"){
        //         alert("Please fill correct details");
        // }else{

       

        if(
                document.getElementById("full_name").value!="" &&
                document.getElementById("address").value!="" &&
                document.getElementById("apartment").value!="" &&
                document.getElementById("town_city").value!="" &&
                document.getElementById("state").value!="" &&
                document.getElementById("zipcode").value!="" &&
                document.getElementById("contact").value!="" &&
                document.getElementById("name_on_card").value!="" &&
                document.getElementById("card_number").value!="" &&
                document.getElementById("cvv_i").value!=""
        ){
                let user_obj={
                        name:document.getElementById("name_on_card").value,
                        contact:document.getElementById("contact").value,
                        card_number:document.getElementById("card_number").value,
                        cvv:document.getElementById("cvv_i").value
                }

                user_details[0]=user_obj;

                localStorage.setItem("cart_items",JSON.stringify(user_details));
                
                
                alert("payment proseccing")
                window.location.href = "opt.html";
               
        } else {
                alert("Please fill all the required information");
              }


        // }
          
}


document.getElementById("button").addEventListener("click",submit)


let cart_data=JSON.parse(localStorage.getItem("cart_data"));



let append=()=>{
        let count=0;
        let total=0;


        cart_data.forEach((el)=>{
                let div=document.createElement("div");
                div.setAttribute("class","small_order_div");


                let order_image_div=document.createElement("div");
                order_image_div.setAttribute("class","order_image_div");

                let order_details_div=document.createElement("div");
                order_details_div.setAttribute("class","order_details_div");

                let image=document.createElement("img");
                image.src=el.image;
                image.setAttribute("class","order_image");

                let name=document.createElement("p");
                name.innerText=el.name;
                name.setAttribute("class","order_product_name");

                let qty_div=document.createElement("div");
                qty_div.setAttribute("class","order_quantity_div");
                qty_div.innerText=`Quantity: ${el.quantity}`;

                let price=document.createElement("p");
                price.setAttribute("class","order_price");
                price.innerText=`$ ${el.price}`;

                order_image_div.append(image);
                order_details_div.append(name,qty_div,price);
                div.append(order_image_div,order_details_div)
                document.getElementById("item_list").append(div);

                count+=el.quantity;
                total+=el.quantity*el.price;
                console.log("total",total)
        });

        document.getElementById("item_count").innerText=count +" items";
        // document.getElementById("total_price").innerText=`$ ${total}`
        let finalprice=JSON.parse(localStorage.getItem("cart_total"));
        document.getElementById("total_price").innerText=`$ ${finalprice}`

}

append();