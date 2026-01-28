function isArray(value) {
  return Array.isArray(value);
}

console.log(isArray([]));              
console.log(isArray([1, 2, 3]));       
console.log(isArray(new Array()));     

console.log(isArray({}));              
console.log(isArray(null));            
console.log(isArray(undefined));       
console.log(isArray(42));              
console.log(isArray("array"));         
console.log(isArray(() => {}));        
console.log(isArray(Symbol()));