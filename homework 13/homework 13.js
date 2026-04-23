var x = 100
var y = 100
var y1 = 50
var x1 = 50
var myx = [50, 300]
var myy = [300, 90]
var colors = [[209, 146, 205], [152, 209, 212]]

function setup() {
    createCanvas(400, 400);
}

function draw() {

    background(220);

    mycircle();

    myshapes();

    myexit();

    mysquare();

    playermovement();

    mywinner();

    myborder();

    newshape();

}


function keyPressed() {
    console.log(key, '' + keyCode)

}
function mousePressed() {
    x1 = mouseX;
    y1 = mouseY;
}

function playermovement() {
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


}
function mycircle() {
    circle(x, y, 50);
}

function mysquare() {
    square(x1, y1, 70)
}

function myshapes() {
    fill(255, 0, 0)
    rect(200, 200, 10, 10);
    rect(100, 100, 10, 30);
}

function myexit() {
    fill(0, 100, 0)
    square(300, 300, 50);
}

function mywinner() {
    if (x > 300 && x < 350 && y > 300 && y < 350) {
        background(0, 0, 255);
        textSize(50);
        fill(0)
        text("YOU WIN", 5, 30,);
    }
}

function myborder() {

    fill(0, 255);
    textSize(12);
    noStroke(10);
    text("x: " + mouseX + ", y: " + mouseY, 10, 20);
    rect(0, 0, 400, 10);
    rect(10, 395, 400, 10);
    rect(395, 0, 400, 395);
    rect(10, 5, 10, 400);
}

function newshape() {
    fill(colors[0], [0], colors[0][1], colors[0][2])
    circle(myx[0], myy[0], 50);
    fill(colors[1][0], colors[1][1], colors[1][2])
    circle(myx[1], myy[1], 50);

}

for(var i = 0; i < 11; i++){

    console.log(i);
}