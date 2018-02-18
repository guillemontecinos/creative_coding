var particula=[];
var x0;
var y0;
var numPart = 300;

function setup(){
  createCanvas(1200,800);
  for (var i = 0; i < numPart; i++) {
    x0=random(0, width);
    y0=random(0, height);
    while(dist(x0,y0,width/2,height/2)>400)
    {
      x0=random(0, width);
      y0=random(0, height);
    }
    particula[i] = new Particula(x0,y0,3);
  }
}

function draw(){
background(20);
for (var i = 0; i < numPart; i++) {
  particula[i].update();
}
//print(particula.ac);
}

function Particula(x,y,radio){
  this.x=x;
  this.y=y;
  this.radio=radio;
  this.direccion=createVector();
  this.dirNorm=createVector();
  this.ac=createVector();; //fuerza
  this.v=createVector();

  this.update = function(){
    this.setDir();
    this.setAcc();
    this.setVel();
    this.setPos();
    noStroke();
    fill(255);
    ellipse(this.x,this.y,this.radio,this.radio);
  }

  this.setDir = function(){
    this.direccion.x = width/2-this.x;
    this.direccion.y = height/2-this.y;
    this.dirNorm=this.direccion.normalize();
  }

  this.setAcc = function(){
    var distancia = dist(this.x,this.y,width/2,height/2);
    if(distancia<1){
      this.ac=this.dirNorm.mult(0);
    }
    else {
      this.ac=this.dirNorm.mult(1/(2*distancia));
    }
  }

  this.setVel = function(){
    this.v.x = this.v.x + this.ac.x;
    this.v.y = this.v.y + this.ac.y;
  }

  this.setPos = function(){
    this.x = this.x + this.v.x;
    this.y = this.y + this.v.y;
  }

  /*
  this.fuerza = function(){
    if(dist(this.x,this.y,width/2,height/2)<10){
      this.ac=1;
    }
    else {
      this.ac=1/dist(this.x,this.y,width/2,height/2);
    }
  }
  */
}
