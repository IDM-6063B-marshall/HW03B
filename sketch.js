function diamond(x, y, c) {
  push();
  translate(x, y);
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
  stroke(75, 78, 109);
  fill(75, 78, 109);

    // draw a column of rows of diamonds
    for (let y = 100; y < height; y += 200) {
      for (let x = 100; x < width; x += 200) 
        diamond(x, y, 100, 100);
    }

    push()
    angleMode(DEGREES)
    translate(0, 0)
    rotate(-45)
    rect(-200, 500, 150, 150)
    pop()
  

  for (let y = 100; y < height; y += 200) {
    for (let x = 100; x < width; x += 200) 
     rect(x, y, 100, 100)
  }
}