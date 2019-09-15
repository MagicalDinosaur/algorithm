/**
 * 数组去重
 */


// ES6 Set 结构实现
// Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
function uniq(arr) {
    return [...new Set(arr)]
}


// 正常的for循环查找
function uniq2(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result;
}


// 利用 reduce函数
function uniq3(arr) {
    return arr.reduce((result, item) => {
        var result = result.includes(item) ? result : result.push(item);
        console.log(result)
        return result;
    }, [])
}
let a = [1, 2, 3, 3, 4, 4, 5];
// console.log(uniq3(a));

// 方法四：
function uniq4(list) {
    // 数组去重，要求时间复杂度O(nlogn) 空间复杂度O(1)
    // 1 1 2 2 3 4
    // 当然你可以自己写快排等nlogn的算法
    list = list.sort((a, b) => a - b);
    let slowP = 0;
    for (let fastP = 0; fastP < list.length; fastP++) {
        if (list[fastP] !== list[slowP]) {
            slowP++;
            list[slowP] = list[fastP];
        }
    }
    return list.slice(0, slowP + 1);
}
console.log(uniq4(a));

/***
 * 复杂的数组去重
 * 
 * 如传入的数组元素为[123, "meili", "123", "mogu", 123]，则输出：[123, "meili", "123", "mogu"]
 * 如传入的数组元素为[123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"]，则输出：[123, [1, 2, 3], [1, "2", 3], "meili"]
 * 如传入的数组元素为[123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"]，则输出：[123, {a: 1}, {a: {b: 1}}, {a: "1"}, "meili"]
 */

// 辅助函数 用于类型获取
var getType = (function () {
    const class2type = { '[object Boolean]': 'boolean', '[object Number]': 'number', '[object String]': 'string', '[object Function]': 'function', '[object Array]': 'array', '[object Date]': 'date', '[object RegExp]': 'regexp', '[object Object]': 'object', '[object Error]': 'error', '[object Symbol]': 'symbol' };
    return function getType(obj) {
        if (obj == null) {
            return obj + '';
        }
        const str = Object.prototype.toString.call(obj);
        return typeof obj === 'object' || typeof obj === 'function' ? class2type[str] || 'object' : typeof obj;
    };
})();

/**
 * 判断两个元素是否相等
 * 在 === 的基础上 有如下扩展规则
 * 规则1：如果是数组 则每个元素相等认为两个数组相等
 * 规则2：如果是对象 则每个键的值都相等则认为两个对象相等
 * @param {any} target 比较元素
 * @param {any} other 其他元素
 * @returns {Boolean} 是否相等
 */
function isEqual(target, other) {
    const t1 = getType(target);
    const t2 = getType(other);

    // 类型不同
    if (t1 !== t2) return false;
    // 数组类型
    if (t1 === 'array') {
        if (target.length !== other.length) return false; // 数组长度不等
        // 比较当前数组和另一个数组中的每个元素
        return target.every((item, i) => {
            // return item === target;
            return isEqual(item, other[i]);
        });
    }
    // 对象类型
    if (t2 === 'object') {
        // 对象情况类似数组 但是遍历方法区别一下
        const keysArr = Object.keys(target);
        if (keysArr.length !== Object.keys(other).length) return false;
        return keysArr.every(k => {
            return isEqual(target[k], other[k]);
        });
    }
    return target === other;
}

/**
 * 对输入数组按照指定规则进行去重
 *
 * @param {Array<any>} arr 待去重的数组
 * @returns {Array<any>} 去重后的新数组
 */
function unique(arr) {
    return arr.reduce((outputArr, current) => {
        const isUnique = !outputArr.some(item => isEqual(current, item));
        if (isUnique) {
            outputArr.push(current);
        }
        return outputArr;
    }, []);
}
