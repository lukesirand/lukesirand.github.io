//variables
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var x = 50
var y = 50
var x2 = 750
var y2 = 750

//design

function draw() {
  ctx.fillStyle = "#b3b3b3";
  ctx.fillRect(0, 0, 900, 500);

  ctx.beginPath();
  ctx.arc(425, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(430, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(435, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(440, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(445, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(450, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(455, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(460, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(465, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(470, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(475, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.fillStyle = "#b3b3b3";
  ctx.fillRect(x, y, 10, 10);
    x+=3
    if (x>900) {
      x = 0;
      
    }

  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);