// enlace del video : https://youtu.be/K_3MNmALm2w

boolean animacion1 = false;            
boolean animacion2 = false;
boolean imgOriginal = false;
boolean cuadRojos = false;
                                      
color miColor0 = color(107, 169, 242);    
color miColor1 = color(165, 145, 230);
color miColor2 = color(110, 170, 150);
color miColor3 = color(143, 130, 49);

PImage mi_imagen;                        



void setup() {
    size(800, 400);                  
    mi_imagen = loadImage("OP.jpg");       
} 



void draw() {
  
    noFill();                    
    stroke(24, 212, 198);         
    strokeWeight(7);               
    rectMode(CENTER);           
    rect(600, 200, 393, 393);
    
  if(imgOriginal==true){                     
    for (int i = 0; i < 4; i += 1) {      
        noStroke();                      
        if (i == 0) {
            fill(miColor0);
        } else if (i == 1) {
            fill(miColor1);
        } else if (i == 2) {
            fill(miColor2);
        } else if (i == 3) {
            fill(miColor3);
        }
        rectMode(CENTER);
        rect(600, 200, 385 - (i * 97), 385 - (i * 97));    
   }
    for (int i = 0; i < 72; i += 1) {     
        strokeWeight(1.3);    
        stroke(175, 0, 0);    
        line(i * 4 + 458, 57, i * 4 + 458, 342);  //lineas
   }  
 }
  
 
    
  if (cuadRojos == true) {                
      cuadradosRojos();           
 }
  
  if (animacion1 == true||animacion2 == true){  
    if (animacion1==true) {              
        background(24, 212, 198);
        noFill();
        
        int tamaño = 457;             

      for (int i = 0; i < 4; i++) {      
          int cuadrados0 = (width - i * 115 + frameCount*4) % tamaño;      
          rectMode(CENTER);                                                 
          strokeWeight(58);                                                 
          rect(600, 200, cuadrados0, cuadrados0);                            
        if (i == 0) {
            stroke(255, 0, 0);
        } else if (i == 1) {
            stroke(255, 255, 0);                 
        } else if (i == 2) {
            stroke(255, 0, 255);
        } else if (i == 3) {
            stroke(0, 255, 0);
        }
     }
      for (int i = 0; i < 72; i += 1) {            
          strokeWeight(2);
          stroke(208, 100, 250);                     
          line(i * 4 + 458, 57, i * 4 + 458, 342);
     }
        noStroke();
        fill(0,0,0,100);
        rect(600, 200,80,80);     
   }   
    if (animacion2==true) {                
        background(0, 0, random(255));       
        noFill();
        stroke(0, 0, 0);
        strokeWeight(9);
        
        int tamaño2 = 1000;            
  
      for (int a = 0; a < 150; a++) {  
          rectMode(CENTER);
          int cuadrado1 = (width - a * 50 + frameCount) % tamaño2;   
          stroke(24, 212, 198);                               
          pushMatrix();                                    
          translate(mouseX, mouseY);                  
          rotate(radians(frameCount)); 
          rect(0, 0, cuadrado1, cuadrado1); 
          popMatrix();                                 
     }
      for (int b = 0; b < 150; b++) {
          rectMode(CENTER);
          int cuadrado2 = (width - b * 50 + frameCount*2) % tamaño2;       
          stroke(255,0, 0,33); 
          pushMatrix(); 
          translate(mouseX, mouseY); 
          rotate(radians(frameCount)); 
          rect(0, 0, cuadrado2, cuadrado2); 
          popMatrix(); 
     } 
   }  
  }else {
      imgOriginal = true;  
      cuadRojos=true;
  }
    image(mi_imagen, 0, 0);      
}
 
 
 
void cuadradosRojos() {                    
   
    for (int x = 0; x < 4; x += 1) {
      for (int y = 0; y < 4; y += 1) {           
          pushMatrix();
          translate(x * 96 + 455, y * 96 + 56);         
          float anguloRotacion = calcularGiro(x * 96 + 455, y * 96 + 56);      
          rotate(anguloRotacion);                                             
        if (mouseX > x * 96 + 408 && mouseX < x * 96 + 503 && mouseY > y * 96 + 8 && mouseY < y * 96 + 104) {        
            fill(random(122),random(122), random(122),random(255));                                             
                                                                                                              
        }else {        
            fill(255, 0, 0);                                           
        }
          noStroke();      
          quad(0, -48, 47, 0, 0, 48, -47, 0);                   
          popMatrix();
     }
   }
}



float calcularGiro(float quadX, float quadY){  
                                                                        
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {  
        return atan2(mouseY - quadY, mouseX - quadX);        
    }else {                                                  
        return 0;                        
    }
}



void mousePressed() {      
  
    if (mouseButton == LEFT) {  
        animacion1 = true;
        animacion2 = false;
   
    }else if (mouseButton == RIGHT) { 
        animacion2 = true;
        animacion1=false;
    }
}




void mouseReleased() {  
  
    if (mouseButton == LEFT) { 
        animacion1= false;         
         
    }else if (mouseButton == RIGHT) { 
        animacion2 = false;  
    }
}
