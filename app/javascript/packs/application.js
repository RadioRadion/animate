import "bootstrap";


// animations de la section 1 //
// gsap.from(".animate", {duration: 3, x: 100});

// const rotate = () => {
//   gsap.to(".animate", {duration: 3, rotation: 360, skewX: 45 });
// }

// const button = document.getElementById('test')
// button.addEventListener("click", rotate);
gsap.from(".animate", {duration: 3, x: 100});

setTimeout(function() {
  gsap.from("#fp-nav", {duration: 25, x: 300, opacity: 0, scale: 0.5});
  }, 0);

setTimeout(function() {
  gsap.from("#logo", {duration: 9, x: 300, opacity: 0, scale: 0.5});
  }, 3500);

//VIDEO CALLBACK
const video = document.querySelector('#section0 video');
const terminal = document.querySelector('#AboutDevTypeText');

document.addEventListener('keydown', e => {

if (e.key === "y" || e.key === "Y") {
  terminal.innerHTML = "GO ↓↓↓ ";
  }
if (e.key === "n" || e.key === "N") {
  video.pause();
  }
})

// Callback jquery pour set le temps du loader
$(document).ready(function() {
  // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3500);

});
