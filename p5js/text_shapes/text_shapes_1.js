// Text to shapes manipulation
// visuals for sector coordillera
// by Guillermo Montecinos

var font;
var string = 'coordillera';
var box;
var tamanoTexto = 300;
var puntos;
var rad = 15;
var a = 5;
var b = 7;

function preload(){
  font = loadFont('./assets/helvetica.otf');
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0);
  textSize(tamanoTexto);
  box = font.textBounds(string);
  puntos = font.textToPoints(string, 0, 0, tamanoTexto, {
    sampleFactor: .3,
    simplifyThreshold: 0
  });
  noCursor();
}

function draw(){
  console.log(mouseX);
  console.log(mouseY);
  // rad = map(mouseX, 0, width, 0, 50);
  rad = map(550, 0, width, 0, 50);
  randomSeed(100);
  background(0,0,0,10);
  translate(width/2,height/2);
  push();
    // noFill();
    // stroke(255);
    // rectMode(CENTER);
    // rect(0,0,box.w,box.h);
    noStroke();
    fill(255,255,255,100);
    translate(-box.w/2,box.h/2);
    // text(string,0,0);
    for (var i = 0; i < puntos.length; i++) {
      // fill(random(255),random(255),random(255),100);
      // ellipse(puntos[i].x + random(-5,5),puntos[i].y + random(-5,5),10,10);
      // ellipse(puntos[i].x,puntos[i].y,10,10);
      // ellipse(puntos[i].x + random(1,rad) * cos(random(a) * millis()/mouseY + i * PI/3),puntos[i].y + random(1,rad) * sin(random(b) * millis()/mouseY + i * PI/3),rad*.9,rad*.9);
      ellipse(puntos[i].x + random(1,rad) * cos(random(a) * millis()/631 + i * PI/3),puntos[i].y + random(1,rad) * sin(random(b) * millis()/631 + i * PI/3),rad*.9,rad*.9);
    }
    // beginShape();
    // for (var i = 0; i < puntos.length; i++) {
    //   vertex(puntos[i].x,puntos[i].y);
    // }
    // endShape(CLOSE);
    // if (frameCount%60) {
    //   ellipse(puntos[frameCount].x,puntos[frameCount].y,10,10);
    // }
  pop();
}
