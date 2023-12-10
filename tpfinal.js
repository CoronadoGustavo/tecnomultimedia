let imgAventura= [];
let cantImagenes = 44;
let imgBotones= [];
let cantImagenes2 = 16;
let fondoLucha;
let dante = [];
let cantImagenes3 = 2;
let mino = [];
let cantImagenes4 = 4;
let miSonido1;
let miSonido2;

function preload() {  
for(let i = 1; i <= cantImagenes; i++){
    imgAventura[i - 1] = loadImage('data/img' + i + '.jpg');        
  }          
for(let b = 1; b <= cantImagenes2; b++){
    imgBotones[b - 1] = loadImage('data/boton' + b + '.png');  
}
for(let d = 1; d <= cantImagenes3; d++){
   dante[d - 1] = loadImage('data/d' + d + '.png');
  }
for(let m = 1; m <= cantImagenes4; m++){
   mino[m - 1] = loadImage('data/m' + m + '.png');
  }
   fondoLucha = loadImage('data/fondo.jpg');             
   soundFormats ('mp3');
   miSonido1 = loadSound('data/espada'); 
   soundFormats ('mp3');
   miSonido2 = loadSound('data/garra');
}
function setup() {
createCanvas(800, 800);
aventura = new Aventura(); 
sonido1Reproducido = false; 
}
function draw() {    
aventura.dibujar();

} 
function mouseClicked() {
aventura.click();
}
function keyPressed() {
aventura.controlarJuego(); 
}
