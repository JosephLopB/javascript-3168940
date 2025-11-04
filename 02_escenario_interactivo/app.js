const glob = document.querySelectorAll('.asset');
const conter = document.querySelector('#contador');
let cri1 = document.querySelector(".azul");
let cri2 = document.querySelector(".mariposa");
let cri3 = document.querySelector(".abeja");
let cri4 = document.querySelector(".pato");
let cri5 = document.querySelector(".murcielago");

let s1 = document.querySelector(".sAzul");
let s2 = document.querySelector(".sMurci");
let s3 = document.querySelector(".sAbej");
let s4 = document.querySelector(".sPato");
let s5 = document.querySelector(".sMaripo");

let i = 0;

function sumarContador() {
  i++;
  conter.textContent = i;
}

console.log(glob);

glob.forEach( item => {
  item.addEventListener("click", sumarContador)
  } )

cri1.addEventListener("click", () => {
    cri1.classList.add("desaparecer");
    s1.play();
  });

cri2.addEventListener("click", () => {
    cri2.classList.add("desaparecer");
    s5.play();
  });

cri3.addEventListener("click", () => {
    cri3.classList.add("desaparecer");
    s3.play();
  });

cri4.addEventListener("click", () => {
    cri4.classList.add("desaparecer");
    s4.play();
  });

  cri5.addEventListener("click", () => {
    s2.play();
  });

  /* vacas */

  const v1 = document.querySelector('.vaca1');
const v2 = document.querySelector('.vaca2');
const v3 = document.querySelector('.vaca3');
const v4 = document.querySelector('.vaca4');
const v5 = document.querySelector('.vaca5');
const v6 = document.querySelector('.vaca6');
const vCont = document.querySelector('#contador_v');

let sVac = document.querySelector(".sVac");
let sVac1 = document.querySelector(".sVac2");
let sVac2 = document.querySelector(".sVac1");

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
    sVac2.play();
  });

v2.addEventListener("click", () => {
    v2.classList.add("desvanecer");
    sVac.play();
  });

v3.addEventListener("click", () => {
    v3.classList.add("desvanecer");
    sVac2.play();
  });

v4.addEventListener("click", () => {
    v4.classList.add("desvanecer");
    sVac1.play();
  });

v5.addEventListener("click", () => {
    v5.classList.add("desvanecer");
    sVac2.play();
  });

v6.addEventListener("click", () => {
    v6.classList.add("desvanecer");
    sVac1.play();
  });

 /*  Planetas */

const pl1 = document.querySelector(".planet1");
const pl2 = document.querySelector(".planet2");
const pl3 = document.querySelector(".planet3");
const pl4 = document.querySelector(".planet4");
const pl5 = document.querySelector(".planet5");
const pl6 = document.querySelector(".planet6");

let sfx_pl = document.querySelector(".sPlanet");
let sfx_pl1 = document.querySelector(".sPlanet2");
let sfx_pl2 = document.querySelector(".sPlanet3");

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
    sfx_pl.play();
  });

pl2.addEventListener("click", () => {
    pl2.classList.add("desaparecer");
    sfx_pl2.play();
  });

pl3.addEventListener("click", () => {
    pl3.classList.add("desaparecer");
    sfx_pl.play();
  });

pl4.addEventListener("click", () => {
    pl4.classList.add("desaparecer");
    sfx_pl1.play();
  });

  pl5.addEventListener("click", () => {
    pl5.classList.add("desaparecer");
    sfx_pl1.play();
  });

  pl5.addEventListener("click", () => {
    pl5.classList.add("desaparecer");
    sfx_pl2.play();
  });

/*   Animar escenarios */

const escena = document.querySelectorAll(".escena");
const nx = document.querySelector("#next-btn");
const bk = document.querySelector("#prev-btn");
const miniaturas = document.querySelectorAll(".pnt")
let indice = 0;

let sb = document.querySelector(".pop")

console.log(escena)
console.log(nx)
console.log(bk)
console.log(miniaturas)

/* funciones */
function cambiarEsc(m){
  /* asigna la escena a todas las pantallas */
  for (let f = 0; f < escena.length; f++) {
    escena[f].classList.remove("activa")
    miniaturas[f].classList.remove("active")

  }

escena[m].classList.add("activa")
miniaturas[m].classList.add("active")
indice[m]

}

cambiarEsc(0);

bk.addEventListener("click", function(){
  indice = indice - 1
  if(indice < 0){
    indice = escena.length - 1
  }
  sb.play();
  cambiarEsc(indice)

})

nx.addEventListener("click", function(){
  indice = indice + 1
  if(indice >= escena.length){
    indice = 0
  }
  sb.play();
  cambiarEsc(indice)

})

/* miniaturas */

miniaturas.forEach(function(miniaturas,i){
  miniaturas.addEventListener("click", function(){
    cambiarEsc(i);
    sb.play();
  })
});

cambiarEsc(0);