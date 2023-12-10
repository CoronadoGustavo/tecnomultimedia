class PantallaDeUnBoton{
  constructor(imgAventura,imgBotones,textos,pSiguiente){
    this.imgAventura = imgAventura;
    this.imgBotones = imgBotones;     
    this. boton = new Boton();
    this.pSiguiente = pSiguiente;     
  }  
  dibujar(){
    image(this.imgAventura,0,0,800,800)    
    image(this.imgBotones,700, 260,80,80)     
  }
click() {
    if (this.boton.click() === 1) {
      return this.pSiguiente;
    }
    return null;
  }
}
