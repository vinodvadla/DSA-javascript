// 150. Evaluate Reverse Polish Notation

// You are given an array of strings tokens that represents
//  an arithmetic expression in a Reverse Polish Notation.



// Example 1:

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Example 2:

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

var evalRPN = function(tokens) {
    let stack=[];
    for(let i=0;i<tokens.length;i++){
        if(tokens[i]==="+"){
           let num1=stack.pop()
           let num2=stack.pop();
           let ans=num1+num2;
           stack.push(ans)
        }else if(tokens[i]==="-"){
            let num1=stack.pop()
           let num2=stack.pop();
           let ans=num1-num2;
           stack.push(ans)
        }else if(tokens[i]==="/"){
            let num1=stack.pop()
           let num2=stack.pop();
          let ans;
          if(num1>num2){
            ans=num1/num2
          }else{
            ans=num2/num1
          }
           stack.push(ans)
        }else if(tokens[i]==="*"){
            let num1=stack.pop()
           let num2=stack.pop();
           let ans=num2*num1
           stack.push(ans)
        }else{
            stack.push(Number(tokens[i]))
        }
    }
    return stack.pop();
}
console.log(evalRPN(["4","13","5","/","+"]))