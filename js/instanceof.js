/**
 * 模拟实现 instanceof
 */
function instanceOf(target, origin) {
    while (true) {
        // 原型链到头仍未找到返回false
        if(target === null){
            return false
        }
        if (target === origin.prototype) {
            return true
        }
        target = target.__proto__
    }
}

console.log(instanceOf(String('12345'),String))
// console.log(String('12345') instanceof String)