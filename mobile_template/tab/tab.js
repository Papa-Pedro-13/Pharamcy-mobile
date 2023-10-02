$('.js-tab-link').on('click', function (e) {
	var t = $(e.currentTarget),
		n = t.attr('data-key');
	t.addClass('is-active').siblings().removeClass('is-active'),
		$('.js-tab-block[data-tab='.concat(n, ']'))
			.addClass('is-active')
			.siblings()
			.removeClass('is-active');
});

document.querySelectorAll('.tab__block').forEach(el => {
	var swiper = new Swiper(el, {
		spaceBetween: 8,
		slidesPerView: 2,
	});
});

m()('.js-lazy', {
	rootMargin: '10px 0px',
	threshold: 0.1,
	enableAutoReload: !0,
	loaded: function (e) {
		e.classList.add('is-loaded');
	},
}).observe();
