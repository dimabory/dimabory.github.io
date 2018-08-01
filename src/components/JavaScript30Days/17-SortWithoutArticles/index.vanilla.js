export function init () {
  const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
  ]

  function strip (bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim()
  }

  function sortBands (bands, order) {
    return bands.slice().sort((a, b) => {
      const cmp = a => b => strip(a) > strip(b)
      if (order) {
        return cmp(a)(b) ? 1 : -1
      }
      return cmp(a)(b) ? -1 : 1
    })
  }

  function render (bands) {
    document.querySelector('#bands').innerHTML = bands.map(band => `<li>${band}</li>`).join('')
  }

  document.querySelectorAll('.btn.btn--sort')
          .forEach(btn => btn.addEventListener('click', e => {
              render(
                sortBands(bands, Number(e.target.dataset.sort))
              )
            })
          )

  document.querySelector('.btn.btn--reset').addEventListener('click', () => render(bands))

  render(bands)
}
