let user = { name: "Ala", tags: [] };
user.tags.push("developer");
user.tags.push("programmer");
console.log(user);
try {
    user = {}; 
    console.log(user);
} catch (error) {
    console.log(error.message);
}
console.log(user);
