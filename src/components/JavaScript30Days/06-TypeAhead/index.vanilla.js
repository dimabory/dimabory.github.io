export function init () {
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

  const cities = []

  fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data))

  function findMatches (query, cities) {
    const re = new RegExp(query, 'gi')
    return cities.filter(place => {
      return place.city.match(re) || place.state.match(re)
    })
  }

  function displayMatches () {
    let html = `
       <li>Filter for a city</li>
       <li>or a state</li>
    `
    if (this.value.trim()) {
      const re = new RegExp(this.value, 'gi')
      html     = findMatches(this.value, cities)
        .map(place => {
          const cityName  = place.city.replace(re, `<span class="hl">${this.value}</span>`)
          const stateName = place.state.replace(re, `<span class="hl">${this.value}</span>`)
          return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
      `
        }).join('')
    }

    suggestions.innerHTML = html
  }

  function numberWithCommas (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const searchInput = document.querySelector('.search')
  const suggestions = document.querySelector('.suggestions')
  searchInput.addEventListener('input', displayMatches)

}
