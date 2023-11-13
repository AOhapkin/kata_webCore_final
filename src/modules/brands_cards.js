let swiperBrandsInit = false; // Инициализация Swiper

function swiperBrands() {
	if (window.innerWidth <= 768) {
			if (!swiperBrandsInit) {
				swiperBrandsInit = true;
					swiperBrands = new Swiper(".brands__cards", {
							slidesPerView: "auto",
							spaceBetween: 16,
							pagination: {
									el: ".brands-pagination",
									clickable: true,
							},
					});
			}
	} else if (swiperBrandsInit) {
			swiperBrands.destroy();
			swiperBrandsInit = false;
	}
}

swiperBrands();
window.addEventListener("resize", swiperBrands);