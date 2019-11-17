// 递归方式实现
function curry(fn, ...args) {
    // fn.length 原始函数的形参个数
    return args.length < fn.length ? (...args1) => curry(fn, ...args, ...args1) : fn(...args)
}


// 非递归方式实现 
const curry2 = (fn) => {
    // fn.length 可以拿到函数定义的形参数量
    // console.log(fn.length)
    if (fn.length <= 1) return fn;
    const generator = (args, rest) => {
        console.log(args, rest)
        return (rest <= 0 ? fn(...args) : (...arg) => generator([...args, ...arg], rest - arg.length));
    }
    return generator([], fn.length);
};



function sumFunc(a, b, c, d, e, f) {
    // let sum = [...arguments].reduce((a, b) => a + b)
    console.log([...arguments])
    // console.log(sum)
}


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

function curry3(fn) {
    const func = (argsAll) => {
        // console.log(argsAll, argsAll.length , fn.length)
        return argsAll.length >= fn.length ? fn(...argsAll) :  (...args) => func([...argsAll, ...args], fn.length)
    }
    return func([]);
}

// var sum2 = curry2(sumFunc);
// sum2(1)(2, 5)(3)(1)(1)

var sum3 = curry3(sumFunc);
const sum = sum3(1)(2, 5)(3)(1)(1)
console.log(sum)
// sum3(1)

// 实现一个add方法，使计算结果能够满足如下预期：
add(1)(2)(3) = 6;
add(1, 2, 3)(4) = 10;
add(1)(2)(3)(4)(5) = 15;

