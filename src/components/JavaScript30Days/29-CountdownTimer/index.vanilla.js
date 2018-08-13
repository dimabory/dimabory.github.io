/* eslint-disable */
export function init () {
  window.countdown = null

  const timerDisplay   = document.querySelector('.display__time-left')
  const endTimeDisplay = document.querySelector('.display__end-time')

  const buttons = document.querySelectorAll('[data-time]')

  function timer (seconds) {
    clearInterval(countdown)

    const now  = Date.now()
    const then = now + seconds * 1000

    displayTimeEnd(then)
    displayTimeLeft(seconds)

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000)
      if (secondsLeft < 0) {
        clearInterval(countdown)
        endTimeDisplay.textContent = `${endTimeDisplay.textContent}. Timer Is Out`
        return
      }
      displayTimeLeft(secondsLeft)
    }, 1000)
  }

  function displayTimeLeft (seconds) {
    const minutes         = Math.floor(seconds / 60)
    const reminderSeconds = seconds % 60
    const display         = `${minutes}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`

    document.title           = display
    timerDisplay.textContent = display
  }

  function displayTimeEnd (timestamp) {
    const end             = new Date(timestamp)
    const hour            = end.getHours()
    const minutes         = end.getMinutes()
    const adjustedHour    = hour > 12 ? hour - 12 : hour
    const adjustedMinutes = minutes < 10 ? '0' : minutes

    endTimeDisplay.textContent = `Be Back At ${adjustedHour}:${adjustedMinutes}`
  }

  function startTimer () {
    const seconds = parseInt(this.dataset.time)
    timer(seconds)
  }

  buttons.forEach(button => button.addEventListener('click', startTimer))
  document.customForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const minutes = this.minutes.value
    if (!minutes) {
      return
    }
    timer(this.minutes.value * 60)
    this.reset()
  })
}
