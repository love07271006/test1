const dice = document.getElementById('dice')
const point = document.getElementById('point')
const start = document.getElementById('start')
let dicetag = ''
start.addEventListener('click', function () {
  let p = Math.floor(Math.random() * 6) + 1

  switch (p) {
    case 1:
      dicetag = '<i class="fas fa-dice-one"></i>'
      break
    case 2:
      dicetag = '<i class="fas fa-dice-two"></i>'
      break
    case 3:
      dicetag = '<i class="fas fa-dice-three"></i>'
      break
    case 4:
      dicetag = '<i class="fas fa-dice-four"></i>'
      break
    case 5:
      dicetag = '<i class="fas fa-dice-five"></i>'
      break
    case 6:
      dicetag = '<i class="fas fa-dice-six"></i>'
      break
  }
  dice.innerHTML = dicetag
  point.innerHTML = p + '點'
})
