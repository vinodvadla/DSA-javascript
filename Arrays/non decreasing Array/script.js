function NonDEcreasing(arr) {
    let temp = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            temp.push(arr[i])
        }
    }
    if(temp.length==1){
        return (true,temp)
    }
    else{
    return false
    }
    
}

console.log(NonDEcreasing([3, 4, 2, 3]))