const total = document.getElementById('total') //抓HTML設定為total的id
const add = document.getElementById('add')
const sub = document.getElementById('sub')
//顏色轉換
const text = document.getElementById('text')
const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const color3 = document.getElementById('color3')
const apply = document.getElementById('apply')
//bmi轉換
const youtall = document.getElementById('youtall') //輸入
const youheight = document.getElementById('youheight') //輸入
const bmi = document.getElementById('bmi') //轉換的
const youbmi = document.getElementById('youbmi') //顯示的
//美金轉台幣
const money = document.getElementById('money')
const usd2twd = document.getElementById('usd2twd')
const twd2usd = document.getElementById('twd2usd')
const moneyDisplay = document.getElementById('moneyDisplay')
//會員表單註冊
const name = document.getElementById('name')
const phone = document.getElementById('phone')
const address = document.getElementById('address')
const username = document.getElementById('username')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const register = document.getElementById('register')
const message = document.getElementById('message')

//會員表單註冊

register.addEventListener('click', function () {
  let error = ''
  if (!name.value.trim()) error += '姓名沒填'
  if (!phone.value.trim()) error += '電話沒填'
  if (!address.value.trim()) error += '住址沒填'
  if (!username.value.trim()) error += '帳號沒填'
  if (password.value !== password2.value) error += '輸入密碼不一樣'
  message.innerHTML = error ? error : '表單通過'
})

total.addEventListener('click', function () {
  total.innerHTML = +total.innerHTML + 1
}) //在total加裝監聽器 觸發條件為點擊click
add.addEventListener('click', function () {
  total.innerHTML = +total.innerHTML + 1
})

//對suB按鈕加裝監聽器抓到的類型為HTML之後相加
sub.addEventListener('click', function () {
  total.innerHTML = +total.innerHTML - 1
})
function newhex(num) {
  let hexString = num.toString(16) //hexString將數字先轉成16進字後進行下列判斷

  if (num.toString(16).length < 2) {
    hexString = '0' + num.toString(16)
  }
  return hexString
}

//顏色計數器
apply.addEventListener('click', function () {
  text.style.color =
    '#' + newhex(+color1.value) + newhex(+color2.value) + newhex(+color3.value)
})

//美金轉台幣
usd2twd.addEventListener('click', function () {
  moneyDisplay.innerHTML = +money.value * 28.53
})
//台幣轉美金
twd2usd.addEventListener('click', function () {
  moneyDisplay.innerHTML = (+money.value / 28.53).toFixed(2)
})

//bmi轉換
bmi.addEventListener('click', function () {
  youbmi.innerHTML = (
    +youheight.value / Math.pow(+youtall.value / 100, 2)
  ).toFixed(1)
})
