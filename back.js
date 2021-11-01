const background = document.getElementById("back");
const btx = background.getContext("2d");

background.width = innerWidth;
background.height = innerHeight;

const stageWidth = 900;
const stageHeight = 900;
const stageX = background.width / 2 - stageWidth / 2;
const stageY = background.height / 2 - stageHeight / 2;

let points = [];
for (let i = 50; i < stageHeight; i += 50) {
  for (let j = 50; j < stageWidth; j += 50) {
    points.push({ x: j + stageX, y: i + stageY });
  }
}

btx.fillStyle = "#11AD3E";
btx.rect(stageX, stageY, stageWidth, stageHeight);
btx.fill();
btx.stroke();

points.forEach((point) => {
  btx.fillStyle = "black";
  btx.beginPath();
  btx.arc(point.x, point.y, 1, 0, Math.PI * 2);
  btx.fill();
});

export { points };