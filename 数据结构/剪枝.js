/**
 * 剪枝问题
 * 现在要统一剪树，剪到高度为 h。 意思就是，比 h 高的树都剪到 h，比 h 低的树高度不变。
 * 所有的树剪掉的总长度为 C。 现在要使 C>某个值的情况下(假设为 MM)，使 h 最大。
 * 问怎么确定 h。
 */

function cutTree(list, MM, range) {
    if (list.length === 0) return 0;
    let start = 0;
    let end = Math.max(...list);

    while (start <= end) {
        const mid = start + ((end - start) >> 1);
        let res = 0;
        for (let i = 0; i < list.length; i++) {
            if (list[i] > mid) {
                res = res + list[i] - mid;
            }
        }
        console.log(res, mid, start, end)
        if (res > MM) {
            if (res - MM <= range) return mid;
            end = mid - range;
        } else {
            start = mid + range;
        }
    }

    return -1;
}

// test
const a = cutTree([10, 8, 9, 7], 16, 1);
console.log(a);
