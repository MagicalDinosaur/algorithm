/**
 * 实现 (5).add(3).minus(2) 功能
 * 思路：(5) 在js中相当于 new Number(5)
 */

Number.prototype.add = function (num) {
    return this.valueOf() + num
}
Number.prototype.minus = function (num) {
    return this.valueOf() - num
}
console.log((5).add(3).minus(2))



/**
 * 实现一个 LazyMan 类，实现以下功能
 * LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
 * 
 * 思路：考察链式调用，由于存在异步的sleep方法，所以开辟一个事件数组，定时执行
 */

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
// Hi I am Tony
// 优先等待了2秒...
// 吃了lunch
// 等待了2秒...
// 吃了dinner



