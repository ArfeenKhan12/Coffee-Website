const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");


menuOpenButton.addEventListener("Click" , () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("Click" , () => menuOpenButton.click());

// swiper code 

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicbullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView : 1
    },
    768: {
        slidesPerView : 2
    },
    1024: {
        slidesPerView : 3
    },
  }

});