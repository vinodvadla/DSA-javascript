var findMedianSortedArrays = function(nums1, nums2) {
    let median;
    if(nums1.length===nums2.length){
       median=(nums1[nums1.length-1]+nums2[0])/2;
    }
    else{
        let newarr=[...nums1,...nums2];
        let middle=Math.floor(newarr.length/2)
        median=newarr[middle]
    }
    return parseFloat(median)
};

console.log(findMedianSortedArrays([1,2],[3]))