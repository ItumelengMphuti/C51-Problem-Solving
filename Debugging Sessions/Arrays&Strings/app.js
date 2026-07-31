import { passwordStrength } from "./PasswordStrength.js";

console.log(passwordStrength("password"));
console.log(passwordStrength("Password1"));
console.log(passwordStrength("Password1!"));
console.log(passwordStrength("Password1#"));
console.log(passwordStrength("Password1! "));
console.log(passwordStrength(""));