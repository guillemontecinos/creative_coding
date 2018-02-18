// Text to shapes manipulation
// visuals for sector coordillera
// by Guillermo Montecinos

var font;
// var string = 'hola';
var string = 'coordillera';
var box;
var tamanoTexto = 300;
var puntos;
var rad = 25;
var a = 7;
var b = 9;

function preload(){
  font = loadFont('./assets/helvetica.otf');
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  // background(0);
  background(255);
  textSize(tamanoTexto);
  box = font.textBounds(string);
  puntos = font.textToPoints(string, 0, 0, tamanoTexto, {
    sampleFactor: .3,
    simplifyThreshold: 0
  });
  noCursor();
}

function draw(){
  // console.log(mouseX);
  // console.log(mouseY);
  rad = map(500, 0, width, 0, 50);
  randomSeed(100);
  // background(0,10);
  background(255,20);
  translate(width/2,height/2);
  push();
    noStroke();
    // fill(255,100);
    fill(0,100);
    translate(-box.w/2,box.h/2);
    for (var i = 0; i < puntos.length; i++) {
      ellipse(puntos[i].x + random(1,rad) * cos(random(a) * millis()/631 + i * PI/3),puntos[i].y + random(1,rad) * sin(random(b) * millis()/631 + i * PI/3),rad,rad);
    }
  pop();
}
