gameOrder = [];
userOrder = [];
let colors = ["red", "yellow", "green", "blue"];

let highest = 0;
let stage = 0;
let gameStatus = false;

let start = document.querySelector(".start");
let reset = document.querySelector(".reset");
let level = document.querySelector(".lscore");
let highscore = document.querySelector(".highscore");
let p = document.querySelector("p");
level.innerText="0"
highscore.innerText = "0";

start.addEventListener("click", function () {
  if (gameStatus == false) {
    p.innerText = "Let's Go !!!";
    start.remove();
    levelUp();
    gameStatus = true;
  }
});

function checkAns(idx) {
  if (userOrder[idx] == gameOrder[idx]) {
    if (userOrder.length == gameOrder.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    p.innerText = `Game Over !!! Your Score is ${stage}`;
    if (stage > highest) {
        highest=stage;
      highscore.innerText = `${stage}`;
    }

  }
}

function gameFlash(box) {
  box.classList.add("flash");
  setTimeout(function () {
    box.classList.remove("flash");
  }, 250);
}

function userFlash(box) {
  box.classList.add("flash");
  setTimeout(function () {
    box.classList.remove("flash");
  }, 250);
}

function levelUp() {
  userOrder = [];
  stage++;
  level.innerText = `${stage}`;
  let randIdx = Math.floor(Math.random() * 3);
  // let randIdx=3
  let randColor = colors[randIdx];
  let box = document.querySelector(`.${randColor}`);
  gameOrder.push(randColor);
  gameFlash(box);
}

function boxtap() {
  userFlash(this);
  let btn = this;
  let userColor = btn.getAttribute("id");
  userOrder.push(userColor);
  checkAns(userOrder.length - 1);
}

let boxes = document.querySelectorAll(".box");
for (box of boxes) {
  box.addEventListener("click", boxtap);
}

reset.addEventListener("click", function () {
  gameStatus = false;
  gameOrder = [];
  userOrder = [];
  stage = 0;
  level.innerText = "0";
  p.innerText = "Press Start to Begin!";
  document.body.appendChild(start);
  console.log("reset");
});
