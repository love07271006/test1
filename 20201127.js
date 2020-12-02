//猜拳
const scissors = document.getElementById('scissors')
const rock = document.getElementById('rock')
const popper = document.getElementById('popper')
const user = document.getElementById('user')
const computer = document.getElementById('computer')
const result = document.getElementById('result')
//日曆
const calendar = document.getElementById('calendar')
const title = document.getElementById('title')

const calHeader = ['日', '一', '二', '三', '四', '五', '六']
//猜拳
const textarray = ['剪刀', '石頭', '布']

function judge(xxx) {
  if (xxx === 0) result.innerHTML = '平手'
  if (xxx == 1 || xxx == -2) result.innerHTML = '你贏ㄌ'
  if (xxx === -1 || xxx === 2) result.innerHTML = '你輸ㄌ'
}
let usernumber = 0
scissors.addEventListener('click', function () {
  const computernumber = Math.floor(Math.random() * 3) + 1
  usernumber = 1
  user.innerHTML = '你出' + textarray[usernumber - 1]
  computer.innerHTML = '電腦出' + textarray[computernumber - 1]
  let lastnumber = usernumber - computernumber
  judge(lastnumber)
})
rock.addEventListener('click', function () {
  const computernumber = Math.floor(Math.random() * 3) + 1
  usernumber = 2
  user.innerHTML = '你出' + textarray[usernumber - 1]
  computer.innerHTML = '電腦出' + textarray[computernumber - 1]
  let lastnumber = usernumber - computernumber
  judge(lastnumber)
})
popper.addEventListener('click', function () {
  const computernumber = Math.floor(Math.random() * 3) + 1
  usernumber = 3
  user.innerHTML = '你出' + textarray[usernumber - 1]
  computer.innerHTML = '電腦出' + textarray[computernumber - 1]
  let lastnumber = usernumber - computernumber
  judge(lastnumber)
})
//日曆
let tableHeader = ''
for (let i = 0; i < calHeader.length; i++) {
  tableHeader += `<th>${calHeader[i]}</th>`
}
calendar.innerHTML = `<thead><tr>${tableHeader}</tr></thead>`
