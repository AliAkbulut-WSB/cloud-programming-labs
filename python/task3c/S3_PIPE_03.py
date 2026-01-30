def trim(text):
  return text.strip()

def lowercase(text):
  return text.lower()

def normalize_spaces(text):
  import re
  return re.sub(r"\s+", " ", text)

def process_text(text):
  return normalize_spaces(lowercase(trim(text)))

input_text = "   Hello   WORLD!   This   is  a TEST.  "
result = process_text(input_text)
print(result)
