const bulb = document.getElementById("bulb");

const button = document.getElementById("btn");

// const button1 = document.getElementById("btn1");

button.addEventListener("click", SwitchOn);
function SwitchOn(){
    if(bulb.style.backgroundColor === "orange"){
        bulb.style.backgroundColor = "transparent";
    } else {
        bulb.style.backgroundColor = "orange";
    }

}

// button1.addEventListener("click", SwitchOn1);
// function SwitchOn1(){
//    bulb.style.backgroundColor = "black"
// }