function omit(obj, keys) {
  return Object.keys(obj).reduce((result, key) => {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
    return result;
  }, {});
}

const user = {
  id: 1,
  name: "Ahmet",
  email: "ahmet@test.com",
  password: "123456",
  role: "admin"
};

const result = omit(user, ["password", "email"]);
console.log(result);
console.log(user);

