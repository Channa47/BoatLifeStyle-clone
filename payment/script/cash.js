
 let arr=JSON.parse(localStorage.getItem("cart_items")) ||[];
function setData(m,a,p,r,n){
    this.mobile=m;
    this.area=a;
    this.pin=p;
    this.road=r;
    this.name=n;
}
function getdata(){
    let mob=document.getElementById("mobile").value;
    let area=document.getElementById("area").value;
    let pincode=document.getElementById("pin").value;
    let road=document.getElementById("road").value; 
    let name=document.getElementById("name").value;
    let vala= new setData(mob,area,pincode,road,name)
    console.log(vala)
    
   if(mob=="", area=="",name=="" || pincode=="" ,road==""){
    alert("fill all details ")
   }
   else{
    alert("order complate whithin 5-6 day deliver ")
    window.location.href="index.html"
   }
   localStorage.setItem("cart_items",JSON.stringify(vala))
}