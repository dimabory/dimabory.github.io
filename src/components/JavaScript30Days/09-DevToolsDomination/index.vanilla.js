export function init () {
  window.makeGreen = function makeGreen () {
    const p          = document.querySelector('p')
    p.style.color    = 'var(--secondary)'
    p.style.fontSize = '50px'
  }
  const dogs       = [{name: 'Snickers', age: 2}, {name: 'hugo', age: 8}]

  // Regular
  console.log('debug')

  // Interpolated
  console.log('Hello I am a %s string!', '💩')
  console.log(`Hello I am a ${'💩'} string`)

  // Styled
  console.log('%c I am some great text', 'font-size: 20px; background: yellow; text-shadow: 1px 1px 0 green')

  // warning!
  console.warn('Oh no')

  // Error :|
  console.error('Shit!')

  // Info
  console.info('Info!')

  // Testing
  const p = document.querySelector('p')
  console.assert(p.classList.contains('ouch'), 'That is wrong!')
  console.assert(1 === 1, 'That is wrong!')

  // clearing
  console.clear()

  // Viewing DOM Elements
  console.log(p)
  console.dir(p)

  console.clear()
  // Grouping together
  dogs.forEach(dog => {
    // console.group(`${dog.name}`)
    console.groupCollapsed(`${dog.name}`)
    console.log(dog)
    console.groupEnd(`${dog.name}`)
  })

  // counting
  console.count('Wes')
  console.count('Wes')
  console.count('Steve')
  console.count('Wes')
  console.count('Steve')
  console.count('Wes')

  // timing
  console.time('fetching data')
  fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('fetching data')
      console.log(data)
    })

  console.table(dogs)
}


