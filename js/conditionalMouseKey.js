
let ellipseX;
let ellipseY;


let fillR;
let fillG;
let fillB;


function setup() {
  createCanvas(windowWidth, windowWidth);

  fillR = random(255);
  fillG = random(255);
  fillB = random(255);

}

function draw() {
  if(mouseIsPressed){
      background(180, 49, 100);
  }else{
    background(40,)


  }


  if(mouseX > windowWidth/2 && mouseY < windowHeight/2){
    ellipseX = 300;
    ellipseY = 200;

  } else {
    ellipseX = 900;
    ellipseY = 500;
  }

  fill(fillR, fillG, fillB);

  ellipse(ellipseX, ellipseY, 100, 100);
  textSize(100)
  if(dist(mouseX, mouseY, ellipseX, ellipseY) < 50){
    text("FUCK", 200, 300);
  }
    strokeWeight(50);
    stroke(20, 120, 180);
    if (keyIsPressed === true){
    line(0, 400, 800, 600)
  }
}

function mouseReleased(){
  fillR = random(255);
  fillG = random(255);
  fillB = random(255);

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);

}
