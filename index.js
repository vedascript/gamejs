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
let animationType = "ko";
const spriteAnimations = [];
const staggerFrames = 7;

const animationStates = [
  { name: "idle", frames: 7 },
  { name: "jump", frames: 7 },
  { name: "fall", frames: 7 },
  { name: "run", frames: 9 },
  { name: "dizzy", frames: 11 },
  { name: "sit", frames: 5 },
  { name: "roll", frames: 7 },
  { name: "bite", frames: 7 },
  { name: "ko", frames: 12 },
  { name: "getHit", frames: 4 },
];

animationStates.forEach((state, index) => {
  const { name, frames } = state;
  const location = [];

  for (let i = 0; i < frames; i++) {
    location.push({ x: i * spriteWidth, y: index * spriteHeight });
  }

  spriteAnimations[name] = location;
});

console.log(spriteAnimations);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  const totalFrames = spriteAnimations[animationType].length;
  const position = Math.floor(gameFrame / staggerFrames) % totalFrames;

  // frameX = position * spriteWidth;
  const x = spriteAnimations[animationType][position].x;
  const y = spriteAnimations[animationType][position].y;

  ctx.drawImage(
    image,
    x,
    y,
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
