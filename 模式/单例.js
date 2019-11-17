/**
 * 在合适的时候才创建对像，并且只创建唯一的一个
 * 单例模式分为 懒汉（第一次使用时才创建）和 非懒汉模式（初始状态时就先创建）
 */

var Singleton = function(name) {
    this.name = name;
};

Singleton.prototype.getName = function() {
    alert(this.name);
};

Singleton.getInstance = (function(name) {
    var instance;
    return function(name){
        if (!instance) {
            instance = new Singleton(name);
        }
        return instance;
    }
})();

var a = Singleton.getInstance('ConardLi');
var b = Singleton.getInstance('ConardLi2');

console.log(a===b);   //true