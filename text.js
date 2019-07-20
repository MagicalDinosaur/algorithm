class Scheduler {
    constructor() {
        this.allTask = []
    }

    add(promiseCreater, callback) {
        let createrIndex = this.allTask.indexOf(promiseCreater)
        if (createrIndex == -1) {
            this.allTask.push(promiseCreater)
        }
        let nowIndex = this.allTask.indexOf(promiseCreater)
        // if (nowIndex < 2) {
            // return new Promise((resolve) => {
                promiseCreater().then(() => {
                    resolve(promiseCreater)
                    this.allTask.splice(nowIndex, 1);
                    if (this.allTask.length >= 2) {
                        this.update(this.allTask[1], callback);
                    }
                })
            // })
        // }
        // if (!callback) {
        return new Promise(resolveTop => {

        })
        // }/

        // })
    }
    update(promiseCreater) {

    }
}

const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
})

const scheduler = new Scheduler()
const addTask = (time, order) => {
    let a = scheduler.add(() => timeout(time), order)
    // console.log('===')
    console.log(a)
    // scheduler.add(() => timeout(time)).then(() => console.log(order))
}

addTask(2000, 1);
addTask(100, 2);
addTask(1000, 3);
addTask(10, 4);

