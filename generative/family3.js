const family3 = [
  {
    name: "Tom Miller",
    birthYear: 1950,
    wealth: 0,
    events: [
      {
        year: 1950,
        event: "Born into poverty, no inheritance or financial support.",
        wealth: 0,
      },
      {
        year: 1964,
        event: "Leaves school early to work and support family.",
        wealth: 500,
      },
      {
        year: 1968,
        event: "Works in a factory, lives paycheck to paycheck.",
        wealth: 3000,
      },
      {
        year: 1973,
        event: "Marries Susan Harris, rents small apartment.",
        wealth: 5000,
      },
      { year: 1974, event: "First child, Kevin Miller, born.", wealth: 4500 },
      { year: 1977, event: "Second child, Karen Miller, born.", wealth: 4000 },
      {
        year: 1985,
        event: "Factory job shut down, becomes unemployed.",
        wealth: 1000,
      },
      {
        year: 1995,
        event: "Gets part-time job in retail, struggling to cover expenses.",
        wealth: 3000,
      },
      {
        year: 2020,
        event: "Struggles with health issues, relies on social services.",
        wealth: 2000,
      },
    ],
  },
  {
    name: "Susan Harris",
    birthYear: 1953,
    wealth: 0,
    events: [
      {
        year: 1953,
        event:
          "Born into working-class family, limited education opportunities.",
        wealth: 0,
      },
      { year: 1969, event: "Works in retail, minimum wage job.", wealth: 1000 },
      {
        year: 1973,
        event: "Marries Tom Miller, combined finances remain limited.",
        wealth: 5000,
      },
      { year: 1974, event: "First child, Kevin Miller, born.", wealth: 4500 },
      { year: 1977, event: "Second child, Karen Miller, born.", wealth: 4000 },
      {
        year: 2000,
        event: "Works part-time in retail to support household expenses.",
        wealth: 3000,
      },
      {
        year: 2020,
        event: "Works into old age due to lack of retirement savings.",
        wealth: 2000,
      },
    ],
  },
  {
    name: "Kevin Miller",
    birthYear: 1974,
    wealth: 0,
    events: [
      {
        year: 1974,
        event: "Born into working-class family, no savings for education.",
        wealth: 0,
      },
      {
        year: 1990,
        event: "Leaves school early to work part-time, no future savings.",
        wealth: 1000,
      },
      {
        year: 2000,
        event: "Works full-time in low-wage job, struggles with rent.",
        wealth: 5000,
      },
      {
        year: 2003,
        event: "Marries Lisa Green, rents small apartment.",
        wealth: 8000,
      },
      {
        year: 2004,
        event:
          "First child, Noah Miller, born. Medical expenses strain finances.",
        wealth: 4000,
      },
      {
        year: 2015,
        event: "Works two jobs to cover rising costs, still unable to save.",
        wealth: 6000,
      },
      {
        year: 2020,
        event: "Continues to work multiple jobs, no savings for future.",
        wealth: 10000,
      },
    ],
  },
  {
    name: "Karen Miller",
    birthYear: 1977,
    wealth: 0,
    events: [
      {
        year: 1977,
        event: "Born into financially unstable household.",
        wealth: 0,
      },
      {
        year: 1995,
        event:
          "Graduates high school, takes on student loans for vocational school.",
        wealth: -15000,
      },
      {
        year: 2000,
        event:
          "Starts working in service industry, struggles to pay off loans.",
        wealth: -5000,
      },
      {
        year: 2010,
        event: "Remains single, continues renting, unable to afford own home.",
        wealth: 0,
      },
      {
        year: 2020,
        event: "Struggles with underemployment, lives paycheck to paycheck.",
        wealth: 2000,
      },
    ],
  },
  {
    name: "Lisa Green",
    birthYear: 1980,
    wealth: 0,
    events: [
      {
        year: 1980,
        event:
          "Born into working-class family, limited resources for education.",
        wealth: 0,
      },
      {
        year: 2003,
        event: "Marries Kevin Miller, combines low income.",
        wealth: 8000,
      },
      {
        year: 2004,
        event:
          "First child, Noah Miller, born, medical expenses strain finances.",
        wealth: 4000,
      },
      {
        year: 2020,
        event:
          "Works part-time, no retirement savings, struggling to afford child care.",
        wealth: 10000,
      },
    ],
  },
  {
    name: "Noah Miller",
    birthYear: 2004,
    wealth: 0,
    events: [
      {
        year: 2004,
        event:
          "Born into financially struggling household, no trust fund or savings.",
        wealth: 0,
      },
      {
        year: 2020,
        event:
          "Attends underfunded public school, parents struggle with basic expenses.",
        wealth: 0,
      },
      {
        year: 2025,
        event:
          "Graduates high school, limited job prospects due to economic hardships.",
        wealth: 2000,
      },
      {
        year: 2027,
        event: "Works in gig economy job, unable to secure stable employment.",
        wealth: 3000,
      },
      {
        year: 2030,
        event: "Marries Ava Thompson, rents a small apartment.",
        wealth: 7000,
      },
      {
        year: 2032,
        event: "First child, Ella Miller, born, medical costs reduce savings.",
        wealth: 5000,
      },
      {
        year: 2040,
        event: "Continues working gig jobs, no savings or retirement plan.",
        wealth: 8000,
      },
    ],
  },
  {
    name: "Ava Thompson",
    birthYear: 2006,
    wealth: 0,
    events: [
      {
        year: 2006,
        event: "Born into working-class family, no financial security.",
        wealth: 0,
      },
      {
        year: 2024,
        event: "Graduates high school, works in retail on minimum wage.",
        wealth: 2000,
      },
      {
        year: 2030,
        event:
          "Marries Noah Miller, combines income to manage household expenses.",
        wealth: 7000,
      },
      {
        year: 2032,
        event:
          "First child, Ella Miller, born, medical expenses strain finances.",
        wealth: 5000,
      },
      {
        year: 2040,
        event: "Continues working, limited savings for future.",
        wealth: 8000,
      },
    ],
  },
  {
    name: "Ella Miller",
    birthYear: 2032,
    wealth: 0,
    events: [
      {
        year: 2032,
        event: "Born into low-income family, no financial support or savings.",
        wealth: 0,
      },
      {
        year: 2045,
        event:
          "Attends underfunded public school, limited educational resources.",
        wealth: 0,
      },
    ],
  },
];
