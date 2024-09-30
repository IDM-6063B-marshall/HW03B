function diamond(x, y, c) {
  push();
  translate(x, y);
  strokeWeight(6);
  line(0, -c, c, 0);
  line(c, 0, 0, c);
  line(0, c, -c, 0);
  line(-c, 0, 0, -c);
  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(149, 163, 179);
  strokeWeight(3);
  stroke(255, 255, 255);
  fill(75, 78, 109);

  // draw purple rectangles
  for (let y = 25; y < height; y += 200) {
    for (let x = 25; x < width; x += 200) rect(x, y, 150, 150);
  }
  // draw a column of rows of diamonds in green
  stroke(132, 220, 198);
  for (let y = 100; y < height + 100; y += 200) {
    for (let x = 100; x < width + 100; x += 200) diamond(x, y, 100, 100);
  }

  // draw a column of rows of tiny circles in green
  stroke(132, 220, 198);
  fill(132, 220, 198);
  for (let y = 100; y < height; y += 200) {
    for (let x = 100; x < width; x += 200) ellipse(x, y, 10, 10);
  }

  // draw a second column of rows of tiny circles in green
  push();
  translate(200, 200);
  stroke(132, 220, 198);
  fill(132, 220, 198);
  for (let y = 0; y < height; y += 200) {
    for (let x = 0; x < width; x += 200) ellipse(x, y, 10, 10);
    pop();
  }
}
