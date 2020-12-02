const rawData = `"學生姓名","國文","數學","英文" 
"陳小花",90,65,77
"張大頭",80,75,60
"李一百",100,60,85`
const data = document.getElementById('data')

// 先以分行符號來取得多行陣列值,split(字串轉陣列)
const rawDataArray = rawData.split('\n') //將rawData轉陣列 陣列0:姓名 陣列1:陳小花 ....陣列3:李一百
//          rawDataArray
//          索引0:姓名......
//          索引1:陳大花......
//          索引2:張大頭......
//          索引3:李一百......

// 索引0:   取代多餘的("")，然後分依逗號分取陣列值
const titleArray = rawDataArray[0].replaceAll('"', '').split(',')
//console.log(titleArray)
let dataDisplay = ''
// 標題的呈現部份 索引0
let titleDisplay = ''
for (let i = 0; i < titleArray.length; i++) {
  titleDisplay += `<th>${titleArray[i]}</th>`
}
console.log(titleDisplay)
dataDisplay += `<thead><tr>${titleDisplay}</tr><thead>`
data.innerHTML = dataDisplay

const twoArray = rawDataArray[1].replaceAll('"', '').split(',') // rawDataArray索引1的陣列多出來的引號刪掉 然後將裡面用逗號將字串分隔出索引值
let twoArrayDisplay = '' //宣告一個空字串讓迴圈可以列印
//先從索引值0開始套入空字串
for (let j = 0; j < twoArray.length; j++) {
  twoArrayDisplay += `<th>${twoArray[j]}</th>`
}
dataDisplay += `<thead><tr>${twoArrayDisplay}</tr><thead>`
data.innerHTML = dataDisplay

const threeArray = rawDataArray[2].replaceAll('"', '').split(',')
let threeArrayDisplay = ''
for (let k = 0; k < threeArray.length; k++) {
  threeArrayDisplay += `<th>${threeArray[k]}</th>`
}
dataDisplay += `<thead><tr>${threeArrayDisplay}</tr><thead>`
data.innerHTML = dataDisplay

const fourArray = rawDataArray[3].replaceAll('"', '').split(',') //rawDataArray索引3的陣列多出來的引號刪掉 然後將裡面用逗號將字串分隔出索引值
let fourArrayDisplay = ''
//索引值由0到3列印在表個內
for (let l = 0; l < fourArray.length; l++) {
  fourArrayDisplay += `<th>${fourArray[l]}</th>`
}
dataDisplay += `<thead><tr>${fourArrayDisplay}</tr><thead>` //表格外層包住fourArrayDisplay
data.innerHTML = dataDisplay
