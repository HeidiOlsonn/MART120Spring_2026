function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(210,19,168);
  
  fill(0,255);
  textSize(12);
  noStroke(10);
  text("x: " + mouseX + ", y: " + mouseY , 10, 20);

  
  
//bun
fill(171, 161, 53);
circle(80,240,60);
  //harline
  circle(200,180,250);
  
  //head
  noStroke();
  fill(209, 203, 137);
  circle(200,200,200);
  
  //eyes
  fill(0,255);
  circle(170,218,20);
  circle(226,218,20);
  
  fill(209, 203, 137);
  rect(160,288,80,200);
  
  //hair
  stroke(171, 161, 53);
  strokeWeight(65);
  line(180,90,110,200);
  
  fill(171, 161, 53);
  line(200,100,290,190);
  
  
  //lips
  noStroke()
  fill(247, 165, 195);
  ellipse(200,260,50,20);
  
  fill(247, 165, 195);
  triangle(220,260,180,260,200,245);
  
text("heidi",330,331);
fill(0,255)
}