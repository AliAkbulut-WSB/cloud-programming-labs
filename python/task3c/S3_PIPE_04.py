data = ["10", "5", "abc", "7.5", "", "3"]

def is_number(s):
    try:
        float(s)
        return s.strip() != ""
    except ValueError:
        return False

result = sum(float(x) * 2 for x in data if is_number(x))

print(result)
