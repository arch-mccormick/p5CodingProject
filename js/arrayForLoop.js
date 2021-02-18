
let capture;

function preload(){
  capture = createCapture(VIDEO);

}
function setup() {
  createCanvas(320, 240);

    for(let i=0; i < 50; i++){
      capture(capture, random(320), random(240), 100, 100);
      capture = createCapture(VIDEO);
      capture.hide();
      background(0)
  }


}

function draw(){


  square(960, 480, 960);
  noStroke();
  fill(0, 0, 0);

  // next sqaure
  square(960, 480, 900);
  noStroke();
  fill(25, 25, 25);

  // next sqaure
  square(960, 480, 840);
  noStroke();
  fill(51, 51, 51);

  // next sqaure
  square(960, 480, 780);
  noStroke();
  fill(76, 76, 76)

  // next sqaure
  square(960, 480, 720);
  noStroke();
  fill(102, 102, 102)

  // next sqaure
  square(960, 480, 660);
  noStroke();
  fill(127, 127, 127)

  // next sqaure
  square(960, 480, 600);
  noStroke();
  fill(140, 140, 140)

  // next sqaure
  square(960, 480, 540);
  noStroke();
  fill(153, 153, 153)

  // next sqaure
  square(960, 480, 480);
  noStroke();
  fill(165.5, 165.5, 165.5)

  // next sqaure
  square(960, 480, 420);
  noStroke();
  fill(178, 178, 178);

  // next sqaure
  square(960, 480, 360);
  noStroke();
  fill(191, 191, 191);

  // next sqaure
  square(960, 480, 300);
  noStroke();
  fill(204, 204, 204);

  // next sqaure
  square(960, 480, 240);
  noStroke();
  fill(216.5, 216.5, 216.5);

  // next sqaure
  square(960, 480, 180);
  noStroke();
  fill(229, 229, 229);

  // next sqaure
  square(960, 480, 120);
  noStroke();
  fill(242, 242, 242);

  // next sqaure
  square(960, 480, 60);
  noStroke();
  fill(225, 255, 255);

}
