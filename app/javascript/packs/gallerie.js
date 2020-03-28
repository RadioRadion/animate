const bigpic1 = document.querySelector("#bigpic1 img");
const bigpic2 = document.querySelector("#bigpic2 img");
const bigpic3 = document.querySelector("#bigpic3 img");
const bigpic4 = document.querySelector("#bigpic4 img");
const bigpic5 = document.querySelector("#bigpic5 img");

const pics = document.querySelectorAll(".pic img");

pics.forEach(pic => pic.addEventListener("mouseover", (event) => {
  bigpic1.src = event.currentTarget.src;
  bigpic2.src = event.currentTarget.src;
  bigpic3.src = event.currentTarget.src;
  bigpic4.src = event.currentTarget.src;
  bigpic5.src = event.currentTarget.src;
}));

