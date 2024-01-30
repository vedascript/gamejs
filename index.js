const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const spriteWidth = 575;
const spriteHeight = 523;

const image = new Image();
image.src = "./shadow_dog.png";

let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 7;

const animationStates = [
  { name: "idle", frames: 7 },
  { name: "jump", frames: 7 },
];
const spriteAnimations = [];

animationStates.forEach((state, index) => {
  const { name, frames } = state;
  const location = [];

  for (let i = 0; i < frames; i++) {
    location.push({ x: i * spriteWidth, y: index * spriteHeight });
  }

  spriteAnimations.push({ [name]: location });
});

console.log(spriteAnimations);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  const position = Math.floor(gameFrame / staggerFrames) % 6;

  frameX = position * spriteWidth;

  ctx.drawImage(
    image,
    frameX,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );

  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
