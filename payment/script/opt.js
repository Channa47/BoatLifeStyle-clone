let user_details=JSON.parse(localStorage.getItem("user_details"));

let card_number="123451234512345";
let cvv="123"
if(card_number==user_details[0].card_number || cvv==user_details[0].cvv){
    alert("Please enter your OTP: 1234 to confirm your order");
}else{
    alert("Details are invalid. Please check again");
    window.location.href="payment.html";
}

document.querySelector("form").addEventListener("submit", finalOutput);

function finalOutput() {
    event.preventDefault();
    let otp = document.querySelector("#otp").value;
    if (otp == "1234") {
        alert("Order placed successfully, it will be delivered to your within 7-10 busines days."); 
        localStorage.removeItem("cart_data");
        // localStorage.removeItem("cart_total");
        // localStorage.removeItem("user_details");
        window.location.replace(""); // index ka link dena hai (../index.html)
    } 
    else alert("Invalid OTP, please enter the correct OTP!");
}
// finalOutput()