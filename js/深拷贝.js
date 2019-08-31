/**
 * 深拷贝函数
 */
function deepClone(obj, hash = new WeakMap()) {
    // 判断是否已经拷贝过该对象
    if (hash.has(obj)) {
        return hash.get(obj)
    }
    // 首先判断 Date 和 RegExp 类型
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Date) return new Date(obj);
    // 基础数据类型直接返回
    if (obj === null || (typeof obj != 'object')) return obj;
    // obj如果是数组 obj.constructor 返回 [function:Array],obj如果是对象返回 [function:Object]
    let t = new obj.constructor();
    // 将 obj 作为 key 写入 weakmap
    hash.set(obj, t);
    // 复杂类型进行递归
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            t[key] = deepClone(obj[key], hash);
        }
    }
    return t;
}



let obj = {
    a: 1,
    b: new Date(),
    c: function () { console.log('c') },
    d: [1, 2, 3, 4],
    f: {
        g: 'abc',
        h: 1234,
        i: [1, 2, 3]
    }
}
// obj.loop = obj;
var obj2 = deepClone(obj);


/**
 * 广度优先遍历实现
 */
function deepCopyDFS(origin){
	let stack = [];
	let map = new Map(); // 记录出现过的对象，用于处理环

	let target = getEmpty(origin);
	if(target !== origin){
		stack.push([origin, target]);
		map.set(origin, target);
	}

	while(stack.length){
        let [ori, tar] = stack.pop();
		for(let key in ori){
			// 处理环状
			if(map.get(ori[key])){
                tar[key] = map.get(ori[key]);
                console.log(tar[key])
				continue;
			}
            tar[key] = getEmpty(ori[key]);
            console.log(tar[key])
			if(tar[key] !== ori[key]){
				stack.push([ori[key], tar[key]]);
				map.set(ori[key], tar[key]);
			}
		}
	}
	return target;
}

function getEmpty(temp) {
    // 首先判断 Date 和 RegExp 类型
    if (temp instanceof RegExp) {
        return new RegExp(temp);
    }
    else if (temp instanceof Date) {
        return new Date(temp);
    } else if (temp === null || (typeof temp != 'object')) {
        // 基础数据类型直接返回
        return temp;
    } else {
        // temp如果是数组 temp.constructor 返回 [function:Array],temp如果是对象返回 [function:tempect]
        return new temp.constructor();
    }
}

var obj3 = deepCopyDFS(obj);
console.log(obj3);


