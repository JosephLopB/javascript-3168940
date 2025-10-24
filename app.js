const glob = document.querySelectorAll('.asset');
const conter = document.querySelector('#contador');
let cri1 = document.querySelector(".azul");
let cri2 = document.querySelector(".mariposa");
let cri3 = document.querySelector(".abeja");
let cri4 = document.querySelector(".pato");
let cri5 = document.querySelector(".murcielago");

let i = 0;

function sumarContador() {
  i++;
  conter.textContent = i;
}

console.log(glob);

glob.forEach( item => {
  console.log("item", item);
  } )

cri1.addEventListener("click", sumarContador);
cri2.addEventListener("click", sumarContador);
cri3.addEventListener("click", sumarContador);
cri4.addEventListener("click", sumarContador);
cri5.addEventListener("click", sumarContador);

cri1.addEventListener("click", () => {
    cri1.classList.add("desaparecer");
  });

cri2.addEventListener("click", () => {
    cri2.classList.add("desaparecer");
  });

cri3.addEventListener("click", () => {
    cri3.classList.add("desaparecer");
  });

cri4.addEventListener("click", () => {
    cri4.classList.add("desaparecer");
  });

  /* vacas */

  const v1 = document.querySelector('.vaca1');
const v2 = document.querySelector('.vaca2');
const v3 = document.querySelector('.vaca3');
const v4 = document.querySelector('.vaca4');
const v5 = document.querySelector('.vaca5');
const v6 = document.querySelector('.vaca6');
const vCont = document.querySelector('.cont');

let j = 0;

function sumarVacas() {
  j++;
  vCont.textContent = j;
}

v1.addEventListener("click", sumarVacas);
v2.addEventListener("click", sumarVacas);
v3.addEventListener("click", sumarVacas);
v4.addEventListener("click", sumarVacas);
v5.addEventListener("click", sumarVacas);
v6.addEventListener("click", sumarVacas);

v1.addEventListener("click", () => {
    v1.classList.add("desvanecer");
  });

v2.addEventListener("click", () => {
    v2.classList.add("desvanecer");
  });

v3.addEventListener("click", () => {
    v3.classList.add("desvanecer");
  });

v4.addEventListener("click", () => {
    v4.classList.add("desvanecer");
  });

v5.addEventListener("click", () => {
    v5.classList.add("desvanecer");
  });

v6.addEventListener("click", () => {
    v6.classList.add("desvanecer");
  });

 /*  Planetas */

const pl1 = document.querySelector(".planet1");
const pl2 = document.querySelector(".planet2");
const pl3 = document.querySelector(".planet3");
const pl4 = document.querySelector(".planet4");
const pl5 = document.querySelector(".planet5");
const pl6 = document.querySelector(".planet6");

let x = 0;

  function sumarContador_g() {
  x++;
  contador_g.textContent = x;
}

pl1.addEventListener("click", sumarContador_g);
pl2.addEventListener("click", sumarContador_g);
pl3.addEventListener("click", sumarContador_g);
pl4.addEventListener("click", sumarContador_g);
pl5.addEventListener("click", sumarContador_g);
pl6.addEventListener("click", sumarContador_g);

pl1.addEventListener("click", () => {
    pl1.classList.add("desaparecer");
  });

pl2.addEventListener("click", () => {
    pl2.classList.add("desaparecer");
  });

pl3.addEventListener("click", () => {
    pl3.classList.add("desaparecer");
  });

pl4.addEventListener("click", () => {
    pl4.classList.add("desaparecer");
  });

  pl5.addEventListener("click", () => {
    pl5.classList.add("desaparecer");
  });

  pl5.addEventListener("click", () => {
    pl5.classList.add("desaparecer");
  });