
// 递归实现
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) return -1;
    const mid = Math.ceil((high + low) / 2);
    if (arr[mid] == target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1)
    if (arr[mid] < target) return binarySearch(arr, target, mid + 1, high)
}

// var result = binarySearch([1, 2, 3, 4, 5, 6, 8], 3)
// console.log(result)


// 非递归实现 while循环
function binarySearch2(arr, target) {
    let low = 0, high = arr.length - 1;
    while(low<=high){
        var mid = Math.ceil((high + low) / 2)
        if(arr[mid] == target){
            return mid;
        }else if(arr[mid] > target){
            high = mid -1
        }else{
            low = mid + 1
        }
    }
    return -1
}

// var result = binarySearch([1, 2, 3, 4, 5, 6, 8], 3)
// console.log(result)