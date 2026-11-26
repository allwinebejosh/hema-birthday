const cakeButton = document.getElementById('cakeButton');
const finalMessage = document.getElementById('finalMessage');
cakeButton.addEventListener('click', () => {
  finalMessage.classList.remove('celebrate');
  void finalMessage.offsetWidth;
  finalMessage.classList.add('celebrate');
  for (let i = 0; i < 34; i++) {
    const bit = document.createElement('span');
    bit.textContent = ['✦', '♥', '✧', '•'][Math.floor(Math.random() * 4)];
    bit.className = 'confetti';
    bit.style.left = Math.random() * 100 + 'vw';
    bit.style.animationDuration = (2 + Math.random() * 2) + 's';
    document.body.appendChild(bit);
    setTimeout(() => bit.remove(), 4200);
  }
});
const music = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');
musicToggle.addEventListener('click', async (event) => {
  event.preventDefault();
  if (music.paused) {
    try { await music.play(); musicToggle.innerHTML = '♫ <span>Music on</span>'; }
    catch { musicToggle.innerHTML = '♫ <span>Add a song</span>'; }
  } else {
    music.pause(); musicToggle.innerHTML = '♫ <span>Music</span>';
  }
});
