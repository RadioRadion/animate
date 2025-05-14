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
  if (event.currentTarget.alt === "horizontal") {
    bigpic1.classList.add("horizontal");
  } else {
    bigpic1.classList.remove("horizontal");
  };
  bigpic1.src = event.currentTarget.src;
}));

// pics2.forEach(pic => pic.addEventListener("mouseover", (event) => {
//   bigpic2.src = event.currentTarget.src;
// }));

// pics3.forEach(pic => pic.addEventListener("mouseover", (event) => {
//   bigpic3.src = event.currentTarget.src;
// }));

// pics4.forEach(pic => pic.addEventListener("mouseover", (event) => {
//   bigpic4.src = event.currentTarget.src;
// }));

// pics5.forEach(pic => pic.addEventListener("mouseover", (event) => {
//   bigpic5.src = event.currentTarget.src;
// }));


//bigpic5 code there
let count5 = 1;
document.querySelectorAll(".myImg5").forEach(pic => pic.addEventListener("click", (event) => {
  if (count5 === 16) {
    document.getElementById("photo16").style.display = "none";
    count5 = 0
  };
  count5 += 1;
  if (count5 === 1 ) {
    ///On affiche toutes les photos à la suite mais qu'une à la fois avec la propriéré display)
    setTimeout(function() {
      document.getElementById("photo1").style.display = "inline";
      document.getElementById("photo8").style.display = "none";
    }, 1000);
    gsap.to("#bigpic5", {duration: 1, x: -100, opacity: 0});
    setTimeout(function() {
      // bigpic5.src = `assets/photos/resize/paysage/rural/01.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 2 ) {
    setTimeout(function() {
      document.getElementById("photo2").style.display = "inline";
      document.getElementById("photo1").style.display = "none";
    }, 1000);
    gsap.to("#bigpic5", {duration: 1, x: 100, opacity: 0});
    setTimeout(function() {
      // bigpic5.src = `assets/photos/resize/paysage/rural/02.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 3 ) {
    setTimeout(function() {
      document.getElementById("photo3").style.display = "inline";
      document.getElementById("photo2").style.display = "none";
    }, 1000);
    gsap.to("#bigpic5", {duration: 1, x: -100, opacity: 0});
    setTimeout(function() {
      // bigpic5.src = `assets/photos/resize/paysage/rural/03.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 4 ) {
    setTimeout(function() {
      document.getElementById("photo4").style.display = "inline";
      document.getElementById("photo3").style.display = "none";
    }, 1000);
    gsap.to("#bigpic5", {duration: 1, x: 100, opacity: 0});
    setTimeout(function() {
      // bigpic5.src = `assets/photos/resize/paysage/rural/04.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 5 ) {
    setTimeout(function() {
      document.getElementById("photo5").style.display = "inline";
      document.getElementById("photo4").style.display = "none";
    }, 1000);
    gsap.to("#bigpic5", {duration: 1, x: -100, opacity: 0});
    setTimeout(function() {
      // bigpic5.src = `assets/photos/resize/paysage/urbain/01.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 6 ) {
    setTimeout(function() {
      document.getElementById("photo6").style.display = "inline";
      document.getElementById("photo5").style.display = "none";
    }, 1000);
    gsap.to("#bigpic5", {duration: 1, x: 100, opacity: 0});
    setTimeout(function() {
      // bigpic5.src = `assets/photos/resize/paysage/urbain/02.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 7 ) {
    setTimeout(function() {
        document.getElementById("photo7").style.display = "inline";
        document.getElementById("photo6").style.display = "none";
    }, 1000);
    gsap.to("#bigpic5", {duration: 1, x: -100, opacity: 0});
    setTimeout(function() {
      // bigpic5.src = `assets/photos/resize/paysage/urbain/03.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 8 ) {
    setTimeout(function() {
      document.getElementById("photo8").style.display = "inline";
      document.getElementById("photo7").style.display = "none";
    }, 1000);
    gsap.to("#bigpic5", {duration: 1, x: 100, opacity: 0});
    setTimeout(function() {
      // bigpic5.src = `assets/photos/resize/paysage/urbain/04.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 9 ) {
    ///On affiche toutes les photos à la suite mais qu'une à la fois avec la propriéré display)
    setTimeout(function() {
      document.getElementById("photo9").style.display = "inline";
      document.getElementById("photo8").style.display = "none";
    }, 1000);
    gsap.to("#bigpic5", {duration: 1, x: -100, opacity: 0});
    setTimeout(function() {
      // bigpic5.src = `assets/photos/resize/paysage/rural/01.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 10 ) {
    setTimeout(function() {
      document.getElementById("photo10").style.display = "inline";
      document.getElementById("photo9").style.display = "none";
    }, 1000);
    gsap.to("#bigpic5", {duration: 1, x: 100, opacity: 0});
    setTimeout(function() {
      // bigpic5.src = `assets/photos/resize/paysage/rural/02.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 11 ) {
    setTimeout(function() {
      document.getElementById("photo11").style.display = "inline";
      document.getElementById("photo10").style.display = "none";
    }, 1000);
    gsap.to("#bigpic5", {duration: 1, x: -100, opacity: 0});
    setTimeout(function() {
      // bigpic5.src = `assets/photos/resize/paysage/rural/03.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 12 ) {
    setTimeout(function() {
      document.getElementById("photo12").style.display = "inline";
      document.getElementById("photo11").style.display = "none";
    }, 1000);
    gsap.to("#bigpic5", {duration: 1, x: 100, opacity: 0});
    setTimeout(function() {
      // bigpic5.src = `assets/photos/resize/paysage/rural/04.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 13 ) {
    setTimeout(function() {
      document.getElementById("photo13").style.display = "inline";
      document.getElementById("photo12").style.display = "none";
    }, 1000);
    gsap.to("#bigpic5", {duration: 1, x: -100, opacity: 0});
    setTimeout(function() {
      // bigpic5.src = `assets/photos/resize/paysage/urbain/01.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 14 ) {
    setTimeout(function() {
      document.getElementById("photo14").style.display = "inline";
      document.getElementById("photo13").style.display = "none";
    }, 1000);
    gsap.to("#bigpic5", {duration: 1, x: 100, opacity: 0});
    setTimeout(function() {
      // bigpic5.src = `assets/photos/resize/paysage/urbain/02.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 15 ) {
    setTimeout(function() {
        document.getElementById("photo15").style.display = "inline";
        document.getElementById("photo14").style.display = "none";
    }, 1000);
    gsap.to("#bigpic5", {duration: 1, x: -100, opacity: 0});
    setTimeout(function() {
      // bigpic5.src = `assets/photos/resize/paysage/urbain/03.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
  if (count5 === 16 ) {
    setTimeout(function() {
      document.getElementById("photo16").style.display = "inline";
      document.getElementById("photo15").style.display = "none";
    }, 1000);
    gsap.to("#bigpic5", {duration: 1, x: 100, opacity: 0});
    setTimeout(function() {
      // bigpic5.src = `assets/photos/resize/paysage/urbain/04.jpg`;
      gsap.to("#bigpic5", {duration: 1, x: 0, opacity: 1});
    }, 1000);
  };
}));

/////pour grandir l'aimge onclick
// bigpic5.addEventListener("click", (event) => {
//   bigpic5.style.height = "100vh";
//   setTimeout(function() {
//     bigpic5.style.height = "500px";
//   }, 3000);
// });

//////////MODALM GALLERY 1
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

////////////////////Code pour faire grossir les images de la gallery 2

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

////////////////////Code pour faire grossir les images de la gallery 3

var img3 = document.querySelectorAll(".myImg3");
img3.forEach(img => img.addEventListener("mouseover", (event) => {
  event.currentTarget.style.opacity = "0.4";
}));
img3.forEach(img => img.addEventListener("mouseleave", (event) => {
  event.currentTarget.style.opacity = "1";
}));
img3.forEach(img => img.addEventListener("click", (event) => {
  // modal2.style.display = "block";
  // modalImg2.src = event.currentTarget.src;
  // captionText2.innerHTML = event.currentTarget.alt;
  img.style.height = "100vh";
  setTimeout(function() {
    img.style.height = "500px";
  }, 3000);
}));

//////////////Code pour faire grossir images gallery 4

var modal4 = document.getElementById("myModal4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img4 = document.querySelectorAll(".myImg4");
var modalImg4 = document.getElementById("img04");
// var captionText2 = document.getElementById("caption2");
img4.forEach(img => img.addEventListener("click", (event) => {
  console.log(event.currentTarget.src);
  modal4.style.display = "block";
  modalImg4.src = event.currentTarget.src;
  // captionText.innerHTML = this.alt;
}));

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
console.log(span);
var span2 = document.getElementsByClassName("close")[1];
console.log(span2);

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal4.style.display = "none";
}


////////fermer les modals en appuyant sur la touche échap
document.addEventListener('keyup', logKey);
function logKey(e) {
  if (e.keyCode === 27) {
    modal.style.display = "none";
    modal4.style.display = "none";
    }
}
