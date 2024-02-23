const red = document.getElementById("red");

const yellow = document.getElementById("yellow");

const green = document.getElementById("green");

const output = document.getElementById("output");

function showRed(){
    red.style.opacity = 1;
    yellow.style.opacity = 0.3;
    green.style.opacity = 0.3;
    output.innerHTML = "<h1>STOP!</h1>";
    setTimeout(showYellow, 3000);
}

function showYellow(){
    red.style.opacity = 0.3;
    yellow.style.opacity = 1;
    green.style.opacity = 0.3;
    output.innerHTML = "<h1>READY!!</h1>";
    setTimeout(showGreen, 5000);
}

function showGreen(){
    red.style.opacity = 0.3;
    yellow.style.opacity = 0.3;
    green.style.opacity = 1;
    output.innerHTML = "<h1>GO!!!</h1>";
    setTimeout(showRed, 5000);
}

showRed();
