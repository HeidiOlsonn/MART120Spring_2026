var x = 100
var y = 100
var y1 = 50
var x1 = 50

function setup() {
    createCanvas(400, 400);
}

function draw() {

    background(220);
    circle(x, y, 50);
    //my shapes
    fill(255, 0, 0)
    rect(200, 200, 10, 10);
    rect(100, 100, 10, 30);
    //winning square
    fill(0, 100, 0)
    square(300, 300, 50);
    square(x1, y1, 70)
    if (keyIsDown(68)) {
        x = x + 2;

    }
    else if (keyIsDown(65)) {
        x = x - 2;
    }
    if (keyIsDown(87)) {
        y = y + 2;
    }
    else if (keyIsDown(83)) {
        y = y - 2;
    }

    //winner
    if (x > 300 && x < 350 && y > 300 && y < 350) {
        background(0, 0, 255);
         textSize(50);
        fill(0)
        text("YOU WIN", 5, 30,);
    }
}


/*
w 87
 d 68
a 65
s 83
*/



function keyPressed() {
    console.log(key, '' + keyCode)

}
function mousePressed() {
    x1 = mouseX;
    y1 = mouseY;
}