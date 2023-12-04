//  

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]



var groupAnagrams = function (arr) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let key=arr[i].split("").sort().join("")
    if(map[key]){
      map[key].push(arr[i])
    }
    else{
      map[key]=[arr[i]]
    }
  };
  return Object.values(map)
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))