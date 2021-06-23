// \u4e00-\u9fa5
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
// 通过utf8区间，获取对应字符串
const getStrFromUtf8 = (list) => {
    let all = ''
    list.forEach(item => {
        let start = item.start
        let end = item.end
        for (let i = start; i <= end; i++) {
            all += getCharFromUtf8(i)
        }
    })
    console.log('==========字符总长度', all.length)
    return all
}
const getCharFromUtf8 = code => {
    let char = String.fromCodePoint(code)
    return char
}
const getCn = () => {
    let all = getStrFromUtf8([
        {
            start: 0x4e00,
            end: 0x9fa5
        }
    ])
    return all
}

module.exports = {
    getCn
}



const path = require('path')
let pathStr = 'D:\workspace\project\web\danyou-web-ssr'
console.log('==========',path.relative('.',pathStr))