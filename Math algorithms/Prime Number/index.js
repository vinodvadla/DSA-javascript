//  Prime Number
// Given a number " n " we have to check Whether the number is Prime or not;

function isPrime(n) {
    let prime;
    if (n % 2 === 0) {
        return prime=false
    }
    else {
        for (let i = 3; i <n; i++) {
            if (n % i === 0) {
                return prime=false
            }
            else {
                return prime=true
            }
        }
    }
    return prime

}
console.log(isPrime(4))