function grade(score) {
  if (typeof score !== 'number' || score < 0 || score > 100) {
      return null;
  }

  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

console.log(grade(95));    
console.log(grade(90));    
console.log(grade(85));    
console.log(grade(80));   
console.log(grade(75));    
console.log(grade(70));    
console.log(grade(65));    
console.log(grade(60));   
console.log(grade(55));    
console.log(grade(0));    
console.log(grade(101));  
console.log(grade(-1));    
console.log(grade("90")); 
console.log(grade(null));