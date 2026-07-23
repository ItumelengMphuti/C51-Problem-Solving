const a = [1, 2, 3];
const b = [1];

// const result = [];
// for (const char of a){
//   if(!b.includes(char)){
//     result.push(char)
//   }
// }

// console.log(result)

// function defList(a, b){
//   return a.filter(num => !b.includes(num))
// }

// console.log(defList(a,b))

function diffList(a, b) {
  const result = new Set(a).difference(new Set(b));
  return [...result];
}

console.log(diffList(a, b));

// Same as above function, done differently
function diffList(a, b) {
  const result = new Set(b);
  return a.filter((num) => !result.has(num));
}
console.log(diffList(a, b));
