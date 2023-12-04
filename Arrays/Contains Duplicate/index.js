function ContainsDuplicates(nums){
    let set=new Set(nums);
    return set.size!=nums.length;
}
console.log(ContainsDuplicates([1,2,3,4]));