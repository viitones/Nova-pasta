function closeNav() {
  document.getElementById('mynav').style.width = '0'
}
function openNav() {
  document.getElementById('mynav').style.width = '40%'
}


new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});