// recursive function with more than one occurrences



// function Find(arr, index, target, ans) {
//     if (index == arr.length - 1) return ans
//     if (arr[index] == target) ans.push(index)
//     return Find(arr, index + 1, target, ans)
// }

// console.log(Find([1, 2, 3, 2, 4], 0, 2, []))



function find(arr,index,target){
    let ans=[]
    if(index==arr.length-1)return ans
    if(arr[index]==target)ans.push(index)

    let allindexes=[...find(arr,index+1,target)]
    ans.push(allindexes)
    return ans
}


console.log(find([1,1,2,2,3],0,2))