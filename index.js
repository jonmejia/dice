function getRandomNumber() {
  let randomNumber1 = Math.floor(Math.random() * 6);
  return randomNumber1;
}

function rollLeftDie() {
  dieValue = getRandomNumber();
  if (dieValue === 1) {
    document.getElementById("img1").setAttribute("src", "images/dice1.png");
  } else if (dieValue === 2) {
    document.getElementById("img1").setAttribute("src", "images/dice2.png");
  } else if (dieValue === 3) {
    document.getElementById("img1").setAttribute("src", "images/dice3.png");
  } else if (dieValue === 4) {
    document.getElementById("img1").setAttribute("src", "images/dice4.png");
  } else if (dieValue === 5) {
    document.getElementById("img1").setAttribute("src", "images/dice5.png");
  }
}
function rollRightDie() {
  dieValue = getRandomNumber();
  if (dieValue === 1) {
    document.getElementById("img2").setAttribute("src", "images/dice1.png");
  } else if (dieValue === 2) {
    document.getElementById("img2").setAttribute("src", "images/dice2.png");
  } else if (dieValue === 3) {
    document.getElementById("img2").setAttribute("src", "images/dice3.png");
  } else if (dieValue === 4) {
    document.getElementById("img2").setAttribute("src", "images/dice4.png");
  } else if (dieValue === 5) {
    document.getElementById("img2").setAttribute("src", "images/dice5.png");
  }
}
rollLeftDie();
rollRightDie();
