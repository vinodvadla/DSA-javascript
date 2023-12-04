function LinearSearch(arr, index, target) {
    // One way of finding  
    // if (index == arr.length - 1 && arr[index] != target) return "Not Found"
    // if (arr[index] == target) return `found at ${index}`
    // return LinearSearch(arr, index + 1, target)


    // 2nd way of finding
    if (index == arr.length - 1 && arr[index] != target) return false
    return arr[index]==target||LinearSearch(arr, index + 1, target)

}

console.log(LinearSearch([1, 3, 1, 4, 6, 7], 0, 2))