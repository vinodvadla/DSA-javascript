class Stack{
    constructor(){
        this.stack=[]
    }

    push(ele){
        this.stack.push(ele);
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        else{
            return this.stack.pop()
        }
    }

    isEmpty(){
        return this.size()===0
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is Empty";
        }
        else{
            return this.stack[this.size()-1];
        }
    }
    size(){
        return this.stack.length
    }
}

let stack=new Stack();
stack.push(10);
stack.push(21);
stack.push(100);

stack.pop();
stack.pop();
stack.pop();
console.log(stack.size());
console.log(stack.isEmpty())
console.log(stack.peek());