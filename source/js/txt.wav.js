(function() {
  var textWaveElements = document.getElementsByClassName('txtwav');

  for (var i = 0, length = textWaveElements.length; i < length; i++) {
    var el = textWaveElements[i],
      text = el.textContent.trim();

    el.innerHTML = null;
    spanWrapHelper(el, text);
  }

  function spanWrapHelper(el, text) {
    for(var i in text) {
      var span = document.createElement('span');
      span.innerHTML = text[i] === " " ? "&nbsp;" : text[i];
      el.appendChild(span);
    }
  }
})();
