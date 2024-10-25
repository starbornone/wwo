const messagesData = [
  {
    user: "Neo",
    text: "What is the Matrix? They can’t tell you. You have to see it for yourself.",
  },
  { user: "Trinity", text: "The Matrix isn't real, but the consequences are." },
  {
    user: "Morpheus",
    text: "Free your mind. I'm trying to show you the door.",
  },
  { user: "Cypher", text: "Why, oh why, didn't I take the blue pill?" },
  { user: "Oracle", text: "You already know the answer to that question." },
  {
    user: "AgentSmith",
    text: "You hear that, Mr. Anderson? That is the sound of inevitability.",
  },
];

function getRandomTimestamp() {
  const now = new Date();
  const pastTime =
    now.getTime() - Math.floor(Math.random() * 18 * 60 * 60 * 1000);
  const randomDate = new Date(pastTime);
  const hours = String(randomDate.getHours()).padStart(2, "0");
  const minutes = String(randomDate.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

const messages = messagesData.map((messageData) => ({
  timestamp: getRandomTimestamp(),
  user: messageData.user,
  text: messageData.text,
}));

function addMessage(timestamp, user, text) {
  const chatWindow = document.getElementById("chatWindow");

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");

  const timeSpan = document.createElement("span");
  timeSpan.classList.add("timestamp");
  timeSpan.textContent = `[${timestamp}] `;

  const userSpan = document.createElement("span");
  userSpan.classList.add("user");
  userSpan.textContent = `<${user}> `;

  const textSpan = document.createElement("span");
  textSpan.classList.add("text");
  textSpan.textContent = text;

  messageDiv.appendChild(timeSpan);
  messageDiv.appendChild(userSpan);
  messageDiv.appendChild(textSpan);

  chatWindow.appendChild(messageDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

messages.forEach((msg) => {
  addMessage(msg.timestamp, msg.user, msg.text);
});

const userList = document.getElementById("userList");
const userListNames = [
  "@AgentSmith",
  "+Oracle",
  "Neo",
  "Trinity",
  "Morpheus",
  "Cypher",
];
userList.innerHTML = "";
userListNames.forEach((user) => {
  const li = document.createElement("li");
  li.textContent = user;
  userList.appendChild(li);
});

const messageInput = document.getElementById("messageInput");

messageInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const text = messageInput.value.trim();
    if (text !== "") {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const timestamp = `${hours}:${minutes}`;
      addMessage(timestamp, "You", text);
      messageInput.value = "";
    }
  }
});
