export function init () {
  const checkbox = document.querySelectorAll('.inbox input[type="checkbox"]')

  let lastChecked

  function handleCheck (e) {
    let inBetween = false

    if (e.shiftKey) {

      checkbox.forEach(checkbox => {
        if (checkbox === this || checkbox === lastChecked) {
          inBetween = !inBetween
        }
        if (inBetween) {
          checkbox.checked = this.checked
        }
      })
    }

    if (!this.checked) {
      lastChecked.checked = false
      lastChecked         = [...checkbox].filter(checkbox => checkbox.checked).pop()
    } else {
      lastChecked = this
    }
  }

  checkbox.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
}
