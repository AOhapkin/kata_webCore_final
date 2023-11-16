import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
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

    resizableSwiper('(max-width: 767px)', '.brands__swiper', {
      speed: 300,
      spaceBetween: 16,
      slidesPerView: 1.3,
      modules: [Pagination],
      pagination: {
        el: '.brands__swiper-pagination',
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

// show all button

const showMoreBrandsButton = document.querySelector('.brands__show-more-button')
const brands = document.querySelector('.brands__swiper')
const showMoreIcon = document.querySelector('.show-more-button::before')
let isBrandsCollapsed = true

showMoreBrandsButton.addEventListener('click', onShowMoreBrandsButtonClick)

function onShowMoreBrandsButtonClick(evt) {
  evt.preventDefault()
  brands.classList.toggle('brands__swiper--collapse')
  showMoreBrandsButton.classList.toggle('show-more-button--clicked')
  if (isBrandsCollapsed) {
    showMoreBrandsButton.textContent = 'Скрыть'
    isBrandsCollapsed = false
  } else {
    showMoreBrandsButton.textContent = 'Показать все'
    isBrandsCollapsed = true
  }
}