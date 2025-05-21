// "use strict"

// חסן עומר + עיסא לואבנה

const box = document.querySelector("#hoverBox");
const btn = document.querySelector("#clickBtn");
const pCounter = document.querySelector("#clickCount");

box.addEventListener("mouseover", () => {
  box.style.background = "orange";
});

box.addEventListener("mouseout", () => {
  box.style.background = "gray";
});

let count = 0;

btn.addEventListener("click", () => {
  count++;
  pCounter.textContent = count;
});
