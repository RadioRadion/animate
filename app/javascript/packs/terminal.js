var data = [
  {
    AboutDevTypeText: "<span>AGONE STUDIO<br/><br/>↑ flash ↓ tv ← melodies → note</span><br/>"
  }
];

var allElements = document.getElementsByClassName("typeing");
  setTimeout(function(){
    for (var j = 0; j < allElements.length; j++) {
    var currentElementId = allElements[j].id;
    var currentElementIdContent = data[0][currentElementId];
    var element = document.getElementById(currentElementId);
    var devTypeText = currentElementIdContent;

    // type code
    var i = 0, isTag, text;
   (function type() {
      text = devTypeText.slice(0, ++i);
      if (text === devTypeText) return;
      element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
      var char = text.slice(-1);
      if (char === "<") isTag = true;
      if (char === ">") isTag = false;
      if (isTag) return type();
      setTimeout(type, 60);
    })();
  }
}, 10000);
