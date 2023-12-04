// Given a number "n" of the fibonacci sequence,
//  we have to find Fibonacci Sequense from First to "n"\
function Fibonacci(n) {
    let arr = [0, 1];
    for(let i=2;i<=n;i++){
        arr[i]=arr[i-1]+arr[i-2];
    }
    return arr;
}
console.log(Fibonacci(5))


//  Time Complexity of this one 
// O(n)---- Linear Time Complexity