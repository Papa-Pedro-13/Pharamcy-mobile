!(function (e) {
	function t(t) {
		for (
			var o, a, s = t[0], l = t[1], c = t[2], u = 0, p = [];
			u < s.length;
			u++
		)
			(a = s[u]),
				Object.prototype.hasOwnProperty.call(r, a) && r[a] && p.push(r[a][0]),
				(r[a] = 0);
		for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o]);
		for (d && d(t); p.length; ) p.shift()();
		return i.push.apply(i, c || []), n();
	}
	function n() {
		for (var e, t = 0; t < i.length; t++) {
			for (var n = i[t], o = !0, s = 1; s < n.length; s++) {
				var l = n[s];
				0 !== r[l] && (o = !1);
			}
			o && (i.splice(t--, 1), (e = a((a.s = n[0]))));
		}
		return e;
	}
	var o = {},
		r = { 0: 0 },
		i = [];
	function a(t) {
		if (o[t]) return o[t].exports;
		var n = (o[t] = { i: t, l: !1, exports: {} });
		return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
	}
	(a.m = e),
		(a.c = o),
		(a.d = function (e, t, n) {
			a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
		}),
		(a.r = function (e) {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(e, '__esModule', { value: !0 });
		}),
		(a.t = function (e, t) {
			if ((1 & t && (e = a(e)), 8 & t)) return e;
			if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
			var n = Object.create(null);
			if (
				(a.r(n),
				Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
				2 & t && 'string' != typeof e)
			)
				for (var o in e)
					a.d(
						n,
						o,
						function (t) {
							return e[t];
						}.bind(null, o)
					);
			return n;
		}),
		(a.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default;
					  }
					: function () {
							return e;
					  };
			return a.d(t, 'a', t), t;
		}),
		(a.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(a.p = '');
	var s = (window.webpackJsonp = window.webpackJsonp || []),
		l = s.push.bind(s);
	(s.push = t), (s = s.slice());
	for (var c = 0; c < s.length; c++) t(s[c]);
	var d = l;
	i.push([410, 1]), n();
})({
	406: function (e, t, n) {
		'use strict';
		(function (e) {
			var t,
				o,
				r = n(85),
				i = {};
			function a() {
				return (
					!(!i.isIE || !i.getScrollbarWidth()) ||
					(!i.isMobile() &&
						(!(
							!window.matchMedia('(any-hover: hover)').matches &&
							!window.matchMedia('(hover: hover)').matches
						) ||
							(!window.matchMedia('(hover: none)').matches &&
								void 0 === i.$html.ontouchstart)))
				);
			}
			(i.$document = $(document)),
				(i.$window = $(window)),
				(i.$body = $(document.body)),
				(i.$html = $(document.documentElement)),
				(i.isMobile = function () {
					return innerWidth <= 1024;
				}),
				(i.isIE = function () {
					return i.$html.hasClass('is-browser-ie');
				}),
				(i.isIOS = function () {
					return i.$html.hasClass('is-os-ios');
				}),
				(i.winWidth = window.innerWidth),
				(i.clearText = function (e) {
					return e.trim().replace(/\s+/g, ' ');
				}),
				(i.setCookie = function (e, t, n) {
					var o = '';
					if (n) {
						var r = new Date();
						r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3),
							(o = '; expires='.concat(r.toUTCString()));
					}
					document.cookie = ''
						.concat(e, '=')
						.concat(t || '')
						.concat(o, '; path=/');
				}),
				(i.getCookie = function (e) {
					for (
						var t = ''.concat(e, '='), n = document.cookie.split(';'), o = 0;
						o < n.length;
						o++
					) {
						for (var r = n[o]; ' ' === r.charAt(0); )
							r = r.substring(1, r.length);
						if (0 === r.indexOf(t)) return r.substring(t.length, r.length);
					}
					return null;
				}),
				(i.eraseCookie = function (e) {
					document.cookie = ''.concat(e, '=; Max-Age=-99999999;');
				}),
				(i.lockScroll = function (n, o, a) {
					var s = o.get(0) ? o.get(0) : o;
					void 0 === t && (t = new Set());
					var l = t;
					n
						? ('string' == typeof a && l.add(a),
						  r.b(s, { reserveScrollBarGap: !0 }),
						  e(function () {
								i.$html.addClass('is-lock-scroll');
						  }))
						: ('string' == typeof a && l.delete(a),
						  r.c(s),
						  l.size || (r.a(), i.$html.removeClass('is-lock-scroll')));
				}),
				(i.scrollTo = function (e) {
					var t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: 500,
						n =
							arguments.length > 2 && void 0 !== arguments[2]
								? arguments[2]
								: 0;
					i.$html.css('scroll-behavior', 'initial'),
						$('html, body')
							.stop()
							.animate(
								{ scrollTop: ''.concat(e.offset().top + parseInt(n, 10)) },
								parseInt(t, 10)
							),
						setTimeout(function () {
							i.$html.css('scroll-behavior', '');
						}, parseInt(t, 10) + 100);
				}),
				(i.getScrollbarWidth = function () {
					var e = window.innerWidth - i.$html.get(0).clientWidth;
					return e ||
						document.documentElement.clientHeight >=
							document.documentElement.offsetHeight
						? e
						: (o ||
								(((o = document.createElement('div')).style.cssText =
									'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px'),
								document.body.appendChild(o)),
						  o.offsetWidth - o.clientWidth);
				}),
				a()
					? i.$html.removeClass('no-hover').addClass('has-hover')
					: i.$html.removeClass('has-hover').addClass('no-hover'),
				i.$window.on('resize', function () {
					setTimeout(function () {
						i.winWidth !== window.innerWidth &&
							(a()
								? i.$html.removeClass('no-hover').addClass('has-hover')
								: i.$html.removeClass('has-hover').addClass('no-hover'),
							(i.winWidth = window.innerWidth));
					}, 300);
				});
		}).call(this, n(407).setImmediate);
	},
	410: function (e, t, n) {
		'use strict';
		n.r(t);
		var o = n(161),
			r = n.n(o);
		n(167), n(404);
		n(405);
		n(406);
		var i = n(16);
		new i.d('.js-navSlider', {
			modules: [i.b],
			loop: !1,
			slidesPerView: 'auto',
			spaceBetween: 0,
			navigation: {
				nextEl: '.header__button--next',
				prevEl: '.header__button--prev',
				disabledClass: 'small-navigation--disabled',
			},
		});
		new i.d('.hero__slider .swiper', {
			modules: [i.b, i.c, i.a],
			loop: !0,
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
		}).on('slideChange', function () {
			document.querySelectorAll('.js-copy').forEach(function (e) {
				(e.style.display = ''),
					(e.parentElement.querySelector(
						'.advertising__link--complete'
					).style.display = '');
			});
		});
		new i.d('.category-slider .swiper', {
			modules: [i.b],
			loop: !1,
			slidesPerView: 2,
			spaceBetween: 8,
			navigation: {
				nextEl: '.category-navigation--next',
				prevEl: '.category-navigation--prev',
				disabledClass: 'navigation--disabled',
			},
			breakpoints: {
				640: {
					slidesPerView: 6,
					spaceBetween: 24,
				},
			},
		}),
			new i.d('.pharmacy-slider .swiper', {
				modules: [i.b],
				loop: !1,
				spaceBetween: 8,
				slidesPerView: 2,
				navigation: {
					nextEl: '.pharmacy-slider__navigation--next',
					prevEl: '.pharmacy-slider__navigation--prev',
					disabledClass: 'navigation--disabled',
				},
				breakpoints: {
					1024: { slidesPerView: 6 },
					1200: { slidesPerView: 6 },
					640: { slidesPerView: 6, spaceBetween: 24 },
				},
			}),
			new i.d('.news-slider .swiper', {
				modules: [i.b],
				loop: !1,
				slidesPerView: 1,
				spaceBetween: 8,
				navigation: {
					nextEl: '.news-slider__navigation--next',
					prevEl: '.news-slider__navigation--prev',
					disabledClass: 'navigation--disabled',
				},
				breakpoints: {
					640: {
						slidesPerView: 3,
						spaceBetween: 24,
					},
				},
			}),
			new i.d('.product-slider .swiper', {
				modules: [i.b],
				loop: !1,
				slidesPerView: 4,
				spaceBetween: 24,
				navigation: {
					nextEl: '.product-slider__navigation--next',
					prevEl: '.product-slider__navigation--prev',
					disabledClass: 'navigation--disabled',
				},
			}),
			new i.d('.article-slider .swiper', {
				modules: [i.b],
				loop: !1,
				slidesPerView: 3,
				spaceBetween: 24,
				navigation: {
					nextEl: '.article-slider__navigation--next',
					prevEl: '.article-slider__navigation--prev',
					disabledClass: 'navigation--disabled',
				},
			});
		var a,
			s,
			l,
			c,
			d,
			u,
			p,
			h,
			f,
			v = n(162),
			m = n.n(v),
			g = function () {
				m()('.js-lazy', {
					rootMargin: '10px 0px',
					threshold: 0.1,
					enableAutoReload: !0,
					loaded: function (e) {
						e.classList.add('is-loaded');
					},
				}).observe();
			};
		!(function () {
			!(function () {
				if (
					('performance' in window == 0 && (window.performance = {}),
					(Date.now =
						Date.now ||
						function () {
							return new Date().getTime();
						}),
					'now' in window.performance == 0)
				) {
					var e = Date.now();
					performance.timing &&
						performance.timing.navigationStart &&
						(e = performance.timing.navigationStart),
						(window.performance.now = function () {
							return Date.now() - e;
						});
				}
			})(),
				window.NodeList &&
					!NodeList.prototype.forEach &&
					(NodeList.prototype.forEach = function (e, t) {
						t = t || window;
						for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this);
					}),
				(function () {
					if ('function' == typeof window.CustomEvent) return !1;
					function e(e, t) {
						t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
						var n = document.createEvent('CustomEvent');
						return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
					}
					(e.prototype = window.Event.prototype), (window.CustomEvent = e);
				})(),
				Array.prototype.includes ||
					Object.defineProperty(Array.prototype, 'includes', {
						value: function (e, t) {
							if (null == this)
								throw new TypeError('"this" is null or not defined');
							var n = Object(this),
								o = n.length >>> 0;
							if (0 === o) return !1;
							var r,
								i,
								a = 0 | t,
								s = Math.max(a >= 0 ? a : o - Math.abs(a), 0);
							for (; s < o; ) {
								if (
									(r = n[s]) === (i = e) ||
									('number' == typeof r &&
										'number' == typeof i &&
										isNaN(r) &&
										isNaN(i))
								)
									return !0;
								s++;
							}
							return !1;
						},
					}),
				Element.prototype.matches ||
					(Element.prototype.matches =
						Element.prototype.matchesSelector ||
						Element.prototype.mozMatchesSelector ||
						Element.prototype.msMatchesSelector ||
						Element.prototype.oMatchesSelector ||
						Element.prototype.webkitMatchesSelector ||
						function (e) {
							for (
								var t = (this.document || this.ownerDocument).querySelectorAll(
										e
									),
									n = t.length;
								--n >= 0 && t.item(n) !== this;

							);
							return n > -1;
						}),
				Element.prototype.matches ||
					(Element.prototype.matches =
						Element.prototype.msMatchesSelector ||
						Element.prototype.webkitMatchesSelector),
				Element.prototype.closest ||
					(Element.prototype.closest = function (e) {
						var t = this;
						do {
							if (t.matches(e)) return t;
							t = t.parentElement || t.parentNode;
						} while (null !== t && 1 === t.nodeType);
						return null;
					}),
				[
					Element.prototype,
					Document.prototype,
					DocumentFragment.prototype,
				].forEach(function (e) {
					e.hasOwnProperty('prepend') ||
						Object.defineProperty(e, 'prepend', {
							configurable: !0,
							enumerable: !0,
							writable: !0,
							value: function () {
								var e = Array.prototype.slice.call(arguments),
									t = document.createDocumentFragment();
								e.forEach(function (e) {
									var n = e instanceof Node;
									t.appendChild(n ? e : document.createTextNode(String(e)));
								}),
									this.insertBefore(t, this.firstChild);
							},
						});
				}),
				[
					Element.prototype,
					Document.prototype,
					DocumentFragment.prototype,
				].forEach(function (e) {
					e.hasOwnProperty('append') ||
						Object.defineProperty(e, 'append', {
							configurable: !0,
							enumerable: !0,
							writable: !0,
							value: function () {
								var e = Array.prototype.slice.call(arguments),
									t = document.createDocumentFragment();
								e.forEach(function (e) {
									var n = e instanceof Node;
									t.appendChild(n ? e : document.createTextNode(String(e)));
								}),
									this.appendChild(t);
							},
						});
				}),
				[
					Element.prototype,
					CharacterData.prototype,
					DocumentType.prototype,
				].forEach(function (e) {
					e.hasOwnProperty('before') ||
						Object.defineProperty(e, 'before', {
							configurable: !0,
							enumerable: !0,
							writable: !0,
							value: function () {
								var e = Array.prototype.slice.call(arguments),
									t = document.createDocumentFragment();
								e.forEach(function (e) {
									var n = e instanceof Node;
									t.appendChild(n ? e : document.createTextNode(String(e)));
								}),
									this.parentNode.insertBefore(t, this);
							},
						});
				}),
				[
					Element.prototype,
					CharacterData.prototype,
					DocumentType.prototype,
				].forEach(function (e) {
					e.hasOwnProperty('remove') ||
						Object.defineProperty(e, 'remove', {
							configurable: !0,
							enumerable: !0,
							writable: !0,
							value: function () {
								null !== this.parentNode && this.parentNode.removeChild(this);
							},
						});
				}),
				String.prototype.startsWith ||
					Object.defineProperty(String.prototype, 'startsWith', {
						value: function (e, t) {
							var n = t > 0 ? 0 | t : 0;
							return this.substring(n, n + e.length) === e;
						},
					});
			if (window.navigator.msSaveBlob) {
				var e = document.querySelectorAll('a[download]');
				e.length &&
					e.forEach(function (e) {
						!(function (e) {
							if ('' === e.href) throw Error('The element has no href value.');
							var t = e.getAttribute('download');
							if (null === t || '' === t) {
								var n = e.href.split('/');
								t = n[n.length - 1];
							}
							e.addEventListener('click', function (n) {
								n.preventDefault();
								var o = new XMLHttpRequest();
								(o.onloadstart = function () {
									o.responseType = 'blob';
								}),
									(o.onload = function () {
										navigator.msSaveOrOpenBlob(o.response, t);
									}),
									o.open('GET', e.href, !0),
									o.send();
							});
						})(e);
					});
			}
			window.MSInputMethodContext &&
				document.documentMode &&
				document.querySelectorAll('svg').forEach(function (e) {
					e.setAttribute('focusable', 'false');
				});
			!(function () {
				var e,
					t,
					n,
					o = document.querySelector('main'),
					r = document.querySelector('.header'),
					i = document.querySelector('.footer');
				if (o && window.MSInputMethodContext && document.documentMode) {
					var a = function () {
						(e = r ? r.getBoundingClientRect().height : 0),
							(t = i ? i.getBoundingClientRect().height : 0),
							(n = window.innerHeight),
							(o.style.minHeight = n - (e + t) + 'px');
					};
					document.addEventListener('loadDOMContentLoaded', a()),
						window.addEventListener('resize', a);
				}
			})();
		})(),
			(function () {
				if (!window.MSInputMethodContext || !document.documentMode) {
					var e = window.innerHeight;
					document.documentElement.style.setProperty(
						'--vh',
						''.concat(e, 'px')
					),
						window.addEventListener('resize', function () {
							(e = window.innerHeight),
								document.documentElement.style.setProperty(
									'--vh',
									''.concat(e, 'px')
								);
						});
				}
			})(),
			g(),
			(a = $('.js-searchInput')),
			(s = $('.js-qclear')),
			a.on('change paste keyup', function (e) {
				'' != $(e.currentTarget).val() ? s.show() : s.hide();
			}),
			s.on('click', function (e) {
				var t = $(e.currentTarget);
				a.val(''), a.focus(), t.hide();
			}),
			(c = $('.header__slide')),
			(d = $('.submenu__item')),
			(u = $('.submenu')),
			c.on('mouseenter', function () {
				(l = $(this).index()),
					$(this).children().addClass('is-active'),
					$(this).siblings().children().removeClass('is-active'),
					d.eq(l).length
						? (u.addClass('is-active'), d.eq(l).show().siblings().hide())
						: (u.removeClass('is-active'), d.hide());
			}),
			c.on('mouseleave', function () {
				d.eq(l).length || c.children().removeClass('is-active');
			}),
			u.on('mouseleave', function () {
				c.eq(l).children().removeClass('is-active'),
					u.removeClass('is-active'),
					d.eq(l).hide();
			}),
			(p = $('.ad')).on('click', function (e) {
				var t = $(e.currentTarget).attr('id');
				$('.ad__block[data-id="'.concat(t, '"]')).toggleClass('is-active');
			}),
			$(document).mouseup(function (e) {
				var t = $('.ad__block');
				t.is(e.target) ||
					p.is(e.target) ||
					0 !== t.has(e.target).length ||
					t.removeClass('is-active');
			}),
			$('.js-tab-link').on('click', function (e) {
				var t = $(e.currentTarget),
					n = t.attr('data-key');
				t.addClass('is-active').siblings().removeClass('is-active'),
					$('.js-tab-block[data-tab='.concat(n, ']'))
						.addClass('is-active')
						.siblings()
						.removeClass('is-active');
			}),
			(function () {
				var e = $('.js-accardion');
				e.on('click', function (e) {
					var t = $(e.currentTarget);
					t.toggleClass('is-active').siblings().removeClass('is-active'),
						t.children('.js-accardion-body').slideToggle(),
						t.siblings().children('.js-accardion-body').slideUp();
				});
			})(),
			(h = $('.js-searchInput')),
			(f = $('.search__backdrop')),
			h.on('focus, click', function () {
				f && f.fadeIn(200);
			}),
			f.on('click', function () {
				$(this).fadeOut(200);
			}),
			$('.scroll-up').on('click', function () {
				$('body, html').scrollTop(0);
			}),
			$('._like').on('click', function (e) {
				$(e.currentTarget).toggleClass('is-active');
			}),
			document.querySelectorAll('.js-copy').forEach(function (e) {
				e.addEventListener('click', function (e) {
					e.preventDefault();
					var t = e.currentTarget,
						n = t.getAttribute('href');
					navigator.clipboard.writeText(n),
						(t.style.display = 'none'),
						(t.parentElement.querySelector(
							'.advertising__link--complete'
						).style.display = 'inline-flex');
				});
			});
		var w = $('.header__top'),
			b = $('.header__fixed, .scroll-up'),
			y = w.innerHeight(),
			E = $('body'),
			C = function () {
				E.css('--hh', ''.concat(Math.round(y), 'px'));
			};
		C();
		var _ = function () {
			$(window).scrollTop() >= y
				? b.addClass('is-active')
				: b.removeClass('is-active');
		};
		_();
		var x = document.querySelectorAll('[data-bs-toggle="tooltip"]');
		r()(x).map(function (e) {
			new bootstrap.Tooltip(e, { offset: [0, 10] });
		});
		$(window).on('resize', C), $(window).scroll(_);
	},
});
//# sourceMappingURL=main.js.map
