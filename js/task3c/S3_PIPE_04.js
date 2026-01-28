const data = ["10", "5", "abc", "7.5", "", "3"];
function isNumber(str) {
  return !isNaN(str) && str.trim() !== "";
}

const result = data
  .filter(isNumber)       
  .map(Number)              
  .map(x => x * 2)         
  .reduce((acc, x) => acc + x, 0); 

console.log(result); 
