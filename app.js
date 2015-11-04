(function() {
  var superName = document.querySelector('.super-name');
  var colorChangers = Array.from(document.querySelectorAll('.change-color'));

  var registerClick = (colorBtn) => {
    var changeSuperColor = () => {
      superName.style.color = colorBtn.innerHTML;
    };

    colorBtn.addEventListener('click', changeSuperColor);
  };

  colorChangers.forEach(registerClick);
})();
