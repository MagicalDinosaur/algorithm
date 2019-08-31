/**
 * 用 setTimeout 实现 setInterval
 * setTimout 表示当前运行完毕后再隔1s执行，setInterval 指每隔1s中执行
 */
function intv(count) {
    if (count <= 0) return;
    setTimeout(() => {
        console.log('ok')
        intv(--count)
    }, 1000)
}
intv(5)


/**
 * 改造下面的代码，使之输出0 - 9
 * 
 * for (var i = 0; i< 10; i++){
 *      setTimeout(() => {
 *           console.log(i);
 *       }, 1000)
 *   }
 */

// 方法一： 利用 setTimeout 函数的第三个参数，会作为回调函数的第一个参数传入
for (var i = 0; i < 10; i++) {
    setTimeout(i => {
        console.log(i);
    }, 1000, i)
}


// 方法二： 利用 let 块级作用域
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}
// 等价于
for (let i = 0; i < 10; i++) {
    let _i = i;// const _i = i;
    setTimeout(() => {
        console.log(_i);
    }, 1000)
}


// 方法三：利用IIFE构建块级作用域
for (var i = 0; i < 10; i++) {
    (i => {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    })(i)
}
