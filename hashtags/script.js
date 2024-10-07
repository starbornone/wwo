const fortunes = [
  "#YouGotThis",
  "#SmallWinsMatter",
  "#CoffeeAndConfidence",
  "#KeepItTogether",
  "#FutureLooksBright",
  "#WinningAtAdulting",
  "#GrowthVibesOnly",
  "#YoureDoingGreat",
  "#HustleWithHeart",
  "#MindfulAndMighty",
  "#SelfCareIsKey",
  "#ChasingGoals",
  "#OptimismOnFleek",
  "#ProgressOverPerfection",
  "#RiseAndGrind",
  "#FeelingZen",
  "#DigitalDetoxMode",
  "#TrustTheProcess",
  "#OneDayAtATime",
  "#BreatheInConfidence",
  "#CrushingIt",
  "#StriveForBalance",
  "#FindYourCalm",
  "#FlourishAndThrive",
  "#UnplugToRecharge",
  "#CelebrateTheLittleThings",
  "#StayKindToYourself",
  "#NailingThisLifeThing",
  "#BelieveInYourJourney",
  "#WinningTheDay",
  "#AdultingLikeAPro",
];

document
  .getElementById("fortune-button")
  .addEventListener("click", function () {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    const fortuneText = document.getElementById("fortune-text");
    fortuneText.textContent = randomFortune;
    const fortuneResult = document.getElementById("fortune-result");
    fortuneResult.classList.remove("hidden");
    fortuneResult.classList.add("active");
  });
