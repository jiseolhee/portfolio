$(function () {
  let swiper = new Swiper(".main_visual", {
    effect: "fade",
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".main_visual .swiper-button-next",
      prevEl: ".main_visual .swiper-button-prev",
    },
    pagination: {
      el: ".main_visual .swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  let swiper4 = new Swiper(".interview_silde_wrap", {
    slidesPerView: 'auto',
/*     slidesOffsetBefore: 340,
    slidesOffsetAfter: 800, */
    spaceBetween: 15,
     centeredSlides: true,
    pagination: {
      el: ".interview_silde_wrap .swiper-pagination",
      clickable: true,
    },
  }); 
});





