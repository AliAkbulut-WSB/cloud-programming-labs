function trim(text) {
  return text.trim();
}

function lowercase(text) {
  return text.toLowerCase();
}

function normalizeSpaces(text) {
  return text.replace(/\s+/g, ' ');
}

function processText(text) {
  return normalizeSpaces(lowercase(trim(text)));
}
const inputText = "   Hello   WORLD!   This   is  a TEST.  ";
const result = processText(inputText);
console.log(result); 

