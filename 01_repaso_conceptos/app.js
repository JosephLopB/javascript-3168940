let bn = document.querySelector("#btn1");
let blr = document.querySelector("#btn2");
let rt = document.querySelector("#btn3");

let img = document.querySelector("#img1");



bn.addEventListener("click", function() {
    img.style.filter = "grayscale(100%)";
    console.log("hola");
});

blr.addEventListener("click", function() {
    img.style.filter = "blur(5px)";
    console.log("hola2");
});

rt.addEventListener("click", function() {
    img.style.transform = "rotate(90deg)";
    console.log("hola3");
});