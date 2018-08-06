export function init () {
  const msg            = new SpeechSynthesisUtterance()
  const voicesDropdown = document.querySelector('[name="voice"]')
  const options        = document.querySelectorAll('[type="range"], [name="text"]')
  const speakButton    = document.querySelector('#speak')
  const stopButton     = document.querySelector('#stop')

  let voices = []

  msg.text = document.querySelector('[name=text]').value

  function populateVoices () {
    voices = this.getVoices()

    voicesDropdown.innerHTML = voices
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('')
  }

  function setVoice () {
    msg.voice = voices.find(voice => voice.name === this.value)
    toggle()
  }

  function toggle (startOver = true) {
    speechSynthesis.cancel()
    if (startOver) {
      speechSynthesis.speak(msg)
    }
  }

  function setOption () {
    msg[this.name] = this.value
    console.log(this.name, this.value)
    toggle()
  }

  voicesDropdown.addEventListener('change', setVoice)
  speechSynthesis.addEventListener('voiceschanged', populateVoices)
  options.forEach(option => option.addEventListener('change', setOption))
  speakButton.addEventListener('click', toggle)
  stopButton.addEventListener('click', () => toggle(false))
}
