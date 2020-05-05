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

// pics4.forEach(pic => pic.addEventListener("mouseover", (event) => {
//   bigpic4.src = event.currentTarget.src;
// }));

pics5.forEach(pic => pic.addEventListener("mouseover", (event) => {
  bigpic5.src = event.currentTarget.src;
}));

//settime pour la gallery4'
let count = 1;
const timeOut = () => {
  setTimeout(function() {
    bigpic4.src = `assets/photos/resize/nature/0${count}.jpg`;
    if (count === 8) {
      count = 1;
    } else {
        count += 1;
        console.log(count);
    }
    timeOut();
  }, 10000);
}

timeOut();

//gsap for bigpic4, Bezier don't work there
var snow = $("#bigpic4");
var tl = new TimelineMax({repeat:-1});
var bezierPath = [{ x: 5, y: 4 }, { x: -5, y: 8 }, { x: 5, y: 12 },{ x: -5, y: 16 }];

tl.set(snow, {autoAlpha:0});
tl.to(snow, 10, { bezier: {
            type: 'soft',
            values: bezierPath,
            smoothOrigin: true,
            timeResolution: 12
          }, ease: Linear.easeNone});
tl.to(snow, 5, {autoAlpha:1, repeat:1, yoyo:true, ease: Linear.easeNone}, 0);
