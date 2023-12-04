let map=new Map();
map.set(1,[]);
if(map.has(1)){
   map.set(map.get(1),map.get(1).push(2))

}
console.log(map.get(1))