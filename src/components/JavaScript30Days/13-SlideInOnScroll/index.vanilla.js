export function init () {

  function debounce (fn, ms = 20) {
    let timeoutId
    return function (...args) {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => fn.apply(this, args), ms)
    }
  }

  const sliderImages = document.querySelectorAll('.slide-in')

  function checkSlide () {
    sliderImages.forEach(sliderImage => {
      const slideInAt   = (window.scrollY + window.innerHeight) - sliderImage.clientHeight / 2
      const imageBottom = sliderImage.offsetTop + sliderImage.clientHeight

      const isHalfShown       = slideInAt > sliderImage.offsetTop
      const isNotScrolledPast = window.scrollY < imageBottom

      sliderImage.classList.toggle('active', isHalfShown && isNotScrolledPast)
    })
  }

  window.addEventListener('scroll', debounce(checkSlide))

  if (0 !== window.scrollY) {
    window.scrollBy(0, window.scrollY - 1)
  }
}
