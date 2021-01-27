  
let canvas = document.querySelector("#funciones");
let ctx = canvas.getContext("2d");
function circulo(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI, true);
  ctx.fill();
  ctx.stroke();
}
function rectangulo(x, y, w, h) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.fill();
  ctx.stroke();
}
for (let nFila = 0; nFila < 8; nFila++) {
  yC = 0 + nFila * 50;
  if (nFila%2 == 0) {
    for (let xC = 50; xC <= 350; xC += 100) {
      rectangulo(xC, yC, 50, 50);
    }
  } else {
    for (let xC = 50; xC <= 350; xC += 100) {
      rectangulo(xC, yC, 50, 50);
    }
  }
}
