// [1,4,4,5,5,5,6,6,1] ansd K=11;


function sumPair(nums, target) {
    let k = 0;
    let j = nums.length-1
    while (j < k) {
        let left = nums[j];
        let right = nums[k];
        if (left + right > target) {
            k--
        } else if (left + right < target) {
            j++
        }
        else {
            let c1=1;
            let c2=1;
            while(j<=k){
                if(nums[j]===nums[j+1]){c1++}
                else if(nums[k]===nums[k-1]){c2++}
            }
            return c1*c2
        }
    }
}
console.log(sumPair([1, 4, 4, 5, 5, 5, 6, 6], 11))