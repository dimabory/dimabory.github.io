export function init () {

  const LOCAL_STORAGE_KEY = 'items'

  const Storage = {
    LocalStorage: window.localStorage,
    get [LOCAL_STORAGE_KEY] () {
      return JSON.parse(this.LocalStorage.getItem(LOCAL_STORAGE_KEY)) || []
    },
    set [LOCAL_STORAGE_KEY] (value) {
      if (typeof value !== 'string') {
        value = JSON.stringify(value)
      }
      this.LocalStorage.setItem(LOCAL_STORAGE_KEY, value)
    }
  }

  const addItems  = document.querySelector('.add-items')
  const actItems  = document.querySelector('.act-items')
  const itemsList = document.querySelector('.plates')
  const items     = Storage[LOCAL_STORAGE_KEY]

  function addItem (e) {
    e.preventDefault()

    const text = (this.querySelector('[name=item]')).value

    items.push({
      text,
      done: false
    })

    renderList(items, itemsList)
    Storage.items = items

    this.reset()
  }

  function renderList (plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
      return `
        <li>
          <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''}/>
          <label for="item${i}">${plate.text}</label>
        </li>
      `
    }).join('')
  }

  function toggleDone (index) {
    const item = items[index]
    item.done  = !item.done

    renderList(items, itemsList)
    Storage.items = items
  }

  function clearItems () {
    items.splice(0)
    Storage[LOCAL_STORAGE_KEY] = items

    renderList(items, itemsList)
  }

  function toggleAll (checked) {
    items.forEach((item, index) => {
      items[index].done = !checked
      toggleDone(index)
    })
  }

  addItems.addEventListener('submit', addItem)
  itemsList.addEventListener('click', e => {
    if (!e.target.matches('input[type=checkbox]')) {
      return
    }

    toggleDone(e.target.dataset.index)
  })

  actItems.querySelectorAll('button').forEach(btn => btn.addEventListener('click', e => {
    switch (e.target.dataset.act) {
      case 'clearItems':
        clearItems()
        break
      case 'checkAll':
        toggleAll(true)
        break
      case 'uncheckAll':
        toggleAll(false)
        break
      default:
        break
    }
  }))

  renderList(items, itemsList)

}
