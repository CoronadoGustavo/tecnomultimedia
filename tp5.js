//https://youtu.be/qHC3pVa0Yik
let objpersonaje;
let objenemigo;
let miImagen1;
let objuego;
let dante = [];
let cantImagenes1 = 2;
let mino = [];
let cantImagenes2 = 4;
let miSonido1;
let miSonido2;
let miSonido3;
let contador;


function preload() {
  for (let i = 0; i < cantImagenes1; i++) {
   dante[i] = loadImage('data/d' + (i + 1) + '.png');
  }
  for (let b = 0; b < cantImagenes2; b++) {
   mino[b] = loadImage('data/m' + (b + 1) + '.png');
  }
  miImagen1 = loadImage('data/fondo.jpg');
  
  soundFormats ('mp3');
  miSonido1 = loadSound('data/sonidoF');
  
  soundFormats ('mp3');
  miSonido2 = loadSound('data/espada');
  
  soundFormats ('mp3');
  miSonido3 = loadSound('data/garra');
  
}
function setup() {
  createCanvas(800, 800);
  objpersonaje = new Personaje();
  objenemigo = new Enemigo();
  objuego = new Juego(objpersonaje, objenemigo, miSonido1, miSonido2, miSonido3); // Pasa los sonidos al constructor
  sonido1Reproducido = false; 
  contador = new Contador(120);

}
function draw() {  
  image(miImagen1, 0, 0, 800, 800);
  objpersonaje.dibujar();
  objenemigo.dibujar();
  objenemigo.cambiarSprite();
  objenemigo.seguirPersonaje(objpersonaje);
  objuego.zonasColiciones();
  objuego.controlarPersonaje(); 
  objuego.mostrarContadoresdegolpes();
  contador.mostrar();
  fill(255,0,255);

  textSize(30);
  text( "PRECIONE ´´ESPACIO´´ PARA ATACAR",132,480,500,500);
  fill(0,0,0);
  textSize(30);
  text( "PRECIONE ´´ESPACIO´´ PARA ATACAR",134,481,500,500);
  
  fill(255);
  textSize(30);
  text( "´´ESPACIO´´",176,464,500,500);
}
