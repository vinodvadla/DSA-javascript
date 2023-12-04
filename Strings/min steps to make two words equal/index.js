// example word1="sea" word2="eat"

// Brute force
// const isEqual = (word1, word2) => {
//     let count=0
//   for(let i=0;i<word1.length;i++){
//     for(let j=0;j<word2.length;j++){
//         if(word1[i]===word2[j]){
//             count++
//         }
//     }
//   }
//   return count
// };
// optimal

// const isEqual = (a, b) => {
//   let map = {};
//   for (let i = 0; i < a.length; i++) {
//     map[a[i]] = 1;
//   }
//   let count = 0;
//   for (let i = 0; i < b.length; i++) {
//     if (map[b[i]]) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(isEqual("sea", "eat"));
