window.onload = function () {
  let btn = document.getElementById("jump");
  let count = 0;
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var x = 300;
  var y = 350;
  var speed = 25; // add speed variable and initialize it to 25

  function draw() {
    //clearing the canvas
    context.clearRect(0, 0, 600, 400);

    //drawing the circle
    context.beginPath();
    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();

    //drawing the count value
    context.font = "25px Arial";
    context.fillStyle = "white";
    context.fillText("Count: " + count, 20, 30);
    window.requestAnimationFrame(draw);
  }
  draw();

  btn.onclick = function () {
    count += 1;
    y -= 25;
    speed = 25; // reset speed to 25 whenever the ball jumps
    draw();
  };

  document.onkeydown = function() {
    count += 1;
    y -= 25;
    speed = 25; // reset speed to 25 whenever the ball jumps
  }

  document.ontouchstart = function() {
    count += 1;
    y -= 25;
    speed = 25; // reset speed to 25 whenever the ball jumps
  }  

  var t = Date.now();
  setInterval(function() {
    var timePassed = (Date.now() - t) / 1000;
    t = Date.now();
    if(y <= 350) {
      speed += 50 * timePassed;
      y += speed*timePassed;
    } 
    if(y > 350) {
      count = 0
    } 
  }, 10);
};
