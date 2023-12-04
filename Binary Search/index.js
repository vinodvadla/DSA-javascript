// Binary search
// With loops(or)Iterative Approach
// let arr = [1, 8, 21, 32, 45];
// function BinarySearch(nums, k) {
//     let n = nums.length;
//     let l = 1;
//     let h = n - 1;
    
//     while (l < h) {
//         let mid=Math.floor((l+h)/2)
//         if (nums[mid] < k) {
//             l=mid+1;

//         } else if (nums[mid] > k) {
//            h=mid-1
//         } else if (nums[mid] === k) {
//             return mid;
//         }
//     }
//     return -1
// }
// console.log(BinarySearch([1, 8, 21, 32, 43, 435], 2));

// Recursive Approach

function RecurBinarySearch(nums,k,l,h){
    let mid=Math.floor((l+h)/2);
    if(nums[mid]===k){
        return mid
    }
    else if(nums[mid]>k){
        RecurBinarySearch(nums,k,l,h-1)
    }
    else if(nums[mid]<k){
        RecurBinarySearch(nums,k,l+1,h);
    }
    else{
        return -1
    }
}
console.log(RecurBinarySearch([1,8,21,32,45],8,0,4));