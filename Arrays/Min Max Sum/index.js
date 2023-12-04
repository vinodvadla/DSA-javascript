
   function findSum(A,N){
        let min=A[0];
        let max=A[0];
        for(let i=0;i<N;i++){
            if(A[i]<=min){
                min=A[i]
            }else if(A[i]>min&&A[i]>max){
                max=A[i]
            }
        }
        return min+max
    }

  console.log(findSum([-1 -2 -3 -4 -5],5))