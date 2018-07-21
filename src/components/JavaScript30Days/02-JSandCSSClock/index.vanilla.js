export function init () {

  const secondsHand = document.querySelector('.second-hand')
  const minsHand    = document.querySelector('.min-hand')
  const hoursHand   = document.querySelector('.hour-hand')

  function setTime () {

    const now = new Date()

    const hours   = now.getHours()
    const mins    = now.getMinutes()
    const seconds = now.getSeconds()

    const rotationInDegrees = (value, rate = 60) => (value / rate) * 360 + 90

    secondsHand.style.transform = `rotate(${rotationInDegrees(seconds)}deg)`
    minsHand.style.transform    = `rotate(${rotationInDegrees(mins)}deg)`
    hoursHand.style.transform   = `rotate(${rotationInDegrees(hours, 12)}deg)`
    
  }

  setInterval(setTime, 1000)

}
