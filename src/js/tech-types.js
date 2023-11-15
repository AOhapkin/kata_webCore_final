import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/modules/pagination.min.css'
import 'swiper/swiper-bundle.min.css'
import 'swiper/modules/pagination.min.css'

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
      let swiper

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

    resizableSwiper('(max-width: 767px)', '.tech-types__swiper', {
      speed: 300,
      spaceBetween: 16,
      slidesPerView: 1.3,
      modules: [Pagination],
      pagination: {
        el: '.tech-types__swiper-pagination',
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