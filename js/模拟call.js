// 原生js模拟call函数
Function.prototype._call = function () {
    let [_this, ...args] = [...arguments]
    if (!_this) {
        _this = typeof window === 'object' ? window : global
    }
    _this.fn = this;// this 为当前调用_call函数的函数对象
    let result = _this.fn(...args);//执行函数，并将参数传入
    delete _this.fn // 函数运行完删除即可
    return result
}

// 和 call 只是在传参形式上不一样
Function.prototype._apply = function (_this, args = []) {
    if (!Array.isArray(args)) return;
    if (!_this) {
        _this = typeof window === 'object' ? window : global
    }
    _this.fn = this;
    let result = args.length ? _this.fn(...args) : _this.fn();
    delete _this.fn
    return result
}


function a() {
    console.log(this.value);
}

let b = {
    value: 'b'
}

a._call(b);
a._apply(b)

