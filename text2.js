class Promise2 {
    constructor(fn) {
        this.staus = 'pending'
        this.value = null
        this.reason = null
        this.resolvedFn = null
        this.rejectedFn = null
        let resolve = (value) => {
            // 如果不是pending状态了不会在修改状态
            if (this.staus === 'pending') {
                this.staus = 'fullfilled'
                this.value = value
                this.resolvedFn()
                // console.log(this.resolvedFn())
            }
        }
        let reject = (err) => {
            if (this.staus === 'pending') {
                this.staus = 'rejected'
                this.reason = err
                this.rejectedFn()
            }
        }
        try {
            fn(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
}

Promise2.prototype.then = function (onFullFilled, onRejected) {
    console.log(this.staus);
    switch (this.staus) {
        case 'fullfilled': onFullFilled(this.value); break;
        case 'rejected': onRejected(this.reason); break;
        case 'pending':
            this.rejectedFn = () => { onRejected(this.reason) };
            this.resolvedFn = () => { onFullFilled(this.value) };
            break;
    }
}

new Promise2((resolve, reject) => {
    setTimeout(() => {
        resolve('123')
    }, 1000)
}).then(res => {
    console.log(res)
})