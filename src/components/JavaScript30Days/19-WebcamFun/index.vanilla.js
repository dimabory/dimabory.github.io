export function init () {
  const video  = document.querySelector('.player')
  const canvas = document.querySelector('.photo')
  const ctx    = canvas.getContext('2d')
  const strip  = document.querySelector('.strip')
  const snap   = document.querySelector('.snap')

  const takePhotoBtn       = document.querySelector('.btn--take-photo')
  const redEffectBtn       = document.querySelector('.btn--red-effect')
  const rgbSplitEffectBtn  = document.querySelector('.btn--rgb-split-effect')
  const grayscaleEffectBtn = document.querySelector('.btn--grayscale-effect')

  function recording () {
    navigator.mediaDevices
             .getUserMedia({video: true, audio: false})
             .then(localMediaStream => {
               try {
                 video.srcObject = localMediaStream
               } catch (error) {
                 video.src = window.URL.createObjectURL(localMediaStream)
               } finally {
                 video.play()
               }
             })
             .catch(err => {
               console.error(err)
               canvas.width  = 0
               canvas.height = 0

               const errNode = document.createElement('div')
               errNode.classList.add('d-flex', 'justify-content-center')
               errNode.innerHTML = `<span class="text-danger">${err.message}. Please allow your media device to start video recording.</span>`
               canvas.parentNode.insertBefore(errNode, canvas)
             })
  }

  function paintToCanvas () {
    const width  = video.videoWidth
    const height = video.videoHeight

    canvas.width  = width
    canvas.height = height

    let withRedEffect       = false
    let withRgbSplitEffect  = false
    let withGrayscaleEffect = false

    setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height)
      let pixels = ctx.getImageData(0, 0, width, height)

      // pixels = greenEffect(pixels)

      if (withRedEffect) {
        pixels = redEffect(pixels)
      }
      if (withRgbSplitEffect) {
        pixels = rgbSplitEffect(pixels)
      }
      if (withGrayscaleEffect) {
        pixels = grayscaleEffect(pixels)
      }
      // ctx.globalAlpha = 0.1
      ctx.putImageData(pixels, 0, 0)
    }, 16)

    redEffectBtn.addEventListener('click', () => withRedEffect = !withRedEffect)
    rgbSplitEffectBtn.addEventListener('click', () => withRgbSplitEffect = !withRgbSplitEffect)
    grayscaleEffectBtn.addEventListener('click', () => withGrayscaleEffect = !withGrayscaleEffect)
  }

  function grayscaleEffect (pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
      let grayscale      = pixels.data[i] * .3 + pixels.data[i + 1] * .59 + pixels.data[i + 2] * .11
      pixels.data[i]     = grayscale
      pixels.data[i + 1] = grayscale
      pixels.data[i + 2] = grayscale
    }
    return pixels
  }

  function redEffect (pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
      pixels.data[i] += 100     // r
      pixels.data[i + 1] -= 50  // g
      pixels.data[i + 2] *= 0.5 // b
    }

    return pixels
  }

  // eslint-disable-next-line
  function greenEffect (pixels) {
    const levels = {}

    document.querySelectorAll('.rgb input').forEach(input => {
      levels[input.name] = input.value
    })

    for (let i = 0; i < pixels.data.length; i += 4) {
      let red   = pixels.data[i]
      let green = pixels.data[i + 1]
      let blue  = pixels.data[i + 2]
      // const alpha = pixels.data[i + 3]

      if (
        red >= levels.rmin &&
        green >= levels.gmin &&
        blue >= levels.bmin &&
        red <= levels.rmax &&
        green <= levels.gmax &&
        blue <= levels.bmax
      ) {
        pixels.data[i + 3] = 0
      }
    }

    return pixels
  }

  function rgbSplitEffect (pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
      pixels.data[i - 150] = pixels.data[i]     // r
      pixels.data[i + 500] = pixels.data[i + 1] // g
      pixels.data[i - 550] = pixels.data[i + 2] // b
    }

    return pixels
  }

  function playSound () {
    snap.currentTime = 0
    snap.play()
  }

  function takePhoto () {
    const data = canvas.toDataURL('image/jpeg')

    const link = document.createElement('a')
    link.href  = data
    link.setAttribute('download', 'handsome')
    link.innerHTML = `<img src="${data}" alt="Handsome" class="img-thumbnail" width="200" height="200"/> <span>Download</span>`

    strip.appendChild(link)
  }

  takePhotoBtn.addEventListener('click', () => playSound() || takePhoto())
  video.addEventListener('canplay', paintToCanvas)

  recording()
}
