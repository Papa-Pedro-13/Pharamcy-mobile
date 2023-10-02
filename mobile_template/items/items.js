function s() {
	if (document.querySelector(".mobile-menu__cart").dataset.numberCart == 0) {
		document.querySelector(".mobile-menu__cart").classList.add("zero");
	}

	$('.js-add-cart').on('click', function (e) {
		var t = $(e.currentTarget),
			n = $('.toast');
		if (t.parent().parent().parent().hasClass("product-slider-item__buttons") && t.parent().hasClass('card-adding-block')) {
			t.parent().parent().siblings().children().hide();
			console.log(t.parent().parent().parent().find(".product-slider-item__buttons"))
		}

		document.querySelector(".mobile-menu__cart").classList.remove("zero");


		document.querySelector(".mobile-menu__cart").dataset.numberCart = +document.querySelector(".mobile-menu__cart").dataset.numberCart + 1;
		console.log(t.parent().parent().parent().hasClass("product-slider-item__buttons"))
		t.hide(), t.parent().find('.js-add-block').show();
		var o = t.closest('.product-cart').find('img').data('src');
		n.find('img').attr('src', o);
	});
	$('.js-add-plus').on('click', function (e) {
		var t = $(e.currentTarget).parent().find('input');
		console.log(document.querySelector(".mobile-menu__cart").dataset.numberCart)
		document.querySelector(".mobile-menu__cart").dataset.numberCart = +document.querySelector(".mobile-menu__cart").dataset.numberCart + 1;
		return t.val(parseInt(t.val()) + 1), t.change(), !1;

	});
	$('.js-add-minus').on('click', function (e) {
		var t = $(e.currentTarget),
			n = t.parent().find('input'),
			o = parseInt(n.val()) - 1;
		if (o == 0) {
			t.parent().parent().parent().parent().siblings().children().show();
		}
		document.querySelector(".mobile-menu__cart").dataset.numberCart = +document.querySelector(".mobile-menu__cart").dataset.numberCart - 1;
		if (document.querySelector(".mobile-menu__cart").dataset.numberCart == 0) {
			document.querySelector(".mobile-menu__cart").classList.add("zero");
		}
		return (
			o < 1 &&
			((o = 1),
				t.closest('.card-adding-block').find('.js-add-cart').show(),
				t.closest('.card-adding-block').find('.js-add-block').hide()),
			n.val(o),
			n.change(),
			!1
		);
	});
}
s();
