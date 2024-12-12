/* const body = document.querySelector('body');
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

document.addEventListener('DOMContentLoaded', () => {
    const swiperFour = new Swiper('.swiper_6', {
        slidesPerView: 5,
        loop: true,
        spaceBetween: 20,
    });

    const swiperThree = new Swiper('.swiper_5', {
        loop: true,
        thumbs: {
            swiper: swiperFour,
        },
    });
}); */

if ("function" == typeof Swiper) {
    const e = new Swiper(".swiper_2", {
        slidesPerView: 5,
        loop: !0
    });
    new Swiper(".swiper_1", {
        initialSlide: 2,
        thumbs: {
            swiper: e
        }
    }),
        new Swiper(".swiper_3", {
            slidesPerView: 5,
            loop: !0,
            autoplay: {
                delay: 2500,
                disableOnInteraction: !0
            }
        })
}
document.querySelector(".block") && (document.querySelector(".block").innerHTML = "hello");

//scroll
/* document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        if (this.hasAttribute('data-target')) {
            const targetSelector = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetSelector);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
 */

const menuButton = document.querySelector(".menu_button");
const menuCloseButton = document.querySelector(".nav__close");
const menu = document.querySelector(".nav");
const body = document.querySelector(".body");

menuButton.addEventListener("click", function () {
    menu.classList.add("active");
    body.classList.add("body--overflow_hidden");
});

menuCloseButton.addEventListener("click", function () {
    menu.classList.remove("active");
    body.classList.remove("body--overflow_hidden");
});

