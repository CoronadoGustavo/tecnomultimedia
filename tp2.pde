PImage mi_imagen;      
color miColor0 = color(107, 169, 242);
color miColor1 = color(165, 145, 230);
color miColor2 = color(110,170,150);
color miColor3 = color(143,130,49);

void setup(){
 
  size(800,400);
  mi_imagen=loadImage("OP.jpg");
  image(mi_imagen,0,0);  
  
  noFill();
  stroke(24,212,198);
  strokeWeight(7);
  rect( 403,3,393,393);  
  
  frameRate (50);
}

  
void draw(){

     for(int i=0;i<4;i+=1){        
       noStroke();      
      if (i==0) {          
       fill(miColor0);
      }else if (i==1){
       fill(miColor1);
      }else if (i==2){
       fill(miColor2);
      }else if (i==3){
       fill(miColor3);
      }      
       rectMode(CENTER);     
       rect(600,200,385-(i*97),385-(i*97)); 
      
     if ( dist(mouseX, mouseY, 600, 200) < 50){      
       fill(random(255),random(255),random(255));
       rect(600,200,385-(i*97),385-(i*97));          
      }  
        
    }
        
    for(int i = 0; i < 72; i += 1) {    
       strokeWeight(1.3);
       line(i*4+458, 57, i*4+458, 342);     
     if(keyPressed){       
       stroke(random(255),random(255),random(255));   
      }else {
       stroke(175,0,0);       
    }
   }
   
  Diamantes(); 
}
    
    
void Diamantes(){
  
   if(mousePressed){      
    for(int i=0;i<4;i+=1){  
       rectMode(CENTER);
       strokeWeight(random(120));      
       stroke(random(255),random(255),random(255));
       rect(600,200,266-(i*97),266-(i*97)); 
   }      
  }    
      
    for(int x=0; x<4; x+=1){        
     for(int y=0; y<4; y+=1){
       noStroke();     
       quad( x*96+408,y*96+56,x*96+455,y*96+8,x*96+503,y*96+56,x*96+455,y*96+104);     
      if( mouseX>600 && mouseY>100 ) {      
        fill(random(255),random(255),random(255));    
        quad( x*96+random(60)+408,y*96+56,x*96+455,y*96+8,x*96+503,y*96+56,x*96+455,y*96+104);  
        for(int j = 0; j < 4; j += 1)  {          
         stroke(random(255),random(255),random(255));
         strokeWeight(0.1);
         line(408, j*96+56, 790, j*96+56);      
       }       
     }else { 
        fill(255,0,0);
        quad( x*96+408,y*96+56,x*96+455,y*96+8,x*96+503,y*96+56,x*96+455,y*96+104);
       }      
    }  
   }                 
}
     
