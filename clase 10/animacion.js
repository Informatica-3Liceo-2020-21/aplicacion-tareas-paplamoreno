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
    auto:"https://di-uploads-pod15.dealerinspire.com/rusnakpasadenaporsche/uploads/2018/12/cc_2018PRC010017_01_640_G1-copy-1.png",
    llanta: "https://e7.pngegg.com/pngimages/867/208/png-clipart-tires-tires.png",
    gato:"https://assets.stickpng.com/images/59f878353cec115efb362387.png",
};
let x = 50;
let y = 300;
let x2 = 50;
let y2 = 300;
let dX = 5;
let dY = -5;
let vX = 15;
let v0Y = -40;
let aY = 2.2;
let t = 0;
function draw(images) {
  t += 1;
  x = 0 + vX * t;
  y = 400 + v0Y * t + (aY * Math.pow(t, 2)) / 2;
  x2 = x2 + dX;
  y2 = y2 + dY;
  ctx.clearRect(0, 0, 400, 400);
  ctx.drawImage(images.llanta, x, y, 50, 50);
  ctx.drawImage(images.gato, 300, 60, 80, 80);
  ctx.drawImage(images.auto, x2, y2, 100, 150);
}
function run(images) {
  window.setInterval(function () {
    draw(images);
  }, 30);

}

loadImages(sources, run);
