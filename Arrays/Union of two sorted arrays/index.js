var missingNumber = function(nums) {
    let max=nums[0];
    for(let i=0;i<nums.length;i++){
        if(max<nums[i]){
            max=nums[i]
        }
    }
    let map=new Map()
    for(let i=0;i<=max;i++){
        map.set(i,0)
    }

    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],1)
        }
    }
    for(let [key,value] of map){
        if(value===0){
            return key
        }
    }
};

console.log(missingNumber([0,1,3]));
