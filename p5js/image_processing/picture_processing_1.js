// picture catching experiments
// Guillermo Montecinos
// for p5.js introductory course

var picture;
var vScale = 10;

function preload(){
  picture = loadImage('./assets/guille_nyc.jpg');
}

function setup(){
  createCanvas(1000,667);
  // noCursor();
  pixelDensity(1);
  picture.resize(width/vScale, height/vScale);
}

function draw(){
  // background(255,255,255,5);
  background(255);
  // randomSeed(100);

  picture.loadPixels();
  loadPixels();
  for(var y = 0; y < picture.height; y++){
    for (var x = 0; x < picture.width; x++) {
      var index = (x + y*picture.width)*4;
      var r = picture.pixels[index + 0];
      var g = picture.pixels[index + 1];
      var b = picture.pixels[index + 2];
      var a = picture.pixels[index + 3];

      var brillo = (r+g+b)/3;
      noStroke();
      fill(0);
      var diam = map(brillo,0,255,vScale*.9,vScale*.2);
      rect((x+.5)*vScale,(y+.5)*vScale,diam,diam);
    }
  }
  // updatePixels();
}
