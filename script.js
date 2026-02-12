document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const valentineContent = document.getElementById("valentineContent");

  // YES button
  yesBtn.addEventListener("click", () => {
    valentineContent.classList.remove("hidden");
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  });

  // NO button hover
  noBtn.addEventListener("mouseenter", () => {
    // Move and shrink
    const x = (Math.random() * 200 - 100) + "px";
    const y = (Math.random() * 100 - 50) + "px";
    noBtn.style.setProperty('--x', x);
    noBtn.style.setProperty('--y', y);
    noBtn.classList.add("shrink");

    // Create crying emoji
    const cry = document.createElement('div');
    cry.className = 'cry';
    cry.textContent = '😢';
    cry.style.left = Math.random() * window.innerWidth + 'px';
    cry.style.fontSize = 20 + Math.random() * 20 + 'px';
    document.body.appendChild(cry);
    setTimeout(() => cry.remove(), 4000);
  });

  // Floating hearts
  function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '💖';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = 3 + Math.random() * 2 + 's';
    heart.style.fontSize = 20 + Math.random() * 20 + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
  setInterval(createHeart, 500);
});
