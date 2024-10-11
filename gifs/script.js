const tasks = [
  {
    task: "Listening to the meeting",
    gif: "https://i.giphy.com/BBkKEBJkmFbTG.webp",
  },
  {
    task: "Writing that important email",
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmhpam9iemZ3a3g3eWt5dXM0czBoM2Z1Ym5mcnRpdmIzdDFpdnhyMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13Mh8TeB1r2nEQ/200.webp",
  },
  {
    task: "Cooking dinner",
    gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjdsNTlmaHNxaWlzZ3pqdmdwNDJ1eTNpY3lqZ282azdnOXk3OWJscyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7aCQ78C714ENK9YQ/giphy.webp",
  },
  {
    task: "Paying attention on a Zoom call",
    gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGZwOGw1cHNkemR6c2IyNGNvYTRmMDVoMm96N3NpZjBjcXNtMm50NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ly69OqtnnQg2k/giphy.webp",
  },
  {
    task: "Cleaning the apartment",
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWlvN2xvYmN1MGpxdmFoZXFzZHlvemltZjJheGNqY29sNm5rZ3BhaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uYvoragxDkIM0/giphy.webp",
  },
  {
    task: "Planning out the day",
    gif: "https://i.giphy.com/nmwnEm0TET2xi.webp",
  },
  {
    task: "Organizing important files",
    gif: "https://i.giphy.com/8p8E1sylIARDW.webp",
  },
  {
    task: "Shopping for groceries",
    gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWlsaTBsa202eWRtdGtraWF2ang2dXEyazFrM3c2eHdpbjlmNWk2NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EcGS6pgF6ta2QBye1W/giphy.webp",
  },
  {
    task: "Having a productive day at work",
    gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXlnb29ocmRhbWhqd2VnOWV5MTNhMzNnOXp1NTh6ejZyZTR5dG8yeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1gR4aiU6sU89sS7ddI/giphy.webp",
  },
  {
    task: "Cleaning the kitchen",
    gif: "https://i.giphy.com/fAhOtxIzrTxyE.webp",
  },
  {
    task: "Responding to messages",
    gif: "https://i.giphy.com/3o7ZetIsjtbkgNE1I4.webp",
  },
  {
    task: "Studying or learning something new",
    gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3RvMXhueGJuOXk2NzlvdXlkaXkzcjY2Y3J4ZXFodWJwNHByY3Y5dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VDMJiC5jMZuZ9Xbp6e/giphy.webp",
  },
  {
    task: "Filing taxes or paperwork",
    gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3FwMmk2cmRlNnk3ZnBpMG1kZjRnNWJydG5nOTFtb3RmNzJtcHM5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0VwKnH9W96meBS9NAv/giphy.webp",
  },
  {
    task: "Getting ready for an important event",
    gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExczdxdHJmd3k5Y3pjenh6MGhpNDkxOHZzdWpuNGh5MWw5bjNyZnFqeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cCXGqogJEju2I9tBlY/giphy.webp",
  },
  {
    task: "Cooking a healthy meal",
    gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnp5b2lzYnRtb3Rvamprcnk4eDA5cG0yMGV1bG5mNzN2dGo1OXo1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZFzpCzdWotBIdiYoLA/giphy.webp",
  },
];

let currentIndex = 0;

document.getElementById("next-button").addEventListener("click", () => {
  currentIndex = currentIndex + 1;
  if (currentIndex < tasks.length) {
    document.getElementById("task").innerText = tasks[currentIndex].task;
    document.getElementById("brain-gif").src = tasks[currentIndex].gif;
  } else {
    document.getElementById("expectation").innerText = "Finally...";
    document.getElementById("task").innerText =
      "Starting a project 10 minutes before the deadline";
    document.getElementById("reality").innerText = "But it looks like...";
    document.getElementById("brain-gif").src =
      "https://i.giphy.com/dbtDDSvWErdf2.webp";
  }
});
