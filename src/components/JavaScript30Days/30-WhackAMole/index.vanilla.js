export function init () {
  const holes      = document.querySelectorAll('.hole')
  const scoreBoard = document.querySelector('.score')
  const moles      = document.querySelectorAll('.mole')
  const result     = document.querySelector('.result')
  const bestScore  = document.querySelector('.best-score')

  const GAME_DURATION = 20 * 1000

  const MODE = {
    default: {
      min: 200,
      max: 1000
    },
    expert:  {
      min: 20,
      max: 400
    }
  }

  const BEST_SCORE_LOCAL_STORAGE_KEY = 'whack-a-mole-best-score'

  let lastHole
  let timeUp = false
  let score  = 0

  const isBestScoreReached      = score => window.localStorage.getItem(BEST_SCORE_LOCAL_STORAGE_KEY) < score
  const setBestScore            = score => window.localStorage.setItem(BEST_SCORE_LOCAL_STORAGE_KEY, score.toString())
  const setBestScoreTextContent = score => bestScore.textContent = `You best score is ${score}`

  function randomTime (min, max) {
    return Math.round(Math.random() * (max - min) + max)
  }

  function randomHole (holes) {
    const idx  = Math.floor(Math.random() * holes.length)
    const hole = holes[idx]
    if (holes === lastHole) {
      return randomHole(holes)
    }

    lastHole = hole
    return hole
  }

  function peep () {
    const form = document.forms.namedItem('start-game-form')
    const mode = MODE[form.mode.value]
    const time = randomTime(mode.min, mode.max)
    const hole = randomHole(holes)
    hole.classList.add('up')
    setTimeout(() => {
      hole.classList.remove('up')
      if (!timeUp) {
        peep()
      }
    }, time)
  }

  function startGame (e) {
    e.preventDefault()
    result.textContent     = ''
    scoreBoard.textContent = '0'
    score                  = 0
    timeUp                 = false
    peep()
    setTimeout(() => {
      timeUp             = true
      result.textContent = `Your result is ${score}`
      if (isBestScoreReached(score)) {
        setBestScore(score)
        setBestScoreTextContent(score)
        result.textContent += '. Whoo! It\'s your the new best score!'
      }
    }, GAME_DURATION + 2000)
  }

  function bonk (e) {
    if (!e.isTrusted) {
      return
    }

    this.parentNode.classList.remove('up')
    score++
    scoreBoard.textContent = score
  }

  const once = fn => {
    let called = false
    return function (...args) {
      this.addEventListener('transitionend', () => called = false, {once: true})
      if (called) return
      called = true
      return fn.apply(this, args)
    }
  }

  document.querySelector('.start-game').addEventListener('click', startGame)
  moles.forEach(mole => mole.addEventListener('click', once(bonk)))
  setBestScoreTextContent(window.localStorage.getItem(BEST_SCORE_LOCAL_STORAGE_KEY) || 0)

}
