// enlace del video: https://youtu.be/ANIfia126kc

PImage []miPortada= new PImage [2];
boolean creditos=false;
boolean botonesMenu = false;

PImage [] imagenes = new PImage [31];       
int imagenActual = 0;                        
boolean cambio1=false;                         

PImage [] imagenes2 = new PImage [8];
int imagenActual2 = 0;
boolean cambio2=false;
boolean presionado = false;

PImage [] botones = new PImage [14];

String [] textos = new String[31];
int textoActual = 0;

String [] textos2 = new String[8];             
int textoActual2 = 0;

PFont fuen2;
PFont fuen;                              



void setup(){
                                                             
   size(600, 600);  
   for(int a=0; a<8; a++){    
       int index = a + 1;                                   
       imagenes2[a] = loadImage("imgs" + index +".jpg");
  }     
   for(int i=0; i<31; i++){    
       int index = i + 1;
       imagenes[i] = loadImage("img" + index +".jpg");
  }  
   for(int j=0; j<14; j++){    
       int index = j + 1;
       botones[j] = loadImage("boton" + index +".png");
  }  
   for(int c=0; c<2; c++){   
       int index = c + 1;
       miPortada[c] = loadImage("menu" + index +".jpg");
  }     
   textos2 = loadStrings("data/historia2.txt"); 
   textos = loadStrings("data/historia1.txt");               
   fuen =loadFont("MesquiteStd-48.vlw");                     
   fuen2 =loadFont("SimplifiedArabic-48.vlw");  
}



void draw(){
 
   frameRate(60);
    
   if(cambio1==true){                                    
       image(imagenes[imagenActual], 0, 0, width, height);       
  }else{          
       image(miPortada[0], 0, 0);
       image(botones[0], 250, 220, 100, 60);
       image(botones[1], 250, 300, 100, 60);              
  }
   if(cambio2==true){       
       image(imagenes2[imagenActual2], 0, 0, width, height);        
  }
   if(creditos==true){
       image( obtenerMiPortadaCreditos(0,1),0,0,width,height);  
  }  
   botones();
   textos();
}



PImage obtenerMiPortadaCreditos(int a0,int a1){  
  
   int miPorC= a0 + a1;                           
   return miPortada[miPorC];  
}



void manejarBotonesMenu(){         
                                                                                                    
   if(!botonesMenu && mouseX>250&&mouseX<350&&mouseY>220&&mouseY<280){
       cambio1=true;                                                    
       creditos=false;                                                  
       botonesMenu  = true;   
  }
   if(!botonesMenu && mouseX>250&&mouseX<350&&mouseY>300&&mouseY<360){
       cambio1=false;
       creditos=true;
       botonesMenu  = true;
  }
}



void mousePressed(){
  
   manejarBotonesMenu();  
   if(cambio1==true){                            
     if(dist(mouseX,mouseY, 550,220) < 30){         
       if(imagenActual == 30){                      
           imagenActual=0;        
           cambio1=false;
           botonesMenu  = false;
      }else{      
           imagenActual++; 
           textoActual++ ;    
      }
       if(imagenActual == 0){   
        textoActual=0;         
      }       
    }   
  }               
   if(imagenActual == 2 || imagenActual == 13 || imagenActual == 14 || imagenActual == 27){   
     if(dist(mouseX, mouseY, 50, 220) < 30&&!presionado){                                      
         cambio1 = false;                                                                       
         cambio2 = true; 
         presionado = true;
       if(imagenActual == 2){
           imagenActual2 = 0;           
      }else if(imagenActual == 13){
           imagenActual2 = 1;
      }else if(imagenActual == 14){
           imagenActual2 = 4;
      }else if(imagenActual == 27){
           imagenActual2 = 5;
      }       
    }else if( cambio2==true&&cambio1==false){                               
       if(dist(mouseX,mouseY, 550,220) < 30){                                
         if(imagenActual2 == 1){                                               
             imagenActual2 = 2;                                
        }else if(imagenActual2 == 2){                  
             imagenActual2 = 3;                              
        }else if(imagenActual2 == 0||imagenActual2 == 3||imagenActual2 == 4){ 
             imagenActual2 = 6;              
        }else if(imagenActual2 == 27){                    
             imagenActual2 = 5;
        }else if(imagenActual2 == 5){                    
             imagenActual2 = 7;
        }else if(imagenActual2 == 6||imagenActual2 == 7){                                                                    
             cambio2=false;
             imagenActual = 0;
             textoActual=0;
             botonesMenu = false;
             presionado= false;
        }                 
      }         
    }                 
  }  
   if(creditos == true){
     if(dist(mouseX,mouseY, 300,510) < 30){    
         creditos=false;
         botonesMenu  = false;
    }
  }
}



void botones(){
   
   if(cambio1 == true){
       image(botones[2], 520, 190, 60, 60);     
     if(imagenActual == 2){           
         image(botones[3], 520, 190, 60, 60);
         image(botones[13], 20, 190, 60, 60);      
    }else if(imagenActual == 13){       
         image(botones[4], 20, 190, 60, 60);       
    }else if(imagenActual == 14){                   
         image(botones[8], 520, 190, 60, 60);
         image(botones[7], 20, 190, 60, 60);      
    }else if(imagenActual == 27){   
         image(botones[9], 20, 190, 60, 60);     
    }else if(imagenActual == 29){  
         image(botones[12], 520, 190, 60, 60);      
    }else if(imagenActual == 30){  
         image(botones[10], 520, 190, 60, 60);
    }
  }  
   if (cambio2 == true){
     if (imagenActual2 == 6||imagenActual2 == 7){ 
         image(botones[10], 520, 190, 60, 60);   
    }else if(imagenActual2 == 0||imagenActual2 == 3||imagenActual2 == 4||imagenActual2 == 5){ 
         image(botones[11], 520, 190, 60, 60);                                                   
    }else if (imagenActual2 == 1){                                                              
         image(botones[5], 520, 190, 60, 60);  
    }else if (imagenActual2 == 2){ 
         image(botones[6], 520, 190, 60, 60);  
    }  
  }  
   if(creditos== true){  
       image(botones[10], 270, 480, 60, 60);                      
  }
} 



void textos(){   
                                                    
                                                    
   if(cambio1==true||cambio2==true){       
       noFill();
       strokeWeight(11);
       rect(0,0,600,600);            
       textFont(fuen2,21);            
       textAlign(CENTER); 
   
     if(cambio1 == true){         
       if(imagenActual == 0||imagenActual == 2||imagenActual == 4||imagenActual == 6||imagenActual == 7||imagenActual == 8||imagenActual == 9||imagenActual == 10||imagenActual == 12||imagenActual == 13||imagenActual == 15||imagenActual == 18||imagenActual == 19||imagenActual == 20||imagenActual == 26||imagenActual == 27||imagenActual == 28||imagenActual == 29){      
         
      }else if(imagenActual == 14||imagenActual == 16||imagenActual == 17||imagenActual == 21||imagenActual == 24){
           strokeWeight(0);
           fill(0,0,0,100);
           rect(20,10,560,165);  
      }else{
           strokeWeight(0);
           fill(255,255,255,100);  
           rect(20,10,560,165);
      }
                           
       if(imagenActual == 0||imagenActual == 2||imagenActual == 4||imagenActual == 7||imagenActual == 8||imagenActual == 9||imagenActual == 10||imagenActual == 13||imagenActual == 14||imagenActual == 15||imagenActual == 16||imagenActual == 17||imagenActual == 19||imagenActual == 20||imagenActual == 21||imagenActual == 24||imagenActual == 26||imagenActual == 27||imagenActual == 28||imagenActual == 29){  
           fill(255);          
      }else{
           fill(0);         
      }
         text(textos[textoActual], 30, 30, 530, height);      
    }                       
     if(cambio2 == true){              
       if(imagenActual2 == 0){            
           fill(255);                        
           textoActual2 = 0;
      }else if(imagenActual2 == 6){
           fill(255);
           textoActual2 = 7;
      }else if(imagenActual2 == 1){
           fill(255);
           textoActual2 = 1;
      }else if(imagenActual2 == 4){
           fill(255);
           textoActual2 = 4;
      }else if(imagenActual2 == 2||imagenActual2 == 3||imagenActual2 == 5||imagenActual2 == 7){
           strokeWeight(0);                         
           fill(0, 0, 0, 100);
           rect(20, 10, 560, 165);
           fill(255);
         if(imagenActual2 == 2){
             textoActual2 = 2;
        }else if(imagenActual2 == 3){
             textoActual2 = 3;
        }else if(imagenActual2 == 5){
             textoActual2 = 5; 
        }else if(imagenActual2 == 7){
             textoActual2 = 6; 
        }
      }
         text(textos2[textoActual2], 30, 30, 530, height);      
    }   
  }
   if(cambio1==false&&cambio2==false&&creditos==false){   
       frameRate(30);                                      
       strokeWeight(0);                   
       fill(random(100),100);
       rect(0,0,600,600);    
       noFill();
       strokeWeight(11);
       rect(0,0,600,600);       
       textAlign(CENTER);
       fill(random(160),0,0);
       textFont(fuen, 111);
       text("DIVINA COMEDIA",width/2,150);
       textFont(fuen, 45);
       text("dante alighieri ",width/2,200);
  }else if(creditos==true){                             
       strokeWeight(0);                                    
       fill(random(255),random(255),random(255),50);           
       rect(20,10,560,430); 
       noFill();
       strokeWeight(11);
       rect(0,0,600,600);           
       fill(255);
       textFont(fuen, 80);
       text("Creditos :",width/2,110);
       textFont(fuen, 50);
       text("Autor de la obra :",190,190);
       textFont(fuen, 50);
       text("Artista :",150,260);
       textFont(fuen, 50);
       text("Programador :",140,330);
       textFont(fuen, 50);
       text("legajo :",250,400);  
       textFont(fuen, 50);
       text("Dante Alighieri",410,190);
       textFont(fuen, 50);
       text("playground ai, google",350,260);
       textFont(fuen, 50);
       text("CORONADO GUILLEN GUSTAVO",390,330);
       textFont(fuen, 50);
       text("75708/9",350,400);   
  }
} 
