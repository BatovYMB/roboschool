// Слайдер //
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 40, slidesPerView:3,
    navigation: {
      nextEl: ".swiper-button-nextz",
      prevEl: ".swiper-button-prevz",
    },
    
    scrollbar: {
  el: '.swiper-scrollbar',
  draggable: true,
  dragSize:260 ,
},
    mousewheel: true,
    keyboard: true,
  });
  // конец слайдера //

// скролл до определенных блоков //

document.querySelector('.header_nav1').onclick = () => {
  window.scrollTo({
    top: 700,
    behavior: "smooth",
  });
}
document.querySelector('.header_nav2').onclick = () => {
  window.scrollTo({
    top: 2050,
    behavior: "smooth",
  });
}
document.querySelector('.header_nav3').onclick = () => {
  window.scrollTo({
    top: 3050,
    behavior: "smooth",
  });
}
document.querySelector('.hero_btn').onclick = () => {
  window.scrollTo({
    top: 3350,
    behavior: "smooth",
  });
}
document.querySelectorAll('.btn_price').forEach(element => {
  element.onclick = () => {
    window.scrollTo({
      top: 3350,
      behavior: "smooth",
    });
  }
});
document.querySelector('.btn_price1').onclick = () => {
  window.scrollTo({
    top: 3350,
    behavior: "smooth",
  });
}