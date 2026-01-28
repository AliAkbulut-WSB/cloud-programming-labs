function sumNested(matrix) {
    let totalSum = 0;

    for (let row of matrix) {
        for (let num of row) {
            totalSum += num;
        }
    }

    return totalSum;
}

console.log(sumNested([[1, 2], [3, 4]]));         
console.log(sumNested([[1], [2, 3], [4, 5, 6]])); 
console.log(sumNested([]));                       
console.log(sumNested([[]]));                   
