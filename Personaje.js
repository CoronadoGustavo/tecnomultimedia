class Personaje {
  constructor() {
    this.imagenes = dante;
    this.posX = 30;
    this.posY = 77;
    this.spriteActual = 0;
    this.velocidad = 5;   
    this.limiteXMin = 30;
    this.limiteXMax = 515;
    this.limiteYMin = 77;
    this.limiteYMax = 515;
 
  
  }

  dibujar() {
    image(this.imagenes[round(this.spriteActual)], this.posX, this.posY);
  }

  mover(direccionX, direccionY) {
    let nuevaPosX = this.posX + direccionX * this.velocidad;
    let nuevaPosY = this.posY + direccionY * this.velocidad;
    

    nuevaPosX = constrain(nuevaPosX, this.limiteXMin, this.limiteXMax);
    nuevaPosY = constrain(nuevaPosY, this.limiteYMin, this.limiteYMax);


    this.posX = nuevaPosX;
    this.posY = nuevaPosY;
  }
 cambiarSprite() {
    this.spriteActual = (this.spriteActual + 1) % this.imagenes.length;
  }
  
  
}
