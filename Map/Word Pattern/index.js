var wordPattern = function(pattern, s) {
  let map=new Map();
  s=s.split(" ")
  let p=pattern;
  for(let i=0;i<pattern.length;i++){
    if((map.has(p[i])&&map.get(p[i])!==s[i])){
        return false
    }
    else{
        map.set(p[i],s[i])
    }
  }
  return true
}
console.log(wordPattern("abba","dog dog dog dog"))