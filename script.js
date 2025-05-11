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
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;

  let randInd = Math.floor(Math.random() * 3) + 1;
  let randColor = btns[randInd];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  btnFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was<b> ${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
    }, 200);
    reset();
  }
}

function btnPress() {
  let btn = this;
  btnFlash(btn);
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
