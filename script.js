const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.carousel-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const cardsToShow = 3;
const totalCards = cards.length;

function updateCarousel() {
  if (carousel) {
    const cardWidth = carousel.offsetWidth / cardsToShow;
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
}

function showNext() {
  if (currentIndex < totalCards - cardsToShow) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

function showPrev() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - cardsToShow;
  }
  updateCarousel();
}

if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);
}

window.addEventListener('resize', updateCarousel);


document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", (event) => {
      event.preventDefault(); 
      const dropdownMenu = toggle.nextElementSibling;

      //Cierra todos los dropdowns antes de abrir uno nuevo
      document.querySelectorAll(".dropdown-menu").forEach(menu => {
        if (menu !== dropdownMenu) {
          menu.classList.remove("show");
        }
      });

      //Alternar el menú actual
      dropdownMenu.classList.toggle("show");
    });
  });

  //Cerar dropdown afuera 
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown-menu").forEach(menu => {
        menu.classList.remove("show");
      });
    }
  });
});

function filterCards(year) {
  let cards = document.querySelectorAll('.card-proy');
  cards.forEach(card => {
      if (year === 'all' || card.getAttribute('data-year') === year) {
          card.style.display = 'block';
      } else {
          card.style.display = 'none';
      }
  });
}


function filterConvenios(data) {
  let cards = document.querySelectorAll('.card-convenio');
  cards.forEach(card => {
      if (data === 'all' || card.getAttribute('data-spec') === data) {
          card.style.display = 'block';
      } else {
          card.style.display = 'none';
      }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  // Toggle del menú de navegación en dispositivos pequeños
  hamburger.addEventListener("click", function() {
      navLinks.classList.toggle("show");
  });
});