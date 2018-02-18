//Colo - Color: Una explosión de amor
//Guillermo Montecinos
//V01 - 2017 06 22
var indio; //variable de entrada que aloja el archivo insignia original

var xAlbo; //número de pixeles en eje X de insignia después de downPixel
var yAlbo; //número de pixeles en eje Y de insignia después de downPixel

var numPix = 3; //escala: número de pixeles de indio que caben en un pixel de albo

function preload(){
  indio = loadImage("insignia.png");
}

function setup(){
  createCanvas(800,500);
  //background(200);
  xAlbo = int(indio.width/numPix);
  yAlbo = int(indio.height/numPix);

  indio.loadPixels();
  loadPixels();

  //======================
  for(var yDest = 0; yDest < yAlbo; yDest++){
    for(var xDest = 0; xDest < xAlbo; xDest++){
      //condensamos cada pixel

      var r = 0;      //almacena valores tono rojo
      var g = 0;      //almacena valores tono verde
      var b = 0;      //almacena valores tono azul
      var alpha = 0;  //almacena valores transparencia

      for(var x = 0; x < numPix; x++){
        for(var y = 0; y < numPix; y++){
          var index = 4*((x + xDest*numPix) + (y + yDest*numPix)*indio.width); //posición del pixel en el arreglo de pixeles
          r += indio.pixels[index + 0];
          g += indio.pixels[index + 1];
          b += indio.pixels[index + 2];
          alpha += indio.pixels[index + 3];
        }
      }
      //dibujamos rectángulo correspondiente al pixel
      var norma = numPix*numPix;
      noStroke();
      fill(r/norma,g/norma,b/norma,alpha/norma);
      //rect(xDest*numPix,yDest*numPix,numPix,numPix);
      ellipse(numPix*(xDest+.5),numPix*(yDest+.5),1.5*numPix,1.5*numPix);
      //======================

    }
  }

}

function draw(){
  //loadPixels();
  //scale(.1);
  //image(indio,0,0);
  //print(indio.width);
  //print(indio.height);
}
