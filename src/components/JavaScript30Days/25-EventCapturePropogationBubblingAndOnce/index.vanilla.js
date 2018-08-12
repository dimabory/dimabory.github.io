export function init () {
  const divs = document.querySelectorAll('.bod div')

  function logText (e) {
    console.log(this.classList.value)
    e.stopPropagation() // stop bubbling
  }

  divs.forEach(div => div.addEventListener('click', logText), {
    capture: false,
    // once: true
  })
}
