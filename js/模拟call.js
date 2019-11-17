// 原生js模拟call函数
Function.prototype._call = function (self,args) {
    // 防止 Function.prototype.myCall() 直接调用
    if(this === Function.prototype){
        return undefined
    }
    if (!self) {
        self = typeof window === 'object' ? window : global
    }
    // 给 self 创建一个 symbol 属性，为了防止重名
    const fn = Symbol()
    self[fn] = this;// this 为当前调用_call函数的函数对象
    let result = self[fn](...args);//执行函数，并将参数传入
    delete self[fn] // 函数运行完删除即可
    return result
}

// 和 call 只是在传参形式上不一样
Function.prototype._apply = function (self, args = []) {
    if (!Array.isArray(args)) return;
    if (!self) {
        self = typeof window === 'object' ? window : global
    }
    const fn = Symbol()
    self[fn] = this;
    let result = args.length ? self[fn](...args) : self[fn]();
    delete self[fn]
    return result
}

// bind 和 call/apply 的区别是会返回一个函数而不是立即执行
Function.prototype._bind = function (self) {
    if (!self) {
        self = typeof window === 'object' ? window : global
    }
    const fn = Symbol()
    self[fn] = this;
    return function () {
        let [...args] = [...arguments]
        self[fn](args)
    }
}


function a() {
    console.log(this.value);
}

let b = {
    value: 'b'
}

// a._call(b);
// a._apply(b)
a._bind(b)()


