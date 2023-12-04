// let arr=[5,6,7,8,9,1,2,3]


function BinarySearch(arr, key, s, e) {
    if (s > e) {
        return -1
    }
    let mid = Math.floor((s + e) / 2)
    if (arr[mid] == key) {
        return mid
    }
    if (arr[s] <= arr[mid]) {
        if (key <= arr[mid] && key >= arr[s]) {
            return BinarySearch(arr, key, s, mid - 1)
        } else {
            return BinarySearch(arr, key, mid + 1, e)
        }
    }
    if (arr[e] <= arr[mid]) {
        if (key >= arr[mid] && key <= arr[e]) {
            return BinarySearch(arr, key, mid + 1, e)
        } else {
            return BinarySearch(arr, key, s, mid - 1)
        }
    }
}

console.log(BinarySearch([5,6,7,8,9,1,2,3],0,0,7))