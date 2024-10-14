const conversation = document.getElementById("conversation");
const sendBtn = document.getElementById("send-btn");
const messageInput = document.getElementById("message");

const userMessages = [
  "./images/610d23bb63cac.jpeg",
  "I know, right. Anyway, how have you been?",
  "Not too bad. I haven’t been up to much other than work. What about you?",
  "Oh, cool! What are you working on?",
  "That sounds awesome!",
  "I’ve been trying to get more organized lately but it’s been kinda slow.",
  "Anyway, let’s catch up again soon!",
  "Cya!",
];

const friendMessages = [
  "Hahahaha so true!",
  "I’m doing well, how about you?",
  "Just working on a side project. Or trying to.",
  "It’s a website for my portfolio.",
  "Aww, thanks.",
  "I totally get that. It’s hard to stay motivated.",
  "Definitely! Anyway, I gotta run. Nice chatting!",
];

const overthinkingResponses = [
  "Well, that was one way to start a conversation.",
  "Maybe I should’ve been less obvious.",
  "I sound so boring...",
  "Why did I say 'cool'? That’s so basic.",
  "Oh no, did that sound sarcastic?",
  "Organized? They must think I’m a total mess.",
  "Was that too abrupt?",
  "What a disaster. They won’t want to see me.",
];

const userImages = ["./images/610d23bb63cac.jpeg", "", "", "", ""];

const friendImages = ["", "", "", "", ""];

let messageIndex = 0;

messageInput.value = userMessages[messageIndex];

sendBtn.addEventListener("click", sendMessage);

function sendMessage() {
  const userMessage = userMessages[messageIndex];
  const userImage = userImages[messageIndex];

  sendBtn.disabled = true;

  addMessageToChat("You: " + userMessage, "user-message", userImage);

  setTimeout(() => {
    addOverthinkingToChat();
  }, 500);

  setTimeout(() => {
    replyFromFriend();
    messageIndex++;

    if (messageIndex < userMessages.length) {
      messageInput.value = userMessages[messageIndex];
      sendBtn.disabled = false;
    } else {
      messageInput.value = "No more messages";
      messageInput.disabled = true;
      sendBtn.disabled = true;
    }
  }, 1500);
}

function addMessageToChat(message, messageClass, imageUrl = "") {
  const newMessage = document.createElement("div");
  newMessage.classList.add("message", messageClass);

  if (imageUrl) {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Image";
    img.classList.add("message-image");
    newMessage.appendChild(img);
  } else {
    const text = document.createElement("p");
    text.textContent = message;
    newMessage.appendChild(text);
  }

  conversation.appendChild(newMessage);
  conversation.scrollTop = conversation.scrollHeight;
}

function replyFromFriend() {
  const friendMessage = friendMessages[messageIndex];
  const friendImage = friendImages[messageIndex];

  if (messageIndex < friendMessages.length) {
    addMessageToChat("Friend: " + friendMessage, "friend-message", friendImage);
  }
}

function addOverthinkingToChat() {
  if (messageIndex < overthinkingResponses.length) {
    const overthinkingDiv = document.createElement("div");
    overthinkingDiv.classList.add("inner-monologue");

    const overthinkingText = overthinkingResponses[messageIndex];

    for (let char of overthinkingText) {
      const span = document.createElement("span");
      if (char === " ") {
        span.innerHTML = "&nbsp;";
      } else {
        span.textContent = char;
      }

      span.classList.add("jitter-character");

      const randomDelay = (Math.random() * 0.3).toFixed(2);
      const randomDuration = (Math.random() * 0.3 + 0.2).toFixed(2);
      span.style.animationDelay = `${randomDelay}s`;
      span.style.animationDuration = `${randomDuration}s`;

      overthinkingDiv.appendChild(span);
    }

    conversation.appendChild(overthinkingDiv);
    conversation.scrollTop = conversation.scrollHeight;
  }
}
