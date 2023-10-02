var swiper = new Swiper('.hero__slider .swiper', {
	slidesPerView: 1,
	spaceBetween: 20,
	navigation: {
		nextEl: '.hero__navigation--next',
		prevEl: '.hero__navigation--prev',
		disabledClass: 'navigation--disabled',
	},
	pagination: {
		el: '.hero-pagination',
		type: 'bullets',
		clickable: 'true',
	},
	on: {
		init: function (e) {
			e.pagination.render(), e.pagination.update();
		},
		slideChange: function (e) {
			e.pagination.render(), e.pagination.update();
		},
	},
});
swiper.on("slideChange", () => {
	$(".modal").hide()
})
