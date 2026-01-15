var stringVar = "Hello, World!"; 
let numberVar = 42;                
const booleanVar = true;          

console.table([
    { Variable: 'stringVar', Value: stringVar, Type: typeof stringVar },
    { Variable: 'numberVar', Value: numberVar, Type: typeof numberVar },
    { Variable: 'booleanVar', Value: booleanVar, Type: typeof booleanVar }
]);
