class PantallaDosBotones {
  constructor(imgAventura,imgBotones1, imgBotones2, textos, pSiguiente1, pSiguiente2) {
    this.imgAventura = imgAventura;
    this.imgBotones1 = imgBotones1;
    this.imgBotones2 = imgBotones2;
    this.boton1 = new Boton();
    this.boton2 = new Boton();     
    this.pSiguiente1 = pSiguiente1;
    this.pSiguiente2 = pSiguiente2;    
  }
  dibujar() {
    image(this.imgAventura, 0, 0, 800, 800);
    image(this.imgBotones1, 700, 260, 80, 80);
    image(this.imgBotones2, 20, 260, 80, 80);

  }
  click() {
    if (this.boton1.click() === 1) {
      return this.pSiguiente1;
    } else if (this.boton1.click() === 2) {
      return this.pSiguiente2;
    }
    return null;
  }
}
