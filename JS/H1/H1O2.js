function setup() {
  var myCanvas = createCanvas(450,450);
  //background('orange');
  background('darkred');
  myCanvas.parent('processing');
  noLoop();
}

function draw() {
  /*
  noStroke();
  fill('darkred');
  triangle(225,0,0,450,450,450);
  */
  //opdracht 11
  noStroke();
  fill('pink');
  triangle(0,225,450,450,450,0);
  //opdracht 12
  noStroke();
  fill('purple');
  triangle(0,0,0,450,450,225);
}
