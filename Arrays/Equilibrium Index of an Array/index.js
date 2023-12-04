// Equilibrium Index   
// when select an array index then the Sum left indexes is equal To the Sum of Right Indexes

//  let arr=[1,2,6,4,0,-1]


// function EquilibriumIndex(nums) {
// let n=nums.length;
// let rightsum=0;
// let leftsum=0;
// if(n==1){
//     return 1;
// }
// if(n==2){
//     return "Not Possible"
// }
// for(let i=1;i<n;i++){
//     for(let j=i-1;j<i;j++){
//         leftsum+=nums[j]
//     }
//     for(let k=i+1;k<n;k++){
//         rightsum+=nums[k];
//     }
//     if(leftsum===rightsum){
//         return i
//      }
// }


// }
// console.log(EquilibriumIndex([1,2,3,6,3,2,1]));


// /  Simple method to get the Equilibrium index;

function EquilibriumIndex(nums){
    let n=nums.length;
    let leftsum=new Array(0);
    let rightsum=new Array(0);
    for(let i=0;i<n;i++){
       if(i){
        leftsum[i]=leftsum[i-1]+nums[i];
       }
       else{
        leftsum[i]=nums[i]
       }
    }
    for(let i=n-1;i>0;i--){
        if(i<=n-2){
            rightsum[i]=rightsum[i+1]+nums[i];
        }
        else{
            rightsum[i]=nums[i]
        }
    }
    for(let i=0;i<n;i++){
        if(leftsum[i]==rightsum[i]){
            return i;
        }
    }
}
console.log(EquilibriumIndex([1,2,3,5,1,2,3]))