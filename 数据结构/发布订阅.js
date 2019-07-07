
// 观察者模式

function Public() {
    this.subscribers = []
    this.add = function (subscriber) {
        if (this.subscribers.some(item => item === subscriber)) return;
        this.subscribers.push(subscriber);
    }
    this.deliver = function () {
        this.subscribers.forEach(fn => {
            fn.call(null, ...arguments)
        });
    }
}

let publisher = new Public()

publisher.add(a);
publisher.add(b);
// publisher.deliver();


// 发布订阅模式

function Observer() {
    this.subscribers = {}
    this.add = function (key, subscriber) {
        if (!this.subscribers[key]) this.subscribers[key] = []
        if (this.subscribers[key].some(item => item === subscriber)) return;
        this.subscribers[key].push(subscriber);
    }
    this.deliver = function (key, ...args) {
        if (!this.subscribers[key]) return;
        this.subscribers[key].forEach(fn => {
            fn.call(null, ...args)
        });
    }
}

let observer = new Observer()
observer.add('normal', a)
observer.add('special', b)
observer.add('special', c)
observer.deliver('normal');
observer.deliver('special', 123);



function a() {
    console.log('A')
}
function b() {
    console.log('B')
}
function c(value) {
    console.log('C:' + value)
}


