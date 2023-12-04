// function slidingWindowMax(arr,k){
//     let result=[];
//     let n=arr.length;
   
    // for(let i=0;i<=n-k;i++){      BRUTE FORCE APPROACH
//        let max=arr[i]
//         for(let j=1;j<k;j++){
//             if(max<arr[i+j]){
//                 max=arr[j+i];
//             }
//         }
//             result.push(max);
//     }
//     return result;
// }



// OPTIMIZED APPROACH

var maxSlidingWindow = function(nums, k) {
    let result=[];
    let deque=[];
    for(let i=0;i<nums.length;i++){
        if(deque.length>0&&deque[0]<=i-k){
            deque.shift()
        }
        while(nums[deque[deque.length-1]]<nums[i]){
            deque.pop()
        }
        deque.push(i);
        if(i>=k-1){
            result.push(nums[deque[0]])
        }
    }
    return result
};


console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3));