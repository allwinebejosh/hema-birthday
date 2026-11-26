// HEMA'S BIRTHDAY - interactions
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("birthdayMusic");
  const musicButton = document.getElementById("musicButton");
  const musicLabel = document.getElementById("musicLabel");

  // Background music
  if (musicButton && music && musicLabel) {
    musicButton.addEventListener("click", async () => {
      if (music.paused) {
        try {
          await music.play();
          musicLabel.textContent = "Music on";
          musicButton.setAttribute("aria-label", "Pause background music");
        } catch (error) {
          musicLabel.textContent = "Add birthday-song.mp3";
        }
      } else {
        music.pause();
        musicLabel.textContent = "Play music";
        musicButton.setAttribute("aria-label", "Play background music");
      }
    });
  }

  // Reveal animation is optional.
  // CSS keeps content visible even if JavaScript fails.
  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }

  // Interactive birthday letter
  const envelopeButton = document.getElementById("envelopeButton");
  const loveLetter = document.getElementById("loveLetter");
  const envelopeHint = document.getElementById("envelopeHint");

  if (envelopeButton && loveLetter && envelopeHint) {
    envelopeButton.addEventListener("click", () => {
      const isOpen =
        envelopeButton.getAttribute("aria-expanded") === "true";

      envelopeButton.setAttribute("aria-expanded", String(!isOpen));
      loveLetter.hidden = isOpen;

      envelopeHint.textContent = isOpen
        ? "Tap to open your letter"
        : "Your letter is open ♡";

      if (!isOpen) {
        setTimeout(() => {
          loveLetter.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }, 80);
      }
    });
  }

  // Birthday cake celebration
  const cakeButton = document.getElementById("cakeButton");
  const cakeHint = document.getElementById("cakeHint");
  const birthdayMessage = document.getElementById("birthdayMessage");

  if (cakeButton && cakeHint && birthdayMessage) {
    let celebrated = false;

    cakeButton.addEventListener("click", () => {
      if (celebrated) return;

      celebrated = true;

      cakeHint.textContent = "WISH MADE ♡";

      birthdayMessage.textContent =
        "May every beautiful wish you make find its way to you. Happy Birthday, Hema! ♡";

      const symbols = ["✦", "♡", "✧", "•", "✿"];
      const colors = [
        "#b97887",
        "#d7b98a",
        "#f0cbd0",
        "#fff4e8"
      ];

      // Create falling confetti
      for (let i = 0; i < 42; i++) {
        const piece = document.createElement("span");

        piece.className = "confetti-piece";

        piece.textContent =
          symbols[Math.floor(Math.random() * symbols.length)];

        piece.style.left = `${Math.random() * 100}vw`;
        piece.style.color = colors[i % colors.length];

        piece.style.fontSize =
          `${10 + Math.random() * 13}px`;

        piece.style.setProperty(
          "--drift",
          `${Math.random() * 140 - 70}px`
        );

        piece.style.animationDuration =
          `${2.3 + Math.random() * 2.2}s`;

        document.body.appendChild(piece);

        setTimeout(() => piece.remove(), 5000);
      }
    });
  }
});
