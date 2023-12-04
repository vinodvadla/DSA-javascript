// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]


// var productExceptSelf = function(nums) {
//     let leftproduct=[1];
//     let rightproduct=[1];
//     for(let i=0;i<nums.length;i++){
//         if(i>0){
//             leftproduct[i]=nums[i-1]*nums[i];

//         }else{
//             leftproduct[i]=nums[i]
//         }
//     }
//     for(let i=nums.length-1;i>=0;i--){
       
//         if(i==nums.length-1){
//             rightproduct[i]=nums[i]
//         }
//         else{
//            rightproduct[i]=rightproduct[i+1]*nums[i]
//         }
//     }
//     let ans=[]
   
//    for(let i=0;i<nums.length;i++){
//         ans[i]=leftproduct[i-1]*rightproduct[i+1]
//         if(i===nums.length-1){
//             ans[i]=leftproduct[i-1];
//         }else if(i===0){
//             ans[i]=rightproduct[i+1]
//         }
//    }
// return ans
// };



var productExceptSelf = function(nums) {
    let left=[]
  for(let i=0;i<nums.length;i++){
    if(i===0){
        left[i]=nums[i];
    }
    else{
        left[i]=left[i-1]*nums[i];
    }
  }
  let post=1
  for(let i=nums.length-1;i>=0;i--){
    if(i===nums.length-1){
        left[i]=left[i-1]*post
        post=nums[i];
    }
    else if(i===0){
        left[i]=post
    }
    else{
        left[i]=left[i-1]*post
        post*=nums[i];
    }
  }
  return  left
}
console.log(productExceptSelf([1,2,3,4]))