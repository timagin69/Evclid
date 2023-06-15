const swiper = new Swiper('.swiper', {
  loop: true,

  // pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  a11y: {
    paginationBulletMessage: 'Тут название слайда {{iddex}}',
  }
});
