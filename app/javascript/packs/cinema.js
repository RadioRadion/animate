const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
      this.classList.toggle('open');
    }

    function toggleActive(e) {
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

function blur() {
  this.classList.toggle('blurred');
}

function deblur() {
  this.classList.remove('blurred');
}

const plays = document.querySelectorAll('.play');
plays.forEach(play => play.addEventListener('mouseover', blur));
plays.forEach(play => play.addEventListener('mouseout', deblur));

