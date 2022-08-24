let main_navbar = ()=>{
    return `<div><img id="boat_icon" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_200x_200x_f9c79bf9-9c9a-477d-ab6a-7c889a1f2f70_170x.png?v=1646731229" alt=""></div>
    <div id="btn_div">
       <button id="Shop_btn">Shop &#9660;</button>
        <button>
            <a href="">Daily deals</a>
        </button>
        <button>
            <a href="">Offer zones </a></button>
        <button id="more_btn">
            <a href="">More &#9660;</a>
        </button>
    </div>
    <div id="input_div">
        <input type="text" placeholder="&#x1F50E; Search..." id="input">
    </div>
    <div id="l_g_c_btns">
        <button><a href="">&#128100;</a></button>
        <button><a href=""></a>&#127873;</button>
        <button><a href=""></a>&#128722;</button>
    </div>`
}

export default main_navbar;


// stept 1 :- ADD a div in ur page with id as "main_navbar";
// step 2 :- add the below code in js file
// -------------------------------------------------------
//import main_navbar from "./components.js";
// let container = document.getElementById("main_navbar");
// let navbar = main_navbar();
// container.innerHTML = navbar;
// --------------------------------------------------------