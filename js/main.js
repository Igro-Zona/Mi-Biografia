var item1 = document.querySelector('#item1')
var item2 = document.querySelector('#item2')
var item3 = document.querySelector('#item3')
var item4 = document.querySelector('#item4')
var prev = document.querySelector('#prev')
var next = document.querySelector('#next')

var helper
const slider = [item1, item2, item3, item4]

next.addEventListener('click', () => {
  slider[0].classList.add('left')
  slider[0].classList.remove('active')
  slider[1].classList.add('active')
  slider[1].classList.remove('right')
  slider[2].classList.add('right')
  slider[2].classList.remove('hidden')
  slider[3].classList.add('hidden')
  slider[3].classList.remove('left')

  helper = slider[0]
  slider.splice(0, 1)
  slider.push(helper)
})

prev.addEventListener('click', () => {
  slider[0].classList.add('right')
  slider[0].classList.remove('active')
  slider[3].classList.add('active')
  slider[3].classList.remove('left')
  slider[2].classList.add('left')
  slider[2].classList.remove('hidden')
  slider[1].classList.add('hidden')
  slider[1].classList.remove('right')

  helper = slider[3]
  slider.pop()
  slider.unshift(helper)
})
