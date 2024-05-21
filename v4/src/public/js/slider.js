window.onload = function() {
  const sliders = document.querySelectorAll('.slider-item');
  const slidersCaption = document.querySelectorAll('.slider-caption');
  let index = 0;

  function removeAll() {
      sliders.forEach(item => {
          item.classList.remove('active');
      });

      slidersCaption.forEach(item => {
          item.classList.remove('active');
      });
  }

  function addOne() {
      if (index >= sliders.length) {
          index = 0;
      }
      sliders[index].classList.add('active');
      slidersCaption[index].classList.add('active');
  }

  function plugNplay() {
      removeAll();
      addOne();
      index++;
  }

  // Inicia o slider imediatamente
  plugNplay();

  // Define um intervalo para continuar o ciclo do slider
  setInterval(plugNplay, 6000);
};
