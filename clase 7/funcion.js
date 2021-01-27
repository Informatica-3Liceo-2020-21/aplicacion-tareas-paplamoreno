let canvas = document.querySelector("#inicial");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(0,0,100)";
ctx.beginPath(); 
ctx.fill()
ctx.moveTo(125, 200);
ctx.lineTo(100, 250);
ctx.lineTo(75, 200);
ctx.strokeStyle = "black"
ctx.fillstyle = "RGB(0, 0, 0)"
ctx.stroke();
ctx.fill();

// circunferencia
ctx.beginPath();
ctx.arc(100, 50, 25, 0, Math.PI, true);
ctx.lineTo(125, 50);
ctx.strokeStyle = "pink"
ctx.fillstyle = "RGB(240, 128, 128)"
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.strokeRect(75, 50, 50, 150);