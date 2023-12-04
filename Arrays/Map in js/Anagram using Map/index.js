var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;
    let map=new Map();

    // running a loop through the "s"  and set items in the map increase the value if the key exists more times
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
           map.set(s[i],map.get(s[i])+1) 
        }else{
            map.set(s[i],1)
        }
    }
// Running a loop through the "t" and decrease the values if the key exists twise
    for(let i=0;i<t.length;i++){
        if(map.has(t[i])){
            map.set(t[i],map.get(t[i])-1)
        }else{
            return false
        }
    }
// Running a "for of" loop in map 
    for(let [key,value] of map){
        if(value!=0){
            return false
        }
        return true
    }
 
};

console.log(isAnagram("anagram","nagaram"))
