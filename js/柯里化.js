// 递归方式实现
function curry(fn, ...args) {
    // fn.length 原始函数的形参个数
    return args.length < fn.length ? (args1) => curry(fn, ...args, args1) : fn(...args)
}


// 非递归方式实现 
const curry2 = (fn) => {
    // fn.length 可以拿到函数定义的形参数量
    if (fn.length <= 1) return fn;
    const generator = (args, rest) => {
        return (!rest ? fn(...args) : arg => generator([...args, arg], rest - 1));
    }
    return generator([], fn.length);
};



function sumFunc(a, b, c) {
    console.log(a + b + c);
}
var sum = curry2(sumFunc);
sum(1)(2, 5)(3)(4)


/**
 * 实现一个add函数
 * 满足：
 *  add(1); 	  // 1
 *  add(1)(2);    // 3
 *  add(1)(2)(3)；// 6
 *  add(1)(2, 3); // 6
 *  add(1, 2)(3); // 6
 *  add(1, 2, 3); // 6
 */
function add() {
    let args = [].slice.call(arguments);
    let fn = function () {
        let fn_args = [].slice.call(arguments)
        return add.apply(null, args.concat(fn_args))
    }
    fn.toString = function () {
        return args.reduce((a, b) => a + b)
    }
    return fn
}

function add2() {
    let args = [...arguments];

    return function () {
        let args2 = [...arguments]
        return
    }
    function sum(args) {
        return args.reduce((a, b) => a + b)
    }
}

// console.log(add(1)(2)(3))


