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


//bigpic5 code there
let count5 = 1;
bigpic5.addEventListener("mouseover", (event) => {
  if (count5 === 8) { count5 = 0 };
  count5 += 1;
  if (count5 === 1 ) {
    gsap.to("#bigpic5", {duration: 1, x: -100, opacity: 0});
    setTimeout(function() {
      bigpic5.src = `assets/photos/resize/paysage/rural/01.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 2 ) {
    gsap.to("#bigpic5", {duration: 1, x: 100, opacity: 0});
    setTimeout(function() {
      bigpic5.src = `assets/photos/resize/paysage/rural/02.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 3 ) {
    gsap.to("#bigpic5", {duration: 1, x: -100, opacity: 0});
    setTimeout(function() {
      bigpic5.src = `assets/photos/resize/paysage/rural/03.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 4 ) {
    gsap.to("#bigpic5", {duration: 1, x: 100, opacity: 0});
    setTimeout(function() {
      bigpic5.src = `assets/photos/resize/paysage/rural/04.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 5 ) {
    gsap.to("#bigpic5", {duration: 1, x: -100, opacity: 0});
    setTimeout(function() {
      bigpic5.src = `assets/photos/resize/paysage/urbain/01.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 6 ) {
    gsap.to("#bigpic5", {duration: 1, x: 100, opacity: 0});
    setTimeout(function() {
      bigpic5.src = `assets/photos/resize/paysage/urbain/02.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 7 ) {
    gsap.to("#bigpic5", {duration: 1, x: -100, opacity: 0});
    setTimeout(function() {
      bigpic5.src = `assets/photos/resize/paysage/urbain/03.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 8 ) {
    gsap.to("#bigpic5", {duration: 1, x: 100, opacity: 0});
    setTimeout(function() {
      bigpic5.src = `assets/photos/resize/paysage/urbain/04.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
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
  // captionText.innerHTML = this.alt;
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

var img3 = document.querySelectorAll(".myImg3");
img3.forEach(img => img.addEventListener("click", (event) => {
  // modal2.style.display = "block";
  // modalImg2.src = event.currentTarget.src;
  // captionText2.innerHTML = event.currentTarget.alt;
  img.style.height = "100vh";
  setTimeout(function() {
    img.style.height = "500px";
  }, 3000);
}));

bigpic5.addEventListener("click", (event) => {
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
    modal.style.display = "none";
    // modal2.style.display = "none";
    }
}
