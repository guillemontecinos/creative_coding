// Video catching experiments
// Guillermo Montecinos
// for p5.js introductory course

var video;

function setup(){
  // createCanvas(windowWidth, windowHeight);
  createCanvas(320*3,240*3);
  background(50);
  video = createCapture(VIDEO);
  video.size(320*3,240*3);
  video.hide();
}

function draw(){
  background(0);
  // tint(255,0,0);
  image(video,0,0,mouseX,mouseY);
  // filter(INVERT);
}
