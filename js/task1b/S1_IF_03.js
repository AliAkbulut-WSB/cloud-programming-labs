function normalizeName(input) {
  if (!input) {
      return "Anonymous";
  }

  return input.trim();
}

console.log(normalizeName(""));        
console.log(normalizeName(" "));       
console.log(normalizeName(null));      
console.log(normalizeName(" Ola "));   
console.log(normalizeName(undefined)); 
