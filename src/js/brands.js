

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
      let swiper;
      console.log('Works!')

      breakpoint = window.matchMedia(breakpoint)

      const enableSwiper = function (className, settings) {
        swiper = new Swiper(className, settings)
      }

      const checker = function () {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings)
        } else {
          if (swiper !== undefined) swiper.destroy(true, true)
          return
        }
      }

      breakpoint.addEventListener('change', checker)
      checker()
    }

    resizableSwiper('(max-width: 767px)', '.brands__swiper', {
      speed: 300,
      spaceBetween: 16,
      slidesPerView: 1.3,
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 7,
        clickable: true
      },
      breakpoints: {
        420: {
          slidesPerView: 1.6
        },
        480: {
          slidesPerView: 2
        },
        574: {
          slidesPerView: 2.5
        },
        654: {
          slidesPerView: 2.6
        }
      }
    })
  })
}