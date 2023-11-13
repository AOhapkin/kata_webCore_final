let swiperTechInit = false; // Инициализация Swiper

function swiperTech() {
	if (window.innerWidth <= 768) {
			if (!swiperTechInit) {
				swiperTechInit = true;
					swiperTech = new Swiper(".tech__cards", {
							slidesPerView: "auto",
							spaceBetween: 16,
							pagination: {
									el: ".tech-pagination",
									clickable: true,
							},
					});
			}
	} else if (swiperTechInit) {
			swiperTech.destroy();
			swiperTechInit = false;
	}
}

swiperTech();
window.addEventListener("resize", swiperTech);