//  Second Largest Number 
function SecondLargest(arr){
    let max=0;
    arr.sort((a,b)=>{
        return a-b
    })
    console.log(arr[arr.length-2])
}
SecondLargest([4,2,6,33,654,12])