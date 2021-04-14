function person(a, b, c, d){
    return {
        name: this.name,
        a, b, c, d
    }
}

let non = {
    name: "non"
}

Function.prototype.es5Call = function(obj) {
    var context = obj || window
    context.p = this
    var args = []
    for(var i = 1; i < arguments.length; i++){
        args.push('arguments[' + i + ']')
    }
    var resulte = eval('context.p(' + args + ')')
    delete context.p
    return resulte
}

var eCall = person.es5Call(non, "gua", "guo", "li", "tao")
console.log(eCall);

Function.prototype.es6Call = function(obj, ...arr) {
    const context = obj || window
    context.p = this
    let resulte = context.p(...arr)
    delete context.p
    return resulte
}

const mCall = person.es6Call(non, "gua", "guo", "li", "tao")
console.log(mCall)

const sCall = person.call(non, "gua", "guo", "li", "tao")
console.log(sCall)