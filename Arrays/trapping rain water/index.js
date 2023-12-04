// Better

// var trap = function(height) {
//     let prefixMax=[];
//     for (let i = 0; i < height.length; i++) {
//         prefixMax[i] = Math.max(prefixMax[i-1]||0,height[i]);
//     }
//    let suffixMax=[];
//    for(let i=height.length-1; i >= 0; i--) {
//     suffixMax[i] = Math.max(suffixMax[i+1]||0,height[i]);
//    }
  
//    let water=0;
//    for (let i = 0; i < height.length; i++) {
//        water += Math.min(prefixMax[i],suffixMax[i])-height[i];
//    }
//    return water;
// };
// trap([0,1,0,2,1,0,1,3,2,1,2,1])


// Optimized;
var trap = function(a) {
    let l=0;
    let r=a.length-1;
    let leftmax=0;
    let rightmax=0;
    let water=0
    while(l<=r){
        if(a[l]<=a[r]){
            if(a[l]>=leftmax){
                leftmax=a[l]
                l++
            }else{
               water+=leftmax-a[l]
               l++
            }
        }else{
            if(a[r]>=rightmax){
                rightmax=a[r]
                r--
            }else{
                water+=rightmax-a[r]
                r--
            }
        }
    }
    return water
}

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));


let a="vinios"
a.