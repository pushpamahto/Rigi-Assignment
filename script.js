// JavaScript for Lit Vibes Webpage

// Scroll-based animations or visibility toggles can go here

// Example: Smooth scroll to download section
const downloadButtons = document.querySelectorAll(".download-button");

if (downloadButtons) {
  downloadButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById("download-section");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// Optional slider logic for featured content cards
let currentIndex = 0;
const cards = document.querySelectorAll(".slider-card");
const totalCards = cards.length;

function showCards() {
  cards.forEach((card, index) => {
    card.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
}

// Auto-play feature
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalCards;
  showCards();
}, 3000);