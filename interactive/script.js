const storyText = document.getElementById("story-text");
const choices = document.getElementById("choices");

const scenarios = {
  cry: {
    text: "Congratulations, you've just made your first complaint about the state of the world. Get used to it.",
    choices: {
      school: "Go to school",
      silence: "Stay silent",
    },
  },
  silence: {
    text: "Silence is compliance. Looks like you're already settling into the status quo. Your parents hope you’ll learn to hustle soon.",
    choices: {
      school: "Study hard",
      ignore: "Ignore homework",
    },
  },
  school: {
    text: "You aced your tests! But since the education system is rigged, you'll still owe thousands in student loans by the time you're 18.",
    choices: {
      passion: "Follow passion",
      corporate: "Pursue corporate life",
    },
  },
  ignore: {
    text: "You ignored school, and somehow things haven’t changed much. Everyone says you're smart, but society is more impressed by your willingness to hustle later.",
    choices: {
      passion: "Follow passion",
      corporate: "Pursue corporate life",
    },
  },
  passion: {
    text: "You’re passionate and fulfilled! Too bad rent is $3,000 a month, and you can’t eat passion.",
    choices: {
      internship: "Take an internship",
      gig: "Skip straight to the gig economy",
    },
  },
  corporate: {
    text: "You landed a stable corporate job. Your soul erodes a little with every day, but at least you have health insurance (for now).",
    choices: {
      internship: "Take an internship",
      gig: "Skip straight to the gig economy",
    },
  },
  internship: {
    text: "Great! You’re gaining 'experience' (read: working for free). Your boss says this will look amazing on your resume, which might help in the next decade.",
    choices: {
      work: "Prioritize work",
      balance: "Find work-life balance",
      activism: "Pursue activism",
    },
  },
  gig: {
    text: "You’re now an Uber driver! Your schedule is flexible, and so are your chances of ever owning a house. But at least you’re your own boss (if you squint).",
    choices: {
      work: "Prioritize work",
      balance: "Find work-life balance",
      activism: "Pursue activism",
    },
  },
  work: {
    text: "You got a promotion! But you're now working 80-hour weeks, and your personal life is a distant memory.",
    choices: {
      rent: "Rent forever",
      buy: "Try to buy a house",
      parents: "Move in with parents",
    },
  },
  balance: {
    text: "You tried balancing work and life, but your boss noticed and your career is stagnating. No one cares about your healthy boundaries.",
    choices: {
      rent: "Rent forever",
      buy: "Try to buy a house",
      parents: "Move in with parents",
    },
  },
  activism: {
    text: "You join a union, but you’re immediately blacklisted by most corporations. Enjoy the freelance life!",
    choices: {
      rent: "Rent forever",
      buy: "Try to buy a house",
      parents: "Move in with parents",
    },
  },
  rent: {
    text: "Congratulations! You’re now renting a one-bedroom apartment for the same price your parents paid for a house.",
    choices: {
      burnout: "Burn out",
      sabbatical: "Take a sabbatical",
      hustle: "Start a side hustle",
    },
  },
  buy: {
    text: "You got approved for a mortgage! But you won’t be able to afford fun for a few decades.",
    choices: {
      burnout: "Burn out",
      sabbatical: "Take a sabbatical",
      hustle: "Start a side hustle",
    },
  },
  parents: {
    text: "Living with your parents isn’t so bad. The crushing shame is only surpassed by the realization that this might last forever.",
    choices: {
      burnout: "Burn out",
      sabbatical: "Take a sabbatical",
      hustle: "Start a side hustle",
    },
  },
  burnout: {
    text: "You’ve burnt out, but don’t worry—there’s a self-care app for that. Just don’t expect your employer to respect your time off.",
    choices: {
      grind: "Keep grinding",
      revolution: "Join the revolution",
      checkOut: "Check out mentally",
    },
  },
  sabbatical: {
    text: "You took time off, and the world kept spinning without you. Now you’re behind on everything, and no one cares that you 'found yourself' during your travels.",
    choices: {
      grind: "Keep grinding",
      revolution: "Join the revolution",
      checkOut: "Check out mentally",
    },
  },
  hustle: {
    text: "You started a side hustle! You’re now working two jobs and have a collection of self-help books. 'Entrepreneurship' is just capitalism’s way of making you hustle harder.",
    choices: {
      grind: "Keep grinding",
      revolution: "Join the revolution",
      checkOut: "Check out mentally",
    },
  },
  grind: {
    text: "You kept grinding. You’re now middle management, and your revolutionary spirit is just a distant memory.",
    choices: {
      reflect: "Reflect fondly",
      regret: "Regret everything",
      dream: "Dream of revolution",
    },
  },
  revolution: {
    text: "You joined the revolution! You’re marching in the streets with others, but the media labels you a troublemaker.",
    choices: {
      reflect: "Reflect fondly",
      regret: "Regret everything",
      dream: "Dream of revolution",
    },
  },
  checkOut: {
    text: "You’ve checked out of the rat race. You’re now a full-time nihilist. Congrats! You've achieved a certain level of inner peace… or at least indifference.",
    choices: {
      reflect: "Reflect fondly",
      regret: "Regret everything",
      dream: "Dream of revolution",
    },
  },
  reflect: {
    text: "You look back at your life and realize that even though capitalism crushed your soul, you made it through. But there's still time for one last futile hope for change.",
    choices: {},
  },
  regret: {
    text: "You reflect on all your choices and realize that most of them were made to survive, not to thrive. Is it too late to start over?",
    choices: {},
  },
  dream: {
    text: "You dream of a better world for the next generation. The revolution didn’t happen in your lifetime, but we planted the seeds. There’s still hope… somewhere.",
    choices: {},
  },
};

function choose(option) {
  const scenario = scenarios[option];
  if (scenario) {
    storyText.innerText = scenario.text;
    renderChoices(scenario.choices);
  }
}

function renderChoices(choiceOptions) {
  choices.innerHTML = "";
  for (const [key, value] of Object.entries(choiceOptions)) {
    const button = document.createElement("button");
    button.innerText = value;
    button.onclick = () => choose(key);
    choices.appendChild(button);
  }
}
