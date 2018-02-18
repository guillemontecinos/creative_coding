//var x = createVector();
//var v = p5.Vector.fromAngle(random(0,2*PI));

//var v =  p5.Vector.fromAngle(2);
var v;
var x;
function setup(){
  createCanvas(800,500);
  x = createVector();
  v = createVector();
  //x.copy(v);
}

function draw(){
  //var angulo = random(0,2);
  v = p5.Vector.fromAngle(random(0,TWO_PI));
  v.setMag(10);
  x=v.copy();
  print(x);
}
