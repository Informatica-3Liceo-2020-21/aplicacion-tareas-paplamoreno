let canvas = document.querySelector("#miCanvas");
let ctx = canvas.getContext("2d");

function loadImages(sources, callback) {
  let images = {};
  let loadedImages = 0;

  let numImages = Object.keys(sources).length;

  for (let src in sources) {
    images[src] = new Image();
    images[src].onload = function () {
      loadedImages++;
      if (loadedImages >= numImages) {
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}
var sources = {
    llanta: "https://e7.pngegg.com/pngimages/867/208/png-clipart-tires-tires.png",
};
let x = 20;
let y = 120;
let vX = 100;
let vY = 200;
let dT = 0.03;
let x2 = 200;
let y2 = 200;
function draw(images) {
  x = x + vX * dT;
  y = y + vY * dT; 
  if (300 - y < 15)vY = -vY;
  if (600 - x < 15)vX = -vX
  if (y - 0 < 15)vY = -vY;
  if (x - 0 < 15)vX = -vX;
  ctx.clearRect(0, 0, 600, 300);
  ctx.drawImage(images.llanta, x- 15, y- 15, 30,30);
}
function run(images) {
  window.setInterval(function () {
    draw(images);
  }, 30);
}
loadImages(sources, run);