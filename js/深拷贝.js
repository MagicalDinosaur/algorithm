function deepClone(obj) {
    // 首先判断 Date 和 RegExp 类型
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Date) return new Date(obj);
    // 基础数据类型直接返回
    if (obj === null || (typeof obj != 'object')) return obj;
    // obj如果是数组 obj.constructor 返回 [function:Array],obj如果是对象返回 [function:Object]
    let t = new obj.constructor();
    // 复杂类型进行递归
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            t[key] = deepClone(obj[key]);
        }
    }
    return t;
}

let obj = {
    a: 1,
    b: new Date(),
    c: function () { console.log('c') },
    d: [1, 2, 3, 4],
    f: {
        g: 'abc',
        h: 1234
    }
}

var obj2 = deepClone(obj);
console.log(obj2);