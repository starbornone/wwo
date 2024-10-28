const maxWealth = 7500000;

function renderTimeline(familyData, familyId) {
  const eventsContainer = document
    .getElementById(familyId)
    .querySelector(".events");

  for (let year = 1950; year <= 2030; year++) {
    const eventElement = document.createElement("div");
    eventElement.classList.add("event");

    const eventDescription = findEventForYear(familyData, year);

    if (eventDescription) {
      const descriptionElement = document.createElement("div");
      descriptionElement.classList.add("description");
      descriptionElement.textContent = eventDescription.text;

      const wealthProportion = eventDescription.wealth / maxWealth;
      eventElement.style.background = getWealthBar(wealthProportion);

      eventElement.appendChild(descriptionElement);
    }

    eventsContainer.appendChild(eventElement);
  }
}

function findEventForYear(familyData, year) {
  for (const person of familyData) {
    for (const event of person.events) {
      if (event.year === year) {
        return {
          text: `${person.name}: ${event.event}`,
          wealth: event.wealth,
        };
      }
    }
  }
  return null;
}

function getWealthBar(proportion) {
  const filledColor = "rgba(142, 148, 121, 1)";
  const emptyColor = "transparent";

  return `linear-gradient(to right, ${filledColor} ${
    proportion * 100
  }%, ${emptyColor} ${proportion * 100}%)`;
}

function renderYearsColumn() {
  const yearsContainer = document.querySelector(".years");

  for (let year = 1950; year <= 2030; year++) {
    const yearElement = document.createElement("div");
    yearElement.classList.add("year");
    yearElement.textContent = year;
    yearsContainer.appendChild(yearElement);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderYearsColumn();
  renderTimeline(family1, "family1");
  renderTimeline(family2, "family2");
  renderTimeline(family3, "family3");
});
