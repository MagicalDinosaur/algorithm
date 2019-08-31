/**
 * 利用 Promise 实现 Promise.all 方法
 */

Promise.all = function (promiselist) {
    return new Promise((resolve, reject) => {
        // 将迭代对象转为数组
        promiselist = Array.from(promiselist);
        if (promiselist.length === 0) {
            resolve([]);
        } else {
            let result = []
            promiselist.forEach(item => {
                Promise.resolve(item).then(res => {
                    result[i] = res;
                    // 如果 promiselist 都是 fufilled 状态了，返回 resolve
                    if (result.length === promiselist.length) {
                        resolve(result)
                    }
                }).err(err => {
                    reject(err);
                    return;
                })
            })
        }
    })
}


/**
 * 实现一个基本的 Promise
 */
// 未添加异步处理等其他边界情况
// ①自动执行函数，②三个状态，③then
class Promise2 {
    constructor(fn) {
        // 三个状态
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined
        // 存放then中的callback
        this.onResolvedCallBacks = []
        this.onRejectedCallBacks = []
        let resolve = value => {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                this.value = value
                this.onResolvedCallBacks.forEach(fn => fn());
            }
        }
        let reject = value => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.reason = value
                this.onRejectedCallBacks.forEach(fn => fn())
            }
        }
        // 自动执行函数
        try {
            fn(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    // then
    then(onFulfilled, onRejected = function () { }) {
        console.log(this.state)
        switch (this.state) {
            case 'fulfilled':
                onFulfilled(this.value)
                break
            case 'rejected':
                onRejected()
                break
            case 'pending':
                this.onResolvedCallBacks.push(() => { onFulfilled(this.value) })
                this.onRejectedCallBacks.push(() => { onFulfilled(this.reason) })
                break
        }
    }
}

new Promise2((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 500)
}).then((res) => {
    console.log(res)
})



/**
 * 模拟实现 Promise.finally
 * 
 * 思路： Promise.finally 实际上就是特殊的 then 方法，不管是 resolved 或者 rejected 状态，都会执行回调函数，并且是不可传参的
 */
Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    console.log(P)
    return this.then(
        // 兼容callback是异步的所以包一层promise再返回value
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
};



/**
 * 模拟实现 Promise.all
 * 
 * 思路： 
 * 1. 新建一个 Promise对象，定义一个 counts 值，和一个存放几结果的数组 resValues，开始遍历执行 promiselist
 * 2. 当一个promise resolve时，向 resValues 中存储结果， count++，并判断 count 是否和 promiselist 长度相等
 * 3. 当相等时说明所有的 promise 都正常返回了，则将all函数中创建的promise返回resolve状态，参数为 resValues
 */

Promise.prototype.all = function (promiselist) {
    return new Promise((resolve, reject) => {
        let resValues = [];
        let counts = 0;
        for (let [i, p] of promiselist) {
            resolve(p).then(res => {
                counts++;
                resValues[i] = res;
                if (counts === promiselist.length) {
                    resolve(resValues)
                }
            }, err => {
                reject(err)
            })
        }
    })
}


/**
 * 模拟实现 Promise.race
 * 
 * race 和 promise 的区别是 race 有一个 promise 状态更新了就会立即返回
 * 
 * 思路： 
 * 1. 新建一个 Promise对象，定义一个 counts 值，和一个存放几结果的数组 resValues，开始遍历执行 promiselist
 * 2. 当一个promise resolve时，向 resValues 中存储结果， count++，并判断 count 是否和 promiselist 长度相等
 * 3. 当相等时说明所有的 promise 都正常返回了，则将all函数中创建的promise返回resolve状态，参数为 resValues
 */

Promise.prototype.all = function (promiselist) {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(resolve, reject)
        })
    })
}