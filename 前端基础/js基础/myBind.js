function person(a, b, c, d) {
  return {
    name: this.name,
    a,
    b,
    c,
    d,
  }
}

person.prototype.test = 'hanhan'

const non = {
  name: 'non',
}

Function.prototype.myBind = function (obj, ...arr1) {
    if(typeof this !== 'function'){
        throw new TypeError('not a function')
    }
  const that = this,
        o = function () {},
        newF = function (...arr2) {
                const arr = arr1.concat(arr2)
                let result
                if (this instanceof o) result = that.apply(this, arr)
                else result = that.apply(obj, arr)
                return result
            }
  o.prototype = that.prototype
  newF.prototype = new o()
  return newF
}

const mBind = person.myBind(non, 'gua', 'guo', 'li')
console.log(mBind())
console.log(mBind('tao'))
console.log(mBind('tao', 233))

const mBindExample1 = new mBind()
const mBindExample2 = new mBind('tao')
console.log(mBindExample1)
console.log(mBindExample2)

console.log('.............')

const sBind = person.bind(non, 'gua', 'guo', 'li')
console.log(sBind())
console.log(sBind('tao'))
console.log(sBind('tao', 233))

const sBindExample1 = new sBind()
const sBindExample2 = new sBind('tao')
console.log(sBindExample1)
console.log(sBindExample2)
