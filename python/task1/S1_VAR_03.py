user = { "name": "Ala", "tags": [] }
user["tags"].append("developer")
user["tags"].append("programmer")
print(user)

try:
    user = {}
    print(user)
except Exception as error:
    print(error)

print(user)
