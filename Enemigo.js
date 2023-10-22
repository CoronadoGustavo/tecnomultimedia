class Enemigo {
  constructor() {
    this.imagenes = mino;
    this.posX = 520;
    this.posY = 525;
    this.spriteActual = 0;
    this.velocidad = 4;
    this.frameCount = 0; // Contador de cuadros para el cambio de sprite
    this.framesPorCambio = 4; // Cuadros necesarios para cambiar el sprite
   
    this.limiteXMin = 30;
    this.limiteXMax = 520;
    this.limiteYMin = 75;
    this.limiteYMax = 525;
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
    this.frameCount++;
    if (this.frameCount >= this.framesPorCambio) {
      this.spriteActual = (this.spriteActual + 1) % this.imagenes.length;
      this.frameCount = 0;
    }
  }

  seguirPersonaje(personaje) {
    let direccionX = personaje.posX - this.posX;
    let direccionY = personaje.posY - this.posY;
    let distancia = dist(this.posX, this.posY, personaje.posX, personaje.posY);
    direccionX /= distancia;
    direccionY /= distancia;
    this.mover(direccionX, direccionY);
  }
  
  
  
  
}
