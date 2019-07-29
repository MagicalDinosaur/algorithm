Object.prototype.objCustom = function () { };
Array.prototype.arrCustom = function () { };

let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
    //   console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i in iterable) {
    if (iterable.hasOwnProperty(i)) {
        // console.log(i); // logs 0, 1, 2, "foo"
    }
}

for (let i of iterable) {
    //   console.log(i); // logs 3, 5, 7
}


/**
 * 原型链继承
 */
// 父类
function Person() {
    this.arr = []
    this.age = 18
}
// 子类
function Student(name) {
    this.name = name
    this.score = 80
}
// 继承
Student.prototype = new Person()

let student1 = new Student('std1');
let student2 = new Student('std2');
// student1.arr.push('stu1')
// console.log(student2.arr)



/**
 * 借用构造函数继承
 */
function Person2(name) {
    this.arr = []
    this.name = name
    this.age = 18
}
// 子类
function Student2(name) {
    Person2.call(this, name) // 执行 Person 的方法
}

let student3 = new Student2('stu3');
let student4 = new Student2('stu4');
console.log(student3.name)  // stu3
student3.arr.push('stu4')
console.log(student4.name)  // [] 未被修改

/**
 * 寄生组合继承
 */
function Person(uName) {
    this.skills = ['php', 'javascript'];
    this.userName = uName;
}
Person.prototype.showUserName = function () {
    return this.userName;
}
function Teacher(uName) {
    Person.call(this, uName);
}
function birth(o) {
    var G = function () { };
    G.prototype = o;
    return new G();
}
function inheritPrototype(subObj, superObj) {
    var proObj = birth(superObj.prototype); //复制父类superObj的原型对象
    // proObj.constructor = subObj; //constructor指向子类构造函数
    subObj.prototype = proObj; //再把这个对象给子类的原型对象
}
inheritPrototype(Teacher, Person);
var oT1 = new Teacher('ghostwu');
oT1.skills.push('linux');
var oT2 = new Teacher('ghostwu');
// console.log(oT2.skills); //php,javascript
// console.log(oT2.showUserName()); //ghostwu