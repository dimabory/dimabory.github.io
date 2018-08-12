export function init () {
  const container = document.getElementById('sticky-nav')
  const nav       = document.querySelector('#main')
  const topOfNav  = nav.offsetTop

  function fixNav () {
    container.classList.toggle('fixed-nav', window.scrollY >= topOfNav)
    // container.style.paddingTop = `${window.scrollY >= topOfNav ? nav.offsetHeight : 0}px`
  }

  window.addEventListener('scroll', fixNav)
}
