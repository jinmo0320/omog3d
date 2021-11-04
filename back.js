const background = document.getElementById("back");
const btx = background.getContext("2d");

background.width = innerWidth;
background.height = innerHeight;

const stageWidth = 800;
const stageHeight = 800;
const stageX = background.width / 2 - stageWidth / 2;
const stageY = background.height / 2 - stageHeight / 2;

let points = [];
for (let i = 0; i < stageHeight / 50 - 1; i++) {
  for (let j = 0; j < stageWidth / 50 - 1; j++) {
    points.push({
      x: 50 + 50 * j + stageX,
      y: 50 + 50 * i + stageY,
      coordinate: [j - 7, i - 7 === 0 ? 0 : -1 * (i - 7)],
    });
  }
}

btx.save();
btx.shadowBlur = 10;
btx.shadowColor = "black";
btx.fillStyle = "#11AD3E";
btx.rect(stageX, stageY, stageWidth, stageHeight);
btx.fill();
btx.stroke();
btx.restore();

points.forEach((point) => {
  btx.fillStyle = "black";
  btx.beginPath();
  btx.arc(point.x, point.y, 1, 0, Math.PI * 2);
  btx.fill();
});

export { points, stageX, stageY, stageWidth, stageHeight };
