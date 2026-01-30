import math

def inspect(value):
    return {
        "type": "null" if value is None else type(value).__name__,
        "isArray": isinstance(value, list),
        "isNull": value is None,
        "isNaN": isinstance(value, float) and math.isnan(value)
    }

testValues = [
    None,
    None,
    42,
    "hello",
    True,
    {},
    [],
    lambda: None,
    float('nan'),
    float('inf')
]

for value in testValues:
    print(value, inspect(value))
