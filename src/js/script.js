const body = document.querySelector('body');
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3, // Количество видимых слайдов
        spaceBetween: 30, // Расстояние между слайдами
        loop: true, // Зацикливание слайдов
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // Для мобильных устройств
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            // Для планшетов
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // Для десктопов
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
});

