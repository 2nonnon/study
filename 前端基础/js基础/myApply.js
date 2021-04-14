function person(a, b, c, d){
    return {
        name: this.name,
        a, b, c, d
    }
}

let non = {
    name: "non"
}

Function.prototype.myApply = function(obj, arr){
    const context = obj || window
    let result
    context.p = this
    if(!arr) result = context.p()
    else result = context.p(...arr)
    delete context.p
    return result
}

const mApply = person.myApply(non, ["gua", "guo", "li", "tao"])
console.log(mApply);

const sApply = person.apply(non, ["gua", "guo", "li", "tao"])
console.log(sApply);