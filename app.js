(function() {
  var superName = document.querySelector('.super-name');
  var colorChangers = Array.from(document.querySelectorAll('.change-color'));
  var resetBtn = document.querySelector('.reset-color');

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
})();
