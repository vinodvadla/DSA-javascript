// function movezeros(arr){
//    let index=0;
//    for(let i=0;i<arr.length;i++){
//     let num=arr[i];
//     if(arr[i]!==0){
//         arr[index]=num;
//         index++;
//     }
//    }
//    for(let i=index;i<arr.length;i++){
//     arr[i]=0;
//    }
//    return arr;
// }
// console.log(movezeros([1,2,0,3]))

function removeElement(nums, val) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[index] = nums[i];
            index++;
        }
    }
    for (let i = index; i < nums.length; i++) {
        nums[i] = "_";
    }
    let noOf=nums.length-index;
    return `${nums}   ${noOf}`
} 
console.log(removeElement([2, 3, 3, 2], 2));