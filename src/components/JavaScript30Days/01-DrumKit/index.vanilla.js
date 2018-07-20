export function init () {

  function playSound (e) {

    let keyCode = e.which

    const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    const button = document.querySelector(`.key[data-key="${keyCode}"]`)

    if (!audio) {
      return
    }

    audio.currentTime = 0
    audio.play().catch(
      function (err) {
        console.error(err)
      }
    )

    button.classList.add('playing')
  }

  function removeTransition (e) {

    if (e.type !== 'transitionend') {
      return
    }

    e.target.classList.remove('playing')
  }

  window.addEventListener('keydown', playSound)
  document.querySelectorAll('.key').forEach(key => key.addEventListener('transitionend', removeTransition))

}
