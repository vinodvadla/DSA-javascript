//  Rotate an array by k; with inbuilt Methods
// function RotateArray(arr, k) {

//     let size = arr.length;
//     if (k < size) {
//         k = k % size;
//     }

//     let arr1 = arr.splice(arr.length - k, arr.length);
//    arr.unshift(...arr1)
//     return arr
// }


// without inBuilt Methods


// function RotateArray(arr, k) {
//     let size=arr.length;
//         if (k < size) {
//             k = k % size;
//         }
//         rotate(arr,0,arr.length-1);
//         rotate(arr,0,k-1);
//         rotate(arr,k,arr.length-1)
//         return arr;
// }
function rotate( arr,left,right){
    while(right>left){
        let temp=arr[left];
        arr[left]=arr[right];
        arr[right]=temp;
        left++;
        right--;
    }
    return arr
}


function RotateArray(arr,k){
    k=k%arr.length;
    rotate(arr,0,arr.length-1);
    rotate(arr,0,k-1);
    rotate(arr,k,arr.length-1)
    return arr
}
console.log(RotateArray([1,2,3,4,5,6],3))
