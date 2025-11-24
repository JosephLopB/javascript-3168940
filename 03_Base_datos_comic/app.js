const infoComic = document.querySelector(".hero-content")

infoComic.innerHTML = "";
console.log(comic.general)

infoComic.innerHTML = `
            <div class="hero-text">
                <h1>${comic.nombreComic}</h1>
                <p>${comic.sipnosis}</p>
                <button class="cta-button">Ver Comic</button>
            </div>
            <div class="hero-image">
                <div class="hero-image-placeholder"  style="background-image:url(${comic.portada})"></div> 
            </div>
    `

const imgPort = document.querySelector(".hero-image")

const cardPersonajes = document.querySelector(".card-personaje")

cardPersonajes.innerHTML = "";
console.log(comic.pesonajes)

comic.personajes.forEach( char => {
    const div = document.createElement("div")
    div.classList.add("personaje")
    div.innerHTML = `
    <img src="${char.imagen}" alt="">
    <h3>${char.nombre}</h3>
    <p>${char.descripción}</p>
    `

    cardPersonajes.appendChild(div)
    
});


const cardChapters = document.querySelector(".card-chapter")

cardChapters.innerHTML = "";
console.log(comic.capitulos)

comic.capitulos.forEach( char => {
    const div = document.createElement("div")
    div.classList.add("cap")
    div.innerHTML = `
    <h3>${char.nombre}</h3>
    <p>${char.descripcion}</p>
    `

    cardChapters.appendChild(div)
});