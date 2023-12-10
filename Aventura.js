class Aventura{
  constructor(){
    this.pantallas = [];    
    this.pantallas[0] = new PantallaDosBotones(imgAventura[0],imgBotones[0], imgBotones[1],"",1,44); 
    this.pantallas[1] = new PantallaDeUnBoton(imgAventura[1], imgBotones[2], textos[0],2);    
    this.pantallas[2] = new PantallaDeUnBoton(imgAventura[2], imgBotones[2], textos[1],3);     
    this.pantallas[3] = new PantallaDosBotones(imgAventura[3],imgBotones[12], imgBotones[3], textos[2],35,4); 
    this.pantallas[4] = new PantallaDeUnBoton(imgAventura[4], imgBotones[2], textos[3],5);
    this.pantallas[5] = new PantallaDeUnBoton(imgAventura[5], imgBotones[2], textos[4],6);
    this.pantallas[6] = new PantallaDeUnBoton(imgAventura[6], imgBotones[2], textos[5],7);
    this.pantallas[7] = new PantallaDeUnBoton(imgAventura[7], imgBotones[2], textos[6],8);
    this.pantallas[8] = new PantallaDeUnBoton(imgAventura[8], imgBotones[2], textos[7],9);
    this.pantallas[9] = new PantallaDeUnBoton(imgAventura[9], imgBotones[2], textos[8],10);
    this.pantallas[10] = new PantallaDeUnBoton(imgAventura[10], imgBotones[2], textos[9],11);
    this.pantallas[11] = new PantallaDeUnBoton(imgAventura[11], imgBotones[2], textos[10],12);
    this.pantallas[12] = new PantallaDeUnBoton(imgAventura[12], imgBotones[2], textos[11],13);
    this.pantallas[13] = new PantallaDeUnBoton(imgAventura[13], imgBotones[2], textos[12],14);
    this.pantallas[14] = new PantallaDosBotones(imgAventura[14],imgBotones[2], imgBotones[4], textos[13],15,36);
    this.pantallas[15] = new PantallaDosBotones(imgAventura[15],imgBotones[8], imgBotones[7], textos[14],39,16);    
    this.pantallas[16] = new PantallaDeUnBoton(imgAventura[16], imgBotones[9], textos[15],17);
    this.pantallas[17] = new PantallaDeUnBoton(imgAventura[17], imgBotones[10], textos[16],18);
    this.pantallas[18] = new PantallaDeUnBoton(imgAventura[18], imgBotones[2], textos[17],19);
    this.pantallas[19] = new PantallaDeUnBoton(imgAventura[19], imgBotones[2], textos[18],20);
    this.pantallas[20] = new PantallaDeUnBoton(imgAventura[20], imgBotones[2], textos[19],21);
    this.pantallas[21] = new PantallaDeUnBoton(imgAventura[21], imgBotones[2], textos[20],22);
    this.pantallas[22] = new PantallaDeUnBoton(imgAventura[22], imgBotones[2], textos[21],23);
    this.pantallas[23] = new PantallaDeUnBoton(imgAventura[23], imgBotones[2], textos[22],24);
    this.pantallas[24] = new PantallaDeUnBoton(imgAventura[24], imgBotones[2], textos[23],25);
    this.pantallas[25] = new PantallaDeUnBoton(imgAventura[25], imgBotones[2], textos[24],26);
    this.pantallas[26] = new PantallaDeUnBoton(imgAventura[26], imgBotones[2], textos[25],27);
    this.pantallas[27] = new PantallaDeUnBoton(imgAventura[27], imgBotones[2], textos[26],28);
    this.pantallas[28] = new PantallaDeUnBoton(imgAventura[28], imgBotones[2], textos[27],29);   
    this.pantallas[29] = new PantallaDeUnBoton(imgAventura[29], imgBotones[2], textos[28],30);    
    this.pantallas[30] = new PantallaDeUnBoton(imgAventura[30], imgBotones[2], textos[29],31); 
    this.pantallas[31] = new PantallaDosBotones(imgAventura[31],imgBotones[2], imgBotones[11], textos[30],32,41); 
    this.pantallas[32] = new PantallaDeUnBoton(imgAventura[32], imgBotones[2], textos[31],33);       
    this.pantallas[33] = new PantallaDeUnBoton(imgAventura[33], imgBotones[15], textos[32],34);    
    this.pantallas[34] = new PantallaDeUnBoton(imgAventura[34], imgBotones[14], textos[33],0);
    this.pantallas[35] = new PantallaDeUnBoton(imgAventura[35], imgBotones[13], textos[34],42);     
    this.pantallas[36] = new PantallaDeUnBoton(imgAventura[36], imgBotones[5], textos[35],37);
    this.pantallas[37] = new PantallaDeUnBoton(imgAventura[37], imgBotones[6], textos[36],38);  
    this.pantallas[38] = new PantallaDeUnBoton(imgAventura[38], imgBotones[13], textos[37],42);
    this.pantallas[39] = new PantallaDeUnBoton(imgAventura[39], imgBotones[13], textos[38],42);
    this.pantallas[40] = new PantallaDeUnBoton(imgAventura[40], imgBotones[13], textos[40],42);
    this.pantallas[41] = new PantallaDeUnBoton(imgAventura[41], imgBotones[14], textos[39],0);   
    this.pantallas[42] = new PantallaDeUnBoton(imgAventura[42], imgBotones[14], textos[41],0);
    this.pantallas[43] = new PantallaDeUnBoton(imgAventura[43], imgBotones[14], textos[41],0);
    this.pantallas[44] = new PantallaDeUnBoton(imgAventura[44], imgBotones[14], " ",0);
    this.pantallaActual = 0;
    this.mostrarJuego = false; 
    this.juego = new Juego();
  }
dibujar() {  
      if (this.mostrarJuego) {
      this. juego. dibujar();      
    }
    else{
       this.pantallas[this.pantallaActual].dibujar();    
    
    }   
  }  
click() {    
  let siguientePantalla = this.pantallas[this.pantallaActual].click();
  if (siguientePantalla !== null) {
    this.pantallaActual = siguientePantalla;
  }   

  else if (this.mostrarJuego) {
    this.juego.dibujar();      
  }   
} 
controlarJuego() {
    this.juego.ataquePersonaje();    
  }
}
    
