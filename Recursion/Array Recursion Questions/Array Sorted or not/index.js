// Array is Sorted or not    

// You will be given an array we have to find if the array is sorted or not using Recursion

function isSorted(arr, index) {
    if (arr[index + 1] == undefined || null) return true 
    if(arr[index]>arr[index+1]) return false

    return isSorted(arr, index + 1)
}


console.log(isSorted([1, 2, 3], 0))