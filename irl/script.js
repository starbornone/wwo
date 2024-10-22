const apiKey = "917201b7969a564bcdf9878b820c4221";
const city = "Sydney";

const photoData = {
  rain: {
    url: "https://unsplash.com/photos/a-wet-window-with-a-traffic-light-on-it-JgDUVGAXsso",
    src: "https://images.unsplash.com/photo-1511634829096-045a111727eb?q=80&w=1334&auto=format&fit=crop",
    author: "C. G.",
    profile: "https://unsplash.com/@cg",
  },
  clear: {
    url: "https://unsplash.com/photos/a-group-of-people-standing-on-top-of-a-sandy-beach-E_xeD3saOLU",
    src: "https://images.unsplash.com/photo-1647580961593-6d3ccebd7924?q=80&w=1374&auto=format&fit=crop",
    author: "Larry Waters",
    profile: "https://unsplash.com/@waterswheel",
  },
  clouds: {
    url: "https://unsplash.com/photos/sea-of-clouds-LtWFFVi1RXQ",
    src: "https://images.unsplash.com/photo-1496450681664-3df85efbd29f?q=80&w=1470&auto=format&fit=crop",
    author: "Łukasz Łada",
    profile: "https://unsplash.com/@lukaszlada",
  },
  default: {
    url: "https://unsplash.com/photos/two-flying-birds-on-sky-at-daytime-bTLwt0PyIf0",
    src: "https://images.unsplash.com/photo-1489755730820-cd90f9a49424?q=80&w=1374&auto=format&fit=crop",
    author: "Chris",
    profile: "https://unsplash.com/@chris23",
  },
  witchy: {
    url: "https://unsplash.com/photos/person-holding-cattle-skull-surrounded-by-squash-and-candles-y_dCjaRWthY",
    src: "https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "freestocks",
    profile: "https://unsplash.com/@freestocks",
  },
};

const attribution = document.getElementById("photo-attribution");
const locationWeatherElement = document.getElementById("location-weather");

function getWeatherPhoto(weather) {
  const currentHour = new Date().getHours();

  if (currentHour === 0 || currentHour === 3) {
    return photoData.witchy;
  }

  if (weather.includes("rain")) return photoData.rain;
  if (weather.includes("clear")) return photoData.clear;
  if (weather.includes("clouds")) return photoData.clouds;

  return photoData.default;
}

async function fetchWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  if (!response.ok) {
    console.error("Error fetching weather data:", response.statusText);
    return;
  }

  const data = await response.json();
  const weather = data.weather[0].main.toLowerCase();
  const temperature = data.main.temp;
  const location = data.name;

  const photo = getWeatherPhoto(weather);

  document.body.style.backgroundImage = `url(${photo.src})`;
  locationWeatherElement.innerText = `${location}, ${temperature}°C - ${
    weather.charAt(0).toUpperCase() + weather.slice(1)
  }`;
  attribution.innerHTML = `Photo by <a href="${photo.profile}" target="_blank">${photo.author}</a> on <a href="${photo.url}" target="_blank">Unsplash</a>`;
}

window.onload = fetchWeather;
