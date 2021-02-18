

let capture;
let video;
let words = ["I AM WATCHING YOU", "I AM WATCHING YOU OVER HERE", "YOU ARE NOT ALONE"];

let index = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.hide();
  imageMode(CENTER);

}



function draw() {
  background(0);
  image(capture, mouseX, mouseY, 320, 240);

  fill(255)
  textSize(50)
  text(words[index], 200, 200);
}

function mousePressed(){
  index = index + 1;

  if (index == 3){
      index = 0;

  }

}
