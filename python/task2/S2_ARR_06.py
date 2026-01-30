def getActiveUserNames(users):
  active_users = [user for user in users if user.get("active")]
  active_names = [user["name"].upper() for user in active_users]
  return sorted(active_names)

users = [
  {"id": 1, "name": "alice", "active": True},
  {"id": 2, "name": "bob", "active": False},
  {"id": 3, "name": "charlie", "active": True},
  {"id": 4, "name": "David", "active": True}
]

print(getActiveUserNames(users))
print(getActiveUserNames([]))
