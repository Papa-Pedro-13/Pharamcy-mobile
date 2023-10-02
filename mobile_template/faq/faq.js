function s() {
	var e = $('.js-accardion');
	e.on('click', function (e) {
		var t = $(e.currentTarget);
		t.toggleClass('is-active').siblings().removeClass('is-active'),
			t.children('.js-accardion-body').slideToggle(),
			t.siblings().children('.js-accardion-body').slideUp();
	});
}

s();
