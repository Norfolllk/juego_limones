let canvas=document.getElementById("areajuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
const ALTURA_LIMON=20;
const ANCHO_LIMON=20;

let personajeX=canvas.width/2;
let personajeY=canvas.height - (ALTURA_SUELO + ALTURA_PERSONAJE);
let limonX=canvas.width/2;
let limonY=5;
let puntaje=0;
let vidas=3;
let velocidadcaida=200;

function iniciar(){
    setInterval(bajarLimon, velocidadcaida);
    dibujarSuelo();
    dibujarPersonaje();
    aparecerLimon();
}

function dibujarSuelo(){
    ctx.fillStyle="#8B4513";
    ctx.fillRect(0, canvas.height - ALTURA_SUELO, canvas.width, ALTURA_SUELO);
}

function dibujarPersonaje(){
    ctx.fillStyle="#ffe600";
    ctx.fillRect(personajeX, personajeY, ANCHO_PERSONAJE, ALTURA_PERSONAJE);
}

function moverIzquierda(){
    personajeX=personajeX-10;
    actualizarPantalla();
}

function moverDerecha(){
    personajeX=personajeX+10;
    actualizarPantalla();
}

function actualizarPantalla(){
    limpiarCanvas();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function dibujarLimon(){
    ctx.fillStyle="#00ff00";
    ctx.fillRect(limonX, limonY, ANCHO_LIMON, ALTURA_LIMON);
}

function bajarLimon(){
    limonY=limonY+10;
    actualizarPantalla();
    detectarAtrapado();
    detectarPiso();
}

function detectarAtrapado(){
    if(limonX+ANCHO_LIMON>personajeX &&
       limonX < personajeX+ANCHO_PERSONAJE &&
       limonY+ALTURA_LIMON>personajeY &&
       limonY < personajeY+ALTURA_PERSONAJE) {
       alert("Has atrapado un limon");
       aparecerLimon();
       puntaje=puntaje+1;
       mostrarEnSpan("txtPuntaje", puntaje);
    }
}

function detectarPiso(){
    if(limonY+ALTURA_LIMON>canvas.height-ALTURA_SUELO){
        alert("Has perdido una vida");
        aparecerLimon();
        vidas=vidas-1;
        mostrarEnSpan("txtVidas", vidas);    
    }

    if(vidas === 0){
        alert("GAME OVER");
    }
}    

function aparecerLimon(){
    limonX=generarAleatorio(0, canvas.width-ANCHO_LIMON);
    limonY=0;
    actualizarPantalla();
}
