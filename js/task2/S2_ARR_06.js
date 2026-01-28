function getActiveUserNames(users) {
  const activeUsers = users.filter(user => user.active);
  const activeNames = activeUsers.map(user => user.name.toUpperCase());
  return activeNames.sort();
}

const users = [
  { id: 1, name: "alice", active: true },
  { id: 2, name: "bob", active: false },
  { id: 3, name: "charlie", active: true },
  { id: 4, name: "David", active: true }
];

console.log(getActiveUserNames(users));
console.log(getActiveUserNames([]));