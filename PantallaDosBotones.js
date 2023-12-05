class PantallaDosBotones {
  constructor(imgAventura,imgBotones1, imgBotones2, textos,pSiguiente1, pSiguiente2) {
    this.imgAventura = imgAventura;
    this.imgBotones1 = imgBotones1;
    this.imgBotones2 = imgBotones2;
    this.textos = textos;
    this.textoX = 50;
    this.textoY = 55;
    this.boton1 = new Boton();
    this.boton2 = new Boton();     
    this.pSiguiente1 = pSiguiente1;
    this.pSiguiente2 = pSiguiente2;    
  }
  dibujar() {
    image(this.imgAventura, 0, 0, 800, 800);
    image(this.imgBotones1, 700, 260, 80, 80);
    image(this.imgBotones2, 20, 260, 80, 80);
    textAlign(CENTER);
    textSize(21);
    fill(255);
    text(this.textos, this.textoX, this.textoY, 700, 500); 
    if (aventura.pantallaActual ===0){
     fill(random(210),0,0);
     textSize(90);
     text ("DIVINA COMEDIA",350,80,100);
     textSize(40);
     text ("de Dante Alighieri",400,330);
     fill(random(160),0,0,50);
     rect(0,0,800,800);  
  }
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
