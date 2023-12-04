// given an  sorted array of numbers find
// find two sum of them n
// and 

const twoSum=(arr,n)=>{
    let left=0;
    let right=arr.length-1;
    while(left<right){
        if(arr[left]+arr[right]>n){
            right--;
        }
        else if(arr[left]+arr[right]<n){
            left++
        }
        else{
        return [left+1,right+1];
        }
    }
}

console.log(twoSum([12,13,23,45,56],36))