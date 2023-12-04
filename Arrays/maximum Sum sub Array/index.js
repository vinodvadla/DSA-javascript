let maxSumSubArray=(nums)=>{
let sum =0;
let max=nums[0];
for(let i=0;i<nums.length;i++){
    if(nums[i]<0){
        sum+=0;
    }
    else{
        sum+=nums[i];
    }
    if(sum>max){
        max=sum
    }
    
}
return sum;
}
console.log(maxSumSubArray([-1,2,4,6,7,-6]));


// 1-- first take sum=0;
// 2---let max=nums[0];
