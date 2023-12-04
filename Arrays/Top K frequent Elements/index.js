var topKFrequent = function (nums, k) {
    let map = {};
    // let arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]] = map[nums[i]] + 1
        } else {
            map[nums[i]] = 1;
        }
    }
    let arr = []
    for (let key in map) {
        arr.push([key, map[key]])
    }
    let sorted = arr.sort((a, b) => b[1]-a[1]);
    let ans=[];
    for(let i=0;i<k;i++){
        ans.push(+arr[i][0])
    }
    return ans;
}
console.log(topKFrequent([-1,-1],1))
