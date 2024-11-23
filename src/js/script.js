const body = document.querySelector('body');
const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});
