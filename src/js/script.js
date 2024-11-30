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
