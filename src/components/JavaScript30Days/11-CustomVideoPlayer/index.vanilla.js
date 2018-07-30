export function init () {
  const player      = document.querySelector('.player')
  const video       = player.querySelector('.viewer')
  const progress    = player.querySelector('.progress')
  const progressBar = player.querySelector('.progress__filled')
  const toggle      = player.querySelector('.toggle')
  const skipButtons = player.querySelectorAll('[data-skip]')
  const ranges      = player.querySelectorAll('.player__slider')
  const fullScreen  = player.querySelector('.player__fullscreen')

  function togglePlay () {
    video[video.paused ? 'play' : 'pause']()
  }

  function updateButton () {
    toggle.textContent = this.paused ? '▶️' : '⏸️'
  }

  function skip () {
    video.currentTime += parseFloat(this.dataset.skip)
  }

  function handleRangeUpdate () {
    video[this.name] = this.value
  }

  function handleProgress () {
    progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`
  }

  function scrub (e) {
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration
  }

  video.addEventListener('click', togglePlay)
  video.addEventListener('play', updateButton)
  video.addEventListener('pause', updateButton)
  video.addEventListener('timeupdate', handleProgress)

  toggle.addEventListener('click', togglePlay)

  skipButtons.forEach(btn => btn.addEventListener('click', skip))

  ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
  ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

  let mousedown = false
  progress.addEventListener('click', scrub)
  progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
  progress.addEventListener('mousedown', () => mousedown = true)
  progress.addEventListener('mouseup', () => mousedown = false)

  fullScreen.addEventListener('click', () => {
    if (video.requestFullscreen) {
      video.requestFullscreen()
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen()
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen()
    }
  })
}
