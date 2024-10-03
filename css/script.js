const slider = document.getElementById("fomoJomoSlider");
const moodText = document.getElementById("mood-text");
const body = document.body;

slider.addEventListener("input", function () {
  const value = slider.value;

  if (value < 10) {
    moodText.textContent = "FOMO: Total anxiety!";
    body.style.backgroundColor = "rgba(255, 95, 87, 1)";
  } else if (value < 30) {
    moodText.textContent = "FOMO: What am I missing?";
    body.style.backgroundColor = "rgba(255, 150, 87, 1)";
  } else if (value < 50) {
    moodText.textContent = "Slightly anxious, but okay.";
    body.style.backgroundColor = "rgba(255, 204, 0, 1)";
  } else if (value < 70) {
    moodText.textContent = "Feeling balanced.";
    body.style.backgroundColor = "rgba(247, 224, 104, 1)";
  } else if (value < 90) {
    moodText.textContent = "JOMO: Enjoying my own space.";
    body.style.backgroundColor = "rgba(152, 251, 152, 1)";
  } else {
    moodText.textContent = "JOMO Bliss: Absolute peace.";
    body.style.backgroundColor = "rgba(30, 144, 255, 1)";
  }
});
