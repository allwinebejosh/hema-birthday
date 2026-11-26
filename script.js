document.addEventListener("DOMContentLoaded", () => {

  // PHOTO PLACEHOLDERS
  document.querySelectorAll("img").forEach((img) => {
    const markLoaded = () => {
      if (img.naturalWidth > 0) {
        img.classList.add("image-loaded");
      }
    };

    img.addEventListener("load", markLoaded);
    img.addEventListener("error", () => {
      img.classList.remove("image-loaded");
    });

    if (img.complete) {
      markLoaded();
    }
  });

  // BACKGROUND MUSIC
  const music = document.getElementById("birthdayMusic");
  const musicButton = document.getElementById("musicButton");
  const musicLabel = document.getElementById("musicLabel");

  if (music && musicButton) {
    musicButton.addEventListener("click", async () => {
      if (music.paused) {
        try {
          await music.play();
          musicLabel.textContent = "Pause music";
        } catch (error) {
          musicLabel.textContent = "Music unavailable";
        }
      } else {
        music.pause();
        musicLabel.textContent = "Play music";
      }
    });
  }

  // SCROLL REVEAL
  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08
    });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  // INTERACTIVE LOVE LETTER
  const envelopeButton = document.getElementById("envelopeButton");
  const loveLetter = document.getElementById("loveLetter");
  const envelopeHint = document.getElementById("envelopeHint");

  if (envelopeButton && loveLetter) {
    envelopeButton.addEventListener("click", () => {
      const isOpening = loveLetter.hidden;

      loveLetter.hidden = !isOpening;
      envelopeButton.setAttribute("aria-expanded", String(isOpening));

      envelopeButton.querySelector(".envelope-icon").textContent =
        isOpening ? "♡ H ♡" : "H ♡";

      envelopeButton.querySelector("span:last-child").textContent =
        isOpening ? "Close your letter" : "Tap to open your letter";

      envelopeHint.textContent = isOpening
        ? "A little message, written just for you."
        : "There's something I want you to read.";

      if (isOpening) {
        setTimeout(() => {
          loveLetter.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }, 150);
      }
    });
  }

  // BIRTHDAY CAKE AND CONFETTI
  const cakeButton = document.getElementById("cakeButton");
  const cakeHint = document.getElementById("cakeHint");
  const birthdayMessage = document.getElementById("birthdayMessage");

  let cakeClicked = false;

  if (cakeButton) {
    cakeButton.addEventListener("click", () => {
      if (cakeClicked) return;
      cakeClicked = true;

      const candles = cakeButton.querySelector(".cake-candles");
      const action = cakeButton.querySelector(".cake-action");

      candles.textContent = "✨ ✨ ✨";
      action.textContent = "YOUR WISH IS MADE ♡";

      cakeHint.textContent = "May all your beautiful wishes come true.";
      birthdayMessage.hidden = false;

      launchConfetti();
    });
  }

  function launchConfetti() {
    const symbols = ["♡", "✦", "✧", "♥"];
    const colors = ["#c77d83", "#d9a8a7", "#e9c8c2", "#9d515e", "#d5b18c"];

    for (let i = 0; i < 65; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti";
      piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];

      piece.style.left = Math.random() * 100 + "vw";
      piece.style.color = colors[Math.floor(Math.random() * colors.length)];
      piece.style.fontSize = (12 + Math.random() * 15) + "px";
      piece.style.animationDuration = (2.5 + Math.random() * 2) + "s";
      piece.style.animationDelay = (Math.random() * 0.8) + "s";

      document.body.appendChild(piece);

      setTimeout(() => {
        piece.remove();
      }, 5500);
    }
  }

});
