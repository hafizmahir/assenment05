
let heartCount = 0;
let copyCount = 0;
let coinCount = 100;

const heartCountEl = document.getElementById("heartCount");
const copyCountEl = document.getElementById("copyCount");
const coinCountEl = document.getElementById("coinCount");
const historyList = document.getElementById("historyList");
const clearBtn = document.getElementById("clearHistory");
function updateNavbar() {
  heartCountEl.textContent = `${heartCount} ❤️`;
  copyCountEl.textContent = `${copyCount} Copy`;
  coinCountEl.textContent = `${coinCount} 🪙`;
}
updateNavbar();
document.querySelectorAll(".heart-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    heartCount += 1;
    updateNavbar();
    this.textContent = "❤️";
    this.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(1.15)' }, { transform: 'scale(1)' }],
      { duration: 240, easing: 'ease-out' }
    );
  });
});
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    const card = this.closest(".card");
    const numberEl = card.querySelector(".number");
    if (!numberEl) return;

    const numberText = numberEl.textContent.trim();

    navigator.clipboard.writeText(numberText).then(() => {

      copyCount += 1;
      updateNavbar();
      alert(`Number copied: ${numberText}`);

      btn.animate(
        [{ transform: 'translateY(0)' }, { transform: 'translateY(-4px)' }, { transform: 'translateY(0)' }],
        { duration: 200 }
      );
    }).catch(() => {

      copyCount += 1;
      updateNavbar();
      alert(`Copy failed with clipboard API. Number: ${numberText}`);
    });
  });
});
