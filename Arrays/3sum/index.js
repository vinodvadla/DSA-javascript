let twoSum=(j,target,nums)=>{
    let k=nums.length-1;
    let result=[];
    while(j<k){
        let left=nums[j];
        let right=nums[k];
        if(left+right > target){
            k--;
        }
        else if(left+right < target){
            j++
        }
        else{
            result.push((target*-1),left,right);
            while(j<k && nums[j]===nums[j+1]) j++;
            while(j<k && nums[k]===nums[k-1]) k--;
            j++;
            k--;
        }
    }
    return result;
}

var threeSum = function (nums) {
    nums.sort((a,b)=>a-b);
    let result=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]===nums[i-1]) continue;
        let target=nums[i]*-1;
        let subResult=twoSum(i+1,target,nums);
        result.push(...subResult)
    }
    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))