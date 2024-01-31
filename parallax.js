const canvas = document.querySelector("#parallax");
const ctx = canvas.getContext("2d");

const canvasWidth = (canvas.width = 800);
const canvasHeight = (canvas.height = 700);

let gameSpeed = 15;

const image4 = new Image();
image4.src = "./backgroundLayers/layer-4.png";
let x = 0;
let x2 = 2400;

function animate() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.drawImage(image4, x, 0);
  ctx.drawImage(image4, x2, 0);

  if (x < -2400) {
    x = 2400;
  } else {
    x -= gameSpeed;
  }

  if (x2 < -2400) {
    x2 = 2400;
  } else {
    x2 -= gameSpeed;
  }
  console.log(x);
  requestAnimationFrame(animate);
}

animate();
