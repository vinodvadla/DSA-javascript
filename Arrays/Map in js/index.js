function repeating(arr){
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        map.set(i,arr[i]);
    }
    console.log(map)
}

repeating([1,2,3,5,4,1])