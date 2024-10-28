const family2 = [
  {
    name: "Michael Johnson",
    birthYear: 1950,
    wealth: 100000,
    events: [
      { year: 1950, event: "Born into middle-class family.", wealth: 100000 },
      {
        year: 1968,
        event:
          "Graduates high school, works part-time while attending university.",
        wealth: 110000,
      },
      {
        year: 1972,
        event: "Graduates university, starts corporate career.",
        wealth: 150000,
      },
      {
        year: 1975,
        event: "Marries Emily Taylor, buys first home with mortgage.",
        wealth: 200000,
      },
      { year: 1980, event: "First child, Mark Johnson, born.", wealth: 220000 },
      {
        year: 1983,
        event: "Second child, Lisa Johnson, born.",
        wealth: 250000,
      },
      {
        year: 1990,
        event: "Promoted to senior management, family wealth increases.",
        wealth: 300000,
      },
      {
        year: 2000,
        event: "Invests in retirement funds, starts building more assets.",
        wealth: 350000,
      },
      {
        year: 2005,
        event: "Refinances mortgage to support children’s university.",
        wealth: 330000,
      },
      {
        year: 2020,
        event: "Retires with pension and home ownership, lives off savings.",
        wealth: 500000,
      },
    ],
  },
  {
    name: "Emily Taylor",
    birthYear: 1952,
    wealth: 50000,
    events: [
      { year: 1952, event: "Born into working-class family.", wealth: 50000 },
      {
        year: 1975,
        event: "Marries Michael Johnson, combines wealth.",
        wealth: 200000,
      },
      { year: 1980, event: "First child, Mark Johnson, born.", wealth: 220000 },
      {
        year: 1983,
        event: "Second child, Lisa Johnson, born.",
        wealth: 250000,
      },
      {
        year: 2005,
        event: "Refinances mortgage to support children’s university.",
        wealth: 330000,
      },
      {
        year: 2020,
        event: "Retires with modest savings and home ownership.",
        wealth: 500000,
      },
    ],
  },
  {
    name: "Mark Johnson",
    birthYear: 1980,
    wealth: 0,
    events: [
      { year: 1980, event: "Born into middle-class family.", wealth: 0 },
      {
        year: 1998,
        event: "Graduates high school, attends university with student loans.",
        wealth: -20000,
      },
      {
        year: 2002,
        event: "Graduates university, starts corporate job with student loans.",
        wealth: 0,
      },
      {
        year: 2005,
        event: "Starts saving for retirement and future home.",
        wealth: 30000,
      },
      {
        year: 2010,
        event: "Marries Anna Lee, buys home with mortgage.",
        wealth: 120000,
      },
      {
        year: 2012,
        event: "First child, Sophie Johnson, born.",
        wealth: 130000,
      },
      {
        year: 2015,
        event: "Promoted to managerial role, income increases.",
        wealth: 200000,
      },
      {
        year: 2018,
        event: "Second child, Daniel Johnson, born.",
        wealth: 220000,
      },
      {
        year: 2025,
        event: "Continues saving and investing for retirement.",
        wealth: 300000,
      },
    ],
  },
  {
    name: "Lisa Johnson",
    birthYear: 1983,
    wealth: 0,
    events: [
      { year: 1983, event: "Born into middle-class family.", wealth: 0 },
      {
        year: 2001,
        event: "Graduates high school, attends university with student loans.",
        wealth: -15000,
      },
      {
        year: 2005,
        event: "Graduates university, starts job in education, repaying loans.",
        wealth: 10000,
      },
      {
        year: 2010,
        event: "Saves modestly and starts investing small amounts.",
        wealth: 30000,
      },
      {
        year: 2013,
        event: "Marries David Carter, combined wealth increases.",
        wealth: 80000,
      },
      { year: 2015, event: "First child, Emily Carter, born.", wealth: 90000 },
      { year: 2018, event: "Second child, Tom Carter, born.", wealth: 100000 },
      {
        year: 2025,
        event: "Wealth grows modestly through savings and investments.",
        wealth: 150000,
      },
    ],
  },
  {
    name: "Anna Lee",
    birthYear: 1982,
    wealth: 50000,
    events: [
      { year: 1982, event: "Born into working-class family.", wealth: 50000 },
      {
        year: 2010,
        event: "Marries Mark Johnson, combined wealth increases.",
        wealth: 120000,
      },
      {
        year: 2012,
        event: "First child, Sophie Johnson, born.",
        wealth: 130000,
      },
      {
        year: 2018,
        event: "Second child, Daniel Johnson, born.",
        wealth: 220000,
      },
      {
        year: 2025,
        event: "Wealth grows through savings and home equity.",
        wealth: 300000,
      },
    ],
  },
  {
    name: "David Carter",
    birthYear: 1981,
    wealth: 30000,
    events: [
      { year: 1981, event: "Born into middle-class family.", wealth: 30000 },
      {
        year: 2013,
        event: "Marries Lisa Johnson, combined wealth increases.",
        wealth: 80000,
      },
      { year: 2015, event: "First child, Emily Carter, born.", wealth: 90000 },
      { year: 2018, event: "Second child, Tom Carter, born.", wealth: 100000 },
      {
        year: 2025,
        event: "Wealth grows modestly through savings and investments.",
        wealth: 150000,
      },
    ],
  },
  {
    name: "Sophie Johnson",
    birthYear: 2012,
    wealth: 0,
    events: [
      { year: 2012, event: "Born into middle-class family.", wealth: 0 },
      {
        year: 2025,
        event: "Starts high school, family wealth supports education.",
        wealth: 20000,
      },
    ],
  },
  {
    name: "Daniel Johnson",
    birthYear: 2018,
    wealth: 0,
    events: [
      { year: 2018, event: "Born into middle-class family.", wealth: 0 },
      {
        year: 2030,
        event: "Starts school, family wealth supports education.",
        wealth: 15000,
      },
    ],
  },
  {
    name: "Emily Carter",
    birthYear: 2015,
    wealth: 0,
    events: [
      { year: 2015, event: "Born into middle-class family.", wealth: 0 },
      {
        year: 2030,
        event: "Starts high school, family wealth supports education.",
        wealth: 10000,
      },
    ],
  },
  {
    name: "Tom Carter",
    birthYear: 2018,
    wealth: 0,
    events: [
      { year: 2018, event: "Born into middle-class family.", wealth: 0 },
      {
        year: 2035,
        event: "Starts school, family wealth supports education.",
        wealth: 15000,
      },
    ],
  },
];
