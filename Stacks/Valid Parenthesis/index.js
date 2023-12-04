// Given a string S containing just the characters "(",")",{","}","[","]"
// determine if the input string is valid
// Open brackets must be closed by same type of brackets 
// Open brackets must be closed in correct order
// every close bracket has a same kind of opening bracket;

// 1 . input : "()"     output : true
// 2 . input :"([]{})"   output : true
// 3.input :"(]"        output : false


function isValid(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(" || s[i] == "{" || s[i] == "]") {
            stack.push(s[i]);
        }
        else if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
            if (isEmpty(stack)) {
                return false
            }
            let ele = stack.pop();
            if (s[i] === ")" && ele !== "(" || s[i] === "}" && ele !== "{" || s[i] === "]" && ele !== "[") {
                return false
            }
        }
    }
    return isEmpty(stack);
}

function isEmpty(stack) {
    return stack.length === 0
}

console.log(isValid("(]"))