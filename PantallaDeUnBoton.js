class PantallaDeUnBoton{
  constructor(imgAventura,imgBotones,textos, pSiguiente){
    this.imgAventura = imgAventura;
    this.imgBotones = imgBotones;     
    this.textos = textos;
    this. boton = new Boton();
    this.textoX = 50;
    this.textoY = 55;   
    this.pSiguiente = pSiguiente;   
  }  
  dibujar(){
    image(this.imgAventura,0,0,800,800)    
    image(this.imgBotones,700, 260,80,80)
    textAlign(CENTER);
    textSize(21);
    fill(255,0,0);
    text(this.textos, this.textoX, this.textoY, 700, 500);
     if (aventura.pantallaActual ===13||aventura.pantallaActual ===17||aventura.pantallaActual ===18||aventura.pantallaActual ===37||aventura.pantallaActual ===38){
       fill(0,0,190);
       text(this.textos, this.textoX, this.textoY, 700, 500);
     }
     
  }
click() {
    if (this.boton.click() === 1) {
      return this.pSiguiente;
    }
    return null;
  }
}
