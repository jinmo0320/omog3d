import { points } from "./back.js";
import { getDis } from "./getDis.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let mouse = {
  x: undefined,
  y: undefined,
  count: 0,
};

let filledPoints = [];
let zIndex = 0;

addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

addEventListener("mousedown", (e) => {
  //클릭 한 곳에 좌표 추가
  points.forEach((point) => {
    if (getDis(mouse.x, mouse.y, point.x, point.y) < 25) {
      filledPoints.push({
        x: point.x,
        y: point.y,
        z: zIndex,
        color: mouse.count % 2 === 0 ? "black" : "white",
      });
    }
  });
  mouse.count++;
});

const zInfoBox = document.getElementById("z-info-box");
addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" && zIndex > -7) {
    zIndex--;
  }
  if (e.key === "ArrowUp" && zIndex < 7) {
    zIndex++;
  }
  zInfoBox.innerHTML = zIndex;
  console.log(zIndex);
});

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //마우스 위치 표시
  points.forEach((point) => {
    if (getDis(mouse.x, mouse.y, point.x, point.y) < 25) {
      ctx.fillStyle = "rgba(0,0,255, 0.3)";
      ctx.beginPath();
      ctx.arc(point.x, point.y, 22, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  //돌 설치
  filledPoints.forEach((stone) => {
    if (stone.z === zIndex) {
      ctx.fillStyle = stone.color;
      ctx.beginPath();
      ctx.arc(stone.x, stone.y, 18, 0, Math.PI * 2);
      ctx.fill();
    }
  });
}
animate();
