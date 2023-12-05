class Boton {
  constructor() {}

  click() {
    if (dist(mouseX, mouseY, 740, 300) < 40) {
      if (aventura.pantallaActual === 17) {
       aventura.mostrarJuego = true;
    }   
      return 1;       
    }
    else if (aventura.pantallaActual == 0 ||aventura.pantallaActual == 3 ||aventura.pantallaActual == 14 ||aventura.pantallaActual == 15 ||aventura.pantallaActual == 31 ) {
      if (dist(mouseX, mouseY, 40, 300) < 40) {
        return 2; 
      }     
    }    
    return 0; 
  }
}
