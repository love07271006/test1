//年月日下拉式選單
const year = document.getElementById('year')
const month = document.getElementById('month')
const date = document.getElementById('date')
const checkage = document.getElementById('checkage')
const message = document.getElementById('message')
//年月日下拉式選單
let yearstring = '<option value="0">西元</option>'
let monthstring = '<option value="0">月</option>'
let datestring = '<option value="0">日</option>'
for (let i = 1910; i < 2021; i++) {
  yearstring += `<option value="${i}">${i}</option>` //樣板字串
}
for (let j = 1; j < 13; j++) {
  monthstring += `<option value="${j}">${j}</option>` //樣板字串
}
for (let k = 1; k < 32; k++) {
  datestring += `<option value="${k}">${k}</option>` //樣板字串
}
year.innerHTML = yearstring
month.innerHTML = monthstring
date.innerHTML = datestring

let birthY = 0
let birthM = 0
let birthD = 0
year.addEventListener('change', function () {
  // 更新選擇的變數值
  birthY = +year.value //將y選擇到的值放入year
  if (birthY && birthM) {
    const day = new Date(birthY, birthM, 0).getDate()
    let datestring = '<option value="0">選擇日期</option>'
    for (let k = 1; k < day + 1; k++) {
      datestring += `<option value="${k}">${k}</option>` //樣板字串
    }
    date.innerHTML = datestring
  }
})
month.addEventListener('change', function () {
  // 更新選擇的變數值
  birthM = +month.value //將y選擇到的值放入month
  if (birthY && birthM) {
    const day = new Date(birthY, birthM, 0).getDate()
    let datestring = '<option value="0">選擇日期</option>'
    for (let k = 1; k < day + 1; k++) {
      datestring += `<option value="${k}">${k}</option>` //樣板字串
    }
    date.innerHTML = datestring
  }
})
date.addEventListener('change', function () {
  birthD = +date.value
})

checkage.addEventListener('click', function () {
  if (birthY && birthM && birthD) {
    const now = new Date() //獲取現在日期

    const nowyear = now.getFullYear()
    const nowmonth = now.getMonth() + 1
    const nowday = now.getDate()

    let isover18 = false //宣告一個變數監察是否18

    if (nowyear - birthY > 18) isover18 = true
    if (nowyear - birthY == 18 && nowmonth > birthM) isover18 = true
    if (nowyear - birthY == 18 && nowmonth == birthM && nowday > birthD)
      isover18 = true
    message.innerHTML = isover18 ? '已滿18' : '滾吧' //滿足上面3個條件印出已滿18否則則印滾吧
  }
})
