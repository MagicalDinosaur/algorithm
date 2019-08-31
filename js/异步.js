class LazyManClass {
    constructor(name) {
        this.name = name;
        console.log(`Hi I am ${this.name}`)
        this.taskList = [];
        setTimeout(() => {
            this.next()
        })
    }
    sleepFirst(time) {
        let fn = () => {
            setTimeout(() => {
                console.log(`优先等待了${time}秒...`)
                this.next()
            }, time * 1000)
        }
        this.taskList.unshift(fn)
        return this
    }
    sleep(time) {
        let fn = () => {
            setTimeout(() => {
                console.log(`等待了${time}秒...`)
                this.next()
            }, time * 1000)
        }
        this.taskList.push(fn)
        return this
    }
    eat(food) {
        let fn = () => {
            console.log(`吃了${food}`)
            this.next()
        }
        this.taskList.push(fn)
        return this
    }
    next() {
        let fn = this.taskList.shift()
        fn && fn();
    }
}

function LazyMan(name) {
    return new LazyManClass(name)
}
LazyMan('Tony').eat('lunch').sleep(2).eat('dinner').sleepFirst(2);
