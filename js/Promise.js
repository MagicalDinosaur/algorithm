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


