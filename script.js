let xp = 0;

function updateDisplay() {
  document.getElementById("xpDisplay").innerText = "XP: " + xp;
}

function increaseXP() {
  xp++;
  updateDisplay();

  const sword = document.getElementById("swordPlus");
  sword.classList.add("strike");
  setTimeout(() => {
    sword.classList.remove("strike");
  }, 300);
}

function decreaseXP() {
  if (xp > 0) {
    xp--;
    updateDisplay();

    const sword = document.getElementById("swordMinus");
    sword.classList.add("strike");
    setTimeout(() => {
      sword.classList.remove("strike");
    }, 300);
  }
}
