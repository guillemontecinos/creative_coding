var canvas;

var field;

var particle=[];
var x0;
var y0;
var maxDiam = 4;
var numPart = 5000;
var release = false;
var allIn = false;
var vAux;
var distTest;

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function setup(){
  canvas=createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');

  vAux = createVector();
  //Create grav field
  field = new Field(width/2,height/2);
  //Create set of particles
  for (var i = 0; i < numPart; i++) {
    x0=random(-width/2, 1.5*width);
    y0=random(-width/2-height/2, 1.5*width);

    while(dist(x0,y0,width/2,height/2)>width*.75) //tiene que ser width
    {
      x0=random(-width/2, 1.5*width);
      y0=random(-width/2, 1.5*width);
    }

    particle[i] = new Particle(x0,y0,random(1,maxDiam),random(50,255));
  }
}

function draw(){
  frameRate(50);

  distTest=0; //for setting when every particle is at the middle
  background(30);
  for (var i = 0; i < numPart; i++) {
    distTest += particle[i].pos.dist(field.pos);
    particle[i].update();
  }
  if (distTest < 1 && release==false){
    allIn=true;
  }
  print(distTest);
}

//Field object
function Field(xfield, yfield){
  this.pos=createVector();
  this.pos.set(xfield,yfield);
}

//Particle object
function Particle(x,y,radius, transp){
  //attributes
  this.pos=createVector();
  this.pos.x=x;
  this.pos.y=y;
  this.radius=radius;
  this.direction=createVector();
  this.dirNorm=createVector();
  this.ac=createVector(); //fuerza
  this.v=createVector();
  this.trapped = false;
  this.inside = false;
  this.transp=transp;

  //main method of every single particle
  this.update = function(){
    if (release == false) {
        this.blackHole();
    }

    if (this.trapped == false) {
        this.move();
    }

    noStroke();
    fill(255,255,255,this.transp);
    ellipse(this.pos.x,this.pos.y,this.radius,this.radius);
  }

  //movement method. sets the movements phisics
  this.move = function(){
    //Set direction
    this.direction = p5.Vector.sub(field.pos,this.pos);
    this.dirNorm=this.direction.normalize();

    //Set acceleration
    var distancia = this.pos.dist(field.pos);
    if(distancia<1){
      this.ac=this.dirNorm.mult(0);
    }
    else {
      this.ac=this.dirNorm.mult(2/((distancia)^2));
    }

    //Set velocity
    this.v.add(this.ac);

    //Set position
    this.pos.add(this.v);
  }

  //sets when every single particle is in the middle
  this.blackHole = function(){
    //if (dist(this.pos.x,this.pos.y,width/2,height/2) <= 5) {
    if (this.pos.dist(field.pos) <= 5) {
      this.trapped = true;
      this.ac.set(0,0);
      this.v.set(0,0);
      this.pos.set(field.pos);
    }
  }

  this.smallBang = function(){
      this.trapped=false;
      vAux=p5.Vector.fromAngle(random(0,TWO_PI));
      vAux.setMag(random(1,5));
      this.v = vAux.copy();
  }
}


//external method
function mousePressed(){
  if (allIn==true) {
    release=true;
    for (var i = 0; i < numPart; i++) {
      particle[i].smallBang();
    }
    allIn=false;
  }
}
