//variables
var c =  document.getElementById("myCanvas");
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
  ctx.arc(100, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(105, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(110, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(115, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(120, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(125, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(130, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(135, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(140, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(145, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(150, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.fillStyle = "#b3b3b3";
  ctx.fillRect(x, y, 5, 5);
  x += 3
  if (x > 450) {
    x = 60;

  }

  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}