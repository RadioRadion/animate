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
let count = 2;
const timeOut = () => {
  setTimeout(function() {
    bigpic4.src = `assets/photos/resize/nature/0${count}.jpg`;
    if (count === 8) {
      count = 1;
    } else {
        count += 1;
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

//bigpic5 code there
let count5 = 1;
bigpic5.addEventListener("mouseover", (event) => {
  if (count5 === 8) { count5 = 0 };
  count5 += 1;
  if (count5 === 1 ) {
    gsap.to("#bigpic5", {duration: 2, x: -100, opacity: 0});
    setTimeout(function() {
      bigpic5.src = `assets/photos/resize/paysage/rural/01.jpg`;
      gsap.to("#bigpic5", {duration: 2, x: 0, opacity: 1});
    }, 2000);
  };
  if (count5 === 2 ) {
    gsap.to("#bigpic5", {duration: 2, x: 100, opacity: 0});
    setTimeout(function() {
      bigpic5.src = `assets/photos/resize/paysage/rural/02.jpg`;
      gsap.to("#bigpic5", {duration: 2, x: 0, opacity: 1});
    }, 2000);
  };
  if (count5 === 3 ) {
    gsap.to("#bigpic5", {duration: 2, x: -100, opacity: 0});
    setTimeout(function() {
      bigpic5.src = `assets/photos/resize/paysage/rural/03.jpg`;
      gsap.to("#bigpic5", {duration: 2, x: 0, opacity: 1});
    }, 2000);
  };
  if (count5 === 4 ) {
    gsap.to("#bigpic5", {duration: 2, x: 100, opacity: 0});
    setTimeout(function() {
      bigpic5.src = `assets/photos/resize/paysage/rural/04.jpg`;
      gsap.to("#bigpic5", {duration: 2, x: 0, opacity: 1});
    }, 2000);
  };
  if (count5 === 5 ) {
    gsap.to("#bigpic5", {duration: 2, x: -100, opacity: 0});
    setTimeout(function() {
      bigpic5.src = `assets/photos/resize/paysage/urbain/01.jpg`;
      gsap.to("#bigpic5", {duration: 2, x: 0, opacity: 1});
    }, 2000);
  };
  if (count5 === 6 ) {
    gsap.to("#bigpic5", {duration: 2, x: 100, opacity: 0});
    setTimeout(function() {
      bigpic5.src = `assets/photos/resize/paysage/urbain/02.jpg`;
      gsap.to("#bigpic5", {duration: 2, x: 0, opacity: 1});
    }, 2000);
  };
  if (count5 === 7 ) {
    gsap.to("#bigpic5", {duration: 2, x: -100, opacity: 0});
    setTimeout(function() {
      bigpic5.src = `assets/photos/resize/paysage/urbain/03.jpg`;
      gsap.to("#bigpic5", {duration: 2, x: 0, opacity: 1});
    }, 2000);
  };
  if (count5 === 8 ) {
    gsap.to("#bigpic5", {duration: 2, x: 100, opacity: 0});
    setTimeout(function() {
      bigpic5.src = `assets/photos/resize/paysage/urbain/04.jpg`;
      gsap.to("#bigpic5", {duration: 2, x: 0, opacity: 1});
    }, 2000);
  };
});

//full screen img onclick with modals
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.querySelectorAll(".myImg2");
// var modalImg2 = document.getElementById("img02");
// var captionText2 = document.getElementById("caption2");
img2.forEach(img => img.addEventListener("mouseover", (event) => {
  // modal2.style.display = "block";
  // modalImg2.src = event.currentTarget.src;
  // captionText2.innerHTML = event.currentTarget.alt;
  img.style.height = "100vh";
  setTimeout(function() {
    img.style.height = "500px";
  }, 3000);
}));

bigpic5.addEventListener("click", (event) => {
  console.log(event);
  bigpic5.style.height = "100vh";
  setTimeout(function() {
    bigpic5.style.height = "500px";
  }, 3000);
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// var span2 = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// span2.onclick = function() {
//   modal.style.display = "none";
// }

document.addEventListener('keyup', logKey);
function logKey(e) {
  if (e.keyCode === 27) {
    console.log("ok");
    modal.style.display = "none";
    // modal2.style.display = "none";
    }
}
