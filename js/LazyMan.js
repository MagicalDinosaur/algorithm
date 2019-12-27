function LazyMan(name) {
    return new _LazyMan(name)
}

class _LazyMan {
    constructor(name) {
        this.tasks = []
        let task = (name) => {
            console.log('Hi this is ' + name)
            this.next()
        }
        this.tasks.push(task)
        // 将 next 放到下一个事件队列中去
        setTimeout(() => {
            this.next();
        }, 0);
    }
    eat(food) {
        let task = () => {
            console.log('eat: ' + food)
            this.next()
        }
        this.tasks.push(task)
        return this
    }
    sleep(time) {
        let task = () => {
            console.log('sleep: ' + time)
            setTimeout(() => {
                this.next()
            }, time * 1000)
        }
        this.tasks.push(task)
        return this
    }
    sleepFirst(time) {
        let task = () => {
            console.log('sleep First: ' + time)
            setTimeout(() => {
                this.next()
            }, time * 1000)
        }
        this.tasks.unshift(task)
        return this
    }
    next() {
        let temp = this.tasks.shift();
        temp && temp()
    }
}

LazyMan('Li Ming').sleep(1).eat('breakfast').sleepFirst(1).eat('lunch')