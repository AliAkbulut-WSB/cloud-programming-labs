try {
    {
        let blockLetVar = "I'm inside the block!";
    }
    console.log(blockLetVar); 
} catch (error) {
    console.log("Friendly message: The variable is not accessible outside its block.");
}

try {
    {
        var blockVar = "I'm also inside the block!";
    }
    console.log(blockVar); 
} catch (error) {
    console.log("Friendly message: The variable is not accessible outside its block.");
}
