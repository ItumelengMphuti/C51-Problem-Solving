function passwordStrength(password) { //1
  const isNonEmpty = typeof password === "string" && password.length > 0;

  const isLongEnough = isNonEmpty && password.length >= 8;

  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasDigit = /[0-9]/.test(password);

  const hasSpecialChar = /[^a-zA-Z0-9\s]/.test(password); //4

  const hasWhiteSpace = /\s/.test(password);

  const totalConditionsMet = [
    // isNonEmpty, 
    isLongEnough,
    hasLowerCase,
    hasUpperCase,
    hasDigit,
    hasSpecialChar,
    // hasWhiteSpace, 
  ].filter(Boolean).length;

  // Validation
  if (!isNonEmpty || !isLongEnough || hasWhiteSpace) {
    return "invalid";
  }

  if (totalConditionsMet === 5) return "strong";
  if (totalConditionsMet >= 3) return "medium";
  if (totalConditionsMet === 2) return "weak";

  return "invalid";
}

export { passwordStrength }; 

// =======================
// Usage
// =======================

// console.log(passwordStrength("password"));  Weak
// console.log(passwordStrength("Password1"));  Med
// console.log(passwordStrength("Password1!")); Strong
// console.log(passwordStrength("Password1#")); Strong
// console.log(passwordStrength("Password1! ")); Invalid
// console.log(passwordStrength("")); Invalid

// The project was originally written using CommonJS. Convert it to use ES6 Modules.
// Requirements
// Replace CommonJS exports with ES6 exports.
// Do not change the functionality of the program.
// Make sure the file can be imported into another ES module.
// Hint: Create an app.js file to import and test your passwordStrength function.
