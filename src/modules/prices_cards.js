let swiperPricesInit = false; // Инициализация Swiper

function swiperPrices() {
	if (window.innerWidth <= 768) {
			if (!swiperPricesInit) {
				swiperPricesInit = true;
					swiperPrices = new Swiper(".prices__cards", {
							slidesPerView: "auto",
							spaceBetween: 16,
							pagination: {
									el: ".prices-pagination",
									clickable: true,
							},
					});
			}
	} else if (swiperPricesInit) {
			swiperPrices.destroy();
			swiperPricesInit = false;
	}
}

swiperPrices();
window.addEventListener("resize", swiperPrices);