function isValid(bracket) {
  const stack = [];
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (const char of bracket) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    }
    else if(char === ')' || char === ']' || char === '}'){
        return 'Invalid';
    }
  }
}
