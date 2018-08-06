export function init () {
  const triggers  = document.querySelectorAll('.container a')
  const highlight = document.createElement('span')
  highlight.classList.add('highlight')
  document.body.appendChild(highlight)

  function highlightLink () {
    const linkCoords = this.getBoundingClientRect()

    const {width, height} = linkCoords
    const top             = linkCoords.top + window.scrollY
    const left            = linkCoords.left + window.scrollX

    highlight.style.width     = `${width}px`
    highlight.style.height    = `${height}px`
    highlight.style.transform = `translate(${left}px, ${top}px)`
  }

  triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))
}
