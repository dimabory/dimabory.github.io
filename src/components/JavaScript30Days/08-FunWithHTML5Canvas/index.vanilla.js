export function init () {
  const canvas = document.querySelector('#draw')
  const ctx    = canvas.getContext('2d')

  canvas.width  = canvas.parentElement.offsetWidth
  canvas.height = canvas.parentElement.offsetHeight

  ctx.strokeStyle              = '#BADA55'
  ctx.lineJoin                 = 'round'
  ctx.lineCap                  = 'round'
  ctx.globalCompositeOperation = 'hue'

  let isDrawing = false
  let lastX     = 0
  let lastY     = 0
  let hue       = 0
  let direction = true

  function draw ({offsetX, offsetY}) {
    if (!isDrawing) {
      return
    }

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`

    document.documentElement.style.setProperty(`--08-fun-with-html5-canvas-border-color`, ctx.strokeStyle)

    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(offsetX, offsetY)
    ctx.stroke()

    ;[lastX, lastY] = [offsetX, offsetY]
    ++hue

    if (hue >= 360) {
      hue = 0
    }

    if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
      direction = !direction
    }
    if (direction) {
      ++ctx.lineWidth
    } else {
      --ctx.lineWidth
    }
  }

  canvas.addEventListener('mousemove', draw)
  canvas.addEventListener('mousedown', e => {
    isDrawing       = true
    ;[lastX, lastY] = [e.offsetX, e.offsetY]
  })
  canvas.addEventListener('mouseup', () => isDrawing = false)
  canvas.addEventListener('mouseout', () => isDrawing = false)

}
