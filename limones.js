let canvas=document.getElementById("areajuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
let personajeX=canvas.width/2;

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
}

function dibujarSuelo(){
    ctx.fillStyle="#8B4513";
    ctx.fillRect(0, canvas.height - ALTURA_SUELO, canvas.width, ALTURA_SUELO);
}

function dibujarPersonaje(){
    ctx.fillStyle="#ffe600";
    ctx.fillRect(personajeX, canvas.height - (ALTURA_SUELO + ALTURA_PERSONAJE), ANCHO_PERSONAJE, ALTURA_PERSONAJE);
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
}

function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    dibujarSuelo();
}