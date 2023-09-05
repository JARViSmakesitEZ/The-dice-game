const heading = document.querySelector("h1");
const p1Img = document.querySelector("img.img1");
const p2Img = document.querySelector("img.img2");
heading.addEventListener("click", function () {
  const p1dice = Math.floor(Math.random() * 6) + 1;
  const p2dice = Math.floor(Math.random() * 6) + 1;
  p1Img.src = `images/dice${p1dice}.png`;
  p2Img.src = `images/dice${p2dice}.png`;
  if (p1dice > p2dice) {
    heading.textContent = "🚩Player 1 wins!";
  } else if (p2dice > p1dice) {
    heading.textContent = "Player 2 wins! 🚩";
  } else {
    heading.textContent = "Draw";
  }
});
