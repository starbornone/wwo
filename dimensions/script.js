const careerSlider = document.getElementById("career");
const socialSlider = document.getElementById("social");
const moneySlider = document.getElementById("money");
const mentalSlider = document.getElementById("mental");

const careerValue = document.getElementById("career-value");
const socialValue = document.getElementById("social-value");
const moneyValue = document.getElementById("money-value");
const mentalValue = document.getElementById("mental-value");

const universeDescription = document.getElementById("universe-description");
const stressBar = document.getElementById("stress-bar");
const lifeExpectancy = document.getElementById("life-expectancy");

let sliders = [
  { slider: careerSlider, label: careerValue },
  { slider: socialSlider, label: socialValue },
  { slider: moneySlider, label: moneyValue },
  { slider: mentalSlider, label: mentalValue },
];

const BASE_LIFE_EXPECTANCY = 85;
const STRESS_FACTOR = 0.8;

function adjustSliders(changedSlider) {
  let total = sliders.reduce(
    (sum, { slider }) => sum + parseInt(slider.value),
    0
  );
  let excess = total - 100;

  if (excess !== 0) {
    let otherSliders = sliders.filter(({ slider }) => slider !== changedSlider);
    for (let { slider } of otherSliders) {
      let adjustment = Math.floor(excess / otherSliders.length);
      if (
        adjustment !== 0 &&
        slider.value - adjustment >= 0 &&
        slider.value - adjustment <= 100
      ) {
        slider.value = parseInt(slider.value) - adjustment;
      }
    }
  }
  updateValues();
}

function calculateStress() {
  let stress = 0;

  sliders.forEach(({ slider }) => {
    if (slider.value < 30) {
      stress += 30 - slider.value;
    }
  });

  return stress;
}

function adjustColorsBasedOnStress(stress) {
  let body = document.body;
  let stressBar = document.getElementById("stress-bar");
  let header = document.querySelector("header");
  let resultSection = document.getElementById("result-section");
  let sliders = document.querySelectorAll(".slider-container");

  if (stress < 10) {
    body.style.background =
      "linear-gradient(90deg, rgba(173,216,230,1) 0%, rgba(255,255,224,1) 100%)";
    stressBar.style.backgroundColor = "rgba(50, 205, 50, 1)"; // green
    header.style.backgroundColor = "rgba(255, 235, 240, 1)";
    resultSection.style.backgroundColor = "rgba(255, 245, 235, 1)";
    sliders.forEach(
      (slider) => (slider.style.backgroundColor = "rgba(235, 235, 255, 1)")
    );
  } else if (stress < 50) {
    body.style.background =
      "linear-gradient(90deg, rgba(255,255,224,1) 0%, rgba(255,182,193,1) 100%)";
    stressBar.style.backgroundColor = "rgba(255, 165, 0, 1)"; // orange
    header.style.backgroundColor = "rgba(255, 223, 186, 1)";
    resultSection.style.backgroundColor = "rgba(255, 240, 220, 1)";
    sliders.forEach(
      (slider) => (slider.style.backgroundColor = "rgba(255, 230, 230, 1)")
    );
  } else {
    body.style.background =
      "linear-gradient(90deg, rgba(255,182,193,1) 0%, rgba(255,69,58,1) 100%)";
    stressBar.style.backgroundColor = "rgba(255, 69, 58, 1)"; // red
    header.style.backgroundColor = "rgba(255, 182, 193, 1)";
    resultSection.style.backgroundColor = "rgba(255, 182, 193, 1)";
    sliders.forEach(
      (slider) => (slider.style.backgroundColor = "rgba(255, 182, 193, 1)")
    );
  }
}

function updateValues() {
  sliders.forEach(({ slider, label }) => {
    label.textContent = `${slider.value}%`;
  });

  let career = careerSlider.value;
  let social = socialSlider.value;
  let money = moneySlider.value;
  let mental = mentalSlider.value;

  let description = "In this universe, ";

  if (career > 70) {
    description += "your career is thriving, ";
  } else if (career < 40) {
    description += "you are struggling with career satisfaction, ";
  } else {
    description += "you have a balanced career, ";
  }

  if (social > 70) {
    description += "your social life is on fire, and ";
  } else if (social < 40) {
    description += "your social life feels a bit lonely, and ";
  } else {
    description += "you have a solid circle of friends, and ";
  }

  if (money > 70) {
    description += "your financial situation is stable. ";
  } else if (money < 40) {
    description += "you’re barely scraping by financially. ";
  } else {
    description += "your finances are manageable. ";
  }

  if (mental < 40) {
    description += "Unfortunately, you’re struggling with mental health.";
  } else if (mental > 70) {
    description += "You’ve achieved peace of mind.";
  } else {
    description += "Your mental health is pretty balanced.";
  }

  universeDescription.textContent = description;

  let stress = calculateStress();
  let lifeExpectancyYears = Math.max(
    BASE_LIFE_EXPECTANCY - stress * STRESS_FACTOR,
    0
  );

  stressBar.style.width = `${stress}%`;
  lifeExpectancy.textContent = `Life Expectancy: ${lifeExpectancyYears.toFixed(
    1
  )} years`;

  adjustColorsBasedOnStress(stress);
}

sliders.forEach(({ slider }) => {
  slider.addEventListener("input", (e) => adjustSliders(e.target));
});

updateValues();
