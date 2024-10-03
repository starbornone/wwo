function hugTree(treeId) {
  const responses = {
    zenTree: [
      "Wow, I'm so grounded right now, aren't you?",
      "Just breathe in, breathe out...and hug away!",
      "Ah, peace and tranquility. Let's hug it out!",
    ],
    passiveAggressiveTree: [
      "Thanks, but I prefer emotional distance.",
      "Wow, you really needed this, huh?",
      "I guess a hug is better than nothing.",
    ],
    indifferentTree: [
      "Meh. I'm just here.",
      "Sure, why not. I'm not busy.",
      "Do what you want; I'm just a tree.",
    ],
  };

  const treeResponses = responses[treeId];
  const randomResponse =
    treeResponses[Math.floor(Math.random() * treeResponses.length)];

  const responseId = `response${
    treeId.charAt(0).toUpperCase() + treeId.slice(1)
  }`;
  console.log(`Trying to access response element with ID: ${responseId}`);

  const responseElement = document.getElementById(`${responseId}`);

  if (responseElement) {
    responseElement.innerText = randomResponse;
  } else {
    console.error(`Response element with ID "${responseId}" not found.`);
    return;
  }

  const treeElement = document.getElementById(treeId);
  if (treeElement.classList.contains("clicked")) {
    treeElement.classList.remove("clicked");
    responseElement.style.display = "none";
  } else {
    document.querySelectorAll(".tree").forEach((tree) => {
      tree.classList.remove("clicked");
      tree.querySelector(".response").style.display = "none";
    });
    treeElement.classList.add("clicked");
    responseElement.style.display = "block";
  }
}
