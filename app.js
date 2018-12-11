let showA = document.getElementsByClassName("show-A")[0];
let showB = document.getElementsByClassName("show-B")[0];
let showC = document.getElementsByClassName("show-C")[0];
let resetButton = document.getElementsByClassName("reset-button")[0];

let showAButton = document.createElement("button");
let showBButton = document.createElement("button");
let showCButton = document.createElement("button");
let reset = document.createElement("button");

let letterA = document.getElementsByClassName("letter-a")[0];
let letterB = document.getElementsByClassName("letter-b")[0];
let letterC = document.getElementsByClassName("letter-c")[0];

showAButton.textContent = "Show Letter A";
showBButton.textContent = "Show Letter B";
showCButton.textContent = "Show Letter C";
reset.textContent = "Reset";

showA.appendChild(showAButton);
showAButton.addEventListener("click", showLetterA);

showB.appendChild(showBButton);
showBButton.addEventListener("click", showLetterB);

showC.appendChild(showCButton);
showCButton.addEventListener("click", showLetterC);

resetButton.appendChild(reset);
reset.addEventListener("click", resetLetters);

function showLetterA() {
  if (letterA.style.display === "block") {
    letterA.style.display = "none";
  } else {
    letterA.style.display = "block";
  }
  if (letterB.style.display === "block") {
    letterB.style.display = "none";
  } else {
    letterB.style.display = "none";
  }
  if (letterC.style.display === "block") {
    letterC.style.display = "none";
  } else {
    letterC.style.display = "none";
  }
}

function showLetterB() {
  if (letterB.style.display === "block") {
    letterB.style.display = "none";
  } else {
    letterB.style.display = "block";
  }
  if (letterA.style.display === "block") {
    letterA.style.display = "none";
  } else {
    letterA.style.display = "none";
  }
  if (letterC.style.display === "block") {
    letterC.style.display = "none";
  } else {
    letterC.style.display = "none";
  }
}

function showLetterC() {
  if (letterC.style.display === "block") {
    letterC.style.display = "none";
  } else {
    letterC.style.display = "block";
  }
  if (letterA.style.display === "block") {
    letterA.style.display = "none";
  } else {
    letterA.style.display = "none";
  }
  if (letterB.style.display === "block") {
    letterB.style.display = "none";
  } else {
    letterB.style.display = "none";
  }
}

function resetLetters() {
  if (letterA.style.display === "block") {
    letterA.style.display = "none";
  } else {
    letterA.style.display = "none";
  }
  if (letterB.style.display === "block") {
    letterB.style.display = "none";
  } else {
    letterB.style.display = "none";
  }
  if (letterC.style.display === "block") {
    letterC.style.display = "none";
  } else {
    letterC.style.display = "none";
  }
}
