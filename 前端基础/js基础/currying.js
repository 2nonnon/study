// 定制函数的函数


// 1.参数复用
function uri_curring(protocal, hostname){
    return function(pathname){
        return `${protocal}${hostname}${pathname}`
    }
}

const uri_danlaoshi = uri_curring('https://', 'www.danlaoshi.com')

const uri1 = uri_danlaoshi('/点赞')
const uri2 = uri_danlaoshi('/收藏')
const uri3 = uri_danlaoshi('/投币')

console.log(uri1, uri2, uri3)

// 2.浏览器兼容
const whichEvent = (function(){
    if(window.addEventListener){
        return function(element, type, listener, useCapture){
            element.addEventListener(type, function(e){
                listener.call(element, e)
            }, useCapture)
        }
    } else if(window.attachEvent){
        return function(element, type, handler){
            element.attachEvent('on'+type, function(e){
                handler.call(element, e)
            })
        }
    }
})//()

// 3.面试题
// add(1)(2)(3)         6
// add(1,2,3)(5)        10
// add(1)(2)(3)(4)(5)   15
// 用函数柯里化实现

function add(){
    let args = Array.prototype.slice.call(arguments)

    let inner = function(){
        args.push(...arguments)
        let result = args.reduce(function(prev, cur){
            return prev + cur
        })
        console.log(result)
        return inner
    }

    return inner
}

const result = add(1)(2)(3)(4)(5)

// 4.实战可能用到的柯里化箭头函数
const nameList1 = [
    {mid: 'hashaki', profession: '中单'},
    {mid: 'shahuang', profession: '中单'},
    {mid: 'kapai', profession: '中单'},
    {mid: 'fatiao', profession: '中单'}
]

const nameList2 = [
    {adc: 'lunzima', profession: 'adc'},
    {adc: 'vn', profession: 'adc'},
    {adc: 'laoshu', profession: 'adc'}
]

const curring = name => element => element[name]
const name_mid = curring('mid')
const name_adc = curring('adc')

console.log(nameList1.map(name_mid))
console.log(nameList2.map(name_adc))
