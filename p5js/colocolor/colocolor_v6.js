//Colo - Color: Una explosión de amor
//Guillermo Montecinos
//V05 - 2017 06 25
//Incorpora explosión

var indio; //variable de entrada que aloja el archivo insignia original
var numPix = 6; //escala: número de pixeles de indio que caben en un pixel de albo

var insignia;

function preload(){
  indio = loadImage("insignia.png");
}

function setup(){
  createCanvas(1000,800);
  frameRate(45);
  insignia = new Insignia(indio, numPix);
  insignia.cargarInsignia();
}

function draw(){
  background(220,220,220,80);
  insignia.actualizar();
  fill(255);
}

//external method
function mousePressed(){
  insignia.explotar();
}

//Objeto Punto. Corresponde a los pixeles de la insignia
function Punto(x,y,diametro,rojo,verde,azul,alfa){
  //PROPIEDADES
  //this.posX = x;
  //this.posY = y;
  this.pos = createVector(x,y);
  this.vel = createVector(0,0);
  this.diam = diametro;
  this.red = rojo;
  this.green = verde;
  this.blue = azul;
  this.alpha = alfa;

  //METODOS
  //actualizar/dibujar puntos
  this.actualizar = function(){
    noStroke();
    fill(this.red,this.green,this.blue,this.alpha);
    //ellipse(this.pos.x,this.pos.y,this.diam,this.diam);
    rectMode(CENTER);
    rect(this.pos.x,this.pos.y,this.diam,this.diam);
  }

  //mueve cada punto según el vector velocidad
  this.mover = function(){
    this.pos.add(this.vel);
  }

  //setear parámatros para explosión
  this.explotar = function(centro){
    vAux=this.pos.copy();
    vAux.sub(centro);
    vAux.setMag(random(2,8));
    this.vel = vAux.copy();
  }
}

//Objeto Insignia. Construye y comanda el comportamiento de los puntos
function Insignia(indio,numPix){
  //PROPIEDADES
  this.insigniaFuente = indio;
  this.numPixeles = numPix; //escala
  this.puntos = [];
  this.centro = createVector((width-this.insigniaFuente.width)/2,(height-this.insigniaFuente.height)/2);

  //METODOS

  //cargar insignia
  this.cargarInsignia = function(){
    this.insigniaFuente.loadPixels();
    loadPixels();

    var i = 0;      //Contador de arreglo puntos

    for(var yDest = 0; yDest < int(this.insigniaFuente.height/this.numPixeles); yDest++){
      for(var xDest = 0; xDest < int(this.insigniaFuente.width/this.numPixeles); xDest++){
        //condensamos cada pixel
        var r = 0;      //almacena valores tono rojo
        var g = 0;      //almacena valores tono verde
        var b = 0;      //almacena valores tono azul
        var alpha = 0;  //almacena valores transparencia

        for(var x = 0; x < this.numPixeles; x++){
          for(var y = 0; y < this.numPixeles; y++){
            var index = 4*((x + xDest*this.numPixeles) + (y + yDest*this.numPixeles)*this.insigniaFuente.width); //posición del pixel en el arreglo de pixeles
            r += this.insigniaFuente.pixels[index + 0];
            g += this.insigniaFuente.pixels[index + 1];
            b += this.insigniaFuente.pixels[index + 2];
            alpha += this.insigniaFuente.pixels[index + 3];
          }
        }
        //instanciamos cada nuevo pixel
        var norma = this.numPixeles*this.numPixeles;
        this.puntos[i] = new Punto(this.numPixeles*(xDest+.5), this.numPixeles*(yDest+.5), 1.3*this.numPixeles, r/norma, g/norma, b/norma, alpha/norma);
        i++;
      }
    }
  }

  //actualizar/dibujar insignia
  this.actualizar = function(){
    translate(this.centro.x, this.centro.y);
    for (var i = 0; i < this.puntos.length; i++) {
      this.puntos[i].actualizar();
      this.puntos[i].mover();
    }
  }

  //setear parámetros de explosión
  this.explotar = function(){
    for (var i = 0; i < this.puntos.length; i++) {
      if (random(0,1)>0.95) {
        this.puntos[i].explotar(this.centro);
      }
    }
  }
}
