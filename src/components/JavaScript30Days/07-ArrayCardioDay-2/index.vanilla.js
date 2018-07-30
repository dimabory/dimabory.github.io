export function init () {
  const people   = [
    {name: 'Wes', year: 1988},
    {name: 'Kait', year: 1986},
    {name: 'Irv', year: 1970},
    {name: 'Lux', year: 2015}
  ]
  const comments = [
    {text: 'Love this!', id: 523423},
    {text: 'Super good', id: 823423},
    {text: 'You are the best', id: 2039842},
    {text: 'Ramen is my fav food ever', id: 123523},
    {text: 'Nice Nice Nice!', id: 542328}
  ]

  const cardio = {
    // is at least one person 19 or older?
    thereIsAdult: people.some(person => (new Date()).getFullYear() - person.year >= 19),
    // is everyone 19 or older?
    isEveryAdult: people.every(person => (new Date()).getFullYear() - person.year >= 19),
    // Find is like filter, but instead returns just the one you are looking for
    comment:      comments.find(({id, ...rest}) => id === 823423),
    index:        comments.findIndex(({id, ...rest}) => id === 823423),

    // delete the comment with the ID of 823423
    delete () {
      return [
        ...comments.slice(0, this.index),
        ...comments.slice(this.index + 1)
      ]
    }
  }

  console.log(cardio)
  console.table(cardio.delete())

}
