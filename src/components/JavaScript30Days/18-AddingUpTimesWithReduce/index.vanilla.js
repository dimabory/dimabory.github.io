export function init () {

  const timeNodes = document.querySelectorAll('[data-time]')

  const totalSeconds = [...timeNodes]
    .map(node => node.dataset.time)
    .map(timeCode => {
      const [mins, secs] = timeCode.split(':').map(parseFloat)
      return (mins * 60) + secs
    })
    .reduce((total, seconds) => total + seconds, 0)

  const {hours, mins, seconds} = {
    hours:   Math.floor(totalSeconds / 3600),
    mins:    Math.floor(totalSeconds % 3600 / 60),
    seconds: totalSeconds % 3600 % 60
  }

  document.querySelector('.result').innerHTML = `Total is ${hours}:${mins}:${seconds}`

}
