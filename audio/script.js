const trackInfo = document.getElementById("track-info");
const playPauseBtn = document.getElementById("play-btn");
const stopBtn = document.getElementById("stop-btn");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");
const volumeMinus = document.getElementById("volume-minus");
const volumePlus = document.getElementById("volume-plus");
const volumeBar = document.getElementById("volume-bar");

const songs = [
  {
    name: "Aaliyah - Are You That Somebody?",
    file: "./audio/Aaliyah-AreYouThatSomebody.mp3",
  },
  {
    name: "Blaque - Bring It All to Me",
    file: "./audio/Blaque-BringItAllToMe.mp3",
  },
  {
    name: "TLC - No Scrubs",
    file: "./audio/TLC-NoScrubs.mp3",
  },
  {
    name: "3LW - No More (Baby I'ma Do Right)",
    file: "./audio/3LW-NoMore(BabyImaDoRight).mp3",
  },
  {
    name: "Mary J Blige - Family Affair",
    file: "./audio/MaryJBlige-FamilyAffair.mp3",
  },
  {
    name: "Destiny's Child - Say My Name",
    file: "./audio/DestinysChild-SayMyName.mp3",
  },
  {
    name: "Brandy & Monica - The Boy Is Mine",
    file: "./audio/Brandy&Monica-TheBoyIsMine.mp3",
  },
];

let currentTrackIndex = 0;
let audioPlayer = new Audio(songs[currentTrackIndex].file);
let marqueeTimeout;

function updateTrackInfo() {
  trackInfo.textContent = `Playing: ${songs[currentTrackIndex].name}`;
}

function playTrack() {
  if (audioPlayer.src !== songs[currentTrackIndex].file) {
    audioPlayer.src = songs[currentTrackIndex].file;
  }
  audioPlayer.play();
  updateTrackInfo();
  clearTimeout(marqueeTimeout);
  marqueeTimeout = setTimeout(() => {
    trackInfo.classList.add("marquee");
  }, 3000);
}

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % songs.length;
  playTrack();
}

function previousTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + songs.length) % songs.length;
  playTrack();
}

playPauseBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    trackInfo.textContent = `Playing: ${songs[currentTrackIndex].name}`;
    clearTimeout(marqueeTimeout);
    marqueeTimeout = setTimeout(() => {
      trackInfo.classList.add("marquee");
    }, 3000);
  } else {
    audioPlayer.pause();
    trackInfo.textContent = `Paused: ${songs[currentTrackIndex].name}`;
    clearTimeout(marqueeTimeout);
    trackInfo.classList.remove("marquee");
  }
});

stopBtn.addEventListener("click", () => {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  trackInfo.textContent = `Stopped: ${songs[currentTrackIndex].name}`;
  clearTimeout(marqueeTimeout);
  trackInfo.classList.remove("marquee");
});

backBtn.addEventListener("click", () => {
  previousTrack();
});

nextBtn.addEventListener("click", () => {
  nextTrack();
});

audioPlayer.addEventListener("ended", () => {
  nextTrack();
});

volumeMinus.addEventListener("click", () => {
  if (audioPlayer.volume > 0) {
    audioPlayer.volume = Math.max(0, audioPlayer.volume - 0.1);
    updateVolumeBar();
  }
});

volumePlus.addEventListener("click", () => {
  if (audioPlayer.volume < 1) {
    audioPlayer.volume = Math.min(1, audioPlayer.volume + 0.1);
    updateVolumeBar();
  }
});

function updateVolumeBar() {
  volumeBar.style.width = `${audioPlayer.volume * 100}%`;
}

updateVolumeBar();
