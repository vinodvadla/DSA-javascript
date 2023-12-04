var maxArea = function (nums) {
    let a = 0;
    let b = nums.length - 1;
    let max = 0;
    let temp = 0;
    while (a < b) {
        if (nums[a] <= nums[b]) {
            temp = nums[a] - nums[a + 1];
            if (temp < 0) {
                a++
            } else {
                max += temp
                temp=nums[a]-nums[a+2]
                if(temp<0)a++
                else{
                    max+=temp
                }
                a++
            }
        } else {
            temp = nums[b] - nums[b - 1];
            if (temp < 0) {
                b--
            }
            else {
                max += temp;
                temp=nums[b]-nums[b-2]
                if(temp<0)b--;
                else{
                    max+=temp
                }
                b--
            }
        }
    }
    return max;
}



console.log(maxArea([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))