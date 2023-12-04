var maxProduct = function(nums) {
    let product=1;
    let max=nums[0];
    for(let i=0;i,nums.length;i++){
        product*=nums[i];
        if(product>max){
            product=max;
        }
    }
    return max;
};


console.log(maxProduct([2,3,-2,4]))