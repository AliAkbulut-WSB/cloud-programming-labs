function toNumberOrNull(x) {
  if (typeof x !== 'string') {
      return null;
  }

  const converted = +x.trim();

  return !Number.isNaN(converted) && x.trim() !== '' 
      ? converted 
      : null;
}

console.log(toNumberOrNull("12"));     
console.log(toNumberOrNull("12.5"));   
console.log(toNumberOrNull(" 12 "));   
console.log(toNumberOrNull("12x"));    
console.log(toNumberOrNull(""));       
console.log(toNumberOrNull("abc"));