// Social Plans Over Time - Bar Chart
const socialPlansCtx = document
  .getElementById("socialPlansChart")
  .getContext("2d");
new Chart(socialPlansCtx, {
  type: "bar",
  data: {
    labels: ["20", "25", "30", "35", "40"],
    datasets: [
      {
        label: "Social Outings",
        data: [10, 8, 6, 2, 1],
        backgroundColor: [
          "#3498db",
          "#9b59b6",
          "#e74c3c",
          "#f39c12",
          "#2ecc71",
        ],
      },
    ],
  },
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: "Age",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Frequency of Social Outings",
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            if (context.dataIndex === 3) {
              return "At age 35, leaving the house becomes a rare event.";
            }
            return context.raw;
          },
        },
      },
    },
  },
});

// Bank Account Balance vs. Anxiety Level - Scatter Plot
const anxietyCtx = document.getElementById("anxietyChart").getContext("2d");
new Chart(anxietyCtx, {
  type: "scatter",
  data: {
    datasets: [
      {
        label: "Anxiety Level",
        data: [
          { x: 1, y: 2 },
          { x: 5, y: 4 },
          { x: 10, y: 7 },
          { x: 15, y: 10 },
          { x: 20, y: 15 },
          { x: 25, y: 18 },
          { x: 30, y: 20 },
        ],
        backgroundColor: "#e74c3c",
      },
    ],
  },
  options: {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Days of the Month",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Anxiety Level",
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            if (context.raw.x === 25) {
              return "Payday: Brief joy followed by immediate existential dread.";
            }
            return `Day ${context.raw.x}: Anxiety Level ${context.raw.y}`;
          },
        },
      },
    },
  },
});

// Hours of Sleep Desired vs. Actual Hours Slept - Dual Bar Chart
const sleepCtx = document.getElementById("sleepChart").getContext("2d");
new Chart(sleepCtx, {
  type: "bar",
  data: {
    labels: ["Sleep"],
    datasets: [
      {
        label: "Desired Hours",
        data: [8],
        backgroundColor: "#3498db",
      },
      {
        label: "Actual Hours",
        data: [4],
        backgroundColor: "#e74c3c",
      },
    ],
  },
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: "Category",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Hours of Sleep",
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            if (context.dataset.label === "Actual Hours") {
              return "Bedtime routine sabotaged by 2 AM Wikipedia deep dives.";
            }
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
  },
});

// Chores Completed vs. Time Spent Planning Them - Donut Chart
const choresCtx = document.getElementById("choresChart").getContext("2d");
new Chart(choresCtx, {
  type: "doughnut",
  data: {
    labels: ["Actual Chores", "Planning Chores", "Feeling Guilty"],
    datasets: [
      {
        data: [20, 40, 40],
        backgroundColor: ["#2ecc71", "#f39c12", "#e74c3c"],
      },
    ],
  },
  options: {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label;
            if (label === "Planning Chores") {
              return "Planning: Where all good intentions go to die.";
            }
            return label;
          },
        },
      },
    },
  },
});
