const body = document.querySelector('body');
const swiperTwo = new Swiper(".swiper_2", {
    slidesPerView: 5,
    loop: !0
})
    , swiperOne = new Swiper(".swiper_1", {
        initialSlide: 2,
        thumbs: {
            swiper: swiperTwo
        }
    });


const swiper3 = new Swiper('.swiper_3', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

});

const swiper4 = new Swiper('.swiper_4', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 10,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});