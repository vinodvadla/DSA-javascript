var removeElement = function(nums, val) {
    let count=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
            nums[count++]=nums[i]
        }
    }
    return count
   };

   console.log(removeElement([3,2,2,3],3))