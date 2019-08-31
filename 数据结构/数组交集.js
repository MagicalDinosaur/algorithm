
/**
 * 求两个数组的交集
 */

function interset(arr1, arr2) {
    const map = {}
    const res = []
    for (let item of arr1) {
        map[item] ? map[item]++ : map[item] = 1
    }
    for(let item of arr2){
        if(map[item]){
            res.push(item)
            map[item]--
        }
    }
    return res
}
console.log(interset([1,1,2],[1,3,2]))