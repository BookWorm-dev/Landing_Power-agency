const body = document.querySelector('body');
const swiperTwo = new Swiper(".swiper_2",{
    slidesPerView: 5,
    loop: !0
})
, swiperOne = new Swiper(".swiper_1",{
  initialSlide: 2,
  thumbs: {
      swiper: swiperTwo
  }
});


document.addEventListener('DOMContentLoaded', () => {
    const swiperFour = new Swiper(".swiper_4", {
        slidesPerView: 5,
        loop: true,
        spaceBetween: 20,
    });

    const swiperThree = new Swiper(".swiper_3", {
        initialSlide: 0,
        thumbs: {
            swiper: swiperFour,
        },
    });
});

