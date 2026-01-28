function typeLabel(value) {
  if (value === null) {
      return "null";
  }
  return typeof value;
}
console.log(typeLabel(null));         
console.log(typeLabel(undefined));    
console.log(typeLabel(42));          
console.log(typeLabel("42"));         
console.log(typeLabel(true));         
console.log(typeLabel({}));            
console.log(typeLabel([]));            
console.log(typeLabel(() => {}));      
console.log(typeLabel(Symbol()));