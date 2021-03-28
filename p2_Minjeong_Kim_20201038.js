let a = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  basic();
}



function keyPressed(){
  if(key == 'b'){
    basic();
    a = 0;
  }
  
  if(key == 'h'){
    humming();
    a = 1;
  }
}



function basic(){
  for (let i = 0; i < width; i +=1){
    stroke(255,255,230);
    line(i, 0, i, height);
  }
}



function humming(){
  let r = random(100, 255);
  for (let i = 0; i < width; i +=1){
    stroke(r, 155 + i/9, 200 + i/9);
    line(i, 0, i, height);
  }
}



function draw() {
  if (mouseIsPressed){
      note();
  }
}



function note(){
  let esizeX = 8;
  let esizeY = 5;

  let leng = random(25,35);
  
  //잇단음표의 두 번째 음표의 x에 더함
  let twoX = random(8, 13);
  //잇단음표의 두 번째 음표의 y에 더함
  let ty = int(random(0,2));
  //두 번째 음표의 y위치가 첫 번째 음표의 y위치보다 위 혹은 아래에 있기 위해
  let twoY;
  if (ty==1){
  twoY = random(-13, -8);}
  else{
  twoY = random(8, 13);}
  
  let where = random(-20,20);
  let noteX = mouseX + where;
  let noteY = mouseY + where;
  //where을 더해 마우스 주변으로 랜덤하게 음표가 나타나도록 함
  
  let sometimes = int(random(0,9));
  let sometimess = int(random(0,4));
    
    if (a == 1){
    fill(255,255,255,100);
    stroke(255,255,255,100);}
    if (a == 0){
    fill(0);
    stroke(0);
    }
    
    strokeWeight(2);
    smooth();
    line(pmouseX, pmouseY+12, mouseX, mouseY+12);
    line(pmouseX, pmouseY+6, mouseX, mouseY+6);
    line(pmouseX, pmouseY, mouseX, mouseY);
    line(pmouseX, pmouseY-6, mouseX, mouseY-6);
    line(pmouseX, pmouseY-12, mouseX, mouseY-12);
    
    
    
    strokeWeight(1);
    if (sometimes==8){
      //4분음표
      ellipse(noteX, noteY, esizeX, esizeY);
      line(noteX+esizeX/2, noteY, noteX+esizeX/2, noteY-leng);
      
      //점4분음표
      if (sometimess==1){
        ellipse(noteX+7, noteY+2, 2, 2);
      }
      
      //8분음표
      if (sometimess==2){
        quad(noteX+esizeX/2, noteY-leng, noteX+esizeX/2+6, noteY-leng+4,
            noteX+esizeX/2+6, noteY-leng+10, noteX+esizeX/2, noteY-leng+6);
        line(noteX+esizeX/2+6, noteY-leng+4, noteX+esizeX/2+6, noteY-leng+15);
      }
      
      //16분음표
      if (sometimess==3){
        quad(noteX+esizeX/2, noteY-leng, noteX+esizeX/2+6, noteY-leng+4,
            noteX+esizeX/2+6, noteY-leng+7, noteX+esizeX/2, noteY-leng+3);
        line(noteX+esizeX/2+6, noteY-leng+4, noteX+esizeX/2+6, noteY-leng+11);
        
        quad(noteX+esizeX/2, noteY-leng+10, noteX+esizeX/2+6, noteY-leng+14,
            noteX+esizeX/2+6, noteY-leng+17, noteX+esizeX/2, noteY-leng+13);
        line(noteX+esizeX/2+6, noteY-leng+14, noteX+esizeX/2+6, noteY-leng+21);
      }
    }
    //line에서 esize/2를 더해 선의 start x좌표가 올바르도록 함
    //leng을 빼 음표 선이 위로 향하도록 함
    
    
    
    //2분음표
    if (sometimes==6){
      noFill();
      ellipse(noteX, noteY, esizeX, esizeY);
      
      //2분음표
      if (sometimess==1){
        line(noteX+esizeX/2, noteY, noteX+esizeX/2, noteY-leng);
      }
      
      //점2분음표
      if (sometimess==2){
        if (a == 1){
          fill(255,255,255,100);
          stroke(255,255,255,100);
        }
        if (a == 0){
          fill(0);
          stroke(0);
        }
        line(noteX+esizeX/2, noteY, noteX+esizeX/2, noteY-leng);
        ellipse(noteX+7, noteY+2, 2, 2);
      }
      
      //온음표
      if (sometimess==3){
        noFill();
        ellipse(noteX-1, noteY, esizeX, esizeY);
      }
    }

    
    
    //잇단음표
    if (sometimes==3){
      
      if(sometimess==1){
      //두잇단음표(8분음표)
      //첫번째 8분음표
      ellipse(noteX, noteY, esizeX, esizeY);
      line(noteX+esizeX/2, noteY, noteX+esizeX/2, noteY-leng);
      //잇단음표의 경우, 세로 라인이 수직이 되도록 way를 더하지 않음
      
      //두번째 8분음표
      ellipse(noteX+twoX, noteY+twoY, esizeX, esizeY);
      //twoX, twoY를 더함으로써 두번째 음표 원의 위치를 결정
      line(noteX+twoX+esizeX/2, noteY+twoY, noteX+twoX+esizeX/2, noteY+twoY-leng);
      
      //8분음표 잇는 선
      quad(noteX+esizeX/2, noteY-leng, noteX+twoX+esizeX/2, noteY+twoY-leng,
          noteX+twoX+esizeX/2, noteY+twoY-leng+4, noteX+esizeX/2, noteY-leng+4);
      }
      
      
      if(sometimess==2){
      //두잇단음표(16분음표)
      //첫번째 8분음표
      ellipse(noteX, noteY, esizeX, esizeY);
      line(noteX+esizeX/2, noteY, noteX+esizeX/2, noteY-leng);
      //잇단음표의 경우, 세로 라인이 수직이 되도록 way를 더하지 않음
      
      //두번째 8분음표
      ellipse(noteX+twoX, noteY+twoY, esizeX, esizeY);
      //twoX, twoY를 더함으로써 두번째 음표 원의 위치를 결정
      line(noteX+twoX+esizeX/2, noteY+twoY, noteX+twoX+esizeX/2, noteY+twoY-leng);
      
      //8분음표 잇는 선
      quad(noteX+esizeX/2, noteY-leng, noteX+twoX+esizeX/2, noteY+twoY-leng,
          noteX+twoX+esizeX/2, noteY+twoY-leng+2, noteX+esizeX/2, noteY-leng+2);
      quad(noteX+esizeX/2, noteY-leng+5, noteX+twoX+esizeX/2, noteY+twoY-leng+5,
          noteX+twoX+esizeX/2, noteY+twoY-leng+6, noteX+esizeX/2, noteY-leng+6);
      }
      
      
      if(sometimess==3){
      //셋잇단음표(8분음표)
      //첫번째 8분음표
      ellipse(noteX, noteY, esizeX, esizeY);
      line(noteX+esizeX/2, noteY, noteX+esizeX/2, noteY-leng);
      //잇단음표의 경우, 세로 라인이 수직이 되도록 way를 더하지 않음
      
      //두번째 8분음표
      ellipse(noteX+twoX, noteY+twoY, esizeX, esizeY);
      //twoX, twoY를 더함으로써 두번째 음표 원의 위치를 결정
      line(noteX+twoX+esizeX/2, noteY+twoY, noteX+twoX+esizeX/2, noteY+twoY-leng);
      
      //세번째 8분음표
      ellipse(noteX+twoX*2, noteY+twoY*2, esizeX, esizeY);
      line(noteX+twoX*2+esizeX/2, noteY+twoY*2, noteX+twoX*2+esizeX/2, noteY+twoY*2-leng);
      
      //8분음표 잇는 선
      quad(noteX+esizeX/2, noteY-leng, noteX+twoX*2+esizeX/2, noteY+twoY*2-leng,
          noteX+twoX*2+esizeX/2, noteY+twoY*2-leng+4, noteX+esizeX/2, noteY-leng+4);
      }
    }
    
    
    
    //쉼표
    if(sometimes==2){
      //온쉼표
      if(sometimess==1){
        rect(noteX, noteY, 8, 3);
        line(noteX-2, noteY, noteX+10, noteY);
      }
      //8분쉼표
      if(sometimess==2){
        ellipse(noteX, noteY, 4, 4);
        line(noteX, noteY+2, noteX+5, noteY-5);
        line(noteX+5, noteY-5, noteX+1, noteY+8);
      }
    }
}
