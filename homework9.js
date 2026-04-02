var x = 170;
var x1 = 226
var y = 260
var y1 = 260
var y2 = 245
var b = 80
var b1 = 240
var m = 10
var m1 = 10
var m2 = 10
var m3 = 10
var m4 = 10
var size = 5
var count = 0


function setup() {
    createCanvas(400, 400);
    m = floor(random(10));
    m1 = floor(random(10));
    m2 = floor(random(10));
    m3 = floor(random(10));
}

function draw() {
    background(210, 19, 168);

    fill(0, 255);
    textSize(12);
    noStroke(10);
    text("x: " + mouseX + ", y: " + mouseY, 10, 20);

      textSize(size);
    text("her", 192, 28);

    size = size + m4;
    count++;

    if (count >= 5) {
        size = size + m4
        count = 0
    }

    if (size > 10 || size < 5) {
        m4 *= -1
    }



    //bun
    //dagy
    fill(171, 161, 53);
    circle(b, b1, 60);
    b += m1;
    b1 += m1;
    if (b1 < 400 || b1 < 0) {
        m1 *= -1
    }
    //harline
    circle(200, 180, 250);

    //head
    noStroke();
    fill(209, 203, 137);
    circle(200, 200, 200);

    //eyes
    //back&forth
    fill(0, 255);
    circle(x, 218, 20);
    x += m;
    circle(x1, 218, 20);
    x1 += m
    if (x < 400 || x < 0) {
        m *= -1
    }
    fill(209, 203, 137);
    rect(160, 288, 80, 200);

    //hair
    stroke(171, 161, 53);
    strokeWeight(65);
    line(180, 90, 110, 200);

    fill(171, 161, 53);
    line(200, 100, 290, 190);


    //lips
    //up & down
    noStroke()
    fill(247, 165, 195);
    ellipse(200, y, 50, 20);
    y += m3;
    if (y > 400 || y < 0) {
        m3 *= -1
    }
    //up & down
    fill(247, 165, 195);
    triangle(220, y1, 180, y1, 200, y2);
    y1 += m2;
    y2 += m2;
    if (y1 < 0 || y1 > 350) {
        m2 *= -1;
    }
    if ( y2 < 0 || y2 > 350) {
        m2 *= -1;
    }


    text("heidi", 330, 331);
    fill(0, 255)
}