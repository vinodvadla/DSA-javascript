// var numIdenticalPairs = function(nums) {
//     let Gp=0
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i]===nums[j]){
//                 Gp++
//             }
//         }
//     }
//     return Gp
// };

var numIdenticalPairs = function (nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }
}

console.log(numIdenticalPairs([1, 1, 1, 1]))