/**
 * 模拟实现 instanceof
 */
function instanceOf(A, B) {
    while (true) {
        // 原型链到头仍未找到返回false
        if(A === null){
            return false
        }
        if (A === B.prototype) {
            console.log(A,B)
            return true
        }
        A = A.__proto__
    }
}

console.log(instanceOf(String('12345'),String))
// console.log(String('12345') instanceof String)