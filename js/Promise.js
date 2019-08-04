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



