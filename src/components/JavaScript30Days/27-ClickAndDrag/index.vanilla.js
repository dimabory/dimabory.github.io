export function init () {
  const slider = document.querySelector('.items')

  let isDown = false
  let startX
  let scrollLeft

  function stopScrolling () {
    isDown = false
    slider.classList.remove('active')
  }

  slider.addEventListener('mousedown', e => {
    isDown = true
    slider.classList.add('active')

    startX     = e.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft
  })

  slider.addEventListener('mouseleave', stopScrolling)
  slider.addEventListener('mouseup', stopScrolling)

  slider.addEventListener('mousemove', e => {
    if (!isDown) {
      return
    }
    e.preventDefault()
    const x    = e.pageX - slider.offsetLeft
    const walk = (x - startX) * 2

    slider.scrollLeft = scrollLeft - walk
  })
}
