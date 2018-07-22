export function init () {

  function playSound (key) {

    const audio  = document.querySelector(`audio[data-key="${key}"]`)
    const button = document.querySelector(`.key[data-key="${key}"]`)

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

  window.addEventListener('keydown', e => playSound(e.which))

  document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('transitionend', removeTransition)

    ;['click','ontouchstart'].forEach(e => key.addEventListener(e, function () {
      playSound(this.dataset.key)
    }, false))
  })

}
