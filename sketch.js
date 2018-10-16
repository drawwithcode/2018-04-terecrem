function preload() {
  // put preload code here
}

var balls = [];


function setup() {

  createCanvas(windowWidth, windowHeight);



  var piccolo=width/40
  var grande=height/20


  var ballNumber = 180;


  for (var i = 0; i < ballNumber; i++) {


    var myBall = new Ball(random(0, width), random(0, height), 50);

    myBall.diameter = random(grande, piccolo)
    myBall.speed = random(0, 1);
    myBall.color = color('#FFFF33');
    balls.push(myBall);
  }
}

function mousePressed() {
  for (var j = 0; j < balls.length; j++)
    balls[j].click();


}


function draw() {
  background('#001028')
  for (var j = 0; j < balls.length; j++) {

    balls[j].move();
    balls[j].display();

  }
  push();
  textSize(20);
  textStyle('bold')
    textFont('Gotham')
    fill('white')
  text('C L E A N  T H E  S K Y', 600,700);
  pop();
}


function Ball(_x, _y, _diameter) {
  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.speed = 4;


  var yDirezione = 1;
  var xDirezione = 1;

  this.display = function() {
    noStroke()
    fill(this.color);
    ellipse(this.x, this.y, mouseX/100);
  }

  this.move = function() {
    this.x += this.speed * xDirezione;
    this.y += this.speed * yDirezione;

    if (this.y > height || this.y < 0) {
      yDirezione = yDirezione * -1;
    }

    if (this.x > width || this.x < 0) {
      xDirezione = xDirezione * -1;

    }
    this.click = function() {
      var d = dist(mouseX, mouseY, this.x, this.y);
      if (d < 40) {
        this.color = color('#001028');
      }
    }
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)

}
