// function RemoveDuplicates(arr){
//     let arr1=arr.sort();
//     for(let i=0;i<arr.length;i++){
//         if(arr1[i]===arr1[i+1]){
//         arr1.splice(i,1);
//         arr1.push("_");
//         }
//     }
//     return arr1
// }


// console.log(RemoveDuplicates([1,1,2]))

// Without Inbuilt Methods  ----> Two Pointer Approach
// remove duplicates from a sorted Array

function RemoveDuplicates(nums){
    let i=0;
    for(let j=1;j<nums.length;j++){
        if(nums[i]!==nums[j]){
            i++;
            nums[i]=nums[j];
        }
    }
    return i+1
}


