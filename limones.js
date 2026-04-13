let canvas=document.getElementById("areajuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;

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
    ctx.fillRect(canvas.width/2 - ANCHO_PERSONAJE/2, canvas.height - (ALTURA_SUELO + ALTURA_PERSONAJE), ANCHO_PERSONAJE, ALTURA_PERSONAJE);
}