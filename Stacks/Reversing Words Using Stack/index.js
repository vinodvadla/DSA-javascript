class Stack{
    constructor(){
        this.stack=[]
    }
    push(ele){
        this.stack.push(ele)
    }
    pop(){
        if(this.isEmpty){
            return "Stack Is Empty";
        }
        else{
            this.stack.pop();
        }
    }
    isEmpty(){
        return this.size()===0
    }
    peek(){
        if(this.isEmpty()){
            return "The Stack is Empty";
        }
        return this.stack[this.size()-1]
    }
    size(){
        return this.stack.length
    }
}


// given that a string s then reverse the words of the string;

// 1. input="the sky is blue";       output="blue is sky the";
// 2.input=" hello  world  ";        output="world hello"
// 3.input=" a good   example"       output="example good a";


function reverse(s){
    let stack=[];
    let splitS=s.split(" ");

    for(let i=0;i<splitS.length;i++){
        stack.push(splitS[i]);
    }
    let newString=""
    while(stack.length){
        let current=stack.pop();
        if(current){
            newString += " "+current
        }
    }
   return newString.trim();
}
console.log(reverse("the sky is blue"));
console.log(reverse(" a good   example"));
