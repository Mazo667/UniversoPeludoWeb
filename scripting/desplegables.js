document.addEventListener('DOMContentLoaded', function () {
  var accordions = document.querySelectorAll('.accordion');

  accordions.forEach(function (accordion) {
    accordion.addEventListener('click', function () {
      // Alternar la clase 'active' en el acordeón
      this.classList.toggle('active');

      // Seleccionar el panel siguiente al acordeón
      var panel = this.nextElementSibling;

      // Alternar la expansión y colapso del panel
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
});