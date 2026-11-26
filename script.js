document.addEventListener("DOMContentLoaded", () => {

  // ========================================
  // 1. PHOTO LOADING
  // ========================================

  const photos = document.querySelectorAll(
    ".photo-frame img, .gallery-photo img, .closing-photo img"
  );

  photos.forEach((img) => {

    function showPhoto() {
      if (img.naturalWidth > 0) {
        img.classList.add("image-loaded");
      }
    }

    img.addEventListener("load", showPhoto);

    img.addEventListener("error", () => {
      img.classList.remove("image-loaded");
      console.error("Photo failed to load:", img.src);
    });

    // Handle images already loaded by the browser
    if (img.complete) {
      showPhoto();
    }

  });


  // ========================================
  // 2. SCROLL REVEAL
  // ========================================

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

    revealItems.forEach((item) => {
      observer.observe(item);
    });

  } else {

    revealItems.forEach((item) => {
      item.classList.add("is-visible");
    });

  }


  // ========================================
  // 3. INTERACTIVE LOVE LETTER
  // ========================================

  const envelopeButton = document.getElementById("envelopeButton");
  const loveLetter = document.getElementById("loveLetter");
  const envelopeHint = document.getElementById("envelopeHint");

  if (envelopeButton && loveLetter) {

    envelopeButton.addEventListener("click", () => {

      const isOpening = loveLetter.hidden;

      loveLetter.hidden = !isOpening;

      envelopeButton.setAttribute(
        "aria-expanded",
        String(isOpening)
      );

      const envelopeIcon = envelopeButton.querySelector(".envelope-icon");
      const buttonText = envelopeButton.querySelector("span:last-child");

      if (isOpening) {

        envelopeIcon.textContent = "♡ H ♡";
        buttonText.textContent = "Close your letter";

        envelopeHint.textContent =
          "A little message, written just for you.";

        setTimeout(() => {

          loveLetter.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });

        }, 150);

      } else {

        envelopeIcon.textContent = "H ♡";
        buttonText.textContent = "Tap to open your letter";

        envelopeHint.textContent =
          "There's something I want you to read.";

      }

    });

  }


  // ========================================
  // 4. BIRTHDAY CAKE
  // ========================================

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

      cakeHint.textContent =
        "May all your beautiful wishes come true.";

      birthdayMessage.hidden = false;

      launchConfetti();

    });

  }


  // ========================================
  // 5. CONFETTI ANIMATION
  // ========================================

  function launchConfetti() {

    const symbols = ["♡", "✦", "✧", "♥"];

    const colors = [
      "#c77d83",
      "#d9a8a7",
      "#e9c8c2",
      "#9d515e",
      "#d5b18c"
    ];

    for (let i = 0; i < 65; i++) {

      const piece = document.createElement("span");

      piece.className = "confetti";

      piece.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

      piece.style.left = Math.random() * 100 + "vw";

      piece.style.color =
        colors[Math.floor(Math.random() * colors.length)];

      piece.style.fontSize =
        (12 + Math.random() * 15) + "px";

      piece.style.animationDuration =
        (2.5 + Math.random() * 2) + "s";

      piece.style.animationDelay =
        (Math.random() * 0.8) + "s";

      document.body.appendChild(piece);

      setTimeout(() => {
        piece.remove();
      }, 5500);

    }

  }

});
