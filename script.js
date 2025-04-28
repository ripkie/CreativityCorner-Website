// Navbar
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("menu-active");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const swiperElement = document.querySelector(".mySwiper");
  if (swiperElement) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,  
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false, 
      },
      pagination: {
        el: ".swiper-pagination",  
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next", 
        prevEl: ".swiper-button-prev", 
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,  
        },
        1024: {
          slidesPerView: 3, 
        },
      },
    });
  }
});

// team
document.addEventListener("DOMContentLoaded", function () {
  const teamBox = document.querySelector(".team-box");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (!teamBox || !prevBtn || !nextBtn) return;

  let scrollStep = teamBox.clientWidth / 3;
  let autoScroll;

  function slideRight() {
    if (teamBox.scrollLeft + teamBox.clientWidth >= teamBox.scrollWidth) {
      teamBox.scrollLeft = 0; 
    } else {
      teamBox.scrollBy({ left: scrollStep, behavior: "smooth" });
    }
  }

  function slideLeft() {
    if (teamBox.scrollLeft === 0) {
      teamBox.scrollLeft = teamBox.scrollWidth;
    } else {
      teamBox.scrollBy({ left: -scrollStep, behavior: "smooth" });
    }
  }

  prevBtn.addEventListener("click", slideLeft);
  nextBtn.addEventListener("click", slideRight);

  function startAutoScroll() {
    autoScroll = setInterval(slideRight, 3000);
  }

  function stopAutoScroll() {
    clearInterval(autoScroll);
  }

  startAutoScroll();
  teamBox.addEventListener("mouseenter", stopAutoScroll);
  teamBox.addEventListener("mouseleave", startAutoScroll);

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") slideLeft();
    if (event.key === "ArrowRight") slideRight();
  });

  let isDragging = false;
  let startX, scrollLeft;

  teamBox.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - teamBox.offsetLeft;
    scrollLeft = teamBox.scrollLeft;
    teamBox.style.cursor = "grabbing";
  });

  teamBox.addEventListener("mouseleave", () => {
    isDragging = false;
    teamBox.style.cursor = "grab";
  });

  teamBox.addEventListener("mouseup", () => {
    isDragging = false;
    teamBox.style.cursor = "grab";
  });

  teamBox.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - teamBox.offsetLeft;
    const walk = (x - startX) * 2;
    teamBox.scrollLeft = scrollLeft - walk;
  });
});

// imageSlider.js
const images = [
  'assets/images/kegiatan1.jpg',
  'assets/images/kegiatan2.jpg',
  'assets/images/kegiatan3.jpg',
  'assets/images/kegiatan4.jpg',
  'assets/images/kegiatan5.jpg'
];

let currentImage = 0;
const activityImage = document.getElementById('activityImage');

setInterval(() => {
  currentImage = (currentImage + 1) % images.length;
  activityImage.src = images[currentImage];
}, 3000); // Ganti gambar setiap 3 detik

