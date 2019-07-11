// 递归方式实现
function curry(fn, ...args) {
    // fn.length 原始函数的形参个数
    return args.length < fn.length ? (args1) => curry(fn, ...args, args1) : fn(...args)
}


// 非递归方式实现 
const curry2 = (fn) => {
    if (fn.length <= 1) return fn;
    const generator = (args, rest) => (!rest ? fn(...args) : arg => generator([...args, arg], rest - 1));
    return generator([], fn.length);
};



function sumFunc(a, b, c) {
    console.log(a + b + c);
}
var sum = curry(sumFunc);
sum(1)(2, 5)(3)