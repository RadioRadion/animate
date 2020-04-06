const bigpic1 = document.querySelector("#bigpic1 img");
const bigpic2 = document.querySelector("#bigpic2 img");
const bigpic3 = document.querySelector("#bigpic3 img");
const bigpic4 = document.querySelector("#bigpic4 img");
const bigpic5 = document.querySelector("#bigpic5 img");

const pics1 = document.querySelectorAll(".pic1 img");
const pics2 = document.querySelectorAll(".pic2 img");
const pics3 = document.querySelectorAll(".pic3 img");
const pics4 = document.querySelectorAll(".pic4 img");
const pics5 = document.querySelectorAll(".pic5 img");

pics1.forEach(pic => pic.addEventListener("mouseover", (event) => {
  bigpic1.src = event.currentTarget.src;
}));

pics2.forEach(pic => pic.addEventListener("mouseover", (event) => {
  bigpic2.src = event.currentTarget.src;
}));

pics3.forEach(pic => pic.addEventListener("mouseover", (event) => {
  bigpic3.src = event.currentTarget.src;
}));

pics4.forEach(pic => pic.addEventListener("mouseover", (event) => {
  bigpic4.src = event.currentTarget.src;
}));

pics5.forEach(pic => pic.addEventListener("mouseover", (event) => {
  bigpic5.src = event.currentTarget.src;
}));
