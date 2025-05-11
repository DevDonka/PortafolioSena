document.addEventListener('DOMContentLoaded', function() {
  const proyectoCards = document.querySelectorAll('.proyecto-card');
  const proyectoImages = document.querySelectorAll('.proyecto-image');
  const botonesDetalle = document.querySelectorAll('.button.secondary');

  // Función para añadir la clase 'active' al hacer scroll (para la animación slideInLeft)
  function checkScroll() {
      proyectoCards.forEach(card => {
          const cardTop = card.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (cardTop < windowHeight - 100 && !card.classList.contains('active')) {
              card.classList.add('active');
              card.classList.add('scroll-reveal');
          }
      });
  }

  // Animación sutil al hacer hover sobre la imagen del proyecto
  proyectoImages.forEach(imageContainer => {
      const img = imageContainer.querySelector('img');
      imageContainer.addEventListener('mouseenter', () => {
          img.style.transform = 'scale(1.08)';
          img.style.filter = 'brightness(1.1)';
      });
      imageContainer.addEventListener('mouseleave', () => {
          img.style.transform = 'scale(1)';
          img.style.filter = 'brightness(1)';
      });
  });

  // Efecto de "ondas" al hacer clic en los botones de proyecto
  const botonesProyecto = document.querySelectorAll('.button');
  botonesProyecto.forEach(button => {
      button.addEventListener('click', function(e) {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const ripple = document.createElement('span');
          ripple.classList.add('ripple');
          ripple.style.left = `${x}px`;
          ripple.style.top = `${y}px`;
          this.appendChild(ripple);

          setTimeout(() => {
              ripple.remove();
          }, 600);
      });
  });

  // Comprobar el scroll al cargar la página y al hacer scroll
  window.addEventListener('scroll', checkScroll);
  checkScroll();

  // Estilos para el efecto de onda (añadir al CSS)
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
      .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple-effect 0.6s linear;
          background-color: rgba(0, 0, 0, 0.15); /* Color de la onda */
          pointer-events: none;
      }

      @keyframes ripple-effect {
          to {
              transform: scale(2);
              opacity: 0;
          }
      }
  `;
  document.head.appendChild(styleSheet);
});