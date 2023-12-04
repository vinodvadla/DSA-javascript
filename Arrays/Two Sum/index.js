function Twosum(arr,target){
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        let num=arr[i];
        let num1=target-num;
        if(map.has(num1)){
        return [map.get(num1),i]
        }
        else{
            map.set(num1,i)
        }
    }
   
}
console.log(Twosum([3,2,3],9))