function isPalindrome(x){
    let y=+x.toString().split("").reverse().join("");
   return x===y
}
console.log(isPalindrome(121))