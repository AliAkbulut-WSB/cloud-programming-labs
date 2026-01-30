def omit(obj, keys):
  return {k: v for k, v in obj.items() if k not in keys}


user = {
  "id": 1,
  "name": "Ahmet",
  "email": "ahmet@test.com",
  "password": "123456",
  "role": "admin"
}

result = omit(user, ["password", "email"])

print(result)
print(user)
