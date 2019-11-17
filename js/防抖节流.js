/**
 * 防抖节流
 */

// 利用时间戳
function throttle(fn, delay) {
    let lastTime = 0, timer;
    return function (...args) {
        let nowTime = new Date().getTime();
        if (nowTime - lastTime > delay) {
            fn.apply(this, args);
            lastTime = nowTime
        }
    }
}
// 利用 setTimeout
function throttle2(fn, time) {
    let timer = null;
    return function (...args) {
        // 当定时器被清除，可以执行
        if (!timer) {
            timer = setTimeout(() => {
                timer = null; // 清除定时器
                fn.apply(this, args);
            }, time);
        }
    }
}

// 防抖
function debounce(fn, delay) {
    let timeout;
    return function () {
        let self = this, args = arguments;
        // 每次执行 debounce 都将上次的事件清除
        clearTimeout(timeout);
        // 设置定时器，delay 时间内，debounce
        timeout = setTimeout(() => {
            fn.call(self, ...args)
        },delay)
    }
}