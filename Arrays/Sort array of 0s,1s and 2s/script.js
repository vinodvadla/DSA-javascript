let sortZeosOnesTwos=function(arr){
//     let zeros=0;
//     let ones=0;
//     let twos=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==0){
//             zeros++
//         }else if(arr[i]==1){
//             ones++
//         }else{
//             twos++
//         }
//     }
//  for(let i=1;i<arr.length;i++){
//     if(i<zeros){
//         arr[i]=0
//     }else if(i>=zeros&&i<zeros+ones){
//         arr[i]=1
//     }else if(i>=zeros+ones && i<arr.length){
//         arr[i]=2
//     }
//  }
//  return arr


// Dutch National flag algorithm

let low=0;
let mid=0;
let high=arr.length-1;
for(let i=0;i<arr.length;i++){
    if(arr[mid]==0){
        let temp=arr[mid];
        arr[mid]=arr[low];
        arr[low]=temp;
        low++;
        mid++
    }
    else if(arr[mid]==1){
        mid++
    }else if(arr[mid]==2){
        if(arr[high]==2){
            high--
        }else{
            let temp=arr[mid];
            arr[mid]=arr[high];
            arr[high]=temp
            high--
        }
       
    }
}
return arr;
}


console.log(sortZeosOnesTwos([2,0,1,2,2,0,0,1,2,1]))