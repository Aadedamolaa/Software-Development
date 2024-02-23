const WeightInput = document.getElementById("Weight");

const button = document.getElementById("btn");

const output = document.getElementById("output");

const form = document.getElementById("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let gweight = WeightInput.value * 1000;
    output.innerHTML = gweight;
})

