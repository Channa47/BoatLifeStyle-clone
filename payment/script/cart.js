var mainbox=document.querySelector("#vary");
    // displaydata(cartdata);
   var totalprice=0;
   var productTotal=0;
    var cartdata=JSON.parse((localStorage.getItem("cartpage")))||[];
    console.log(cartdata);
    function displaydata(productData)
    {   mainbox.innerHTML="";
        totalprice=0;
        document.querySelector("#Totalpriceof").innerHTML="₹ "+"";
        productData.forEach( function(elem,index) {
            productTotal=0;
            var counter=elem.quantity;
            var product =document.createElement("div");
            product.setAttribute("id","product");
            var div1=document.createElement("div");
            div1.setAttribute("id","div1");
            var div2=document.createElement("div");
            div2.setAttribute("id","div2");
            var div3=document.createElement("div");
            div3.setAttribute("id","div3");
            var div4=document.createElement("div");
            div4.setAttribute("id","div4");
            var div5=document.createElement("div");
            div5.setAttribute("id","div5");
            var img=document.createElement("img");
            img.setAttribute("src",elem.pimg);
            var name=document.createElement("h1");
            name.innerText=elem.pname;
            name.style.color="white";
            var price=document.createElement("h4");
            price.innerText="₹ "+elem.pcost;
            price.style.color="white";
            var h2=document.createElement("h2");
            h2.innerText=counter;
            h2.style.color="gray";
            var increament=document.createElement("button");
            increament.innerText="+"
            increament.addEventListener("click",function(){
                countvalueplus(index,h2)
            })
            var decreament=document.createElement("button");
            decreament.innerText="-"
            decreament.addEventListener("click",function(){
                countvalueminus(index,h2)
            });
            console.log(counter);
            elem.quantity=counter;
            localStorage.setItem("cartpage",JSON.stringify(cartdata));
            productTotal=Number(productTotal)+Number(h2.innerText)*(elem.pcost);
            totalprice+=+productTotal;
            var button=document.createElement("button");
            button.innerText="Remove";
            button.addEventListener("click",function(){
                      Deletetocart(elem.productID);
            });
            productTotal="₹ "+productTotal;
            div1.append(img);
            div2.append(name,price);
            div5.append(decreament,h2,increament);
            div3.append(div5,button);
            div4.append(productTotal);
            product.append(div1,div2,div3,div4);
            mainbox.append(product);
        });
        document.querySelector("#Totalpriceof").append(totalprice);
        console.log(totalprice);
    }
    function countvalueplus(index,h2)
    {
        console.log(cartdata[index].quantity);
        cartdata[index].quantity++;
        localStorage.setItem("cartpage",JSON.stringify(cartdata));
        displaydata(cartdata);
        console.log("inside ");

        console.log(cartdata[index].quantity);
    }
    function countvalueminus(index,h2)
    {
        if(cartdata[index].quantity==1) return;
        cartdata[index].quantity--;
        localStorage.setItem("cartpage",JSON.stringify(cartdata));
        displaydata(cartdata);
        console.log("inside ");
        console.log(cartdata[index].quantity);
    }
    displaydata(cartdata);
    function Deletetocart(id)
    {
        var Deleted=cartdata.filter(function(elem){
            return id!==elem.productID;
        });
        console.log(Deleted,id);
        console.log(cartdata);
        cartdata=Deleted;
        localStorage.setItem("cartpage",JSON.stringify(cartdata));
        displaydata(cartdata);
    }