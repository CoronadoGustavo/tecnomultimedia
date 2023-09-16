//link del video: https://youtu.be/NySoFoPxs78

let miImagen;
let botones=[];
let cantImagenes4 = 4;
let portada=[];
let cantImagenes3 = 3;                   
let mostrarPortada1 = true;             
let mostrarPortada2 = false;
let mostrarPortada3 = false;
let fuente;
let miSonido1;
let miSonido2;

let blanco = [];
let spriteBlanco = 0 
let cantImagenes1 = 5;
let posX1 = 610;
let posY1 = 210;                         
let limiteXMin1 = 610;
let limiteXMax1 = 1050;
let limiteYMin1 = 210;
let limiteYMax1 = 540;

let negro = [];
let spriteNegro = 0 
let cantImagenes2 = 5;
let posX2 = 1290;
let posY2 = 545;
let limiteXMin2 = 610;                  
let limiteXMax2 = 1290;
let limiteYMin2 = 215;
let limiteYMax2 = 545;

let zonaDetectable = 20;                

let juegoTerminado = false;
let juegoIniciado = false;
let tiempoInicial = null; 
let golpesBlanco = 0;                    
let golpesNegro = 0;                   
let duracion = 120;
let contadorFinalizado = false;  



function preload() {
  for (let i = 0; i < cantImagenes1; i++) {
    blanco[i] = loadImage('data/b' + (i + 1) + '.png');
  }
  for (let b = 0; b < cantImagenes2; b++) {
    negro[b] = loadImage('data/n' + (b + 1) + '.png');
  } 
  for (let p = 0; p < cantImagenes3; p++) {
    portada[p] = loadImage('data/portada' + (p + 1) + '.jpg');
  }                                                                       
  for (let z = 0; z < cantImagenes4; z++) {
    botones[z] = loadImage('data/boton' + (z + 1) + '.png');
  }
  miImagen = loadImage('data/fondonegro.jpg');
  fuente = loadFont('data/MIKRC___.ttf');
  soundFormats ('mp3');
  miSonido1 = loadSound('data/sonidoG');
  soundFormats ('mp3');
  miSonido2 = loadSound('data/sonidoF');
}

function setup() {     
  createCanvas(1920, 965);                                                
}

function draw() {
  fill(255);
  textAlign(CENTER);
  textFont(fuente);
  frameRate(33);
  if (mostrarPortada1==true) { 
    image(portada[0], 0, 0); 
    image(botones[0], 700, 770, 90, 90);
    image(botones[1], 910, 770, 90, 90);                                  
    image(botones[2], 1110, 770, 90, 90);
  }else if (mostrarPortada2==true) {
    image(portada[1], 0, 0);     
    textSize(50);
    text("INSTRUCCIONES", width / 2, 80);    
    textSize(20);    
    text("COMIENZO DEL JUEGO: ", width / 2, 170);
    text("Presiona la tecla ENTER para iniciar el juego.", width / 2, 220);                                                   
    text("OBJETIVO:", width / 2, 300);
    text("Gana golpeando la cabeza de tu oponente más veces \nque él antes de que termine el tiempo.", width / 2, 350);     
    text("CONTROLES", width / 2, 450);
    text("Utiliza las FLECHAS (izquierda, derecha, arriba y abajo) para \nmoverte por el ring y esquivar los golpes de tu oponente. \nPresiona la BARRA ESPACIADORA para golpear \nla cabeza de tu oponente.", width / 2, 500);               
    text("FINAL DEL JUEGO", width / 2, 650);
    text("Cuando suene la campana al cabo de 2 minutos, \nel juego terminará. \nEl jugador que tenga más puntos, gana. \nPresiona ENTER nuevamente \npara reiniciar el juego.", width / 2, 700);        
    image(botones[3], 1380, 770, 90, 90);   
  }else if (mostrarPortada3==true) { 
    image(portada[2], 0, 0);      
    textSize(50); 
    text("CREDITOS:", width / 2, 80);
    textSize(32);
    text("INSPIRADO EN:", width / 2, 180); 
    text("BOXING de 1980, ATARI.", width / 2, 230);              
    text("PROGRAMADOR:", width / 2, 340);
    text("Coronado Guillen Gustavo Eduardo", width / 2, 390);          
    text("LEGAJO DEL PROGRAMADOR:", width / 2, 500);  
    text("75708/9", width / 2, 550);         
    text("FUENTE DE IMAGENES:", width / 2, 650);
    text("Google.", width / 2, 700);        
    image(botones[3], 1380, 770, 90, 90);   
  } else { 
    image(miImagen, 0, 0);
    image(botones[3], 1380, 770, 90, 90);    
    dibujarPersonaje();
  }   
  if (juegoIniciado==true) {
    presionarTecla();      
    if (tiempoInicial == null || contadorFinalizado) {            
      tiempoInicial = millis();
      contadorFinalizado = false;
    }



    let direccionX = posX1 - posX2 + 230;
    let direccionY = posY1 - posY2;
    let distancia = dist(posX1, posY1, posX2, posY2);

    direccionX /= distancia;
    direccionY /= distancia;
                                                                     
    let velocidadMaxima = 11;                                          
    let movimientoX = direccionX * min(distancia, velocidadMaxima);    
    let movimientoY = direccionY * min(distancia, velocidadMaxima);

    posX2 += movimientoX * 4;
    posY2 += movimientoY;


    controlarcolisiones();
    calcularSiguienteSpriteDelNegro();

    textSize(37);
    fill(214, 214, 214);
    text(golpesBlanco, 740, 105);
    fill(0);
    text(golpesNegro, 1170, 105);

    let tiempoTranscurrido = duracion - floor((millis() - tiempoInicial) / 1000);
    let minutos = floor(tiempoTranscurrido / 60);
    let segundos = tiempoTranscurrido % 60;

    fill(20, 60, 0);
    if (minutos < 10) {                                                                
      text(minutos + ' : ' + nf(segundos, 2), 950, 150);                                  
    } else {
      text(nf(minutos, 2) + ':' + nf(segundos, 2));
    } 
    if (minutos == 0 && segundos == 0) {
      contadorFinalizado = true;                                                       
      noLoop();
      miSonido2.play();
    } 
  } 
}

function presionarTecla() {    
  let moveX = 0;
  let moveY = 0;
  
  if (keyIsPressed) {
    if (key == ' ') {                                                            
      calcularSiguienteSpriteDelBlanco();
    }
    if (keyIsDown(LEFT_ARROW)) {
      moveX -= 16;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      moveX += 16;
    }
    if (keyIsDown(UP_ARROW) && posY2 > limiteYMin2) {                   
      moveY -= 12;
    }
    if (keyIsDown(DOWN_ARROW) && posY2 < limiteYMax2) {
      moveY += 12;
    }
    posX1 = constrain(posX1 + moveX, limiteXMin1, limiteXMax1);
    posY1 = constrain(posY1 + moveY, limiteYMin1, limiteYMax1);
    posX2 = constrain(posX2, limiteXMin2, limiteXMax2);                     
    posY2 = constrain(posY2, limiteYMin2, limiteYMax2);
  }
}

function dibujarPersonaje() {
  spriteNegro = constrain(spriteNegro, 0, cantImagenes2 + 1);
  spriteBlanco = constrain(spriteBlanco, 0, cantImagenes1 + 1);
  
  if (spriteNegro >= 0 && spriteNegro < cantImagenes2) {
    let spriteNegroActual = negro[floor(spriteNegro)];
    image(spriteNegroActual, posX2 - spriteNegroActual.width, posY2);       
  }
  if (spriteBlanco >= 0 && spriteBlanco < cantImagenes1) {
    let spriteBlancoActual = blanco[floor(spriteBlanco)];
    image(spriteBlancoActual, posX1, posY1);
  }
}

function calcularSiguienteSpriteDelBlanco() {
  spriteBlanco += 0.5;
  if (spriteBlanco >= cantImagenes1) {
    spriteBlanco = 0;
  }
}                                                                    

function calcularSiguienteSpriteDelNegro() {
  spriteNegro += 0.5;
  if (spriteNegro >= cantImagenes2) {
    spriteNegro = 0;
  }
}

function controlarcolisiones() {
  let distancia1 = dist(posX1 + blanco[1].width / 2 + 60, posY1 + blanco[1].height / 2 - 70, posX2 + negro[0].width / 2 - 110, posY2 + negro[0].height / 2);
  let distancia2 = dist(posX1 + blanco[2].width / 2 + 97, posY1 + blanco[2].height / 2 - 73, posX2 + negro[0].width / 2 - 110, posY2 + negro[0].height / 2);
  let distancia3 = dist(posX1 + blanco[3].width / 2 + 60, posY1 + blanco[3].height / 2 + 70, posX2 + negro[0].width / 2 - 110, posY2 + negro[0].height / 2);
  let distancia4 = dist(posX1 + blanco[4].width / 2 + 97, posY1 + blanco[4].height / 2 + 70, posX2 + negro[0].width / 2 - 110, posY2 + negro[0].height / 2);

  if (spriteBlanco == 1 && distancia1 < zonaDetectable * 2.7) {
    miSonido1.play();
    golpesBlanco++;
    posX2 += 225;
    posY2 += random(-260, 260);
    posX2 = constrain(posX2, limiteXMin2, limiteXMax2);
    posY2 = constrain(posY2, limiteYMin2, limiteYMax2);
    posX1 = constrain(posX1, limiteXMin1, limiteXMax1);
    posY1 = constrain(posY1, limiteYMin1, limiteYMax1);
  } else if (spriteBlanco == 2 && distancia2 < zonaDetectable * 2.7) {
    miSonido1.play();
    golpesBlanco++;
    posX2 += 225;
    posY2 += random(-260, 260);
    posX2 = constrain(posX2, limiteXMin2, limiteXMax2);
    posY2 = constrain(posY2, limiteYMin2, limiteYMax2);
    posX1 = constrain(posX1, limiteXMin1, limiteXMax1);
    posY1 = constrain(posY1, limiteYMin1, limiteYMax1);
  } else if (spriteBlanco == 3 && distancia3 < zonaDetectable * 2.7) {
    miSonido1.play();
    golpesBlanco++;
    posX2 += 225;                                                                                               
    posY2 += random(-260, 260);
    posX2 = constrain(posX2, limiteXMin2, limiteXMax2);
    posY2 = constrain(posY2, limiteYMin2, limiteYMax2);
    posX1 = constrain(posX1, limiteXMin1, limiteXMax1);
    posY1 = constrain(posY1, limiteYMin1, limiteYMax1);
  } else if (spriteBlanco == 4 && distancia4 < zonaDetectable * 2.7) {
    miSonido1.play();
    golpesBlanco++;
    posX2 += 225;
    posY2 += random(-260, 260);
    posX2 = constrain(posX2, limiteXMin2, limiteXMax2);
    posY2 = constrain(posY2, limiteYMin2, limiteYMax2);
    posX1 = constrain(posX1, limiteXMin1, limiteXMax1);
    posY1 = constrain(posY1, limiteYMin1, limiteYMax1);
  }

  let distancia1n = dist(posX2 + negro[1].width / 2 - 220, posY2 + negro[1].height / 2 - 70, posX1 + blanco[0].width / 2 + 5, posY1 + blanco[0].height / 2);
  let distancia2n = dist(posX2 + negro[2].width / 2 - 325, posY2 + negro[2].height / 2 - 70, posX1 + blanco[0].width / 2 + 5, posY1 + blanco[0].height / 2);
  let distancia3n = dist(posX2 + negro[3].width / 2 - 220, posY2 + negro[3].height / 2 + 70, posX1 + blanco[0].width / 2 + 5, posY1 + blanco[0].height / 2);
  let distancia4n = dist(posX2 + negro[4].width / 2 - 325, posY2 + negro[4].height / 2 + 70, posX1 + blanco[0].width / 2 + 5, posY1 + blanco[0].height / 2);

  if (spriteNegro == 1 && distancia1n < zonaDetectable * 2) {
    miSonido1.play();
    golpesNegro++;
    posX1 -= 225;
    posY1 -= random(-260, 260);
    posX2 = constrain(posX2, limiteXMin2, limiteXMax2);
    posY2 = constrain(posY2, limiteYMin2, limiteYMax2);
    posX1 = constrain(posX1, limiteXMin1, limiteXMax1);
    posY1 = constrain(posY1, limiteYMin1, limiteYMax1);
  } else if (spriteNegro == 2 && distancia2n < zonaDetectable * 2) {
    miSonido1.play();
    golpesNegro++;
    posX1 -= 225;
    posY1 -= random(-260, 260);
    posX2 = constrain(posX2, limiteXMin2, limiteXMax2);
    posY2 = constrain(posY2, limiteYMin2, limiteYMax2);
    posX1 = constrain(posX1, limiteXMin1, limiteXMax1);
    posY1 = constrain(posY1, limiteYMin1, limiteYMax1);
  } else if (spriteNegro == 3 && distancia3n < zonaDetectable * 2) {
    miSonido1.play();
    golpesNegro++;
    posX1 -= 225;
    posY1 -= random(-260, 260);
    posX2 = constrain(posX2, limiteXMin2, limiteXMax2);
    posY2 = constrain(posY2, limiteYMin2, limiteYMax2);
    posX1 = constrain(posX1, limiteXMin1, limiteXMax1);
    posY1 = constrain(posY1, limiteYMin1, limiteYMax1);
  } else if (spriteNegro == 4 && distancia4n < zonaDetectable * 2) {
    miSonido1.play();
    golpesNegro++;
    posX1 -= 225;
    posY1 -= random(-260, 260);
    posX1 = constrain(posX1, limiteXMin1, limiteXMax1);
    posY1 = constrain(posY1, limiteYMin1, limiteYMax1);
  }
}

function mouseClicked() {
  if (mostrarPortada1 && dist(mouseX, mouseY, 744, 814) < 40) {
    mostrarPortada1 = false;
    mostrarPortada2 = false;
    mostrarPortada3 = false;
  } else if (mostrarPortada1 && dist(mouseX, mouseY, 955, 814) < 40) {
    mostrarPortada1 = false;
    mostrarPortada2 = true;
    mostrarPortada3 = false;
  } else if (mostrarPortada1 && dist(mouseX, mouseY, 1155, 814) < 40) {
    mostrarPortada1 = false;
    mostrarPortada2 = false;
    mostrarPortada3 = true;
  } else if (miImagen && dist(mouseX, mouseY, 1425, 814) < 40) {
    mostrarPortada1 = true;
    mostrarPortada2 = false;                                                  
    mostrarPortada3 = false;
    posX1 = 610;
    posY1 = 210;
    posX2 = 1290;
    posY2 = 545;
    golpesBlanco = 0;
    golpesNegro = 0;
    tiempoInicial = null;
    spriteBlanco = 0;
    spriteNegro = 0;
    juegoIniciado = false;
    contadorFinalizado = false;
    loop();
  }
}

 function keyPressed() {   
  if (mostrarPortada1 == false && mostrarPortada2 == false && mostrarPortada3 == false && keyCode == ENTER) {
    if (contadorFinalizado == true) {
      posX1 = 610;
      posY1 = 210;
      posX2 = 1290;
      posY2 = 545;
      golpesBlanco = 0;
      golpesNegro = 0;
      tiempoInicial = null;                                                  
      spriteBlanco = 0;
      spriteNegro = 0;
      juegoTerminado = false;
      juegoIniciado = false;
      contadorFinalizado = false;
      loop();
    } else if (juegoIniciado==false) {
      tiempoInicial = millis();
      juegoIniciado = true;
    }
  }
}
