function shippingCost(weightKg, isMember) {
  let cost;
  if (weightKg < 1) {
      cost = 10;
  } else if (weightKg <= 5) {
      cost = 20;
  } else {
      cost = 30;
  }

  if (isMember) {
      cost *= 0.8; 
  }

  return cost;
}

console.log(shippingCost(0.5, false));  
console.log(shippingCost(0.5, true));  
console.log(shippingCost(2, false));    
console.log(shippingCost(2, true));     
console.log(shippingCost(6, false));    
console.log(shippingCost(6, true));     
console.log(shippingCost(10, false));