// Text to shapes manipulation
// visuals for sector coordillera
// by Guillermo Montecinos

var font;
var string = 'coordillera';
// var string = 'coordillera';
var box;
var tamanoTexto = 300;
var puntos;
var rad;
var a = 7;
var b = 9;
var pos = [];
var falling = false;
var starTime = 0;
var fallTime = 1800;

function preload(){
  font = loadFont('./assets/helvetica.otf');
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0);
  // background(255);
  textSize(tamanoTexto);
  box = font.textBounds(string);
  puntos = font.textToPoints(string, 0, 0, tamanoTexto, {
    sampleFactor: .3,
    simplifyThreshold: 0
  });
  for (var i = 0; i < puntos.length; i++) {
    pos[i] = createVector(puntos[i].x,-height/2-box.h/2);
  }
  noCursor();
}

function draw(){
  // console.log(mouseX);
  // console.log(mouseY);
  rad = map(500, 0, width, 0, 50);
  randomSeed(100);
  background(0,20);
  // background(255,20);

  translate(width/2,height/2);
  push();
    noStroke();
    fill(255,100);
    // fill(0,100);
    translate(-box.w/2,box.h/2);
    for (var i = 0; i < puntos.length; i++) {
      push();
      // ellipse(puntos[i].x + random(1,rad) * cos(random(a) * millis()/631 + i * PI/3),puntos[i].y + random(1,rad) * sin(random(b) * millis()/631 + i * PI/3),rad,rad);
      translate(random(1,rad) * cos(random(a) * millis()/1000 + i * PI/3), random(1,rad) * sin(random(b) * millis()/1000 + i * PI/3),rad,rad);
      ellipse(pos[i].x, pos[i].y, rad ,rad);
      pop();
    }
  pop();
  // animation
  if (falling == true) {
    fall();
  }
}

function fall(){
  for (var i = 0; i < pos.length; i++) {
    var aux = random(800,fallTime);
    if (millis()-starTime < aux) {
      pos[i].y = map(millis()-starTime,0,aux,-height/2-box.h/2,puntos[i].y);
    }
  }
}

function keyPressed() {
  // lissajous parameters control
  if (key === 'F' || key === 'f' && falling == false) {
    falling = true;
    starTime = millis();
  }
}
