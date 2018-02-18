// Video catching experiments
// Guillermo Montecinos
// for p5.js introductory course

var video;

function setup(){
  createCanvas(640,480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width,height);
  video.hide;
  // colorMode(HSL);
}

function draw(){
  background(0);

  video.loadPixels();
  loadPixels();
  for(var y = 0; y < video.height; y++){
    for (var x = 0; x < video.width; x++) {
      var index = (x + y*video.width)*4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var a = video.pixels[index + 3];

      // var brillo = (r+g+b)/3;
      // c = color('rgba(r,g,b,a)');
      // var c = color(r,g,b,a);
      // var c = color(brillo, brillo, brillo, a);

      // set(x,y,color(r,g,b,a));

      pixels[index + 0] = r * map(mouseX,0,width,1,3);
      pixels[index + 1] = g * map(mouseX,0,width,1,3);
      pixels[index + 2] = b * map(mouseX,0,width,1,3);
      pixels[index + 3] = a;
    }
  }
  updatePixels();
}
