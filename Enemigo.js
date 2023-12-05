class Enemigo {
  constructor() {
    this.imagenes = mino;
    this.posX = 520;
    this.posY = 525;
    this.spriteActual = 0;
    this.velocidadAtaque = 3;
    this.velocidadPerseguir = 4;   
    this.limiteXMin = 30;
    this.limiteXMax = 520;
    this.limiteYMin = 75;
    this.limiteYMax = 525;
  }
  dibujar() {
    image(this.imagenes[round(this.spriteActual)], this.posX, this.posY);
  }
  ataqueEnemigo() {
    if (frameCount % this.velocidadAtaque == 0) {
      this.spriteActual = (this.spriteActual + 1) % this.imagenes.length;
    }
  }
movimientoEnemigo(personaje) {
  let direccionX = personaje.posX - this.posX;
  let direccionY = personaje.posY - this.posY;
  let distancia = dist(this.posX, this.posY, personaje.posX, personaje.posY);
  if (distancia > 0) {
    direccionX /= distancia;
    direccionY /= distancia;
    this.posX = constrain(this.posX + direccionX * this.velocidadPerseguir, this.limiteXMin, this.limiteXMax);
    this.posY = constrain(this.posY + direccionY * this.velocidadPerseguir, this.limiteYMin, this.limiteYMax);
  }
}
}
