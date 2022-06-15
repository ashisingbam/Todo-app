const itemsList = document.querySelector('.items-list')
const currentUl = document.querySelector('.current-item').querySelector('ul')
const currentLi = currentUl.querySelector('li')
const currentInput = currentLi.querySelector('input')
const itemsUl = itemsList.querySelector('ul')
const itemsLi = itemsUl.querySelectorAll('li')
const markCircle = itemsUl.querySelectorAll('.select-circle')
const removeItem = itemsUl.querySelectorAll('.remove-added-item')
const itemsLiArray = Array.from(itemsLi)
// console.log(markCircle)
// console.log(itemsLi)
// console.log(itemsUl)
// console.log(currentLi)

currentInput.addEventListener('click', () => {
  currentInput.value = ""
})

console.log(itemsLiArray)

itemsLiArray.forEach((item, i) => {
  item.addEventListener('mouseenter', () => {
    console.log('hello')
    removeItem[i].style.display = 'block'
  })
  item.addEventListener('mouseleave', () => {
    console.log('hello')
    removeItem[i].style.display = 'none'
  })
})

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
        newCircle.parentNode.parentElement.classList.toggle('uncheck-list')
        newCircle.parentNode.parentElement.classList.toggle('completed')
        filter()
      })
      newDiv.append(newCircle)
      newDiv.append(newItemTitle)
      newRemoveIcon.addEventListener('click', () => {
        newRemoveIcon.parentElement.parentElement.style.display = 'none'
        newRemoveIcon.parentElement.parentElement.classList.remove(
          'uncheck-list'
        )
        newRemoveIcon.parentElement.parentElement.classList.add('completed')
        filter()
      })
      newDiv.append(newRemoveIcon)
      newLi.append(newDiv)
      newLi.classList.add('uncheck-list')
      itemsUl.append(newLi)
      itemsLiArray.push(newLi)
      filter()
      console.log(itemsLiArray)
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
    // console.log(circle.parentNode.parentElement)
    // console.log(circle.parentNode.parentElement)
  })
})
removeItem.forEach((item) => {
  item.addEventListener('click', () => {
    item.parentElement.parentElement.style.display = 'none'
    item.parentElement.parentElement.classList.remove('uncheck-list')
    item.parentElement.parentElement.classList.add('completed')
    filter()
  })
})
function filter() {
  let liCount = 0
  for (li of itemsLiArray) {
    if (li.classList.contains('uncheck-list')) {
      liCount = liCount + 1
    }
  }
  const leftItems = document.querySelector('.left-items')
  leftItems.innerText = `${liCount} items left`
  // console.log(liCount)
}
filter()

const selectAll = document.querySelector('.select-all')
console.log(selectAll)
selectAll.addEventListener('click', () => {
  itemsLiArray.filter((li) => {
  if(li.classList.contains('uncheck-list') || li.classList.contains('completed')) {
    li.style.display = 'block'
  } 
  })
})

const selectActive = document.querySelector('.select-active')
selectActive.addEventListener('click', () => {
  itemsLiArray.filter((li) => {
    if (li.classList.contains('uncheck-list')) {
      console.log(li)
      li.style.display = 'block'
      return li
    }
    else {
      li.style.display = 'none'
    }
  })
})

const selectCompleted = document.querySelector('.select-completed') 
selectCompleted.addEventListener('click', () => {
  itemsLiArray.filter((li) => {
    if(li.classList.contains('completed')) {
      li.style.display = 'block'
    }
    else {
      li.style.display = 'none'
    }
  })
})

const clearCompleted = document.querySelector('.clear-completed')
clearCompleted.addEventListener('click', () => {
  itemsLiArray.filter((li) => {
    if(li.classList.contains('completed')) {
      li.remove()
    }
  })
})