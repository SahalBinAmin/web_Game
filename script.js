let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];

let h2 = document.querySelector("h2");

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 200);
}

function levelUp() {
  level++;
  h2.innerText = `level ${level}`;

  let randInd = Math.floor(Math.random() * 3);
  let randColor = btns[randInd];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  btnFlash(randBtn);
}

function checkAns() {
  let idx = level - 1;
  if (userSeq[idx] === gameSeq[idx]) {
    console.log("same value");
  } else {
    console.log("wrong value");
  }
}

function btnPress() {
  console.log("Button was clicked");
  let btn = this;
  btnFlash(btn);
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  //   console.log(userColor);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
