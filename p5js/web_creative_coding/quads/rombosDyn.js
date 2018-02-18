//Guillermo Montecinos
//2017 04 04
//Rombo
var canvas;
//Variables de modelo
var rombo=[];

var altoRombo; //alto del rombo
var largoRombo; //largo del rombo
var angRombo; //ángulo superior izquierdo del rombo en grados
var x1Rombo;
var y1Rombo;
var pesoMin;
var pesoMax;
var colorFondo;
var transparencia;
var contador;

function setup(){
  /*
  canvas=createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.size(windowWidth,windowHeight);
  */
  createCanvas(1000,800);
  altoRombo=60;
  largoRombo=100;
  angRombo=60;
  x1Rombo=-5*largoRombo;
  y1Rombo=0;
  pesoMin=.25;
  pesoMax=.7;
  colorFondo=250;
  transparencia=.5;
  contador=0;

  //inicializamos arreglo de rombos
  for (var i = 0; i < 2*width/largoRombo+1; i++) {
    for(var j = 0; j < height/altoRombo; j++){
      rombo[contador]=new Rombo(altoRombo,largoRombo,angRombo,x1Rombo+(i)*largoRombo+j*altoRombo/tan(radians(angRombo)),y1Rombo+j*altoRombo,random(pesoMin*255,pesoMax*255),random(pesoMin*255,pesoMax*255),random(pesoMin*255,pesoMax*255),colorFondo,transparencia);
      contador++;
    }
  }

}

function draw(){
  //define color canvas
  background(colorFondo);

  contador=0;
  for (var i = 0; i < 2*width/largoRombo+1; i++) {
    for(var j = 0; j < height/altoRombo; j++){
      if(rombo[contador].dentro()==true){
        rombo[contador].alfAux=1;
      }
      else {
        rombo[contador].alfAux=rombo[contador].alfa;
      }
      rombo[contador].update();
      contador++;
    }
  }
  //print(rombo[10].alfAux);
}

//Objeto Rombo
function Rombo(altura, ancho, angulo, xRef, yRef,rojo,verde,azul,colorLinea,transparente){
  this.h=altura;
  this.l=ancho;
  this.ang=angulo;
  this.x1=xRef;
  this.y1=yRef;
  this.red=rojo;
  this.green=verde;
  this.blue=azul;
  this.border=colorLinea;
  this.alfa=transparente;
  this.alfAux=this.alfa;
  //this.mouseAdentro=false;

  this.update = function(){
    strokeWeight(4);
    stroke(this.border);
    fill(this.red,this.green,this.blue,this.alfAux*255);
    quad(this.x1,this.y1,this.x1+this.l,this.y1,this.x1+this.l+this.h/tan(radians(this.ang)),this.y1+this.h,this.x1+this.h/tan(radians(this.ang)),this.y1+this.h);
  }

  this.dentro = function(){
    if(mouseY>=this.y1 && mouseY<=this.y1+this.h && mouseX >= this.x1 + (mouseY-this.y1)*tan(radians(90-this.ang)) && mouseX <= this.x1 + this.l + (mouseY-this.y1)*tan(radians(90-this.ang))){
      return true;
    }
    else {
      return false;
    }
  }
}
