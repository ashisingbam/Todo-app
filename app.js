const itemsList = document.querySelector('.items-list')
const currentUl = document.querySelector('.current-item').querySelector('ul')
const currentLi = currentUl.querySelector('li')
const currentInput = currentLi.querySelector('input')
const itemsUl = itemsList.querySelector('ul')
const itemsLi = itemsUl.querySelectorAll('li')
const markCircle = itemsUl.querySelectorAll('.select-circle')
const removeItem = itemsUl.querySelectorAll('.remove-added-item')

var anu = 24
// console.log(markCircle)
// console.log(itemsLi)
// console.log(itemsUl)
// console.log(currentLi)

currentUl.addEventListener('keypress', function ashi(event) {

  if (event.key === 'Enter') {
    if (currentInput.value) {

      let newLi = document.createElement('li')
      // Array.from(itemsLi).push(newLi)
      const newDiv = document.createElement('div')
      newDiv.classList.add('add-new-item')
      const newCircle = document.createElement('div')
      newCircle.classList.add('select-circle')
      const circleImg = document.createElement('img')
      circleImg.src = './images/icon-check.svg'
      circleImg.classList.add('check-icon')
      newCircle.append(circleImg)
      const newItemTitle = document.createElement('p')
      newItemTitle.innerText = currentInput.value
      newItemTitle.classList.add('item-title')
      currentInput.value = ''
      const newRemoveIcon = document.createElement('div')
      newRemoveIcon.classList.add('remove-added-item')
      newCircle.addEventListener('click', () => {
        circleImg.classList.toggle('display-block')
        newCircle.classList.toggle('background-image-circle')
        newCircle.nextElementSibling.classList.toggle(
          'item-title-stike-through'
        )
        newCircle.nextElementSibling.nextElementSibling.classList.toggle(
          'display-none'
        )
      })
      newDiv.append(newCircle)
      newDiv.append(newItemTitle)
      newRemoveIcon.addEventListener('click', () => {
        newRemoveIcon.parentElement.parentElement.style.display = 'none'
      })
      newDiv.append(newRemoveIcon)
      newLi.append(newDiv)
      // console.log(newLi.nextSibling)
      itemsUl.append(newLi)
      console.log(newLi)
      console.log(Array.from(itemsLi).push(newLi))
      Array.from(itemsLi).push(newLi)

      console.log(itemsLi)
    }
  }
})
markCircle.forEach((circle) => {
  circle.addEventListener('click', () => {
    circle.querySelector('img').classList.toggle('display-block')
    circle.classList.toggle('background-image-circle')
    circle.nextElementSibling.classList.toggle('item-title-stike-through')
    circle.nextElementSibling.nextElementSibling.classList.toggle(
      'display-none'
    )
    circle.parentNode.parentElement.classList.toggle('uncheck-list')
    circle.parentNode.parentElement.classList.toggle('completed')
    filter()
    console.log(circle.parentNode.parentElement)
    console.log(circle.parentNode.parentElement)
  })
})



