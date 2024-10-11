document.getElementById("invoke-button").addEventListener("click", function () {
  const offering = document.getElementById("offering").value;
  const responseText = document.getElementById("response-text");

  let message = "";

  switch (offering) {
    case "overtime":
      message =
        "Your managers have seen your overtime, and they demand even more! The workload is never enough.";
      break;
    case "lunch":
      message =
        "Sacrificing your lunch break? Your managers laugh and send another email meeting. Food is a luxury now.";
      break;
    case "mental-health":
      message =
        "You’ve sacrificed your mental health. Your managers have granted you… more work anxiety. Maybe take up yoga?";
      break;
    case "weekend":
      message =
        "Ah, your weekend. A bold choice. Your managers have scheduled a “quick catch-up” for Sunday evening.";
      break;
    case "work-life-balance":
      message =
        "You dared to offer your work-life balance? Your managers are amused. Prepare for 6:00 AM calls and 11:00 PM emails.";
      break;
    default:
      message = "The managers are confused. Try again.";
  }

  responseText.textContent = message;
});

const wispCount = 24;

const wispsContainer = document.querySelector(".wisps");

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

for (let i = 0; i < wispCount; i++) {
  const wisp = document.createElement("div");
  wisp.classList.add("wisp");

  const startX = getRandom(30, 70);
  const startY = getRandom(30, 70);
  const endX = getRandom(-10, 110);
  const endY = getRandom(-10, 110);
  const scaleStart = getRandom(0.8, 1.2);
  const scaleEnd = getRandom(0.8, 1.2);
  const opacityStart = getRandom(0.3, 0.8);
  const opacityEnd = getRandom(0.3, 0.8);
  const duration = getRandom(20, 60);

  wisp.style.setProperty("--startX", `${startX}vw`);
  wisp.style.setProperty("--startY", `${startY}vh`);
  wisp.style.setProperty("--endX", `${endX}vw`);
  wisp.style.setProperty("--endY", `${endY}vh`);
  wisp.style.setProperty("--scaleStart", scaleStart);
  wisp.style.setProperty("--scaleEnd", scaleEnd);
  wisp.style.setProperty("--opacityStart", opacityStart);
  wisp.style.setProperty("--opacityEnd", opacityEnd);
  wisp.style.animationDuration = `${duration}s`;

  wispsContainer.appendChild(wisp);
}
