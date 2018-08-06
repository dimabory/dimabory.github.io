export function init () {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()

  let p       = document.createElement('p')
  const words = document.querySelector('.words')
  words.appendChild(p)

  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
                            .map(result => result[0])
                            .map(result => result.transcript)
                            .join('')

    p.textContent = transcript
    if (e.results[0].isFinal) {
      p = document.createElement('p')
      words.appendChild(p)
    }

    if (transcript.includes('start')) {
      document.querySelector('.btn--show-code').click()
    }
  })

  recognition.addEventListener('end', recognition.start)
  recognition.addEventListener('error', err => {
    console.error(err)
    recognition.stop()
    recognition.removeEventListener('end', recognition.start)

    const errNode = document.createElement('div')
    errNode.classList.add('d-flex', 'justify-content-center')
    let errMessage = ''
    if ('not-allowed' === err.error) {
      errMessage = 'Permission denied. Please allow your media device to start speech recognition.'
    } else {
      errMessage = 'An error occurred: ' + err.error
    }
    errNode.innerHTML = `<span class="text-danger">${errMessage}</span>`

    words.parentNode.insertBefore(errNode, words)
  })

  recognition.start()
}
