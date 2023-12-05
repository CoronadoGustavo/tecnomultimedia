class Juego{
  constructor(personaje, enemigo){ 
      this.personaje = personaje;
      this.enemigo = enemigo;
      this. imagen = fondoLucha;
      this. crearEnemigo();
      this. crearPersonaje();       
      this.vidaDante = 10;
      this.vidaMino = 40;      
      this.jueGanaste = false;
      this.juePerdiste = false;
      this.sonidoEspada = miSonido1;
    this.sonidoGarra = miSonido2;
}
  dibujar(){
    
    this.movimientoPersonaje();
    this.movimientoEnemigo();
    this.jugar();
    this.ataqueEnemigo();
    this.ganar();
    this.perder();
    
      image(this.imagen, 0, 0,800,800);
      this. enemigo.dibujar ();
      this. personaje.dibujar ();
      

    textSize(30);
    fill(255);
    text("Vida Dante: " + this.vidaDante, 80, 33,90);
    fill(255,130,130)
    text("Vida Minotauro: " + this.vidaMino, 600, 33,90); 
}
  crearPersonaje(){
      this. personaje =new Personaje (); 
}
  crearEnemigo(){
      this. enemigo = new Enemigo ();
}
  movimientoPersonaje(){
      this. personaje.movimientoPersonaje();   
}  
  movimientoEnemigo(){
      this.enemigo.movimientoEnemigo(this.personaje);  
}  
  ataquePersonaje() {
      this. personaje.ataquePersonaje();
}
  ataqueEnemigo() {
      this. enemigo.ataqueEnemigo();  
}


  jugar(){  
  let zonaDetectable = 20;  
  let distancia1d = dist(this.personaje.posX + this.personaje.imagenes[0].width / 2 + 85, this.personaje.posY + this.personaje.imagenes[0].height / 2 - 70, this.enemigo.posX + this.enemigo.imagenes[0].width / 2 +50, this.enemigo.posY + this.enemigo.imagenes[0].height / 2);
  let distancia2d = dist(this.personaje.posX + this.personaje.imagenes[1].width / 2 + 85, this.personaje.posY + this.personaje.imagenes[1].height / 2 + 65, this.enemigo.posX + this.enemigo.imagenes[0].width / 2 +50, this.enemigo.posY + this.enemigo.imagenes[0].height / 2);
 
  if (this.personaje.spriteActual == 0 && distancia1d < zonaDetectable * 2.7) {
    this.enemigo.posX += 200;
    this.enemigo.posY += random(-200, 200);
this.vidaMino--;
this.sonidoEspada.play();
  } else if (this.personaje.spriteActual == 1 && distancia2d < zonaDetectable * 2.7) {
    this.enemigo.posX += 200;
    this.enemigo.posY += random(-200, 200);
 this.vidaMino--;
this.sonidoEspada.play();
  }

  let distancia1m = dist(this.enemigo.posX + this. enemigo.imagenes[0].width / 2 - 20, this.enemigo.posY + this.enemigo.imagenes[0].height / 2 - 70, this.personaje.posX + this.personaje.imagenes[0].width / 2 -60, this.personaje.posY + this.personaje.imagenes[0].height / 2);
  let distancia2m = dist(this.enemigo.posX + this. enemigo.imagenes[1].width / 2 - 80, this.enemigo.posY + this.enemigo.imagenes[1].height / 2 - 70, this.personaje.posX + this.personaje.imagenes[0].width / 2 -60, this.personaje.posY + this.personaje.imagenes[0].height / 2);
  let distancia3m = dist(this.enemigo.posX + this. enemigo.imagenes[2].width / 2 - 20, this.enemigo.posY + this.enemigo.imagenes[2].height / 2 + 70, this.personaje.posX + this.personaje.imagenes[0].width / 2 -60, this.personaje.posY + this.personaje.imagenes[0].height / 2);
  let distancia4m = dist(this.enemigo.posX + this. enemigo.imagenes[3].width / 2 - 80, this.enemigo.posY + this.enemigo.imagenes[3].height / 2 + 70, this.personaje.posX + this.personaje.imagenes[0].width / 2 -60, this.personaje.posY + this.personaje.imagenes[0].height / 2);

  if (this.enemigo.spriteActual == 0 && distancia1m < zonaDetectable * 2) {
    this.personaje.posX -= 200;
    this.personaje.posY -= random(-200, 200);
this.vidaDante--;
 this.sonidoGarra.play();   
  } else if (this.enemigo.spriteActual== 1 && distancia2m < zonaDetectable * 2) {
    this.personaje.posX -= 200;
    this.personaje.posY -= random(-200, 200);
this.vidaDante--;
this.sonidoGarra.play();  
  } else if (this.enemigo.spriteActual == 2 && distancia3m < zonaDetectable * 2) {
    this.personaje.posX -= 200;
    this.personaje.posY -= random(-200, 200);
this.vidaDante--;
this.sonidoGarra.play();  
  } else if (this.enemigo.spriteActual == 3 && distancia4m < zonaDetectable * 2) {
    this.personaje.posX -= 200;
    this.personaje.posY -= random(-200, 200);
this.vidaDante--;
this.sonidoGarra.play();  
  }
  
  if (this.vidaDante <= 0) {
  this.juePerdiste = true;
}

if (this.vidaMino <= 0) {

    this.jueGanaste = true;
}
}
  ganar(){ 
    if (this.jueGanaste) { 
      aventura.pantallaActual = 18;
      aventura.mostrarJuego = false; 
      this.reiniciar();
    }
}
   
  perder(){
    if (this.juePerdiste) {
      aventura.pantallaActual = 40;
      aventura.mostrarJuego = false;
      this.reiniciar();
    }
}  
 reiniciar() {
    this.vidaDante = 15;
    this.vidaMino = 15;
    this.jueGanaste = false;
    this.juePerdiste = false;
    this. crearEnemigo();
    this. crearPersonaje();   
  }
   
}
