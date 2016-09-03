(function() {
  var textWaveElements = document.getElementsByClassName('text-wave');

  for (var i = 0, length = textWaveElements.length; i < length; i++) {
    var el = textWaveElements[i];
    var text = el.outerText;

    el.innerHTML = null;
    spanWrapHelper(el, text);
  }

  function spanWrapHelper(el, text) {
    for(var i in text) {
      if(text[i] === " ") {
        var span = document.createElement('span');
        span.innerHTML = "&nbsp;";
        el.appendChild(span);
      } else {
        var span = document.createElement('span');
        span.innerHTML = text[i];
        el.appendChild(span);
      }
    }
  }
})();
