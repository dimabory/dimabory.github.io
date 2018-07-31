export function init (cornify) {
  const konamiCode = 'konami'
  const pressed    = []
  window.addEventListener('keyup', e => {
    pressed.push(e.key)
    pressed.splice(-konamiCode.length - 1, pressed.length - konamiCode.length)

    if (pressed.join('').includes(konamiCode)) {
      cornify.cornify_add()
    }
  })
}
