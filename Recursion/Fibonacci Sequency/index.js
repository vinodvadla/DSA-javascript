const fib=(n)=>{
    if(n==0){
        return 0;
    }
    else if(n==1||n==2){
        return 1;
    }
    else {
      return fib(n-1)+fib(n-2);
    };
};

console.log(fib(5))

// The base case here is the n==0 &n==1 &n==2
// if the n is greater than 2 the recursive case is executed
// and lastly they are combined with the fib(n) to form a fibonacci series