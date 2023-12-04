function maxSumSubarray(nums){
    let sum=0;
    let maxsum=nums[0];
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        if(sum>maxsum){
            maxsum=sum
        }
        if(sum<0){
            sum=0
        }
    }
    return maxsum
}
console.log(maxSumSubarray([-2,1,-3,4,-1,2,1,-5,4]));