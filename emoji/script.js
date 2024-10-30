const canvas = document.getElementById("cityCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 700;

const tileSize = 80;
const cityMap = [
  ["🏢", "🌳", "🏢", "🚕", "🏢", "🚓", "🏢", "🌳", "🏢", "🏢"],
  ["🏢", "🚚", "🏢", "🚌", "🌳", "🌳", "🏢", "🏢", "🚐", "🏢"],
  ["🚒", "🚑", "🌳", "🏢", "🏢", "🏢", "🏢", "🏢", "🌳", "🏢"],
  ["🏢", "🏢", "🏢", "🦆", "🚚", "🌳", "🚛", "🏢", "🏢", "🏢"],
  ["🏢", "🌳", "🏢", "🚕", "🚑", "🏢", "🏢", "🚒", "🏢", "🌳"],
  ["🏢", "🏢", "🚗", "🏢", "🐈", "🌳", "🚗", "🏢", "🏢", "🚚"],
  ["🚗", "🏢", "🚗", "🏢", "🚕", "🏢", "🏢", "🚗", "🌳", "🏢"],
  ["🏢", "🚗", "🏢", "🌳", "🏢", "🚐", "🚓", "🏢", "🏢", "🏢"],
];

let player = { x: 0, y: 0, emoji: "🐈‍⬛" };

const emojiScale = 6;

function drawMap() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  cityMap.forEach((row, rowIndex) => {
    row.forEach((tile, colIndex) => {
      ctx.save();
      ctx.translate(colIndex * tileSize, (rowIndex + 1) * tileSize);
      ctx.scale(emojiScale, emojiScale);
      ctx.fillText(tile, 0, 0);
      ctx.restore();
    });
  });
  ctx.save();
  ctx.translate(player.x * tileSize, (player.y + 1) * tileSize);
  ctx.scale(emojiScale, emojiScale);
  ctx.fillText(player.emoji, 0, 0);
  ctx.restore();
}

function movePlayer(dx, dy) {
  const newX = player.x + dx;
  const newY = player.y + dy;
  if (
    newX >= 0 &&
    newX < cityMap[0].length &&
    newY >= 0 &&
    newY < cityMap.length
  ) {
    player.x = newX;
    player.y = newY;
    checkInteraction();
    drawMap();
  }
}

const interactionDisplay = document.getElementById("interaction-display");

function checkInteraction() {
  const tile = cityMap[player.y][player.x];
  switch (tile) {
    case "🚕":
      interactionDisplay.textContent =
        "Yellow thing... smelly... not a mouse. 🐈‍⬛";
      break;
    case "🚓":
      interactionDisplay.textContent = "Flashy box with loud sounds. Avoid. 🚓";
      break;
    case "🚌":
      interactionDisplay.textContent = "Big box of humans... too many feet! 🚌";
      break;
    case "🚐":
      interactionDisplay.textContent = "A white box... maybe treats inside? 🚐";
      break;
    case "🚑":
      interactionDisplay.textContent = "Very loud. My ears! Keep distance. 🚑";
      break;
    case "🚒":
      interactionDisplay.textContent = "Big red thing. Smells like water. 🚒";
      break;
    case "🚚":
      interactionDisplay.textContent =
        "Moving box. Probably not a scratching post. 🚚";
      break;
    case "🚛":
      interactionDisplay.textContent = "Giant beast! Hides things inside. 🚛";
      break;
    case "🐈":
      interactionDisplay.textContent =
        "Another cat! Friend? Rival? Must observe... 🐈";
      break;
    case "🦆":
      interactionDisplay.textContent =
        "Strange bird... waddles. Could chase. 🦆";
      break;
    default:
      interactionDisplay.textContent =
        "Prowling the city... something interesting awaits. 🐈‍⬛";
  }
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      movePlayer(0, -1);
      break;
    case "ArrowDown":
      movePlayer(0, 1);
      break;
    case "ArrowLeft":
      movePlayer(-1, 0);
      break;
    case "ArrowRight":
      movePlayer(1, 0);
      break;
  }
});

drawMap();
