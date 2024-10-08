const maxStars = 100;
let starCount = 0;
let stackHeight = 6;

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  const randomSize = Math.random() * (30 - 15) + 15;

  const randomPastelColor = `rgba(${Math.floor(
    Math.random() * 128 + 127
  )}, ${Math.floor(Math.random() * 128 + 127)}, ${Math.floor(
    Math.random() * 128 + 127
  )}, 1)`;

  star.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="${randomSize}" height="${randomSize}">
      <path fill="${randomPastelColor}" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
    </svg>
  `;

  return star;
}

document.getElementById("addStar").addEventListener("click", function () {
  if (starCount < maxStars) {
    const star = createStar();

    const jar = document.getElementById("jar");
    const jarRect = jar.getBoundingClientRect();

    const randomX = Math.random() * (jarRect.width - 50);
    star.style.left = `${randomX + 10}px`;

    star.style.transform = `translateY(-300px)`;

    const starsContainer = document.getElementById("stars");
    starsContainer.appendChild(star);

    requestAnimationFrame(() => {
      star.style.opacity = "1";
      star.style.animation = `fall 3s linear forwards`;
      stackHeight += 1;
      star.style.bottom = `${stackHeight}px`;
    });

    starCount++;

    if (starCount >= maxStars) {
      document.getElementById("addStar").setAttribute("disabled", "true");
      document.getElementById("fullMessage").style.display = "block";
    }
  }
});

document.getElementById("emptyJar").addEventListener("click", function () {
  const starsContainer = document.getElementById("stars");
  starsContainer.innerHTML = "";
  starCount = 0;
  stackHeight = 6;

  document.getElementById("addStar").removeAttribute("disabled");
  document.getElementById("fullMessage").style.display = "none";

  const jar = document.getElementById("jar");
  jar.style.animation = "shake 0.5s forwards";
  setTimeout(() => {
    jar.style.animation = "";
  }, 500);
});

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `
    @keyframes fall {
      from {
        transform: translateY(-300px);
        opacity: 1;
      }
      to {
        transform: translateY(6px);
        opacity: 1;
      }
    }
`,
  styleSheet.cssRules.length
);
