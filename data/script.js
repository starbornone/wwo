const facts = [
  "The average human body contains approximately 37.2 trillion cells.",
  "Earth's mass is about 5.972 × 10^24 kilograms.",
  "It's been 14 hours since your last impromptu work meeting.",
  "The pH of human blood typically ranges between 7.35 and 7.45.",
  "The speed of light is 299,792,458 meters per second.",
  "You've spent 37 minutes contemplating your grocery list this week.",
  "Pi is approximately 3.14159.",
  "Absolute zero is -273.15°C.",
  "You’ve mentally replayed a past embarrassing moment 6 times today.",
  "There are approximately 1.67 × 10^21 atoms in a drop of water.",
  "Earth’s circumference is around 40,075 kilometers.",
  "You’ve just paid 20% more on groceries than last week.",
  "The average human heart rate is between 60 and 100 beats per minute.",
  "Earth rotates at a speed of 1,670 kilometers per hour at the equator.",
  "You’ve checked your phone for notifications 12 times in the past hour.",
  "The human genome contains between 20,000 and 25,000 genes.",
  "Earth is about 4.543 billion years old.",
  "It's been 72 hours since you promised yourself you'd start that new habit.",
  "The distance from Earth to the Moon is approximately 384,400 kilometers.",
  "Oxygen makes up about 21% of the air we breathe.",
  "You’ve clicked “remind me tomorrow” on a software update 8 times this week.",
  "The mass of a neutron is 1.675 × 10^-27 kilograms.",
  "The average human body temperature is 37°C.",
  "You’ve told yourself “I’ll just watch one episode” at least 5 times this week.",
  "Humans blink an average of 15 to 20 times per minute.",
  "Each human cell contains about 2 meters of DNA.",
  "You've silently judged someone’s playlist at least 3 times today.",
  "There are an estimated 100 to 400 billion stars in the Milky Way galaxy.",
  "Jupiter’s diameter is approximately 139,820 kilometers.",
  "You've checked your fridge for snacks and found nothing at least 4 times today.",
  "The speed of sound in air is 343 meters per second at 20°C.",
  "Avogadro’s number is 6.022 × 10^23.",
  "You’ve forgotten your reusable grocery bags 3 times this month.",
  "Earth's surface area is about 510.1 million square kilometers.",
  "Planck’s constant is 6.626 × 10^-34 joule-seconds.",
  "You’ve spent 12 hours scrolling through social media this week.",
];

window.addEventListener("DOMContentLoaded", () => {
  const factsList = document.getElementById("facts-list");

  facts.forEach((fact) => {
    const listItem = document.createElement("li");
    listItem.textContent = fact;
    factsList.appendChild(listItem);
  });
});
