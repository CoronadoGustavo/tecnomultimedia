PImage miImagen1, miImagen2,miImagen3,miImagen4;
PFont  misLetras;
String miPantalla;
float frameCount;


                         void setup (){
 
    size (640,480); 
    frameRate(33);
    
    misLetras = loadFont("Cambria-Bold-48.vlw");

    miImagen1=loadImage("CAMARO.jpg");
    miImagen2=loadImage("INTERIOR.jpg");
    miImagen3=loadImage("MOTOR.jpg");
    miImagen4=loadImage("CAMARO2.jpg");
 
    miPantalla = "pantalla 5";
    miPantalla = "pantalla 4";
    miPantalla = "pantalla 3";
    miPantalla = "pantalla 2";
    miPantalla = "pantalla 1";  
 
}


                          void draw(){
                             
    textFont(misLetras,25);                           
  
if ( miPantalla.equals("pantalla 1") ) {
    
    image(miImagen1,0,0);    
    fill(100,0,100);
    ellipse(75, 430, 100, 50);    
    fill(255,255,255);
    textAlign(CENTER);
    textSize(15);        
    text("COMENZAR", 76, 435);   
    
} 
   
else if ( miPantalla.equals("pantalla 2")  ) {
   
    image(miImagen1,0,0);
    fill(0,200,200);
    textAlign(CENTER);
    textSize(25);
    text("El Chevrolet Camaro Zl1 \nes un poderoso automovil deportivo\nque arraza en la pista \ny que domina el mercado.\nUna de las mejores cartas del Zl1 \nes su estampa agresiva,\nfiel a su pretensión depredadora.", frameCount-215,135 );
    frameCount += 1;
    
    if ( frameCount>= 1070 ) {     
    miPantalla = "pantalla 3";
    frameCount = 0;
    }
    
} 
  
else if ( miPantalla.equals("pantalla 3") ) {
   
    image(miImagen2,0,0);    
    fill(255);
    textAlign(CENTER);
    textSize(6+frameCount/18);
    text("Posee un sistema \nde infoentretenimiento \n3 Plus de Chevrolet \ncon pantalla táctil \ncolor HD de 8 en diagonal,\n y asientos delanteros deportivos \ntipo butaca muy cómodos para un \nmanejo de desempeño", width/2, 100 );  
    frameCount+=1;
   
    if ( frameCount>= 550 ) {
    miPantalla = "pantalla 4";
    frameCount = 0;
    }
    
}   
  
else if ( miPantalla.equals("pantalla 4") ) {
                     
    image(miImagen3,0,0);   
    textAlign(CENTER);
    textSize(25);
    fill( #7800B9 ,map(frameCount,0,150,0,255));
    text("El feroz rendimiento de ZL1 \nlo convierten en el Camaro \nmás poderoso de la historia. \nPoderoso motor V8 supercargado de 6.2L, \npotencia de 650 HP, 650 lb-pie de torque,\n y transmisión automática con \npaleta de cambios de 10 velocidades", width/2, 145 );
    frameCount+=1;
    
    if ( frameCount>= 550 ) {
    miPantalla = "pantalla 5";
    frameCount = 0;
    }
    
} 

else if ( miPantalla.equals("pantalla 5") ) {
    
    image(miImagen4,0,0);    
    fill(200,200,0);
    textAlign(CENTER);
    textSize(25);
    text("Frenos antibloqueo \nde alto desempeño delanteros y traseros. \nBrembo para ayudar a reducir \nel bloqueo de los rines y a mantener el \ncontrol de la dirección en frenadas bruscas\n sobre superficies resbaladizas.", -frameCount+895, 145 );
    frameCount += 1;
           
    if ( frameCount>= 1160 ) {
    image(miImagen4,0,0);              
    fill(0,100,100);
    ellipse(561, 430, 100, 50);    
    fill(255,255,255);
    textAlign(CENTER);
    textSize(15);   
    text("VOLVER", 562, 435);       
    }
}

}
  


                          void mousePressed() {
  
if ( miPantalla.equals("pantalla 1") ) {
    if ( dist(mouseX, mouseY, 76, 435) < 50) {      
     miPantalla = "pantalla 2";
     frameCount = 0;
     }
}

if ( miPantalla.equals("pantalla 5") ) {
    if ( dist(mouseX, mouseY, 561, 430) < 50 ) {     
    miPantalla = "pantalla 1";
    frameCount = 0;
    }  
}

}
