// VARIABLES:

// Botones:

const btnPersonaje = document.querySelector('#seleccionar');
const btnReiniciar = document.querySelector('#reiniciar');


// Seleccionar Personaje Jugador:

const sectionSeleccionarPersonaje = document.querySelector('#seleccionar-personaje');
const spanPersonajeJugador = document.querySelector('#personaje-jugador');

// Seleccionar Personaje Enemigo:

const spanPersonajeEnemigo = document.querySelector('#personaje-enemigo');
const parrafoSection = document.querySelector('#parrafos-section');

// Pantalla Batalla

const divImgJugador = document.querySelector('#divImgJugador');
const divImgEnemigo = document.querySelector('#divImgEnemigo');

// Span Vidas:

const spanVidasJugador = document.querySelector('#vidas-jugador');
const spanVidasEnemigo = document.querySelector('#vidas-enemigo');

// Modales y Alertas: 

const main = document.querySelector('#main');
const modal = document.createElement('div');
const h2Modal = document.createElement('h2');
const divAtaquesJugador = document.querySelector('#divAtaquesJugador');
const divAtaquesEnemigo = document.querySelector('#divAtaquesEnemigo');

const modalNoSelect = document.createElement('div');
const h2ModalNoSelect = document.createElement('h2');
const resetGame = document.createElement('button');
const popup = document.querySelector('#modal-container');
const modalFinalJuego = document.createElement('div');


// CANVAS:

const canva = document.querySelector('#canvas');
const sectionVerMapa = document.querySelector('#ver-mapa');
const nombrePersonaje = document.querySelector('#nombre-personaje');
const imgMapaSection = document.querySelector('#mapa-section__img');
const h1 = document.querySelector('.h1');
const controlButtons = document.querySelectorAll('.btn-control');
const anchoMaximoDelMapa = 350;
let alturaQueBuscamos;
let anchoDelMapa = window.innerWidth - 20;

alturaQueBuscamos = anchoDelMapa * 600 / 1200;
canva.width = anchoDelMapa;
canva.height = alturaQueBuscamos;

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20;
}

// BATALLA:

// Resultados Juego:

const empate = 'EMPATE 🙅🏽';
const ganaste = 'GANASTE 💪🏼';
const perdiste = 'PERDISTE 🙈';
const mensajeVictoria = 'Has Ganado, enhorabuena 🥳';
const mensajeDerrota = 'Has perdido... 😭';
const mensajeEmpate = 'Empate... 🙈';
const resultadoAtaque = document.querySelector('#resultadoAtaque');


// Ataques Enemigos:

const demoDogAttack = '🐾';
const demoGorgonAttack = '🌪';
const mindFlayerAttack = '⚡️';
const vecnaAttack = '☄️';


// Nombres Ataques Botones + ID:

const fuego = 'Fuego 🔥';
const agua = 'Agua 💧';
const tierra = 'Tierra 🌱';
const dinamita = 'Dinamita 🧨';
const bicicleta = 'Bicicleta 🚲';
const frisbi = 'Frisbi 🥏';
const pelota = 'Pelota 🏀';
const mental = 'Mental 🙅🏻';
const brujula = 'Brújula 🧭';
const dibujo = 'Dibujar ✍🏼';


// Nombres Ataques IU:

const fuegoAtaque = fuego.replace('Fuego', '');
const aguaAtaque = agua.replace('Agua', '');
const tierraAtaque = tierra.replace('Tierra', '');
const dinamitaAtaque = dinamita.replace('Dinamita', '');
const bicicletaAtaque = bicicleta.replace('Bicicleta', '');
const frisbiAtaque = frisbi.replace('Frisbi', '');
const pelotaAtaque = pelota.replace('Pelota', '');
const mentalAtaque = mental.replace('Mental', '');
const brujulaAtaque = brujula.replace('Brújula', '');
const dibujoAtaque = dibujo.replace('Dibujar', '');

// Variables para el Backend:

let jugadorId = null;
let listaPersonajesEnemigos = [];

// Lienzo:

let lienzo = canva.getContext('2d');

// Botones Ataques:

let btnFuego;
let btnAgua;
let btnTierra;
let btnDinamita;
let btnBicicleta;
let btnFrisbi;
let btnPelota;
let btnMental;
let btnBrujula;
let btnDibujo;
let buttons = [];


// Variables para los ataques del juego:

let personajes = [];
let enemigos = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let resultado;
let vidasJugador = 5;
let vidasEnemigo = 5;
let victoriasJugador = 0;
let victoriasEnemigo = 0;


// Opciones para el HTML:

const contenedorPersonajes = document.querySelector('#label-container');
const ataqueSection = document.querySelector('#seleccionar-ataque');

let opcionDePersonajes;
let inputDustin;
let inputLucas;
let inputOnce;
let inputMike
let inputWill
let navbar;
let personajeJugador;
let ataquesPersonajes;
let ataquesPersonajeEnemigo;
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let intervalo;
let mapaBackground = new Image();
mapaBackground.src = '/assets/img/background.jpg';
let miPersonajeEnElMapa;
let enemigoEnElMapa;


// CLASSES & OBJECTS:


// Personajes:

class Personajes {
    constructor(nombre, vida, img) {
        this.nombre = nombre;
        this.vida = vida;
        this.img = img;
        this.ataques = [];
        this.width = 180;
        this.height = 180;
        this.x = aleatorio(0, canva.width - this.width);
        this.y = aleatorio(0, canva.height - this.height);
        this.mapaFoto = new Image();
        this.mapaFoto.src = img;
        this.speedX = 0;
        this.speedY = 0;
    }

    pintarPersonaje() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}

let dustin = new Personajes('Dustin', 5, '/assets/img/dustin.png');
let lucas = new Personajes('Lucas', 5, '/assets/img/lucas.png');
let once = new Personajes('Once', 5, '/assets/img/eleven.png');
let mike = new Personajes('Mike', 5, '/assets/img/mike.png');
let will = new Personajes('Will', 5, '/assets/img/will.png');

const DUSTIN_ATAQUES = [
    { nombre: agua, id: 'btn-agua' },
    { nombre: agua, id: 'btn-agua' },
    { nombre: agua, id: 'btn-agua' },
    { nombre: tierra, id: 'btn-tierra' },
    { nombre: fuego, id: 'btn-fuego' }
]

dustin.ataques.push(...DUSTIN_ATAQUES);

const LUCAS_ATAQUES = [
    { nombre: tierra, id: 'btn-tierra' },
    { nombre: tierra, id: 'btn-tierra' },
    { nombre: tierra, id: 'btn-tierra' },
    { nombre: agua, id: 'btn-agua' },
    { nombre: fuego, id: 'btn-fuego' }
]

lucas.ataques.push(...LUCAS_ATAQUES);

const ONCE_ATAQUES = [
    { nombre: fuego, id: 'btn-fuego' },
    { nombre: fuego, id: 'btn-fuego' },
    { nombre: fuego, id: 'btn-fuego' },
    { nombre: agua, id: 'btn-agua' },
    { nombre: tierra, id: 'btn-tierra' }
]

once.ataques.push(...ONCE_ATAQUES);

const MIKE_ATAQUES = [
    { nombre: agua, id: 'btn-agua' },
    { nombre: fuego, id: 'btn-fuego' },
    { nombre: agua, id: 'btn-agua' },
    { nombre: tierra, id: 'btn-tierra' },
    { nombre: tierra, id: 'btn-tierra' }
]

mike.ataques.push(...MIKE_ATAQUES);

const WILL_ATAQUES = [
    { nombre: tierra, id: 'btn-tierra' },
    { nombre: agua, id: 'btn-agua' },
    { nombre: fuego, id: 'btn-fuego' },
    { nombre: agua, id: 'btn-agua' },
    { nombre: tierra, id: 'btn-tierra' }
]

will.ataques.push(...WILL_ATAQUES);


personajes.push(dustin, once, lucas, mike, will);


// Enemigos:

class Enemigos {
    constructor(nombre, img, id = null) {
        this.id = id;
        this.nombre = nombre;
        this.img = img;
        this.attacks = [];
        this.x = aleatorio(0, canva.width - this.width);
        this.y = aleatorio(0, canva.height - this.height);
        this.width = 250;
        this.height = 250;
        this.mapaFoto = new Image();
        this.mapaFoto.src = img;
    }

    pintarEnemigo() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}

let demoDog = new Enemigos('Demodog', '/assets/img/demodog.png');
let demoGorgon = new Enemigos('Demogorgon', '/assets/img/demogorgon.png');
let mindFlayer = new Enemigos('Mind Flayer', '/assets/img/mindflayer.png');
let vecna = new Enemigos('Vecna', '/assets/img/vecna.png');

const DEMODOG_ATAQUES = [
    { nombre: tierra },
    { nombre: tierra },
    { nombre: tierra },
    { nombre: agua },
    { nombre: agua }
]

demoDog.attacks.push(...DEMODOG_ATAQUES);

const DEMOGORGON_ATAQUES = [
    { nombre: agua },
    { nombre: agua },
    { nombre: fuego },
    { nombre: fuego },
    { nombre: tierra }
]

demoGorgon.attacks.push(...DEMOGORGON_ATAQUES);

const MINDFLAYER_ATAQUES = [
    { nombre: fuego },
    { nombre: fuego },
    { nombre: tierra },
    { nombre: agua },
    { nombre: agua }
]

mindFlayer.attacks.push(...MINDFLAYER_ATAQUES);

const VECNA_ATAQUES = [
    { nombre: fuego },
    { nombre: agua },
    { nombre: agua },
    { nombre: tierra },
    { nombre: tierra }
]

vecna.attacks.push(...VECNA_ATAQUES);

enemigos.push(demoDog, demoGorgon, mindFlayer, vecna);


// FUNCIONES:

function iniciarJuego() {

    // Ocultar Sección de Elegir Ataque:
    ataqueSection.style.display = 'none';

    // Ocultar Mapa:
    sectionVerMapa.style.display = 'none';

    // Ocultar Botón Reiniciar:
    btnReiniciar.style.display = 'none';

    // Método para Iterar cada uno de los Objetos del Array personajes:
    personajes.forEach(personaje => {
        opcionDePersonajes = `
        <label class="btn label" for="${personaje.nombre}">${personaje.nombre}
            <input type="radio" name="personaje" id="${personaje.nombre}">
            <img class="personaje-img" src="${personaje.img}">
        </label>
        `;

        contenedorPersonajes.innerHTML += opcionDePersonajes;

        inputDustin = document.querySelector('#Dustin');
        inputLucas = document.querySelector('#Lucas');
        inputOnce = document.querySelector('#Once');
        inputMike = document.querySelector('#Mike');
        inputWill = document.querySelector('#Will');


        // Background Seleccionar
        navbar = document.querySelector('#label-container').querySelectorAll('.label');
    });


    // Botón Seleccionar personaje:
    btnPersonaje.addEventListener('click', seleccionarPersonajeJugador);

    // Botón Reiniciar Partida    
    btnReiniciar.addEventListener('click', reiniciarPartida);

    // Efecto Botón Seleccionar personaje:

    navbar.forEach(element => {
        element.addEventListener('click', function () {

            navbar.forEach(nav => nav.classList.remove('is-active'));
            this.classList.add('is-active');
        })

    });

    unirseAlJuego();

}

// Función para el Backend:

function unirseAlJuego() {
    fetch('http://localhost:8080/unirse')
        .then(function (res) {
            if (res.ok) {
                res.text()
                    .then(function (respuesta) {
                        console.log(respuesta);
                        jugadorId = respuesta;
                    });
            }
        });
}


// Seleccionar personaje:

function seleccionarPersonajeJugador() {

    let imgPersonaje = document.createElement('img');
    imgPersonaje.classList.add('pantalla-batalla__img');
    imgMapaSection.classList.add('pantalla-batalla__img');
    divImgJugador.insertBefore(imgPersonaje, spanPersonajeJugador);

    sectionSeleccionarPersonaje.style.display = 'none';
    spanPersonajeJugador.style.textTransform = 'capitalize';
    spanPersonajeJugador.style.fontSize = '1.25rem';
    spanPersonajeJugador.style.color = 'orange'


    if (inputDustin.checked) {

        spanPersonajeJugador.textContent = inputDustin.id;
        personajeJugador = inputDustin.id;
        imgPersonaje.src = dustin.img;
        nombrePersonaje.textContent = dustin.nombre;
        imgMapaSection.src = dustin.img;

        miPersonajeEnElMapa = dustin;

        seleccionarPersonajeEnemigo();

        pintarCanvas();

    } else if (inputLucas.checked) {

        spanPersonajeJugador.textContent = inputLucas.id;
        personajeJugador = inputLucas.id;
        imgPersonaje.src = lucas.img;
        nombrePersonaje.textContent = lucas.nombre;
        imgMapaSection.src = lucas.img;

        miPersonajeEnElMapa = lucas;

        seleccionarPersonajeEnemigo();

        pintarCanvas();


    } else if (inputOnce.checked) {

        spanPersonajeJugador.textContent = inputOnce.id;
        personajeJugador = inputOnce.id;
        imgPersonaje.src = once.img;
        nombrePersonaje.textContent = once.nombre;
        imgMapaSection.src = once.img;

        miPersonajeEnElMapa = once;

        seleccionarPersonajeEnemigo();

        pintarCanvas();


    } else if (inputMike.checked) {

        spanPersonajeJugador.textContent = inputMike.id;
        personajeJugador = inputMike.id;
        imgPersonaje.src = mike.img;
        nombrePersonaje.textContent = mike.nombre;
        imgMapaSection.src = mike.img;

        miPersonajeEnElMapa = mike;

        seleccionarPersonajeEnemigo();

        pintarCanvas();

    } else if (inputWill.checked) {

        spanPersonajeJugador.textContent = inputWill.id;
        personajeJugador = inputWill.id;
        imgPersonaje.src = will.img;
        nombrePersonaje.textContent = will.nombre;
        imgMapaSection.src = will.img;

        miPersonajeEnElMapa = will;

        seleccionarPersonajeEnemigo();

        pintarCanvas();


    } else {
        noSelect('Para poder jugar, primero tienes que elegir un personaje 🙈', 'loser');
    }

    seleccionarPersonajeIdBackend(personajeJugador);

    extraerAtaques(personajeJugador);
    iniciarMapa();

}

// Función para enviar ID al servidor:

function seleccionarPersonajeIdBackend(personajeJugador) {
    fetch(`http://localhost:8080/strangerkids/${jugadorId}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            player: personajeJugador
        })
    });

}


function extraerAtaques(personajeJugador) {
    let ataques;
    for (let i = 0; i < personajes.length; i++) {
        if (personajeJugador === personajes[i].nombre) {
            ataques = personajes[i].ataques;
        };
    };

    mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {

    ataques.forEach(ataque => {
        ataquesPersonajes = `
        <button id="${ataque.id}" class="btn btn-ataque">${ataque.nombre}</button>
        `;

        ataqueSection.innerHTML += ataquesPersonajes;

    });


    btnFuego = document.querySelector('#btn-fuego');
    btnAgua = document.querySelector('#btn-agua');
    btnTierra = document.querySelector('#btn-tierra');
    btnDinamita = document.querySelector('#btn-dinamita');
    btnBicicleta = document.querySelector('#btn-bicicleta');
    btnFrisbi = document.querySelector('#btn-frisbi');
    btnPelota = document.querySelector('#btn-pelota');
    btnMental = document.querySelector('#btn-mental');
    btnBrujula = document.querySelector('#btn-brujula');
    btnDibujo = document.querySelector('#btn-dibujo');

    buttons = document.querySelectorAll('.btn-ataque');

    buttons.forEach(btn => {

        if (btn.id === 'btn-tierra') {
            btn.classList.add('tierra');
        } else if (btn.id === 'btn-agua') {
            btn.classList.add('agua');
        } else if (btn.id === 'btn-fuego') {
            btn.classList.add('fuego');
        }

    });


}

function secuenciaAtaque() {

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {

            if (e.target.textContent == fuego) {
                ataqueJugador.push(fuego);
                btn.classList.add('is-disabled');
                btn.disabled = true;
                console.log(ataqueJugador);
            } else if (e.target.textContent == agua) {
                ataqueJugador.push(agua);
                btn.classList.add('is-disabled');
                btn.disabled = true;
                console.log(ataqueJugador);
            } else if (e.target.textContent == tierra) {
                ataqueJugador.push(tierra);
                btn.classList.add('is-disabled');
                btn.disabled = true;
                console.log(ataqueJugador);
            }

            ataqueEnemigoAleatorio();
        });
    });


}


// Selección Aleatoria del Personaje del Enemigo:

function seleccionarPersonajeEnemigo() {


    spanPersonajeEnemigo.style.textTransform = 'capitalize';
    spanPersonajeEnemigo.style.fontSize = '1.25rem';
    spanPersonajeEnemigo.style.color = 'tomato'
    parrafoSection.style.display = 'none';

    let enemigoAleatorio = aleatorio(0, enemigos.length - 1);
    let imgEnemigo = document.createElement('img');
    imgEnemigo.classList.add('pantalla-batalla__img')
    divImgEnemigo.insertBefore(imgEnemigo, spanPersonajeEnemigo);

    spanPersonajeEnemigo.innerHTML = enemigos[enemigoAleatorio].nombre;
    ataquesPersonajeEnemigo = enemigos[enemigoAleatorio].attacks;
    imgEnemigo.src = enemigos[enemigoAleatorio].img;

    enemigoEnElMapa = enemigos[enemigoAleatorio];

    secuenciaAtaque();

}



// Ataque Aleatorio del Enemigo:

function ataqueEnemigoAleatorio() {

    console.log('Ataques del Enemigo', ataquesPersonajeEnemigo);

    let ataqueAleatorio = aleatorio(0, ataquesPersonajeEnemigo.length - 1);

    ataqueEnemigo.push(ataquesPersonajeEnemigo[ataqueAleatorio].nombre);

    // ataqueEnemigo.splice(ataqueAleatorio, 1);

    iniciarCombate();

}


// Iniciar Combate

function iniciarCombate() {
    if (ataqueJugador.length === 5) {
        combate();
    }
}


function indexAmbosOponentes(jugador, enemigo) {

    indexAtaqueJugador = ataqueJugador[jugador];
    indexAtaqueEnemigo = ataqueEnemigo[enemigo];

}


// Resultado Combate:

function combate() {


    for (let i = 0; i < ataqueJugador.length; i++) {

        if (ataqueJugador[i] === ataqueEnemigo[i]) {
            indexAmbosOponentes(i, i);
            crearMensaje();

        } else if (ataqueJugador[i] === fuego && ataqueEnemigo[i] === tierra || ataqueJugador[i] === agua && ataqueEnemigo[i] === fuego || ataqueJugador[i] === tierra && ataqueEnemigo[i] === agua) {
            indexAmbosOponentes(i, i);
            crearMensaje();
            victoriasJugador++;
            spanVidasJugador.textContent = victoriasJugador;

        } else {
            indexAmbosOponentes(i, i);
            crearMensaje();
            victoriasEnemigo++;
            spanVidasEnemigo.textContent = victoriasEnemigo
        }

    }

    revisarVictorias();

}

// Crear Mensajes:

function crearMensaje() {

    let nuevoAtaqueJugador = document.createElement('span');
    nuevoAtaqueJugador.classList.add('spanAtaques');
    divAtaquesJugador.appendChild(nuevoAtaqueJugador);

    let nuevoAtaqueEnemigo = document.createElement('span');
    nuevoAtaqueEnemigo.classList.add('spanAtaques');
    divAtaquesEnemigo.appendChild(nuevoAtaqueEnemigo);


    if (indexAtaqueJugador === fuego) {
        nuevoAtaqueJugador.textContent = fuegoAtaque;
    } else if (indexAtaqueJugador === agua) {
        nuevoAtaqueJugador.textContent = aguaAtaque;
    } else {
        nuevoAtaqueJugador.textContent = tierraAtaque;
    }

    if (indexAtaqueEnemigo === fuego) {
        nuevoAtaqueEnemigo.textContent = fuegoAtaque;
    } else if (indexAtaqueEnemigo === agua) {
        nuevoAtaqueEnemigo.textContent = aguaAtaque;
    } else {
        nuevoAtaqueEnemigo.textContent = tierraAtaque;
    }

}


// Revisar las vidas de la Partida:

function revisarVictorias() {
    if (victoriasJugador === victoriasEnemigo) {
        // console.log('EMPATE');
        modalFinalPartida(mensajeEmpate, 'tie');
    } else if (victoriasJugador > victoriasEnemigo) {
        // console.log('VICTORIA');
        modalFinalPartida(mensajeVictoria, 'win');
    } else {
        console.log('DERROTA');
        modalFinalPartida(mensajeDerrota, 'lose');
    }
}


// Modales para el final del Juego:

function modalFinalPartida(mensaje, tipo) {

    modalFinalJuego.classList.remove('modal-ataques');
    modalFinalJuego.style.top = 0;
    modalFinalJuego.style.left = 0;
    h2Modal.textContent = mensaje;
    resetGame.textContent = 'Jugar de nuevo 💪🏼';
    resetGame.classList.add('btn');
    modalFinalJuego.appendChild(h2Modal);
    modalFinalJuego.appendChild(resetGame);
    resetGame.addEventListener('click', reiniciarPartida);

    modalFinalJuego.classList.add('modal');
    popup.appendChild(modalFinalJuego);
    popup.classList.add('popup');

    if (tipo === 'win') {
        modalFinalJuego.classList.add('win');
    } else if (tipo === 'tie') {
        modalFinalJuego.classList.add('tie');
    } else {
        modalFinalJuego.classList.add('lose');
    }

}

// Modal Colisión:

function modalColision(mensaje) {


    modalFinalJuego.appendChild(h2Modal);
    modalFinalJuego.classList.add('modal-ataques');
    popup.appendChild(modalFinalJuego);


    if (enemigoEnElMapa.nombre === 'Vecna') {
        mensaje = 'Oh no, Vecna ha aparecido en tus sueños 🙉';
        h2Modal.textContent = mensaje;
        modalFinalJuego.classList.add('vecna');

    } else if (enemigoEnElMapa.nombre === 'Demogorgon') {
        mensaje = 'Un Demogorgon está frente a ti, prepárate 💪🏼';
        h2Modal.textContent = mensaje;
        modalFinalJuego.classList.add('demogorgon');
    } else if (enemigoEnElMapa.nombre === 'Mind Flayer') {
        mensaje = 'El Azotamentes te espera, utiliza el fuego 🔥';
        h2Modal.textContent = mensaje;
        modalFinalJuego.classList.add('mind-flayer');
    } else if (enemigoEnElMapa.nombre === 'Demodog') {
        mensaje = 'Parece pequeño, pero los Demoperros son peligrosos 🐶';
        h2Modal.textContent = mensaje;
        modalFinalJuego.classList.add('demodog');
    }

    setTimeout(() => {
        modalFinalJuego.remove();
    }, 3000);

}


function noSelect(mensaje, tipo) {

    h2ModalNoSelect.textContent = mensaje;
    resetGame.textContent = 'Elegir Personaje 😉';
    resetGame.classList.add('btn');
    modalNoSelect.appendChild(h2ModalNoSelect);
    modalNoSelect.appendChild(resetGame);
    resetGame.addEventListener('click', reiniciarPartida);

    modalNoSelect.classList.add('modal');
    popup.appendChild(modalNoSelect);
    popup.classList.add('popup');

    if (tipo === 'win') {
        modalNoSelect.classList.add('win');
    } else {
        modalNoSelect.classList.add('lose');
    }
}


// Función para números aleatorios:

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Reiniciar Partida:

function reiniciarPartida() {
    location.reload();
}


// CANVAS

function pintarCanvas() {


    miPersonajeEnElMapa.x = miPersonajeEnElMapa.x + miPersonajeEnElMapa.speedX;
    miPersonajeEnElMapa.y = miPersonajeEnElMapa.y + miPersonajeEnElMapa.speedY;
    lienzo.clearRect(0, 0, canva.width, canva.height);
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        canva.width,
        canva.height
    );

    miPersonajeEnElMapa.pintarPersonaje();
    enemigoEnElMapa.pintarEnemigo();

    enviarPosicion(miPersonajeEnElMapa.x, miPersonajeEnElMapa.y);

    listaPersonajesEnemigos.forEach(enemigo => {
        enemigo.pintarEnemigo();
        revisarColision(enemigo);
    });


}

// Enviar Posición al Backend:
function enviarPosicion(x, y) {
    fetch(`http://localhost:8080/strangerkids/${jugadorId}/position`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            x,
            y
        })
    })
        .then(function (res) {
            if (res.ok) {
                res.json()
                    .then(function ({ enemigos }) {

                        listaPersonajesEnemigos = enemigos.map(enemigo => {

                            let personajeEnemigo = null;
                            const enemigoNombre = enemigo.nombre || '';
                            if (enemigoNombre === 'Vecna') {
                                personajeEnemigo = new Enemigos('Vecna', '/assets/img/vecna.png');
                            } else if (enemigoNombre === 'Demodog') {
                                personajeEnemigo = new Enemigos('Demodog', '/assets/img/demodog.png');
                            } else if (enemigoNombre === 'Demogorgon') {
                                personajeEnemigo = new Enemigos('Demogorgon', '/assets/img/demogorgon.png');
                            } else {
                                personajeEnemigo = new Enemigos('Mind Flayer', '/assets/img/mindflayer.png');
                            }

                            personajeEnemigo.x = enemigo.x;
                            personajeEnemigo.y = enemigo.y;

                            return personajeEnemigo;
                        })
                    })
            }
        });
}




function moveUp() {
    miPersonajeEnElMapa.speedY = - 5;
}

function moveRight() {
    miPersonajeEnElMapa.speedX = 5;
}

function moveDown() {
    miPersonajeEnElMapa.speedY = 5
}

function moveLeft() {
    miPersonajeEnElMapa.speedX = - 5;
}


function presionarTecla(e) {
    switch (e.key) {

        case 'ArrowUp':
            moveUp();
            break;

        case 'ArrowRight':
            moveRight();
            break;

        case 'ArrowDown':
            moveDown();
            break;

        case 'ArrowLeft':
            moveLeft();
            break;
    }

}

function detenerMovimiento() {

    miPersonajeEnElMapa.speedX = 0;
    miPersonajeEnElMapa.speedY = 0;
}


function iniciarMapa() {

    // Ocultar Sección de Elegir Ataque:
    ataqueSection.style.display = 'none';

    sectionVerMapa.style.display = 'flex';
    h1.style.display = 'none';

    // canva.width = 1200;
    // canva.height = 600;

    intervalo = setInterval(pintarCanvas, 50);
    window.addEventListener('keydown', presionarTecla);
    window.addEventListener('keyup', detenerMovimiento);

}


function revisarColision(enemigo) {

    let arribaEnemigo = enemigo.y + 25;
    let abajoEnemigo = enemigo.y + enemigo.height - 25;
    let derechaEnemigo = enemigo.x + enemigo.width;
    let izquierdaEnemigo = enemigo.x;

    let arribaPersonaje = miPersonajeEnElMapa.y;
    let abajoPersonaje = miPersonajeEnElMapa.y + miPersonajeEnElMapa.height;
    let derechaPersonaje = miPersonajeEnElMapa.x + miPersonajeEnElMapa.width - 25;
    let izquierdaPersonaje = miPersonajeEnElMapa.x + 25;

    if (
        abajoPersonaje < arribaEnemigo ||
        arribaPersonaje > abajoEnemigo ||
        derechaPersonaje < izquierdaEnemigo ||
        izquierdaPersonaje > derechaEnemigo
    ) {
        return;
    }

    detenerMovimiento();
    modalColision();

    clearInterval(intervalo);

    // Pantalla Batalla
    parrafoSection.style.display = 'grid';

    // Mostrar Sección de Elegir Ataque:
    ataqueSection.style.display = 'block';

    // Ocultar Mapa:
    sectionVerMapa.style.display = 'none';


    secuenciaAtaque();

}

// Cargar el DOM antes de iniciar el Juego:

window.addEventListener('load', iniciarJuego);