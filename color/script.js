const colors = [
  {
    name: "Sunshine Lemon",
    color: "#FFD700",
    message:
      "I'm trying to stay positive, but it's hard when I’m constantly disappointed by life.",
  },
  {
    name: "Blueberry Blast",
    color: "#1E90FF",
    message:
      "I’m calm on the outside, but freaking out about my entire existence on the inside.",
  },
  {
    name: "Cotton Candy Cloud",
    color: "#FFB6C1",
    message: "Sweet and fluffy, like my dreams that haven’t come true... yet.",
  },
  {
    name: "Minty Fresh",
    color: "#98FF98",
    message: "Trying to stay fresh, but honestly, I’m just tired all the time.",
  },
  {
    name: "Cherry Delight",
    color: "#FF6347",
    message: "Bold and energetic... but only after my third cup of coffee.",
  },
  {
    name: "Lavender Love",
    color: "#E6E6FA",
    message:
      "I’m soothing, but also a little too good at overthinking everything.",
  },
  {
    name: "Orange Zest",
    color: "#FFA500",
    message:
      "I bring zest to life, but I’m also having a quarter-life crisis every other day.",
  },
  {
    name: "Grape Escape",
    color: "#8A2BE2",
    message:
      "Feeling deep and mysterious... or maybe just avoiding responsibilities.",
  },
];

const gridContainer = document.getElementById("grid");

colors.forEach(({ name, color, message }) => {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");

  const jellybean = document.createElement("div");
  jellybean.classList.add("jellybean");
  jellybean.style.setProperty("--bean-color", color);

  const itemName = document.createElement("div");
  itemName.classList.add("item-name");
  itemName.innerText = name;

  const itemMessage = document.createElement("div");
  itemMessage.classList.add("item-message");
  itemMessage.innerText = message;

  const colorSwatch = document.createElement("div");
  colorSwatch.classList.add("color-swatch");
  colorSwatch.style.backgroundColor = color;

  gridItem.addEventListener("click", () => {
    const isVisible = itemMessage.classList.contains("show");
    document.querySelectorAll(".item-message.show").forEach((msg) => {
      msg.classList.remove("show");
    });
    if (!isVisible) {
      itemMessage.classList.add("show");
    }
  });

  gridItem.appendChild(jellybean);
  gridItem.appendChild(itemName);
  gridItem.appendChild(itemMessage);
  gridItem.appendChild(colorSwatch);

  gridContainer.appendChild(gridItem);
});
