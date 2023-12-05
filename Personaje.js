class Personaje{
  constructor(){
    this.imagenes = dante;
    this.posX = 30;
    this.posY = 77;
    this.spriteActual = 0;
    this.limiteXMin = 30;
    this.limiteXMax = 515;
    this.limiteYMin = 77;
    this.limiteYMax = 515;
  }
  dibujar() {
    image(this.imagenes[round(this.spriteActual)], this.posX, this.posY);
  }
  movimientoPersonaje(){    
   if(keyIsPressed){
     if (keyIsDown(RIGHT_ARROW)) {
      this.moverDerecha();
    }
     if (keyIsDown(LEFT_ARROW)) {
      this.moverIzquierda();
    }
     if (keyIsDown(UP_ARROW)) {
      this.moverArriba();
    }
     if (keyIsDown(DOWN_ARROW)) {
      this.moverAbajo();
    }         
   }        
 }
   moverDerecha() {
    this.posX = constrain(this.posX + 5, this.limiteXMin, this.limiteXMax);
  }
  moverIzquierda() {
    this.posX = constrain(this.posX - 5, this.limiteXMin, this.limiteXMax);
  }
  moverArriba() {
    this.posY = constrain(this.posY - 5, this.limiteYMin, this.limiteYMax);
  }
  moverAbajo() {
    this.posY = constrain(this.posY + 5, this.limiteYMin, this.limiteYMax);
  }
  ataquePersonaje() {         
   if (keyCode == 32) {
    this.spriteActual = (this.spriteActual + 1) % this.imagenes.length;     
  }
 } 
}

  
  
