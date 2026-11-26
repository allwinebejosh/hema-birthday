// ======================================
// BACKGROUND MUSIC
// ======================================

const music = document.getElementById(“birthdayMusic”);

const musicButton = document.getElementById(“musicButton”);

const musicLabel = document.getElementById(“musicLabel”);

musicButton.addEventListener(“click”, async () => {

if (music.paused) {

try {
  await music.play();
  musicLabel.textContent = "Music on";
  musicButton.setAttribute(
    "aria-label",
    "Pause background music"
  );
} catch (error) {
  musicLabel.textContent = "Add birthday-song.mp3";
}

} else {

music.pause();
musicLabel.textContent = "Play music";
musicButton.setAttribute(
  "aria-label",
  "Play background music"
);

}

});

// ======================================
// SCROLL REVEAL ANIMATIONS
// ======================================

const revealItems = document.querySelectorAll(”.reveal”);

if (“IntersectionObserver” in window) {

const revealObserver = new IntersectionObserver(

(entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
},
{
  threshold: 0.12
}

);

revealItems.forEach(item => {

revealObserver.observe(item);

});

} else {

revealItems.forEach(item => {

item.classList.add("is-visible");

});

}

// ======================================
// INTERACTIVE LOVE LETTER
// ======================================

const envelopeButton =
document.getElementById(“envelopeButton”);

const loveLetter =
document.getElementById(“loveLetter”);

const envelopeHint =
document.getElementById(“envelopeHint”);

envelopeButton.addEventListener(“click”, () => {

const isOpen =
envelopeButton.getAttribute(“aria-expanded”) === “true”;

envelopeButton.setAttribute(
“aria-expanded”,
String(!isOpen)
);

loveLetter.hidden = isOpen;

envelopeHint.textContent = isOpen
? “Tap to open your letter”
: “Your letter is open ♡”;

if (!isOpen) {

setTimeout(() => {
  loveLetter.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}, 80);

}

});

// ======================================
// BIRTHDAY CAKE CELEBRATION
// ======================================

const cakeButton =
document.getElementById(“cakeButton”);

const cakeHint =
document.getElementById(“cakeHint”);

const birthdayMessage =
document.getElementById(“birthdayMessage”);

let celebrated = false;

cakeButton.addEventListener(“click”, () => {

if (celebrated) return;

celebrated = true;

cakeHint.textContent = “WISH MADE ♡”;

birthdayMessage.textContent =
“May every beautiful wish you make find its way to you. Happy Birthday, Hema! ♡”;

const symbols = [
“✦”,
“♡”,
“✧”,
“•”,
“✿”
];

for (let i = 0; i < 42; i++) {

const piece = document.createElement("span");
piece.className = "confetti-piece";
piece.textContent =
  symbols[Math.floor(Math.random() * symbols.length)];
piece.style.left =
  `${Math.random() * 100}vw`;
piece.style.color = [
  "#b97887",
  "#d7b98a",
  "#f0cbd0",
  "#fff4e8"
][i % 4];
piece.style.fontSize =
  `${10 + Math.random() * 13}px`;
piece.style.setProperty(
  "--drift",
  `${Math.random() * 140 - 70}px`
);
piece.style.animationDuration =
  `${2.3 + Math.random() * 2.2}s`;
document.body.appendChild(piece);
window.setTimeout(() => {
  piece.remove();
}, 5000);

}

});
