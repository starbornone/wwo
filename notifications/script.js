const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gameOverScreen = document.getElementById("gameOverScreen");
const restartButton = document.getElementById("restartButton");
const popSound = document.getElementById("popSound");

let notifications = [];
let maxStress = 100;
let maxNotifications = 20;
let gameInterval;
let notificationInterval;

function initializeGame() {
  gameOverScreen.style.display = "none";
  canvas.style.display = "block";
  resetStressBar();
  startGame();
}

class Notification {
  constructor(message, x, y) {
    this.remToPx = (rem) => {
      const rootFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      return rem * rootFontSize;
    };

    this.message = message;
    this.x = x;
    this.y = y;
    this.padding = this.remToPx(1);
    ctx.font = `${this.getResponsiveFontSize()}px Poppins`;
    const textWidth = ctx.measureText(message).width;
    this.width = Math.max(textWidth + this.padding * 2, this.remToPx(10));
    this.height = this.remToPx(3);
    this.color = this.randomColor();
    this.borderColor = this.darkerShade(this.color);
  }

  getResponsiveFontSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      return this.remToPx(0.875);
    } else {
      return this.remToPx(1);
    }
  }

  draw() {
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(this.x, this.y, this.width, this.height, this.remToPx(0.625));
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.font = `${this.getResponsiveFontSize()}px Poppins`;
    const textY =
      this.y + (this.height + parseInt(ctx.font, 10)) / 2 - this.remToPx(0.375);
    ctx.fillText(this.message, this.x + this.padding, textY);
    ctx.restore();
  }

  randomColor() {
    const colors = [
      "rgba(255, 153, 153, 1)",
      "rgba(255, 204, 153, 1)",
      "rgba(255, 255, 153, 1)",
      "rgba(204, 255, 153, 1)",
      "rgba(153, 255, 204, 1)",
      "rgba(153, 204, 255, 1)",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  darkerShade(color) {
    const rgba = color.replace(/^rgba?\(|\s+|\)$/g, "").split(",");
    const [r, g, b] = rgba.map((c) => Math.max(0, c - 30));
    return `rgba(${r}, ${g}, ${b}, 1)`;
  }
}

function createNotification() {
  const messages = [
    "Your student loans are due.",
    "Missed a Zoom meeting.",
    "You haven't watered your plants.",
    "Call your mother!",
    "The WiFi is down.",
    "You need a coffee break.",
    "Your laundry is still in the washer.",
    "You forgot to meal prep.",
    "That gym membership is still unused.",
    "The fridge is empty, again.",
    "You have 12 unread emails.",
    "Your phone storage is almost full.",
    "Time to pay rent!",
    "You haven't exercised in a week.",
    "You forgot your best friend's birthday.",
    "Your phone battery is low.",
    "Your boss just scheduled a last-minute meeting.",
    "Your favorite show is getting canceled.",
    "The weather app says it’s going to rain.",
    "Your internet bill is due.",
    "That project deadline is tomorrow.",
    "You left the stove on… maybe?",
    "Your dog is staring at you.",
    "You need to call the bank about that overdraft.",
    "The kitchen sink is full of dishes.",
    "Your car is due for maintenance.",
    "Your coworker just emailed you about a task you forgot.",
    "You missed a doctor's appointment.",
    "You forgot to reply to that text from three days ago.",
    "Your to-do list is growing longer by the minute.",
    "You need to renew your subscription… again.",
    "Your pants have been too tight recently.",
    "You ran out of milk for breakfast.",
    "You’ve been awake until 2 AM again, scrolling the web.",
    "You forgot to put the trash out.",
    "Your shoes are falling apart, and you need new ones.",
    "That closet has needed organizing for months.",
    "You’re out of coffee filters.",
    "Your favorite restaurant just raised prices.",
    "Your favorite podcast just released a new episode, and you're behind.",
    "Your gaming console needs a software update.",
    "There’s a weird noise coming from your car.",
    "You haven't backed up your documents in months.",
    "Your subscription to that streaming service is expiring.",
    "The laundry detergent is running low.",
    "You forgot your friend’s birthday (again).",
    "You need to schedule a dentist appointment.",
  ];

  const x = Math.random() * (canvas.width - 300);
  const y = Math.random() * (canvas.height - 50);
  const message = messages[Math.floor(Math.random() * messages.length)];
  const notification = new Notification(message, x, y);
  notifications.push(notification);
}

function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  notifications.forEach((notification, index) => {
    notification.draw();
  });

  const stressLevel = Math.min(
    (notifications.length / maxNotifications) * maxStress,
    maxStress
  );
  updateStressBar(stressLevel);

  if (stressLevel >= maxStress) {
    endGame();
  }
}

function updateStressBar(stressLevel) {
  const stressBar = document.getElementById("stressBar");
  stressBar.style.width = (stressLevel / maxStress) * 100 + "%";
}

function endGame() {
  clearInterval(notificationInterval);
  clearInterval(gameInterval);
  canvas.style.display = "none";
  gameOverScreen.style.display = "flex";
}

function resetGame() {
  notifications = [];
  initializeGame();
}

function resetStressBar() {
  const stressBar = document.getElementById("stressBar");
  stressBar.style.width = "0%";
}

function startGame() {
  notificationInterval = setInterval(createNotification, 1000);
  gameInterval = setInterval(updateGame, 1000 / 60);
}

canvas.addEventListener("click", function (event) {
  const canvasRect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / canvasRect.width;
  const scaleY = canvas.height / canvasRect.height;

  const clickX = (event.clientX - canvasRect.left) * scaleX;
  const clickY = (event.clientY - canvasRect.top) * scaleY;

  notifications.forEach((notification, index) => {
    const withinX =
      clickX > notification.x && clickX < notification.x + notification.width;
    const withinY =
      clickY > notification.y && clickY < notification.y + notification.height;
    if (withinX && withinY) {
      popSound.currentTime = 0;
      popSound.play();
      notifications.splice(index, 1);
    }
  });
});

restartButton.addEventListener("click", resetGame);

initializeGame();
