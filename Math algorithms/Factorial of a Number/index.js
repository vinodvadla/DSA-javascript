// Given a Number "n", Find The Factorial Of that Number

// Factorial of 5 is 1*2*3*4*5
function Factorial(n){
    
    let sum=1;
    if(n===0){
        return sum
    }
    else{
        for(let i=1;i<=n;i++){
            sum*=i;
        }
      
    }
    return sum
   
}
console.log(Factorial(3))
// Time Complexty of this is 
// O(n)---Linear Time Complexity