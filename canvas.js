import { points, stageWidth, stageX, stageY } from "./back.js";
import { getDis } from "./getDis.js";
import { verdict } from "./verdict.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let mouse = {
  x: undefined,
  y: undefined,
};

let filledPoints = [];
let zIndex = 0;

addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

const winBox = document.getElementById("win-box");

addEventListener("mousedown", (e) => {
  //클릭 한 곳에 좌표 추가
  points.forEach((point) => {
    if (getDis(mouse.x, mouse.y, point.x, point.y) < 25) {
      let isFilled = false;
      filledPoints.forEach((stone) => {
        if (stone.x === point.x && stone.y === point.y && stone.z === zIndex) {
          isFilled = true;
        }
      });
      if (!isFilled) {
        filledPoints.push({
          x: point.x,
          y: point.y,
          z: zIndex,
          color: filledPoints.length % 2 === 0 ? "black" : "white",
          coordinate: [point.coordinate[0], point.coordinate[1], zIndex],
        });
      }
    }
  });

  if (
    verdict(filledPoints, filledPoints.length % 2 === 1 ? "black" : "white") ===
    "win"
  ) {
    winBox.style.display = "flex";
  }
});

const zInfoBox = document.getElementById("z-info-box");
zInfoBox.style.top = stageY + "px";
zInfoBox.style.left = stageX + "px";

addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" && zIndex > -7) {
    zIndex--;
  }
  if (e.key === "ArrowUp" && zIndex < 7) {
    zIndex++;
  }
  zInfoBox.innerHTML = zIndex;
});
let onZ = false;
addEventListener("keydown", (e) => {
  if (e.key === "z") {
    onZ = true;
  }
});
addEventListener("keyup", (e) => {
  if (e.key === "z") {
    onZ = false;
  }
});

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //마우스 위치 표시 && z 눌렀을 때
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
