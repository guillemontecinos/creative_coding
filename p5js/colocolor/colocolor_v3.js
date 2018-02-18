//Colo - Color: Una explosión de amor
//Guillermo Montecinos
//V03 - 2017 06 25
//Incorpora objetos Punto

var indio; //variable de entrada que aloja el archivo insignia original
var numPix = 7; //escala: número de pixeles de indio que caben en un pixel de albo

var puntos = [];

function preload(){
  indio = loadImage("insignia.png");
}

function setup(){
  createCanvas(800,500);
  //background(200);

  indio.loadPixels();
  loadPixels();

  var i = 0;      //Contador de arreglo puntos

  for(var yDest = 0; yDest < int(indio.height/numPix); yDest++){
    for(var xDest = 0; xDest < int(indio.width/numPix); xDest++){
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
      //instanciamos cada nuevo pixel
      var norma = numPix*numPix;
      puntos[i] = new Punto(numPix*(xDest+.5), numPix*(yDest+.5), 1.3*numPix, r/norma, g/norma, b/norma, alpha/norma);
      i++;
    }
  }
}


function draw(){
  background(255);
  //dibujamos set de puntos
  for (var i = 0; i < puntos.length; i++) {
    puntos[i].actualizar();
  }
}

//Objeto Punto. Corresponde a los pixeles
function Punto(x,y,diametro,rojo,verde,azul,alfa){
  //Propiedades
  this.posX = x;
  this.posY = y;
  this.diam = diametro;
  this.red = rojo;
  this.green = verde;
  this.blue = azul;
  this.alpha = alfa;

  //Métodos
  this.actualizar = function(){
    noStroke();
    fill(this.red,this.green,this.blue,this.alpha);
    ellipse(this.posX,this.posY,this.diam,this.diam);
  }
}
