function setup() {
  var myCanvas = createCanvas(1000,500);
  background('grey');
  myCanvas.parent('processing');
  noLoop();
}

function draw() {
  // groene cirkel zonder rand

  noStroke();
  fill('green');
  ellipse(225,225,400);

  // witte rechthoek met rode rand

  stroke('green');
  fill('white');
  strokeWeight(10);
  rect(125,125,200,200);
}