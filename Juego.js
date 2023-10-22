class Juego{
   constructor(personaje, enemigo, sonido1, sonido2, sonido3) {
    this.Personaje = personaje;
    this.Enemigo = enemigo;
    this.miSonido1 = sonido1; 
    this.miSonido2 = sonido2;
    this.miSonido3 = sonido3;
    this.espacioPresionado = false;
    this.sonido1Reproducido = false;
    this.golpesDante = 0; 
    this.golpesMino = 0;
     
  }
zonasColiciones() {
  let zonaDetectable = 20;  
  let distancia1d = dist(this.Personaje.posX + this.Personaje.imagenes[0].width / 2 + 85, this.Personaje.posY + this.Personaje.imagenes[0].height / 2 - 70, this.Enemigo.posX + this.Enemigo.imagenes[0].width / 2 +50, this.Enemigo.posY + this.Enemigo.imagenes[0].height / 2);
  let distancia2d = dist(this.Personaje.posX + this.Personaje.imagenes[1].width / 2 + 85, this.Personaje.posY + this.Personaje.imagenes[1].height / 2 + 65, this.Enemigo.posX + this.Enemigo.imagenes[0].width / 2 +50, this.Enemigo.posY + this.Enemigo.imagenes[0].height / 2);
 
  if (this.Personaje.spriteActual == 0 && distancia1d < zonaDetectable * 2.7) {
    this.Enemigo.posX += 200;
    this.Enemigo.posY += random(-200, 200);
    this.miSonido2.play();
    sonido1Reproducido = true;
    this.golpesDante++;
    
  } else if (this.Personaje.spriteActual == 1 && distancia2d < zonaDetectable * 2.7) {
    this.Enemigo.posX += 200;
    this.Enemigo.posY += random(-200, 200);
    this.miSonido2.play();
    sonido1Reproducido = true;
    this.golpesDante++;
  }

  let distancia1m = dist(this.Enemigo.posX + this. Enemigo.imagenes[0].width / 2 - 20, this.Enemigo.posY + this.Enemigo.imagenes[0].height / 2 - 70, this.Personaje.posX + this.Personaje.imagenes[0].width / 2 -60, this.Personaje.posY + this.Personaje.imagenes[0].height / 2);
  let distancia2m = dist(this.Enemigo.posX + this. Enemigo.imagenes[1].width / 2 - 80, this.Enemigo.posY + this.Enemigo.imagenes[1].height / 2 - 70, this.Personaje.posX + this.Personaje.imagenes[0].width / 2 -60, this.Personaje.posY + this.Personaje.imagenes[0].height / 2);
  let distancia3m = dist(this.Enemigo.posX + this. Enemigo.imagenes[2].width / 2 - 20, this.Enemigo.posY + this.Enemigo.imagenes[2].height / 2 + 70, this.Personaje.posX + this.Personaje.imagenes[0].width / 2 -60, this.Personaje.posY + this.Personaje.imagenes[0].height / 2);
  let distancia4m = dist(this.Enemigo.posX + this. Enemigo.imagenes[3].width / 2 - 80, this.Enemigo.posY + this.Enemigo.imagenes[3].height / 2 + 70, this.Personaje.posX + this.Personaje.imagenes[0].width / 2 -60, this.Personaje.posY + this.Personaje.imagenes[0].height / 2);

  if (this.Enemigo.spriteActual == 0 && distancia1m < zonaDetectable * 2) {
    this.Personaje.posX -= 200;
    this.Personaje.posY -= random(-200, 200);
    this.miSonido3.play();
    sonido1Reproducido = true;
    this.golpesMino++;
    
  } else if (this.Enemigo.spriteActual== 1 && distancia2m < zonaDetectable * 2) {
    this.Personaje.posX -= 200;
    this.Personaje.posY -= random(-200, 200);
    this.miSonido3.play();
    sonido1Reproducido = true;
    this.golpesMino++;
  } else if (this.Enemigo.spriteActual == 2 && distancia3m < zonaDetectable * 2) {
    this.Personaje.posX -= 200;
    this.Personaje.posY -= random(-200, 200);
    this.miSonido3.play();
    sonido1Reproducido = true;
    this.golpesMino++;
  } else if (this.Enemigo.spriteActual == 3 && distancia4m < zonaDetectable * 2) {
    this.Personaje.posX -= 200;
    this.Personaje.posY -= random(-200, 200);
    this.miSonido3.play();
    sonido1Reproducido = true;
    this.golpesMino++;
  }

  
  
}
mostrarContadoresdegolpes() {
  textSize(30);
  fill(255);
  textAlign(LEFT);
  text("DANTE: " + this.golpesDante, 40, 80); // Ubicación en la parte superior izquierda
  text("MINOTAURO: " + this.golpesMino, 540, 80); // Ubicación en la parte superior izquierda
}
controlarPersonaje() {
    if (keyIsDown(LEFT_ARROW)) {
      this.Personaje.mover(-1, 0); 
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.Personaje.mover(1, 0); 
    }
    if (keyIsDown(UP_ARROW)) {
      this.Personaje.mover(0, -1); 
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.Personaje.mover(0, 1); 
    }

   if (keyCode == 32 && !this.espacioPresionado) {
      this.Personaje.cambiarSprite();
      this.espacioPresionado = true; 
    }
  }
}  
  function keyReleased() {
  if (keyCode == 32) { 
    objuego.espacioPresionado = false; 
  }

}
