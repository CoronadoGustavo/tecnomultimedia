class Aventura{
  constructor(){  
    this.textos = [];
    this.pantallas = []; 
    this.pantallas[0] = new PantallaDosBotones(imgAventura[0],imgBotones[0], imgBotones[1],this.textos,1,43); 
    this.pantallas[1] = new PantallaDeUnBoton(imgAventura[1], imgBotones[2],this.textos, 2);    
    this.pantallas[2] = new PantallaDeUnBoton(imgAventura[2], imgBotones[2], this.textos,3);     
    this.pantallas[3] = new PantallaDosBotones(imgAventura[3],imgBotones[12],imgBotones[3], this.textos, 35,4); 
    this.pantallas[4] = new PantallaDeUnBoton(imgAventura[4], imgBotones[2],this.textos,  5);
    this.pantallas[5] = new PantallaDeUnBoton(imgAventura[5], imgBotones[2], this.textos, 6);
    this.pantallas[6] = new PantallaDeUnBoton(imgAventura[6], imgBotones[2], this.textos, 7);
    this.pantallas[7] = new PantallaDeUnBoton(imgAventura[7], imgBotones[2],this.textos,  8);
    this.pantallas[8] = new PantallaDeUnBoton(imgAventura[8], imgBotones[2],this.textos,  9);
    this.pantallas[9] = new PantallaDeUnBoton(imgAventura[9], imgBotones[2], this.textos, 10);
    this.pantallas[10] = new PantallaDeUnBoton(imgAventura[10], imgBotones[2],this.textos, 11);
    this.pantallas[11] = new PantallaDeUnBoton(imgAventura[11], imgBotones[2],this.textos, 12);
    this.pantallas[12] = new PantallaDeUnBoton(imgAventura[12], imgBotones[2], this.textos, 13);
    this.pantallas[13] = new PantallaDeUnBoton(imgAventura[13], imgBotones[2], this.textos, 14);
    this.pantallas[14] = new PantallaDosBotones(imgAventura[14],imgBotones[2], imgBotones[4],this.textos,15,36);
    this.pantallas[15] = new PantallaDosBotones(imgAventura[15],imgBotones[8], imgBotones[7],this.textos,39,16);    
    this.pantallas[16] = new PantallaDeUnBoton(imgAventura[16], imgBotones[9], this.textos, 17);
    this.pantallas[17] = new PantallaDeUnBoton(imgAventura[17], imgBotones[10], this.textos, 18);
    this.pantallas[18] = new PantallaDeUnBoton(imgAventura[18], imgBotones[2],this.textos,  19);
    this.pantallas[19] = new PantallaDeUnBoton(imgAventura[19], imgBotones[2], this.textos, 20);
    this.pantallas[20] = new PantallaDeUnBoton(imgAventura[20], imgBotones[2], this.textos, 21);
    this.pantallas[21] = new PantallaDeUnBoton(imgAventura[21], imgBotones[2], this.textos, 22);
    this.pantallas[22] = new PantallaDeUnBoton(imgAventura[22], imgBotones[2],this.textos,  23);
    this.pantallas[23] = new PantallaDeUnBoton(imgAventura[23], imgBotones[2], this.textos, 24);
    this.pantallas[24] = new PantallaDeUnBoton(imgAventura[24], imgBotones[2], this.textos, 25);
    this.pantallas[25] = new PantallaDeUnBoton(imgAventura[25], imgBotones[2], this.textos, 26);
    this.pantallas[26] = new PantallaDeUnBoton(imgAventura[26], imgBotones[2],this.textos,  27);
    this.pantallas[27] = new PantallaDeUnBoton(imgAventura[27], imgBotones[2],this.textos,  28);
    this.pantallas[28] = new PantallaDeUnBoton(imgAventura[28], imgBotones[2],this.textos,  29);   
    this.pantallas[29] = new PantallaDeUnBoton(imgAventura[29], imgBotones[2],this.textos,  30); 
    this.pantallas[30] = new PantallaDeUnBoton(imgAventura[30], imgBotones[2], this.textos, 31);    
    this.pantallas[31] = new PantallaDosBotones(imgAventura[31],imgBotones[2], imgBotones[11], this.textos, 32,41); 
    this.pantallas[32] = new PantallaDeUnBoton(imgAventura[32], imgBotones[2], this.textos, 33);       
    this.pantallas[33] = new PantallaDeUnBoton(imgAventura[33], imgBotones[15], this.textos, 34);    
    this.pantallas[34] = new PantallaDeUnBoton(imgAventura[34], imgBotones[14], this.textos, 0);
    this.pantallas[35] = new PantallaDeUnBoton(imgAventura[35], imgBotones[13], this.textos, 42);     
    this.pantallas[36] = new PantallaDeUnBoton(imgAventura[36], imgBotones[5], this.textos, 37);
    this.pantallas[37] = new PantallaDeUnBoton(imgAventura[37], imgBotones[6], this.textos,  38);  
    this.pantallas[38] = new PantallaDeUnBoton(imgAventura[38], imgBotones[13], this.textos, 42);
    this.pantallas[39] = new PantallaDeUnBoton(imgAventura[39], imgBotones[13], this.textos, 42);
    this.pantallas[40] = new PantallaDeUnBoton(imgAventura[40], imgBotones[13],this.textos,  42);
    this.pantallas[41] = new PantallaDeUnBoton(imgAventura[41], imgBotones[14], this.textos, 0);   
    this.pantallas[42] = new PantallaDeUnBoton(imgAventura[42], imgBotones[14], this.textos, 0);  
    this.pantallas[43] = new PantallaDeUnBoton(imgAventura[43], imgBotones[14], this.textos, 0);
    this.pantallaActual = 0;

    this.textos[0] = "DIVINA COMEDIA"
    this.textos[1] = "Dante se despierta en un bosque oscuro y se asusta, ya que no tiene idea de cómo llegó allí.";
    this.textos[2] = "Mientras caminaba asustado y perdido en ese bosque, logra ver una montaña cuya cima está muy iluminada por una hermosa estrella blanca. Dante decide subir a ella para sentirse seguro.";
    this.textos[3] = "Pero en su camino, se interponen furiosos una pantera, un león y un lobo. ¿Qué vas a hacer?. ";
    this.textos[4] = "De vuelta en el oscuro bosque y sin saber qué hacer, Dante se encuentra con el espíritu de Virgilio, un gran poeta y maestro de Dante, que decide ayudarlo y guiarlo por el camino correcto. ";
    this.textos[5] = "Virgilio le dice a Dante que en la cima de esa montaña está el cielo y que para llegar allí, primero tienen que pasar por el purgatorio. Sin embargo, antes de adentrarse en el purgatorio, Virgilio propone a Dante conocer el infierno. Después de un largo y solitario recorrido, llegan a una gran entrada del infierno y la cruzan. ";
    this.textos[6] = "Una vez cruzada la gran puerta, los viajeros se encontraron con el río Aqueronte, en el cual estaba una barca. Caronte, el encargado de llevar a las almas de los muertos a su eterna condena, estaba allí. Angustiados, Virgilio y Dante se suben a la barca. ";
    this.textos[7] = "Más adelante, en la otra orilla, los viajeros se encuentran con un gran cráter. Virgilio le cuenta a Dante que ese cráter es, en sí, el mismísimo infierno, y que consta de nueve círculos según el tipo de pecado que la persona cometió. Este lugar se originó tras la caída de Lucifer desde el cielo hacia la Tierra. ";
    this.textos[8] = "Al empezar a descender por el cráter, los viajeros primero se encuentran con Minos, el juez infernal, quien es el encargado de sentenciar a los condenados. Envuelve a los pecadores con sus colas de serpiente el número de veces necesario que indica a qué círculo pertenece cada pecador. ";
    this.textos[9] = "En el primer círculo, se encuentran con el Limbo, el hogar de los paganos virtuosos y no bautizados. Es un lugar vacío en el que las almas están eternamente condenadas a no conocer a Dios. Aquí, los viajeros se encuentran con Sócrates, Homero, Aristóteles, entre otros.";
    this.textos[10] = "En el segundo círculo se encuentran los lujuriosos, castigados con fuertes vientos que los empujan violentamente de un lado a otro, impidiéndoles encontrar paz y descanso. Virgilio le explica a Dante que este castigo simboliza la inquietud de una persona que se deja llevar por el deseo de los placeres carnales. Aquí se encuentran Cleopatra, Tristán, Helena de Troya y otros adúlteros conocidos.";
    this.textos[11] = "En el tercer círculo se encuentran los pecadores de la gula, entre ellos los glotones, cuyo castigo es soportar una lluvia sucia y congelada, mientras pisan el pútrido suelo cubierto de sus propios vómitos. Todo esto ocurre bajo la atenta mirada de Cerbero, un gran perro bestia de tres cabezas, que los despedaza si intentan escapar. ";
    this.textos[12] = "En el cuarto círculo, Virgilio y Dante observan a los pecadores de avaricia, aquellos que dedicaron su vida solo a los bienes materiales, el dinero y el materialismo. Su castigo consistía en empujar objetos muy pesados a lo largo del círculo del inframundo y chocarse constantemente unos con otros. ";
    this.textos[13] = "En el quinto círculo, los viajeros se encuentran con los pecadores de ira y pereza. Esta sección del infierno es para las almas coléricas que pasarán la eternidad librando una batalla en el río Estigia.";
    this.textos[14] = "En el sexto círculo, se encuentran aquellos que cometieron herejía, los que siempre negaron la supervivencia del alma. Estos condenados, que se hallaban dentro de tumbas envueltas en llamas, gritan sin parar, incitando a que Dante sienta curiosidad. ¿Qué opción vas a elegir? ¿Seguir adelante o acercarte a una tumba para poder verla?."; 
    this.textos[15] = "Más adelante, en la entrada del séptimo círculo, los viajeros se encuentran con lo que parecía ser un laberinto, y al entrar, se encuentran con un Minotauro que custodia la entrada al círculo y que comienza a perseguirlos furiosamente desde atrás. Al huir, ambos se separan, y Dante se topa con dos caminos, uno a la izquierda y otro a la derecha. ¿Cuál vas a elegir?. ";
    this.textos[16] = "Al elegir el camino de la izquiera, Dante se encuentra una espada descansando en el suelo infernal.";
    this.textos[17] = "Al agarrar la espada, Dante decide enfrentarse al Minotauro para regresar con Virgilio, quien lo está buscando. (PRESIONE EL BOTÓN PARA JUGAR).";
    this.textos[18] = "Finalmente, después de una feroz batalla, Dante logra derrotar al Minotauro y reunirse con Virgilio. Ambos continúan su camino.";
    this.textos[19] = "Al lograr salir del laberinto, los viajeros se topan con el séptimo círculo, donde las almas de los homicidas, criminales y violadores están dentro de un río de sangre hirviente, custodiado por centauros armados con arcos y flechas. ";
    this.textos[20] = "Más adelante, dentro de ese mismo séptimo círculo, se encuentran con aquellos que se suicidaron, transformados en árboles, lo cual simboliza el desprecio por la propia vida.";
    this.textos[21] = "En ese bosque maldito, Dante ve cómo los árboles sangran al ser rasguñados por arpías, lo que le provoca repulsión, y avanza rápidamente.";
    this.textos[22] = "Estando aún en el mismo séptimo círculo, los viajeros se topan con los blasfemos, que corren eternamente bajo una lluvia de fuego.";
    this.textos[23] = "En el octavo círculo, encuentran a aquellos que cometieron fraude, los estafadores, aduladores, hechiceros, falsos profetas, políticos corruptos, hipócritas, entre otros. Están acosados por demonios, hirviendo en excremento o sangre, atacados por serpientes, envueltos en llamas o cargando un manto muy pesado.";
    this.textos[24] = "Dante y Virgilio, al descender finalmente hasta lo más profundo del infierno y llegar al noveno círculo, se encuentran con aquellos que cometieron traición. Según la gravedad de la traición, los condenados se hallan dentro de un lago congelado con la cabeza fuera o totalmente sumergidos, dependiendo de la proximidad al centro de ese lago.";
    this.textos[25] = "En el centro de ese lago congelado, se encuentran con un demonio gigante llamado Lucifer, cuya mitad del cuerpo está atrapada dentro del lago. Lucifer tiene tres caras, y en el medio de su boca, Judas Iscariote está siendo masticado eternamente.";
    this.textos[26] = "Aterrorizados por lo que acababan de presenciar, a los viajeros no les quedó más opción que descender por los pies de Lucifer. Al hacerlo, logran finalmente ver una salida.";
    this.textos[27] = "Dante y Virgilio, una vez que lograron salir del infierno, mientras caminaban, ven la montaña del purgatorio, que consta de nueve niveles. Dos de ellos son la antesala, y siete están destinados a los pecados capitales, donde las almas deben ascender para ser purificadas del orgullo, la envidia, la ira, la pereza, la avaricia, la gula y la lujuria.";
    this.textos[28] = "Dante, una vez purificado tras superar todos los niveles del Purgatorio, llega a la cima donde se encuentra el Paraíso Terrenal. Aquí, se reencuentra con Beatriz, una joven de la que Dante se enamoró, quien remplazará a Virgilio como guía para ascender al cielo. Dante se despide llorando de Virgilio, ya que este último pertenece al primer círculo del Infierno.";
    this.textos[29] = "Mientras Dante sigue a Beatriz, ella le explica que el cielo consta de nueve esferas: Luna, Mercurio, Venus, Sol, Marte, Júpiter, Saturno, estrellas fijas y primer móvil. En cada una de estas divisiones del cielo, se encuentra un tipo específico de ángel, según la jerarquía angelical.";
    this.textos[30] = "Una vez ascendidos a lo más alto, Beatriz y Dante llegan al Empíreo, donde se encuentra Dios.";
    this.textos[31] = "Beatriz toma a Dante, le dice que no mire para atrás y lo lleva hacia la luz. ¿Que vas a hacer?";
    this.textos[32] = "Hipnotizado, Dante recibe un fuerte golpe de felicidad inexplicable al poder ver a Dios y contemplarlo como tres círculos que representan al Padre, al Hijo y al Espíritu Santo. Beatriz toma su lugar aquí, ya que es donde reside, y Dante la acompaña lleno de felicidad.";
    this.textos[33] = "Lleno de una infinita felicidad y amor, Dante decide quedarse para siempre.";   
    this.textos[34] = "La felicidad fue tan intensa que hizo que Dante se despertara. Luego, él se queda sentado en su cama, muy sorprendido por la experiencia y pensando que quizás no pudo quedarse en el cielo porque todavía estaba vivo, o que simplemente todo fue un sueño. Después, Dante sale de su casa, se sienta en una roca y decide escribir un libro.";   
    this.textos[35] = "Dante queda rodeado por las bestias salvajes, que proceden brutalmente a devorarlo.";
    this.textos[36] = "Dante se acerca a una tumba y Virgilio le advierte que no se acerque más, pero una sensación de curiosidad insoportable invade a Dante.";
    this.textos[37] = "Lamentablemente, un condenado se levanta furiosamente de la tumba y sujeta fuertemente a Dante. A pesar de los intentos de Virgilio por ayudarlo, no lo consigue.";
    this.textos[38] = "Virgilio huye aterrorizado y Dante es jalado hacia dentro de la tumba, consumido por las llamas para siempre. En el infierno, es demasiado tarde para arrepentirse.";
    this.textos[39] = "Al ir por la derecha, Dante se encuentra con un callejón sin salida. El minotauro los encuentra a ambos, los agarra y se los lleva para torturarlos.";
    this.textos[40] = "Dante no consigue derrotar al minotauro, y éste prosigue a descuartizarlo.";
    this.textos[41] = "Al detenerse y mirar atrás, Dante despierta inmediatamente sorprendido, olvidando toda aquella experiencia. Luego se sienta, tratando de recordar,y, al no poder recordar nada, se levantó y continuó escribiendo su poesía como siempre lo hizo.";   
    this.textos[42] = "Dante despierta de inmediato gritando horrorizado, corre fuera de su casa gritando y llamando la atención de la gente, que luego intenta calmarlo. Aunque solo fue una pesadilla, él lo sintió muy real.";
    this.textos[43] = "Creditos : \nAutor de la obra :Dante Alighieri \nArtista : playground ai, google \nProgramador : CORONADO GUILLEN GUSTAVO \nlegajo :75708/9"   
    this.mostrarJuego = false; 
    this.juego = new Juego(); 
  }
dibujar() {  
    if (this.mostrarJuego) {
      this. juego. dibujar();      
    }
    else{
       this.pantallas[this.pantallaActual].dibujar();    
       this.mostrarTexto(); 
    }   
  }   
mostrarTexto() {
    textAlign(CENTER);
    text(this.textos[this.pantallaActual], 50, 55, 700, 500);    
     if(this.pantallaActual===0){
     fill(random(210),0,0);
     textSize(80);    
     }else if(this.pantallaActual ===13||this.pantallaActual ===17||this.pantallaActual ===18||this.pantallaActual ===37||this.pantallaActual ===38){
      fill(0,0,190);     
     }else if(this.pantallaActual===43){
       textSize(40);
       fill(255,0,0);     
     }else{
      fill(255);
      textSize(21);
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
    
