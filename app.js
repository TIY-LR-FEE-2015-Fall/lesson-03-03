(function() {
  var superName = document.querySelector('.super-name');
  var colorChangers = Array.from(document.querySelectorAll('.change-color'));
  var resetBtn = document.querySelector('.reset-color');
  var superFormName = document.querySelector('.super-form__name');

  var registerClick = (colorBtn) => {
    var changeSuperColor = () => {
      if (colorBtn.innerHTML === 'Reset') {
        superName.style.color = '';
      } else {
        superName.style.color = colorBtn.innerHTML;
      }
    };

    colorBtn.addEventListener('click', changeSuperColor);
  };

  colorChangers.forEach(registerClick);

  registerClick(resetBtn);

  superFormName.addEventListener('input', () => {
    superName.innerHTML = `My Name is: ${superFormName.value}`;
  });

  var makeMeBlink = document.querySelector('.blink');

  window.setInterval(() => {
    if (makeMeBlink.style.display === 'none') {
      makeMeBlink.style.display = '';
    } else {
      makeMeBlink.style.display = 'none';
    }
  }, 1000);
})();
