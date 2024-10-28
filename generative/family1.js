const family1 = [
  {
    name: "John Smith",
    birthYear: 1950,
    wealth: 1000000,
    events: [
      {
        year: 1950,
        event: "Born into wealthy family, inherits trust fund of $1,000,000.",
        wealth: 1000000,
      },
      {
        year: 1968,
        event: "Attends elite private university, starts investing.",
        wealth: 1200000,
      },
      {
        year: 1975,
        event: "Marries Jane Doe, combined wealth increases.",
        wealth: 2000000,
      },
      {
        year: 1978,
        event: "Invests in stocks and real estate, compounding wealth.",
        wealth: 2500000,
      },
      { year: 1980, event: "First child, Alice Smith, born.", wealth: 3000000 },
      { year: 1983, event: "Second child, Bob Smith, born.", wealth: 3500000 },
      {
        year: 1995,
        event: "Starts family business, wealth grows through expansion.",
        wealth: 5000000,
      },
      {
        year: 2020,
        event: "Passes $6,000,000 inheritance to children upon death.",
        wealth: 6000000,
      },
    ],
  },
  {
    name: "Jane Doe",
    birthYear: 1952,
    wealth: 500000,
    events: [
      {
        year: 1952,
        event: "Born into moderately wealthy family.",
        wealth: 500000,
      },
      {
        year: 1975,
        event: "Marries John Smith, combined wealth increases.",
        wealth: 2000000,
      },
      { year: 1980, event: "First child, Alice Smith, born.", wealth: 3000000 },
      { year: 1983, event: "Second child, Bob Smith, born.", wealth: 3500000 },
      {
        year: 1995,
        event:
          "Starts family business with John Smith, wealth continues to grow.",
        wealth: 5000000,
      },
      {
        year: 2020,
        event: "Passes away, wealth of $6,000,000 distributed to children.",
        wealth: 6000000,
      },
    ],
  },
  {
    name: "Alice Smith",
    birthYear: 1980,
    wealth: 500000,
    events: [
      {
        year: 1980,
        event: "Born into wealth, trust fund of $500,000 established.",
        wealth: 500000,
      },
      {
        year: 1998,
        event: "Attends top university, connections expand.",
        wealth: 500000,
      },
      {
        year: 2005,
        event: "Marries James Brown, combined wealth increases.",
        wealth: 1500000,
      },
      { year: 2010, event: "First child, Lily Brown, born.", wealth: 2000000 },
      {
        year: 2020,
        event: "Inherits $3,000,000 from parents.",
        wealth: 5000000,
      },
      {
        year: 2025,
        event: "Wealth continues to grow through investments and inheritance.",
        wealth: 6000000,
      },
    ],
  },
  {
    name: "Bob Smith",
    birthYear: 1983,
    wealth: 500000,
    events: [
      {
        year: 1983,
        event: "Born into wealth, trust fund of $500,000 established.",
        wealth: 500000,
      },
      {
        year: 2001,
        event: "Attends top university, meets future business partners.",
        wealth: 500000,
      },
      {
        year: 2010,
        event: "Starts investment firm, wealth grows.",
        wealth: 2000000,
      },
      {
        year: 2011,
        event: "Marries Sarah White, combined wealth increases.",
        wealth: 3500000,
      },
      { year: 2015, event: "First child, Jake Smith, born.", wealth: 4000000 },
      {
        year: 2020,
        event: "Inherits $3,000,000 from parents.",
        wealth: 6500000,
      },
      {
        year: 2025,
        event: "Wealth grows further through stock market and investments.",
        wealth: 7500000,
      },
    ],
  },
  {
    name: "James Brown",
    birthYear: 1981,
    wealth: 1000000,
    events: [
      {
        year: 1981,
        event: "Born into wealth, modest inheritance.",
        wealth: 1000000,
      },
      {
        year: 2005,
        event: "Marries Alice Smith, wealth combines.",
        wealth: 1500000,
      },
      { year: 2010, event: "First child, Lily Brown, born.", wealth: 2000000 },
      {
        year: 2020,
        event:
          "Inherits from in-laws through Alice, combined wealth increases.",
        wealth: 5000000,
      },
    ],
  },
  {
    name: "Sarah White",
    birthYear: 1985,
    wealth: 300000,
    events: [
      { year: 1985, event: "Born into middle-class family.", wealth: 300000 },
      {
        year: 2011,
        event: "Marries Bob Smith, combined wealth increases.",
        wealth: 3500000,
      },
      { year: 2015, event: "First child, Jake Smith, born.", wealth: 4000000 },
      {
        year: 2020,
        event: "Wealth continues to grow through investments.",
        wealth: 6500000,
      },
    ],
  },
  {
    name: "Lily Brown",
    birthYear: 2010,
    wealth: 0,
    events: [
      {
        year: 2010,
        event: "Born into wealthy family, trust fund of $500,000 established.",
        wealth: 500000,
      },
      {
        year: 2025,
        event: "Trust fund grows through interest and family wealth expansion.",
        wealth: 750000,
      },
    ],
  },
  {
    name: "Jake Smith",
    birthYear: 2015,
    wealth: 0,
    events: [
      {
        year: 2015,
        event: "Born into wealthy family, trust fund of $500,000 established.",
        wealth: 500000,
      },
      {
        year: 2030,
        event: "Trust fund grows through interest and family wealth expansion.",
        wealth: 750000,
      },
    ],
  },
];
