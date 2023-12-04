// Given an arry A containing 2*N+2 positive numbers , out of which 2*N exist in pairs
//  and only 2 will unique occur exactly once are distinct.
// Find Other 2 numbers .Return in increasing order


function FindUniques(arr) {
    let i = 0
    let j = 0
    let uni = []
    let n = arr.length;
    let arr2 = arr.sort((a, b) => a - b);
    while (i < n - 1) {
        if (i === n - 1) {
            uni[j] == arr2[n - 1];
            break;
        }
        else if (arr2[i] == arr2[i + 1]) {
            i += 2
        }
        else if (arr2[i] !== arr2[i + 1]) {
            uni[j] = arr2[i];
            i++;
            j++
        }

    }
    return uni;
}
console.log(FindUniques([1, 2, 3, 1, 2, 4]));

