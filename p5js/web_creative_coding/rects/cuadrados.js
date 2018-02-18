var distMax;
var puntosX; //representa cuántos puntos hacia la derecha
var puntosY; //representa cuántos puntos hacia abajo
var contador;
var pesoMin;
var pesoMax;
var colorFondo;
var maxAlfaPuntitos;
var minAlfaPuntitos;
var puntito=[];

function setup(){
  createCanvas(1000,800);
  puntosX=12.5;
  puntosY=10;
  contador=0;
  MinColor=.8; //valores del peso del color en %
  MaxColor=.95; //idem anterior %
  colorFondo=250;
  minAlfaPuntitos=.2;
  maxAlfaPuntitos=.85;
  noCursor();

  distMax=2*sqrt(sq(width/puntosX)+sq(height/puntosY));
  for (var i = 0; i < puntosX; i++) {
    for (var j = 0; j < puntosY; j++) {
      puntito[contador]=new Punto(distMax,random(MinColor*255,MaxColor*255),random(MinColor*255,MaxColor*255),random(MinColor*255,MaxColor*255),i*width/puntosX,j*height/puntosY,i*width/puntosX,j*height/puntosY,75);
      contador++;
    }
  }
}

function draw(){
  background(colorFondo);

  //Acotamos las variables de posición al Canvas
  for (var i = 0; i < puntito.length; i++) {
    if (mouseX>width) {
      puntito[i].mousePosX=width;
    }
    else if (mouseY>height) {
      puntito[i].mousePosY=height;
    }
    else {
      puntito[i].mousePosX=mouseX;
      puntito[i].mousePosY=mouseY;
    }
    puntito[i].update();
  }
}

function Punto(maxDistancia,redColor,greenColor,blueColor,centroX,centroY,cursorX,cursorY,radio){//,initPosX,initPosY,mousePosX,mousePosY){
  this.maxDist=maxDistancia;
  this.red=redColor;
  this.green=greenColor;
  this.blue=blueColor;
  this.posX=centroX;
  this.posY=centroY;
  this.mousePosX=cursorX;
  this.mousePosY=cursorY;
  this.r=radio;
  this.distancia=0;
  this.alfa=255;

  this.update=function(){
    this.distancia=abs(dist(this.mousePosX,this.mousePosY,this.posX,this.posY));

    if (this.distancia>this.maxDist) {
      this.alfa=minAlfaPuntitos*255;
    }
    else if (this.distancia<this.maxDist*.4) {
      this.alfa=maxAlfaPuntitos*255;
    }
    else {
      this.alfa=abs(map(this.distancia,0,this.maxDist,maxAlfaPuntitos*255,minAlfaPuntitos*255));
    }
    strokeWeight(0);
    stroke(this.red,this.green,this.blue);
    fill(this.red,this.green,this.blue,this.alfa);
    rect(this.posX,this.posY,this.r,this.r);
  }
}
