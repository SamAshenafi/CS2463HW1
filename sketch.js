function setup() {
  createCanvas(400, 600);
  noStroke();
}

function draw() {
  background(240);

  // #1
  fill(100, 255, 100);
  rect(20, 20, 150, 80);
  fill(255);
  stroke(100);
  ellipse(60, 65, 50, 50);
  rect(100, 40, 50, 50);
  noStroke();

  // #2
  fill(255, 0, 0, 100);
  ellipse(100, 180, 60, 60);
  fill(0, 255, 0, 100);
  ellipse(120, 210, 60, 60);
  fill(0, 0, 255, 100);
  ellipse(80, 210, 60, 60);

// #3
fill(0);
rect(20, 260, 150, 80);
fill(255, 255, 0);
arc(60, 300, 60, 60, PI + QUARTER_PI, PI - QUARTER_PI, PIE);
fill(255, 50, 50);
arc(125, 300, 50, 50, PI, TWO_PI, CHORD);
rect(100, 300, 50, 30);
fill(255);
ellipse(115, 295, 12, 12);
ellipse(135, 295, 12, 12);
fill(0, 0, 255);
ellipse(115, 295, 6, 6);
ellipse(135, 295, 6, 6);

  //#4
  fill(0, 0, 150);
  rect(20, 360, 150, 150);
  fill(0, 150, 0);
  stroke(255);
  strokeWeight(2);
  ellipse(95, 435, 80, 80);
  fill(255, 0, 0);
  beginShape();
  vertex(95, 390);
  vertex(105, 420);
  vertex(135, 420);
  vertex(110, 440);
  vertex(120, 470);
  vertex(95, 450);
  vertex(70, 470);
  vertex(80, 440);
  vertex(55, 420);
  vertex(85, 420);
  endShape(CLOSE);
}
