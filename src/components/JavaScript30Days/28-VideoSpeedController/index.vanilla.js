export function init () {
  const speed = document.querySelector('.speed')
  const bar   = speed.querySelector('.speed-bar')
  const video = document.querySelector('.flex')

  function updateSpeedBar (height, playbackRate) {
    bar.style.height = height
    bar.textContent  = playbackRate.toFixed(2) + 'x'
  }

  function updateVideoPlayback (playbackRate) {
    video.playbackRate = playbackRate
  }

  speed.addEventListener('mousemove', function (e) {
    const percent      = e.offsetY / this.offsetHeight
    const min          = 0.4
    const max          = 4
    const height       = Math.round(percent * 100) + '%'
    const playbackRate = percent * (max - min) + min

    updateSpeedBar(height, playbackRate)
    updateVideoPlayback(playbackRate)
  })
}
