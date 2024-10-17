const adjectives = {
  1: ["bleak", "cold", "dark", "vast"],
  2: ["forlorn", "somber", "hollow", "frozen"],
  3: ["desolate", "lamenting", "sorrowful", "despondent"],
  4: ["ephemeral", "melancholy", "inadequate", "ominously"],
};

const nouns = {
  1: ["dreams", "void", "clouds", "hearts", "fears"],
  2: ["shadows", "whispers", "silence", "abyss", "winter"],
  3: ["loneliness", "emptiness", "hopelessness", "memories"],
  4: ["desolation", "desperation", "disconnection", "incompleteness"],
};

const verbs = {
  1: ["stare", "fade", "grip", "drift", "break"],
  2: ["consume", "linger", "dissolve", "shiver", "crumble"],
  3: ["suffocate", "dissipate", "penetrate", "ostracize"],
  4: ["disintegrate", "obliterate", "evaporate", "annihilate", "obliterate"],
};

function getRandomWord(syllableCount, wordPool) {
  let result = "";
  let remainingSyllables = syllableCount;

  while (remainingSyllables > 0) {
    const maxSyllableKey = Math.min(
      remainingSyllables,
      Math.max(...Object.keys(wordPool).map(Number))
    );

    const word =
      wordPool[maxSyllableKey][
        Math.floor(Math.random() * wordPool[maxSyllableKey].length)
      ];

    result += word + " ";
    remainingSyllables -= maxSyllableKey;
  }

  return result.trim();
}

const haikuStructure = [
  [5, "adjective-noun"],
  [7, "adjective-noun-verb"],
  [5, "noun-verb"],
];

function buildLine(syllablesNeeded, structure) {
  let line = "";

  if (structure === "adjective-noun") {
    const adjectiveSyllables =
      Math.floor(Math.random() * (syllablesNeeded - 1)) + 1;
    const nounSyllables = syllablesNeeded - adjectiveSyllables;

    line += `${getRandomWord(adjectiveSyllables, adjectives)} ${getRandomWord(
      nounSyllables,
      nouns
    )}`;
  } else if (structure === "adjective-noun-verb") {
    const adjectiveSyllables =
      Math.floor(Math.random() * (syllablesNeeded - 3)) + 1;
    const nounSyllables =
      Math.floor(Math.random() * (syllablesNeeded - adjectiveSyllables - 1)) +
      1;
    const verbSyllables = syllablesNeeded - adjectiveSyllables - nounSyllables;

    line += `${getRandomWord(adjectiveSyllables, adjectives)} ${getRandomWord(
      nounSyllables,
      nouns
    )} ${getRandomWord(verbSyllables, verbs)}`;
  } else if (structure === "noun-verb") {
    const nounSyllables = Math.floor(Math.random() * (syllablesNeeded - 1)) + 1;
    const verbSyllables = syllablesNeeded - nounSyllables;

    line += `${getRandomWord(nounSyllables, nouns)} ${getRandomWord(
      verbSyllables,
      verbs
    )}`;
  }

  return line;
}

function generateHaiku() {
  const haiku = haikuStructure.map(([syllables, structure]) => {
    return buildLine(syllables, structure);
  });

  return haiku;
}

const haikuElement = document.getElementById("haiku");
const generateButton = document.getElementById("generate-btn");

generateButton.addEventListener("click", () => {
  const newHaiku = generateHaiku();
  haikuElement.innerHTML = newHaiku.join("<br>");
});
